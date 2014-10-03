package com.redhat.ceylon.eclipse.code.style;

import static com.redhat.ceylon.eclipse.code.style.CeylonFormatterConstants.*;

import java.util.Observable;
import java.util.Observer;

import org.eclipse.swt.SWT;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Group;

public class FormatterTabLine extends FormatterTabPage {

    public class RangeValidator extends MinMaxValidator {
        String fMinKey;
        String fMaxKey;
        public RangeValidator(String minKey, String maxKey, int minValue, int maxValue) {
            super(minValue, maxValue);
            this.fMinKey = minKey;
            this.fMaxKey = maxKey;
        }
        
        @Override
        public String isValid(String value) {
            if (fMinKey != null) {
                super.fMinValue = Integer.parseInt(workingValues.get(fMinKey));
            }
            if (fMaxKey != null) {
                super.fMaxValue = Integer.parseInt(workingValues.get(fMaxKey));
            }
            return super.isValid(value);
        }
    }

    private final String PREVIEW = 
            "{String*} words = { \"You\", \"may\", \"want\", \"to\", \"break\", \"this\", \"up\", \"into\", \"multiple\", \"lines\", \"because\", \"like\", \"this\", \"it\", \"can\", \"be\", \"hard\", \"to\", \"read\" };\n"
            + "{String*} moreWords = {\n"
            + "    \"However\", \"keep\", \"in\", \"mind\", \"that\",\n"
            + "    \"the\", \"formatter\", \"can\", \"never\", \"be\",\n"
            + "    \"as\", \"clever\", \"as\", \"a\", \"human\",\n"
            + "    \"when\", \"deciding\", \"where\", \"line\", \"breaks\",\n"
            + "    \"are\", \"most\", \"appropriate\"\n"
            + "};\n"
            + "\n"
            + "class ManyTypeParams<\n"
            + "        \n"
            + "        \n"
            + "        P1,\n"
            + "        \n"
            + "        \n"
            + "        \n"
            + "        P2,\n"
            + "        \n"
            + "        \n"
            + "        \n"
            + "        P3\n"
            + "        \n"
            + "        >() {\n"
            + "    String s1 = \"\";\n"
            + "    \n"
            + "    \n"
            + "    \n"
            + "    // how many line breaks do you want to allow between this comment and other content?\n"
            + "    \n"
            + "    \n"
            + "    \n"
            + "    String s2 = \"\";\n"
            + "    \n"
            + "    \n"
            + "    \n"
            + "    /*\n"
            + "     And how about\n"
            + "     multi-line comments?\n"
            + "     */\n"
            + "    \n"
            + "    \n"
            + "    \n"
            + "    String s3\n"
            + "            =\n"
            + "            \n"
            + "            \n"
            + "            \n"
            + "            /*\n"
            + "               or something like this?\n"
            + "               */\n"
            + "            \n"
            + "            \n"
            + "            \n"
            + "            \"\";\n"
            + "}\n";

    private CeylonPreview ceylonPreview;

    public FormatterTabLine(FormatterModifyProfileDialog modifyDialog,
            FormatterPreferences workingValues) {
        super(modifyDialog, workingValues);
    }

    @Override
    protected void doCreatePreferences(Composite composite, int numColumns) {

        final Group generalGroup = createGroup(numColumns, composite,
                "Line Options");
        final CheckboxPreference unlimited = createCheckboxPref(generalGroup, numColumns, "Unlimited line length",
                FORMATTER_maxLineLength, FALSE_TRUE);
        final NumberPreference maxLineLength = createNumberPref(generalGroup, numColumns, "Maximum line length",
                FORMATTER_maxLineLength_Number, MINIMUM_SPECIFIED_LINE_LENGTH, MAXIMUM_SPECIFIED_LINE_LENGTH);
        updatePreferences(this.workingValues.get(FORMATTER_maxLineLength_Number), maxLineLength, unlimited);

        unlimited.addObserver(new Observer() {
            public void update(Observable o, Object arg) {
                updatePreferences((String) arg, maxLineLength, (CheckboxPreference)o);
            }
        });
        
        createComboPref(generalGroup,
                numColumns, "Line break strategy", FORMATTER_lineBreakStrategy,
                new String[]{"default"}, new String[]{"Default"});
 
        final Group lineCommentGroup = createGroup(5, composite,
                "Line breaks");
        createCompactLabel(1, lineCommentGroup,  "Before line comment", SWT.LEFT, 50);
        createCompactNumberPref(lineCommentGroup, 2, "Minimum",
                FORMATTER_lineBreaksBeforeLineComment_First,
                new RangeValidator(null, FORMATTER_lineBreaksBeforeLineComment_Last, 0, 0));
        createCompactNumberPref(lineCommentGroup, 2, "Maximum", 
                FORMATTER_lineBreaksBeforeLineComment_Last,
                new RangeValidator(FORMATTER_lineBreaksBeforeLineComment_First, null, 0, 999));
        
        createCompactLabel(1, lineCommentGroup,  "After line comment", SWT.LEFT, 50);
        createCompactNumberPref(lineCommentGroup, 2, "Minimum",
                FORMATTER_lineBreaksAfterLineComment_First,
                new RangeValidator(null, FORMATTER_lineBreaksAfterLineComment_Last, 1, 1));
        createCompactNumberPref(lineCommentGroup, 2, "Maximum", 
                FORMATTER_lineBreaksAfterLineComment_Last,
                new RangeValidator(FORMATTER_lineBreaksAfterLineComment_First, null, 1, 999));
        
        createCompactLabel(1, lineCommentGroup,  "Before single comment", SWT.LEFT, 50);
        createCompactNumberPref(lineCommentGroup, 2, "Minimum",
                FORMATTER_lineBreaksBeforeSingleComment_First,
                new RangeValidator(null, FORMATTER_lineBreaksBeforeSingleComment_Last, 0, 0));
        createCompactNumberPref(lineCommentGroup, 2, "Maximum", 
                FORMATTER_lineBreaksBeforeSingleComment_Last,
                new RangeValidator(FORMATTER_lineBreaksBeforeSingleComment_First, null, 0, 999));
 
        createCompactLabel(1, lineCommentGroup,  "After single comment", SWT.LEFT, 50);
        createCompactNumberPref(lineCommentGroup, 2, "Minimum",
                FORMATTER_lineBreaksAfterSingleComment_First,
                new RangeValidator(null, FORMATTER_lineBreaksAfterSingleComment_Last, 0, 0));
        createCompactNumberPref(lineCommentGroup, 2, "Maximum", 
                FORMATTER_lineBreaksAfterSingleComment_Last,
                new RangeValidator(FORMATTER_lineBreaksAfterSingleComment_First, null, 0, 999));
        
        createCompactLabel(1, lineCommentGroup,  "Before multi-line comment", SWT.LEFT, 50);
        createCompactNumberPref(lineCommentGroup, 2, "Minimum",
                FORMATTER_lineBreaksBeforeMultiComment_First,
                new RangeValidator(null, FORMATTER_lineBreaksBeforeMultiComment_Last, 0, 0));
        createCompactNumberPref(lineCommentGroup, 2, "Maximum", 
                FORMATTER_lineBreaksBeforeMultiComment_Last,
                new RangeValidator(FORMATTER_lineBreaksBeforeMultiComment_First, null, 0, 999));
        
        createCompactLabel(1, lineCommentGroup,  "After multi-line comment", SWT.LEFT, 50);
        createCompactNumberPref(lineCommentGroup, 2, "Minimum",
                FORMATTER_lineBreaksAfterMultiComment_First,
                new RangeValidator(null, FORMATTER_lineBreaksAfterMultiComment_Last, 0, 0));
        createCompactNumberPref(lineCommentGroup, 2, "Maximum", 
                FORMATTER_lineBreaksAfterMultiComment_Last,
                new RangeValidator(FORMATTER_lineBreaksAfterMultiComment_First, null, 0, 999));
        
        createCompactLabel(1, lineCommentGroup,  "In type parameter list", SWT.LEFT, 60);
        createCompactNumberPref(lineCommentGroup, 2, "Minimum",
                FORMATTER_lineBreaksInTypeParameterList_First,
                new RangeValidator(null, FORMATTER_lineBreaksInTypeParameterList_Last, 0, 0));
        createCompactNumberPref(lineCommentGroup, 2, "Maximum", 
                FORMATTER_lineBreaksInTypeParameterList_Last,
                new RangeValidator(FORMATTER_lineBreaksInTypeParameterList_First, null, 0, 999));
    }

    private void updatePreferences(String v, NumberPreference np, CheckboxPreference cbp) {
        if (!cbp.getChecked()) {
            np.setEnabled(true);
        } else {
            np.setEnabled(false);
        }
    }

    @Override
    public void initializePage() {
        ceylonPreview.setPreviewText(PREVIEW);
    }

    @Override
    protected CeylonPreview doCreateCeylonPreview(Composite parent) {
        ceylonPreview = new CeylonPreview(this.workingValues, parent);
        return ceylonPreview;
    }

    @Override
    protected void doUpdatePreview() {
        super.doUpdatePreview();
        ceylonPreview.update();
    }
}
