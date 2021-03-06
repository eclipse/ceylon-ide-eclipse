/********************************************************************************
 * Copyright (c) 2011-2017 Red Hat Inc. and/or its affiliates and others
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License 1.0 which is available at
 * http://www.eclipse.org/legal/epl-v10.html.
 *
 * SPDX-License-Identifier: EPL-1.0
 ********************************************************************************/
package org.eclipse.ceylon.ide.eclipse.code.html;

import static org.eclipse.ceylon.ide.eclipse.code.html.HTMLPrinter.convertToHTMLContent;
import static org.eclipse.ceylon.ide.eclipse.code.html.HTMLPrinter.toHex;
import static org.eclipse.ceylon.ide.eclipse.util.Highlights.CHARS;
import static org.eclipse.ceylon.ide.eclipse.util.Highlights.COMMENTS;
import static org.eclipse.ceylon.ide.eclipse.util.Highlights.IDENTIFIERS;
import static org.eclipse.ceylon.ide.eclipse.util.Highlights.KEYWORDS;
import static org.eclipse.ceylon.ide.eclipse.util.Highlights.NUMBERS;
import static org.eclipse.ceylon.ide.eclipse.util.Highlights.PACKAGES;
import static org.eclipse.ceylon.ide.eclipse.util.Highlights.STRINGS;
import static org.eclipse.ceylon.ide.eclipse.util.Highlights.TYPES;
import static org.eclipse.ceylon.ide.eclipse.util.Highlights.getCurrentThemeColor;
import static org.antlr.runtime.Token.HIDDEN_CHANNEL;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URL;

import org.antlr.runtime.Token;
import org.eclipse.core.runtime.FileLocator;
import org.eclipse.core.runtime.Path;
import org.eclipse.core.runtime.Platform;
import org.eclipse.jdt.internal.ui.JavaPlugin;
import org.eclipse.jface.preference.JFacePreferences;
import org.eclipse.jface.resource.JFaceColors;
import org.eclipse.jface.util.Util;
import org.eclipse.swt.SWT;
import org.eclipse.swt.graphics.Color;
import org.eclipse.swt.graphics.Font;
import org.eclipse.swt.graphics.FontData;
import org.eclipse.swt.graphics.GC;
import org.eclipse.swt.widgets.Display;
import org.eclipse.swt.widgets.Shell;
import org.osgi.framework.Bundle;

import org.eclipse.ceylon.compiler.typechecker.parser.CeylonLexer;
import org.eclipse.ceylon.compiler.typechecker.util.NewlineFixingStringStream;
import org.eclipse.ceylon.ide.eclipse.ui.CeylonPlugin;
import org.eclipse.ceylon.ide.eclipse.util.EditorUtil;
import org.eclipse.ceylon.ide.common.util.escaping_;
import org.eclipse.ceylon.model.typechecker.model.Declaration;
import org.eclipse.ceylon.model.typechecker.model.Module;
import org.eclipse.ceylon.model.typechecker.model.Package;
import org.eclipse.ceylon.model.typechecker.model.Referenceable;
import org.eclipse.ceylon.model.typechecker.model.Scope;

public class HTML {

    /**
     * The style sheet (css).
     */
    private static String fgStyleSheet;

    public static URL fileUrl(String icon) {
        try {
            Bundle bundle = 
                    CeylonPlugin.getInstance().getBundle();
            return FileLocator.toFileURL(FileLocator.find(bundle, 
                    new Path("icons/").append(icon), null));
        } 
        catch (IOException e) {
            e.printStackTrace();
            return null;
        }
    }

    /**
     * Returns the Javadoc hover style sheet with the current 
     * Javadoc font from the preferences.
     * @return the updated style sheet
     * @since 3.4
     */
    public static String getStyleSheet() {
        if (fgStyleSheet == null) {
            fgStyleSheet = loadStyleSheet();
        }
        final StringBuffer monospaceSize = new StringBuffer();
        final Font editorFont = CeylonPlugin.getEditorFont();
        final Font hoverFont = CeylonPlugin.getHoverFont();
        final FontData monospaceFontData = 
                editorFont.getFontData()[0];
        final FontData textFontData = 
                hoverFont.getFontData()[0];
        final Display display = Display.getDefault();
        display.syncExec(new Runnable() {
            @Override
            public void run() {
                Shell activeShell = display.getActiveShell();
                //TODO: how can we make sure this is never called
                //      without a Shell at startup time
                if (activeShell!=null) {
                    GC gc = new GC(activeShell);
                    Font font = gc.getFont();
                    gc.setFont(hoverFont);
                    int hoverFontHeight = 
                            gc.getFontMetrics()
                                .getAscent();
                    gc.setFont(editorFont);
                    int monospaceFontHeight = 
                            gc.getFontMetrics()
                                .getAscent();
                    gc.setFont(font);
                    int ratio = 100 * 
                            monospaceFontData.getHeight() * 
                            hoverFontHeight / monospaceFontHeight / 
                            textFontData.getHeight();
                    monospaceSize.append(ratio).append("%");
                }
            }
        });
        Color linkColor =
                EditorUtil.createColor(
                        JFacePreferences.getPreferenceStore(),
                        JFacePreferences.HYPERLINK_COLOR);
        if (linkColor == null) {
            linkColor = JFaceColors.getHyperlinkText(display);
        }
        Color activeLinkColor =
                EditorUtil.createColor(
                        JFacePreferences.getPreferenceStore(),
                        JFacePreferences.ACTIVE_HYPERLINK_COLOR);
        if (activeLinkColor == null) {
            activeLinkColor = JFaceColors.getActiveHyperlinkText(display);
        }
        
        boolean bold = (textFontData.getStyle() & SWT.BOLD) != 0;
        boolean italic = (textFontData.getStyle() & SWT.ITALIC) != 0;
        String size = Integer.toString(textFontData.getHeight()) + UNIT;
        String family = textFontData.getName();
        
        return fgStyleSheet
        		.replaceFirst("%fontFamily", family)
        		.replaceFirst("%fontSize", size)
        		.replaceFirst("%fontStyle", italic ? "italic" : "normal")
        		.replaceFirst("%fontWeight", bold ? "bold" : "normal")
                .replaceFirst("%monospaceFontFamily", monospaceFontData.getName())
                .replaceFirst("%monospaceFontSize", monospaceSize.toString())
                .replaceFirst("%linkColor", toHex(linkColor))
                .replaceFirst("%activeLinkColor", toHex(activeLinkColor));
    }

    private static final String UNIT = Util.isMac() ? "px" : "pt";
    
    public static String loadStyleSheet() {
        Bundle bundle = Platform.getBundle(CeylonPlugin.PLUGIN_ID);
        URL styleSheetURL = bundle.getEntry("/css/hover.css"); 
        if (styleSheetURL != null) {
            BufferedReader reader= null;
            try {
                reader= new BufferedReader(new InputStreamReader(styleSheetURL.openStream()));
                StringBuilder buffer= new StringBuilder(1500);
                String line= reader.readLine();
                while (line != null) {
                    buffer.append(line);
                    buffer.append('\n');
                    line= reader.readLine();
                }
                return buffer.toString();
            } catch (IOException ex) {
                JavaPlugin.log(ex);
                return ""; 
            } finally {
                try {
                    if (reader != null)
                        reader.close();
                } catch (IOException e) {
                }
            }
        }
        return null;
    }

    public static void addImageAndLabel(StringBuilder buf, Referenceable model, String imageSrcPath, 
            int imageWidth, int imageHeight, String label, int labelLeft, int labelTop) {
        buf.append("<div style='word-wrap: break-word; position: relative; "); 
        
        if (imageSrcPath != null) {
            buf.append("margin-left: ").append(labelLeft).append("px; ");  
            buf.append("padding-top: ").append(labelTop).append("px; ");  
        }
    
        buf.append("'>"); 
        if (imageSrcPath != null) {
            if (model!=null) {
                buf.append("<a ").append(HTML.link(model)).append(">");  
            }
            addImage(buf, imageSrcPath, imageWidth, imageHeight,
                    labelLeft);
            if (model!=null) {
                buf.append("</a>"); 
            }
        }
        
        buf.append(label);
        
        buf.append("</div>"); 
    }

    public static void addImage(StringBuilder buf, String imageSrcPath, 
            int imageWidth, int imageHeight, int labelLeft) {
        StringBuilder imageStyle= new StringBuilder("border:none; position: absolute; "); 
        imageStyle.append("width: ").append(imageWidth).append("px; ");  
        imageStyle.append("height: ").append(imageHeight).append("px; ");  
        imageStyle.append("left: ").append(- labelLeft - 1).append("px; ");  
    
        // hack for broken transparent PNG support in IE 6, see https://bugs.eclipse.org/bugs/show_bug.cgi?id=223900 :
        buf.append("<!--[if lte IE 6]><![if gte IE 5.5]>\n"); 
        //String tooltip= element == null ? "" : "alt='" + "Open Declaration" + "' ";   
        buf.append("<span ").append("style=\"").append(imageStyle)  
                .append("filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='")
                .append(imageSrcPath).append("')\"></span>\n");  
        buf.append("<![endif]><![endif]-->\n"); 
    
        buf.append("<!--[if !IE]>-->\n"); 
        buf.append("<img ").append("style='").append(imageStyle).append("' src='")
                .append(imageSrcPath).append("'/>\n");    
        buf.append("<!--<![endif]-->\n"); 
        buf.append("<!--[if gte IE 7]>\n"); 
        buf.append("<img ").append("style='").append(imageStyle).append("' src='")
                .append(imageSrcPath).append("'/>\n");    
        buf.append("<![endif]-->\n"); 
    }

    public static String getAddress(Referenceable model) {
        if (model==null) return null;
        return "dec:" + declink(model);
    }

    public static String link(Referenceable model) {
        return "href='doc:" + declink(model) + "'";
    }

    public static String declink(Referenceable model) {
        if (model instanceof Package) {
            Package p = (Package) model;
            return declink(p.getModule()) + "/" + p.getNameAsString();
        }
        if (model instanceof Module) {
            Module module = (Module) model;
            return module.getNameAsString() + "/" + 
                    module.getVersion();
        }
        else if (model instanceof Declaration) {
            Declaration declaration = (Declaration) model;
            String name = declaration.getName();
            if (name == null) name = "new";
            String result = "/" + name;
            Scope container = declaration.getContainer();
            if (container instanceof Referenceable) {
                return declink((Referenceable) container)
                        + result;
            }
            else {
                return result;
            }
        }
        else {
           return "";
        }
    }
    
    public static String keyword(String kw) {
        String kwc = toHex(getCurrentThemeColor(KEYWORDS));
        return "<span style='color:"+kwc+"'>"+ kw + "</span>";
    }
    
    public static String highlightLine(String line) {
        String kwc = toHex(getCurrentThemeColor(KEYWORDS));
        String tc = toHex(getCurrentThemeColor(TYPES));
        String ic = toHex(getCurrentThemeColor(IDENTIFIERS));
        String sc = toHex(getCurrentThemeColor(STRINGS));
        String nc = toHex(getCurrentThemeColor(NUMBERS));
        String cc = toHex(getCurrentThemeColor(CHARS));
        String pc = toHex(getCurrentThemeColor(PACKAGES));
        String lcc = toHex(getCurrentThemeColor(COMMENTS));
        CeylonLexer lexer = new CeylonLexer(new NewlineFixingStringStream(line));
        Token token;
        boolean inPackageName = false;
        StringBuilder result = new StringBuilder();
        while ((token=lexer.nextToken()).getType()!=CeylonLexer.EOF) {
            String s = convertToHTMLContent(token.getText());
            int type = token.getType();
            if (type!=CeylonLexer.LIDENTIFIER &&
                type!=CeylonLexer.MEMBER_OP &&
                token.getChannel()!=HIDDEN_CHANNEL) {
                inPackageName = false;
            }
            else if (inPackageName) {
                result.append("<span style='color:"+pc+"'>").append(s).append("</span>");
                continue;
            }
            switch (type) {
            case CeylonLexer.FLOAT_LITERAL:
            case CeylonLexer.NATURAL_LITERAL:
                result.append("<span style='color:"+nc+"'>").append(s).append("</span>");
                break;
            case CeylonLexer.CHAR_LITERAL:
                result.append("<span style='color:"+cc+"'>").append(s).append("</span>");
                break;
            case CeylonLexer.STRING_LITERAL:
            case CeylonLexer.STRING_START:
            case CeylonLexer.STRING_END:
            case CeylonLexer.STRING_MID:
            case CeylonLexer.VERBATIM_STRING:
                result.append("<span style='color:"+sc+"'>").append(s).append("</span>");
                break;
            case CeylonLexer.UIDENTIFIER:
                result.append("<span style='color:"+tc+"'>").append(s).append("</span>");
                break;
            case CeylonLexer.LIDENTIFIER:
                result.append("<span style='color:"+ic+"'>").append(s).append("</span>");
                break;
            case CeylonLexer.MULTI_COMMENT:
            case CeylonLexer.LINE_COMMENT:
                result.append("<span style='color:"+lcc+"'>").append(s).append("</span>");
                break;
            case CeylonLexer.IMPORT:
            case CeylonLexer.PACKAGE:
            case CeylonLexer.MODULE:
                inPackageName = true; //then fall through!
            default:
                if (escaping_.get_().isKeyword(s)) {
                    result.append("<span style='color:"+kwc+"'>").append(s).append("</span>");
                }
                else {
                    result.append(s);
                }
            }
        }
        return result.toString();
    }

}
