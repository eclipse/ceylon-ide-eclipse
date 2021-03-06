/********************************************************************************
 * Copyright (c) 2011-2017 Red Hat Inc. and/or its affiliates and others
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License 1.0 which is available at
 * http://www.eclipse.org/legal/epl-v10.html.
 *
 * SPDX-License-Identifier: EPL-1.0
 ********************************************************************************/
import org.eclipse.ceylon.compiler.typechecker.tree {
    Tree
}
import org.eclipse.ceylon.ide.eclipse.code.editor {
    CeylonEditor
}
import org.eclipse.ceylon.ide.eclipse.code.html {
    HTML,
    HTMLPrinter
}
import org.eclipse.ceylon.ide.eclipse.util {
    Highlights
}
import org.eclipse.ceylon.ide.common.doc {
    DocGenerator,
    Icons,
    Colors
}
import org.eclipse.ceylon.ide.common.typechecker {
    LocalAnalysisResult
}
import org.eclipse.ceylon.ide.common.util {
    nodes
}
import org.eclipse.ceylon.model.typechecker.model {
    Declaration,
    Unit,
    Referenceable,
    Scope,
    Package,
    Module
}

import java.lang {
    JStringBuilder=StringBuilder
}

import org.eclipse.core.runtime {
    NullProgressMonitor
}
import org.eclipse.jface.text {
    IRegion,
    ITextViewer,
    IInformationControlCreator
}

object eclipseDocGenerator extends EclipseDocGenerator(null) {}

class EclipseDocGenerator(CeylonEditor? editor) 
        extends SourceInfoHover(editor)
        satisfies DocGenerator {
    
    shared actual String? getHoverInfo(ITextViewer textViewer, IRegion hoverRegion) {
        if (exists editor, exists prov = editor.selectionProvider) {
            value cpc = editor.parseController;
            
            return getExpressionHoverText(editor, hoverRegion)
                else getDocumentation(cpc.typecheckedRootNode,
                    hoverRegion.offset, cpc);
        }
        
        return null;
    }
    
    shared actual CeylonBrowserInput? getHoverInfo2(ITextViewer textViewer, IRegion hoverRegion) {
        if (exists editor, exists prov = editor.selectionProvider) {
            if (exists result = getExpressionHoverText(editor, hoverRegion)) {
                return CeylonBrowserInput(null, null, result);
            } else if (exists cpc = editor.parseController, 
                exists rootNode = cpc.typecheckedRootNode, 
                exists result = getDocumentation(rootNode, hoverRegion.offset, cpc)) {
                Referenceable? model = DocumentationHover.getModel(editor, hoverRegion);
                return CeylonBrowserInput(null, model, result);
            }
            else {
                return null;
            }
        }
        else {
            return null;
        }        
    }
    
    hoverControlCreator
            => CeylonInformationControlCreator(editor, "F2 for focus");
    
    String? getExpressionHoverText(CeylonEditor editor, IRegion hoverRegion) {
        if (exists parseController = editor.parseController,
            exists rootNode = parseController.typecheckedRootNode, 
            exists selection = editor.selectionFromThread) {
            value hoffset = hoverRegion.offset;
            value hlength = hoverRegion.length;
            value offset = selection.offset;
            value length = selection.length;
            if (offset <= hoffset && 
                offset+length >= hoffset+hlength,
                exists node = nodes.findNode {
                    node = rootNode;
                    tokens = parseController.tokens;
                    startOffset = offset;
                    endOffset = offset + length;
                }) {
                if (is Tree.Type node) {
                    return DocumentationHover.getTypeHoverText(node, 
                        selection.text, 
                        editor.ceylonSourceViewer.document, 
                        parseController.project);
                }
                else if (is Tree.Expression node) {
                    return getTermTypeText(node.term, selection.text);
                }
                else if (is Tree.Term node) {
                    return getTermTypeText(node, selection.text);
                }
            }
        }
        return null;
    }
    
    shared actual void addIconAndText(StringBuilder builder, Icons|Referenceable icon, String text) {
        value b = JStringBuilder();
        
        if (is Referenceable icon) {
            value img = if (is Declaration|Package|Module icon)
                        then HTML.fileUrl(DocumentationHover.getIcon(icon)).toExternalForm()
                        else null;
            
            value top = if (is Package|Module icon) then 2 else 4;
            HTML.addImageAndLabel(b, icon, img, 16, 16, text, 20, top);
        } else {
            value i = switch(icon)
            case (Icons.imports) HTML.fileUrl("imp_obj.png").toExternalForm()
            case (Icons.annotations) HTML.fileUrl("annotation_obj.png").toExternalForm()
            case (Icons.returns) HTML.fileUrl("stepreturn_co.png").toExternalForm()
            case (Icons.units) HTML.fileUrl("unit_obj.png").toExternalForm()
            case (Icons.enumeration) HTML.fileUrl("sub.png").toExternalForm()
            case (Icons.extendedType) HTML.fileUrl("superclass.png").toExternalForm()
            case (Icons.satisfiedTypes) HTML.fileUrl("super.png").toExternalForm()
            case (Icons.parameters) HTML.fileUrl("methpro_obj.png").toExternalForm()
            case (Icons.types) HTML.fileUrl("types.png").toExternalForm()
            case (Icons.exceptions) HTML.fileUrl("ihigh_obj.gif").toExternalForm()
            case (Icons.see) HTML.fileUrl("link_obj.gif").toExternalForm()
            case (Icons.implementation) HTML.fileUrl("implm_co.png").toExternalForm()
            case (Icons.override) HTML.fileUrl("over_co.png").toExternalForm()
            case (Icons.quickAssists) HTML.fileUrl("correction_change.png").toExternalForm()
            else HTML.fileUrl("ihigh_obj.gif").toExternalForm()
            ;
            value top = icon in [Icons.types, Icons.annotations] 
                        then 4 else 2;

            HTML.addImageAndLabel(b, null, i, 16, 16, text, 20, top);
        }
        builder.append(b.string);
    }
    
    shared actual void appendJavadoc(Declaration model, StringBuilder buffer) {
        JStringBuilder b = JStringBuilder();
        DocumentationHover.appendJavadoc(model, b, NullProgressMonitor());
        buffer.append(b.string);
    }
    
    shared actual void appendPageEpilog(StringBuilder builder) {
        JStringBuilder b = JStringBuilder();
        HTMLPrinter.addPageEpilog(b);
        builder.append(b.string);
    }
    
    shared actual void appendPageProlog(StringBuilder builder) {
        JStringBuilder b = JStringBuilder();
        HTMLPrinter.insertPageProlog(b, 0, HTML.styleSheet);
        builder.append(b.string);
    }
    
    shared actual String buildLink(Referenceable|String model, String text, String protocol) {
        value href 
                = if (is String model) 
                then "href='``protocol``:``model``'"
                else if (protocol == "dec")
                then "href='dec:``HTML.declink(model)``'"
                else HTML.link(model);
        
        return "<tt><a ``href``>``text``</a></tt>";
    }
    
    shared actual String color(Object? what, Colors how) {
        value myColor = switch(how)
        case (Colors.strings) HTMLPrinter.toHex(Highlights.getCurrentThemeColor(Highlights.strings))
        case (Colors.annotations) HTMLPrinter.toHex(Highlights.getCurrentThemeColor(Highlights.annotations))
        case (Colors.annotationStrings) HTMLPrinter.toHex(Highlights.getCurrentThemeColor(Highlights.annotationStrings))
        case (Colors.numbers) HTMLPrinter.toHex(Highlights.getCurrentThemeColor(Highlights.numbers))
        case (Colors.identifiers) HTMLPrinter.toHex(Highlights.getCurrentThemeColor(Highlights.identifiers))
        case (Colors.types) HTMLPrinter.toHex(Highlights.getCurrentThemeColor(Highlights.types))
        case (Colors.keywords) HTMLPrinter.toHex(Highlights.getCurrentThemeColor(Highlights.keywords))
        ;
        
        return "<span style='color:``myColor``'>``what?.string else "null"``</span>";
    }
    
    getLiveValue(Declaration dec, Unit unit)
            => DocumentationHover.getLiveValue(dec, unit);
    
    highlight(String text, LocalAnalysisResult cmp) 
            => HTML.highlightLine(text);
    
    markdown(String text, LocalAnalysisResult cmp, Scope? linkScope, Unit? unit) 
            => DocumentationHover.markdown(text, linkScope, unit);
    
    printer => DocumentationHover.\iPRINTER;
    verbosePrinter => DocumentationHover.\iVERBOSE_PRINTER;
    
    showMembers => true;
    
    shared IInformationControlCreator informationPresenterControlCreator 
            => CeylonEnrichedInformationControlCreator(editor);
    
    supportsQuickAssists => true;
}
