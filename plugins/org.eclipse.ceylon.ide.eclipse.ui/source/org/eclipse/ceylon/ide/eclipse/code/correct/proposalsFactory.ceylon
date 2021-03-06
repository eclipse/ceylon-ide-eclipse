/********************************************************************************
 * Copyright (c) 2011-2017 Red Hat Inc. and/or its affiliates and others
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License 1.0 which is available at
 * http://www.eclipse.org/legal/epl-v10.html.
 *
 * SPDX-License-Identifier: EPL-1.0
 ********************************************************************************/
import org.eclipse.ceylon.ide.eclipse.code.correct {
    CorrectionUtil {
        shortcut
    }
}
import org.eclipse.ceylon.ide.eclipse.platform {
    EclipseTextChange
}
import org.eclipse.ceylon.ide.eclipse.util {
    Highlights {
        styleProposal
    }
}
import org.eclipse.ceylon.ide.common.correct {
    QuickFixKind
}
import org.eclipse.ceylon.ide.common.platform {
    CommonTextChange=TextChange
}
import org.eclipse.ceylon.ide.common.refactoring {
    DefaultRegion
}

import org.eclipse.jface.text {
    IDocument,
    Region
}
import org.eclipse.jface.text.contentassist {
    ICompletionProposal,
    ICompletionProposalExtension6,
    IContextInformation
}
import org.eclipse.jface.viewers {
    StyledString {
        qualifierStyler
    }
}
import org.eclipse.ltk.core.refactoring {
    TextChange
}
import org.eclipse.swt.graphics {
    Image,
    Point
}

object proposalsFactory {
    
    alias Builder => ICompletionProposal(String, TextChange, Region?, Image?, Boolean);
    
    shared ICompletionProposal createProposal(
        String description,
        CommonTextChange|Callable<Anything, []> change,
        DefaultRegion? selection,
        Boolean qualifiedNameIsPath,
        Image myImage,
        QuickFixKind kind) {
        
        
        if (is EclipseTextChange change) {
            value region = toRegion(selection);
            
            Builder builder = switch (kind)
            case (QuickFixKind.addConstructor) 
                createProposalWithShortcut("addConstructor")
            case (QuickFixKind.addParameterList) 
                createProposalWithShortcut("addParameterList")
            case (QuickFixKind.addRefineEqualsHash) 
                createProposalWithShortcut("refineEqualsHash")
            case (QuickFixKind.addRefineFormal) 
                createProposalWithShortcut("refineFormalMembers")
            else createGenericChangeProposal;
            
            return builder(description, change.nativeChange, region, myImage, qualifiedNameIsPath);
            
        } else if (is Anything() callback = change) {
            
            return object satisfies ICompletionProposal
                                  & ICompletionProposalExtension6 {
                
                apply(IDocument? iDocument) => callback();
                
                shared actual String? additionalProposalInfo => null;
                
                shared actual IContextInformation? contextInformation => null;
                
                displayString => description;
                
                shared actual Point? getSelection(IDocument iDocument)
                        => if (exists selection)
                           then Point(selection.start, selection.end)
                           else null;
                
                image => myImage;
                
                styledDisplayString
                        => styleProposal(displayString, qualifiedNameIsPath);
                
            };
        }

        throw Exception("Change not supported: " + className(change));
    }
    
    ICompletionProposal createGenericChangeProposal(String description,
        TextChange change, Region? region, Image? image, Boolean qualifiedNameIsPath)
            => CorrectionProposal(description, change, region, image, qualifiedNameIsPath);

    ICompletionProposal createProposalWithShortcut
    (String name)
    (String description,TextChange chg, Region? region, Image? img, Boolean qualifiedNameIsPath) 
            => object extends CorrectionProposal(description, chg, region, img, qualifiedNameIsPath) {
        styledDisplayString
                => let (hint = shortcut("org.eclipse.ceylon.ide.eclipse.ui.action." + name))
                styleProposal(displayString, false).append(hint, qualifierStyler);
    };
    
    Region? toRegion(DefaultRegion? reg)
            => if (exists reg)
               then Region(reg.start, reg.length)
               else null;
}