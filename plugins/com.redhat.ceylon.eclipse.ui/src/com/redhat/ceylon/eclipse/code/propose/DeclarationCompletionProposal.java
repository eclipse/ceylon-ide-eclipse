package com.redhat.ceylon.eclipse.code.propose;

import static com.redhat.ceylon.eclipse.code.hover.DocHover.getDocumentationFor;
import static com.redhat.ceylon.eclipse.code.quickfix.CeylonQuickFixAssistant.importEdit;

import org.eclipse.jface.text.IDocument;
import org.eclipse.swt.graphics.Point;

import com.redhat.ceylon.compiler.typechecker.model.Declaration;
import com.redhat.ceylon.eclipse.code.outline.CeylonLabelProvider;
import com.redhat.ceylon.eclipse.code.parse.CeylonParseController;

final class DeclarationCompletionProposal extends CompletionProposal {
	
	private final CeylonParseController cpc;
	private final Declaration declaration;
	private final boolean addimport;

	DeclarationCompletionProposal(int offset, String prefix, 
			String desc, String text, boolean selectParams,
			CeylonParseController cpc, Declaration d) {
		this(offset, prefix, desc, text, selectParams,
				cpc, d, false);
	}
	
	DeclarationCompletionProposal(int offset, String prefix, 
			String desc, String text, boolean selectParams,
			CeylonParseController cpc, Declaration d, 
			boolean addimport) {
		super(offset, prefix, CeylonLabelProvider.getImage(d), 
				desc, text, selectParams);
		this.cpc = cpc;
		this.declaration = d;
		this.addimport = addimport;
	}

	@Override
	public void apply(IDocument document) {
		super.apply(document);
		if (addimport) {
			try {
				importEdit(cpc.getRootNode(), 
					declaration.getUnit().getPackage().getNameAsString(), 
					declaration.getName())
						.apply(document);
			} 
			catch (Exception e) {
				e.printStackTrace();
			}
		}
	}
	
	public String getAdditionalProposalInfo() {
		return getDocumentationFor(cpc, declaration);	
	}
	
	@Override
	public Point getSelection(IDocument document) {
		if (addimport) {
			int importLength = importEdit(cpc.getRootNode(), 
					declaration.getUnit().getPackage().getNameAsString(), 
					declaration.getName()).getText().length();
			Point selection = super.getSelection(document);
			selection.x+=importLength;
			return selection;
		}
		else {
			return super.getSelection(document);
		}
	}
}