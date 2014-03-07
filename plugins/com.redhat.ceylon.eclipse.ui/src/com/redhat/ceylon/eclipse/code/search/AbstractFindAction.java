package com.redhat.ceylon.eclipse.code.search;

import static com.redhat.ceylon.eclipse.code.editor.EditorUtil.getCurrentEditor;
import static com.redhat.ceylon.eclipse.code.editor.EditorUtil.getProject;
import static com.redhat.ceylon.eclipse.code.editor.EditorUtil.getSelectedNode;

import org.eclipse.core.resources.IProject;
import org.eclipse.jface.action.Action;
import org.eclipse.jface.action.IAction;
import org.eclipse.jface.dialogs.MessageDialog;
import org.eclipse.jface.viewers.ISelection;
import org.eclipse.jface.viewers.ITreeSelection;
import org.eclipse.search.ui.NewSearchUI;
import org.eclipse.ui.IEditorPart;
import org.eclipse.ui.IObjectActionDelegate;
import org.eclipse.ui.IWorkbenchPart;
import org.eclipse.ui.IWorkbenchPartSite;
import org.eclipse.ui.views.contentoutline.ContentOutline;

import com.redhat.ceylon.compiler.typechecker.model.Declaration;
import com.redhat.ceylon.compiler.typechecker.tree.Node;
import com.redhat.ceylon.compiler.typechecker.tree.Tree;
import com.redhat.ceylon.eclipse.code.editor.CeylonEditor;
import com.redhat.ceylon.eclipse.code.outline.CeylonOutlineNode;
import com.redhat.ceylon.eclipse.util.Nodes;

abstract class AbstractFindAction extends Action implements IObjectActionDelegate {
    
    private IWorkbenchPartSite site;
    protected Declaration declaration;
    protected IProject project;
    private ContentOutline outlineView;
    
    AbstractFindAction() {}
    
    @Override
    public void selectionChanged(IAction action, ISelection selection) {
        if (outlineView==null) return;
        try {
            CeylonOutlineNode on = (CeylonOutlineNode) 
                    ((ITreeSelection) outlineView.getSelection()).getFirstElement();
            if (on!=null) {
                IEditorPart currentEditor = getCurrentEditor();
                if (currentEditor instanceof CeylonEditor) {
                    CeylonEditor ce = (CeylonEditor) currentEditor;
                    Tree.CompilationUnit rootNode = 
                            ce.getParseController().getRootNode();
                    if (rootNode!=null) {
                        Node node = Nodes.findNode(rootNode, on.getStartOffset());
                        if (node instanceof Tree.Declaration) {
                            declaration = ((Tree.Declaration) node).getDeclarationModel();
                            project =  getProject(currentEditor);
                            action.setEnabled(isValidSelection());
                            return; //early exit
                        }
                    }
                }
            }
            action.setEnabled(false);
        }
        catch (Exception e) {
            action.setEnabled(false);
        }
    }

    @Override
    public void setActivePart(IAction action, IWorkbenchPart targetPart) {
        outlineView = (ContentOutline) targetPart;
        site = targetPart.getSite();
    }
    
    AbstractFindAction(String text, IEditorPart editor) {
        super(text);
        this.site = editor.getSite();
        project = editor==null ? null : getProject(editor);
        if (editor instanceof CeylonEditor) {
            CeylonEditor ce = (CeylonEditor) editor;
            declaration = 
                    Nodes.getReferencedExplicitDeclaration(getSelectedNode(ce), 
                            ce.getParseController().getRootNode());
            setEnabled(isValidSelection());
        }
        else {
            setEnabled(false);
        }
    }
    
    AbstractFindAction(String text, IEditorPart editor, Declaration dec) {
        super(text);
        this.site = editor.getSite();
        project = editor==null ? null : getProject(editor);
        declaration = dec;
        setEnabled(true);
    }
    
    @Override
    public void run(IAction action) {
        run();
    }
    
    @Override
    public void run() {
        if (isValidSelection()) {
            NewSearchUI.runQueryInBackground(createSearchQuery());
        }
        else {
            MessageDialog.openWarning(site.getShell(), 
                    "Ceylon Find Error", 
                    "No appropriate declaration name selected");
        }
    }

    abstract boolean isValidSelection();

    public abstract FindSearchQuery createSearchQuery();
    
}
