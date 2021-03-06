/********************************************************************************
 * Copyright (c) 2011-2017 Red Hat Inc. and/or its affiliates and others
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License 1.0 which is available at
 * http://www.eclipse.org/legal/epl-v10.html.
 *
 * SPDX-License-Identifier: EPL-1.0
 ********************************************************************************/
import org.eclipse.ceylon.compiler.typechecker.context {
    PhasedUnit
}
import org.eclipse.ceylon.ide.eclipse.code.correct {
    EclipseDocument
}
import org.eclipse.ceylon.ide.eclipse.code.editor {
    Navigation,
    CeylonEditor
}
import org.eclipse.ceylon.ide.eclipse.util {
    EditorUtil
}
import org.eclipse.ceylon.ide.common.platform {
    PlatformServices,
    ModelServices,
    VfsServices,
    TextChange,
    TextEdit,
    InsertEdit,
    ReplaceEdit,
    CompositeChange,
    CommonDocument,
    NoopLinkedMode,
    JavaModelServices
}
import org.eclipse.ceylon.ide.common.typechecker {
    ModifiablePhasedUnit
}
import org.eclipse.ceylon.ide.common.util {
    unsafeCast
}
import org.eclipse.ceylon.model.typechecker.model {
    Unit
}

import org.eclipse.core.resources {
    IProject,
    IFolder,
    IResource,
    IFile
}
import org.eclipse.ltk.core.refactoring {
    TextFileChange,
    ETextChange=TextChange,
    ECompositeChange=CompositeChange,
    DocumentChange
}
import org.eclipse.text.edits {
    MultiTextEdit,
    ETextEdit=TextEdit,
    EInsertEdit=InsertEdit,
    EReplaceEdit=ReplaceEdit,
    EDeleteEdit=DeleteEdit
}

object eclipsePlatformServices satisfies PlatformServices {
    
    utils() => eclipsePlatformUtils;
    
    shared actual ModelServices<NativeProject,NativeResource,NativeFolder,NativeFile>
            model<NativeProject, NativeResource, NativeFolder, NativeFile>() 
            => unsafeCast<ModelServices<NativeProject,NativeResource,NativeFolder,NativeFile>>
                    (eclipseModelServices);
    
    shared actual JavaModelServices<JavaClassRoot>
            javaModel<JavaClassRoot>() 
            => unsafeCast<JavaModelServices<JavaClassRoot>>
            (eclipseJavaModelServices);

    shared actual VfsServices<NativeProject,NativeResource,NativeFolder,NativeFile> 
            vfs<NativeProject, NativeResource, NativeFolder, NativeFile>() 
            => unsafeCast<VfsServices<NativeProject,NativeResource,NativeFolder,NativeFile>>
                    (eclipseVfsServices);
    
    shared actual EclipseDocument? gotoLocation(Unit unit, Integer offset, Integer length) {
        if (is CeylonEditor editor = Navigation.gotoLocation(unit, offset, length)) {
            return EclipseDocument(editor.ceylonSourceViewer.document);
        }
        return null;
    }
    
    createLinkedMode(CommonDocument document)
            => if (is EclipseDocument document)
               then EclipseLinkedMode(document)
               else NoopLinkedMode(document);
    
    completion => eclipseCompletionServices;
    document => eclipseDocumentServices;
}

shared class EclipseTextChange(String desc, CommonDocument|PhasedUnit|ETextChange input)
        satisfies TextChange {
    
    shared ETextChange nativeChange;
    EclipseDocument doc;
    
    if (is EclipseDocument input) {
        doc = input;
        nativeChange = DocumentChange(desc, input.document);
    }
    else if (is ModifiablePhasedUnit<IProject,IResource,IFolder,IFile> input) {
        nativeChange = TextFileChange(desc, input.resourceFile);
        doc = EclipseDocument(EditorUtil.getDocument(nativeChange));
    }
    else if (is ETextChange input) {
        nativeChange = input;
        doc = EclipseDocument(EditorUtil.getDocument(nativeChange));
    }
    else {
        throw Exception("Unsupported input: ``input``");
    }
    
    ETextEdit toEclipseTextEdit(TextEdit edit) 
            => switch (edit)
            case (is InsertEdit) 
                EInsertEdit(edit.start, edit.text)
            case (is ReplaceEdit) 
                EReplaceEdit(edit.start, edit.length, edit.text)
            else 
                EDeleteEdit(edit.start, edit.length);
    
    shared actual void addEdit(TextEdit edit) {
        value eclipseEdit = toEclipseTextEdit(edit);
        if (is MultiTextEdit me = nativeChange.edit) {
            nativeChange.addEdit(eclipseEdit);
        } else {
            nativeChange.edit = eclipseEdit;            
        }
    }
    
    document = doc;
    
    hasEdits => nativeChange.edit.hasChildren();
    
    initMultiEdit() => nativeChange.edit = MultiTextEdit();
    
    shared actual Boolean apply() {
        value ret = EditorUtil.performChange(nativeChange);
        doc.document = EditorUtil.getDocument(nativeChange);
        return ret;
    }
    
    offset => nativeChange.edit.offset;
    length => nativeChange.edit.length;
}

shared class EclipseCompositeChange(String desc) 
        satisfies CompositeChange {
    shared ECompositeChange nativeChange = ECompositeChange(desc);
    
    shared actual void addTextChange(TextChange change) {
        if (is EclipseTextChange change) {
            nativeChange.add(change.nativeChange);
        }
    }
    
    hasChildren => nativeChange.children.size > 0;
    
}
