package com.redhat.ceylon.eclipse.code.quickfix;

import java.util.StringTokenizer;

import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.IProgressMonitor;
import org.eclipse.core.runtime.IStatus;
import org.eclipse.core.runtime.NullProgressMonitor;
import org.eclipse.core.runtime.Status;
import org.eclipse.jface.text.IDocument;
import org.eclipse.jface.text.IRewriteTarget;
import org.eclipse.jface.text.contentassist.ICompletionProposal;
import org.eclipse.jface.text.contentassist.ICompletionProposalExtension5;
import org.eclipse.jface.text.contentassist.ICompletionProposalExtension6;
import org.eclipse.jface.text.contentassist.IContextInformation;
import org.eclipse.jface.text.link.LinkedModeModel;
import org.eclipse.jface.viewers.StyledString;
import org.eclipse.ltk.core.refactoring.Change;
import org.eclipse.ltk.core.refactoring.IUndoManager;
import org.eclipse.ltk.core.refactoring.NullChange;
import org.eclipse.ltk.core.refactoring.RefactoringCore;
import org.eclipse.ltk.core.refactoring.RefactoringStatus;
import org.eclipse.swt.graphics.Image;
import org.eclipse.swt.graphics.Point;
import org.eclipse.ui.IEditorPart;
import org.eclipse.ui.PlatformUI;

import com.redhat.ceylon.eclipse.code.propose.CompletionProposal;
import com.redhat.ceylon.eclipse.ui.CeylonPlugin;


/**
 * Implementation of a Java completion proposal to be used for quick fix and quick assist
 * proposals that invoke a {@link Change}. The proposal offers a proposal information but no context
 * information.
 *
 * @since 3.2
 */
public class ChangeCorrectionProposal implements ICompletionProposal, 
		ICompletionProposalExtension5, ICompletionProposalExtension6 {

	private Change fChange;
	private String fName;
	private int fRelevance;
	private Image fImage;

	/**
	 * Constructs a change correction proposal.
	 *
	 * @param name The name that is displayed in the proposal selection dialog.
	 * @param change The change that is executed when the proposal is applied or <code>null</code>
	 * if the change will be created by implementors of {@link #createChange()}.
	 * @param relevance The relevance of this proposal.
	 * @param image The image that is displayed for this proposal or <code>null</code> if no
	 * image is desired.
	 */
	public ChangeCorrectionProposal(String name, Change change, int relevance, Image image) {
		if (name == null) {
			throw new IllegalArgumentException("Name must not be null"); //$NON-NLS-1$
		}
		fName= name;
		fChange= change;
		fRelevance= relevance;
		fImage= image;
	}

	/*
	 * @see ICompletionProposal#apply(IDocument)
	 */
	public void apply(IDocument document) {
		try {
			performChange(PlatformUI.getWorkbench().getActiveWorkbenchWindow().getActivePage().getActiveEditor(), document);
		} catch (CoreException e) {
			//ExceptionHandler.handle(e, CorrectionMessages.ChangeCorrectionProposal_error_title, CorrectionMessages.ChangeCorrectionProposal_error_message);
		}
	}

	/**
	 * Performs the change associated with this proposal.
	 *
	 * @param activeEditor The editor currently active or <code>null</code> if no
	 * editor is active.
	 * @param document The document of the editor currently active or <code>null</code> if
	 * no editor is visible.
	 * @throws CoreException Thrown when the invocation of the change failed.
	 */
	protected void performChange(IEditorPart activeEditor, IDocument document) throws CoreException {
		Change change= null;
		IRewriteTarget rewriteTarget= null;
		try {
			change= getChange();
			if (change != null) {
				if (document != null) {
					LinkedModeModel.closeAllModels(document);
				}
				if (activeEditor != null) {
					rewriteTarget= (IRewriteTarget) activeEditor.getAdapter(IRewriteTarget.class);
					if (rewriteTarget != null) {
						rewriteTarget.beginCompoundChange();
					}
				}

				change.initializeValidationData(new NullProgressMonitor());
				RefactoringStatus valid= change.isValid(new NullProgressMonitor());
				if (valid.hasFatalError()) {
					IStatus status= new Status(IStatus.ERROR, CeylonPlugin.PLUGIN_ID, IStatus.ERROR,
						valid.getMessageMatchingSeverity(RefactoringStatus.FATAL), null);
					throw new CoreException(status);
				} else {
					IUndoManager manager= RefactoringCore.getUndoManager();
					Change undoChange;
					boolean successful= false;
					try {
						manager.aboutToPerformChange(change);
						undoChange= change.perform(new NullProgressMonitor());
						successful= true;
					} finally {
						manager.changePerformed(change, successful);
					}
					if (undoChange != null) {
						undoChange.initializeValidationData(new NullProgressMonitor());
						manager.addUndo(getName(), undoChange);
					}
				}
			}
		} finally {
			if (rewriteTarget != null) {
				rewriteTarget.endCompoundChange();
			}

			if (change != null) {
				change.dispose();
			}
		}
	}

	public String getAdditionalProposalInfo() {
		Object info= getAdditionalProposalInfo(new NullProgressMonitor());
		return info == null ? null : info.toString();
	}

	public Object getAdditionalProposalInfo(IProgressMonitor monitor) {
		StringBuffer buf= new StringBuffer();
		buf.append("<p>"); //$NON-NLS-1$
		try {
			Change change= getChange();
			if (change != null) {
				String name= change.getName();
				if (name.length() == 0) {
					return null;
				}
				buf.append(name);
			} else {
				return null;
			}
		} catch (CoreException e) {
			buf.append("Unexpected error when accessing this proposal:<p><pre>"); //$NON-NLS-1$
			buf.append(e.getLocalizedMessage());
			buf.append("</pre>"); //$NON-NLS-1$
		}
		buf.append("</p>"); //$NON-NLS-1$
		return buf.toString();
	}

	public IContextInformation getContextInformation() {
		return null;
	}

	public String getDisplayString() {
		return getName();
	}

	public StyledString getStyledDisplayString() {
		return style(getName());
	}

	public static StyledString style(String name) {
		StyledString result = new StyledString();
		StringTokenizer tokens = new StringTokenizer(name, "'", false);
		result.append(tokens.nextToken());
		while (tokens.hasMoreTokens()) {
			result.append('\'');
			CompletionProposal.style(result, tokens.nextToken());
			result.append('\'');
			if (tokens.hasMoreTokens()) {
				result.append(tokens.nextToken());
			}
		}
		return result;
	}

	/**
	 * Returns the name of the proposal.
	 *
	 * @return return the name of the proposal
	 */
	public String getName() {
		return fName;
	}

	public Image getImage() {
		return fImage;
	}

	/*
	 * @see ICompletionProposal#getSelection(IDocument)
	 */
	public Point getSelection(IDocument document) {
		return null;
	}

	/**
	 * Sets the proposal's image or <code>null</code> if no image is desired.
	 *
	 * @param image the desired image.
	 */
	public void setImage(Image image) {
		fImage= image;
	}

	/**
	 * Returns the change that will be executed when the proposal is applied.
	 *
	 * @return returns the change for this proposal.
	 * @throws CoreException thrown when the change could not be created
	 */
	public synchronized final Change getChange() throws CoreException {
		if (fChange == null) {
			fChange= createChange();
		}
		return fChange;
	}

	/**
	 * Creates the text change for this proposal.
	 * This method is only called once and only when no text change has been passed in
 	 * {@link #ChangeCorrectionProposal(String, Change, int, Image)}.
 	 *
	 * @return returns the created change.
	 * @throws CoreException thrown if the creation of the change failed.
	 */
	protected Change createChange() throws CoreException {
		return new NullChange();
	}

	/**
	 * Sets the display name.
	 *
	 * @param name the name to set
	 */
	public void setDisplayName(String name) {
		if (name == null) {
			throw new IllegalArgumentException("Name must not be null"); //$NON-NLS-1$
		}
		fName= name;
	}

	public int getRelevance() {
		return fRelevance;
	}

	/**
	 * Sets the relevance.
	 * @param relevance the relevance to set
	 */
	public void setRelevance(int relevance) {
		fRelevance= relevance;
	}


}

