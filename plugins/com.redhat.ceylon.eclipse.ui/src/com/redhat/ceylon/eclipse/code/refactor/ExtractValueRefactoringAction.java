package com.redhat.ceylon.eclipse.code.refactor;

import org.eclipse.ltk.ui.refactoring.RefactoringWizard;
import org.eclipse.ui.IEditorPart;

public class ExtractValueRefactoringAction extends AbstractRefactoringAction {
    
    public ExtractValueRefactoringAction(IEditorPart editor) {
        super(editor);
    }
    
    @Override
    public Refactoring createRefactoring() {
        return (Refactoring) refactorJ2C.newExtractValueRefactoring(editor);
    }
    
    @Override
    public RefactoringWizard createWizard(Refactoring refactoring) {
        return new ExtractValueWizard(refactoring);
    }
    
    @Override
    public String message() {
        return "No expression selected";
    }

}
