/********************************************************************************
 * Copyright (c) 2011-2017 Red Hat Inc. and/or its affiliates and others
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License 1.0 which is available at
 * http://www.eclipse.org/legal/epl-v10.html.
 *
 * SPDX-License-Identifier: EPL-1.0
 ********************************************************************************/
package org.eclipse.ceylon.ide.eclipse.code.refactor;

import java.util.List;
import java.util.Set;

import org.antlr.runtime.ANTLRStringStream;
import org.antlr.runtime.CommonTokenStream;
import org.eclipse.core.resources.IProject;
import org.eclipse.jface.dialogs.Dialog;
import org.eclipse.jface.layout.GridDataFactory;
import org.eclipse.jface.layout.GridLayoutFactory;
import org.eclipse.swt.SWT;
import org.eclipse.swt.custom.CLabel;
import org.eclipse.swt.events.ModifyEvent;
import org.eclipse.swt.events.ModifyListener;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Control;
import org.eclipse.swt.widgets.Label;
import org.eclipse.swt.widgets.Shell;
import org.eclipse.swt.widgets.Text;

import org.eclipse.ceylon.compiler.typechecker.analyzer.ExpressionVisitor;
import org.eclipse.ceylon.compiler.typechecker.analyzer.TypeVisitor;
import org.eclipse.ceylon.compiler.typechecker.parser.CeylonLexer;
import org.eclipse.ceylon.compiler.typechecker.parser.CeylonParser;
import org.eclipse.ceylon.compiler.typechecker.parser.LexError;
import org.eclipse.ceylon.compiler.typechecker.parser.ParseError;
import org.eclipse.ceylon.compiler.typechecker.tree.Message;
import org.eclipse.ceylon.compiler.typechecker.tree.Node;
import org.eclipse.ceylon.compiler.typechecker.tree.Tree;
import org.eclipse.ceylon.compiler.typechecker.tree.Tree.StaticType;
import org.eclipse.ceylon.compiler.typechecker.tree.Visitor;
import org.eclipse.ceylon.ide.eclipse.ui.CeylonResources;
import org.eclipse.ceylon.ide.eclipse.util.ErrorVisitor;
import org.eclipse.ceylon.model.typechecker.model.Cancellable;
import org.eclipse.ceylon.model.typechecker.model.Parameter;
import org.eclipse.ceylon.model.typechecker.model.Type;
import org.eclipse.ceylon.model.typechecker.model.Value;
import org.eclipse.ceylon.model.typechecker.model.Unit;

public class AddParameterDialog extends Dialog /*TitleAreaDialog*/ {
    
    private String name; 
    private Type type;
    private String argument;
    private Node node;
    private Set<String> parameterNames;
    private Unit unit;
    
    public AddParameterDialog(Shell parentShell, 
            Node node, final IProject project, 
            Set<String> parameterNames) {
        super(parentShell);
        this.parameterNames = parameterNames;
        this.node = node;
        name = "something";
        unit = node.getUnit();
        type = unit.getAnythingDeclaration().getType();
        argument = "nothing";
    }
    
    @Override
    protected boolean isResizable() {
        return true;
    }
    
    public String getName() {
        return name;
    }
    
    public Type getType() {
        return type;
    }
    
    public String getArgument() {
        return argument;
    }

    @Override
    protected Control createDialogArea(Composite parent) {
        getShell().setText("Add Parameter");
        parent = (Composite) super.createDialogArea(parent);
        
        new Label(parent, SWT.NONE).setText("Enter the name and type of the new parameter.");
        new Label(parent, SWT.SEPARATOR|SWT.HORIZONTAL).setLayoutData(new GridData(GridData.FILL_HORIZONTAL));
        Composite composite = new Composite(parent, SWT.NONE);
        composite.setLayout(GridLayoutFactory.swtDefaults().numColumns(2).create());
        composite.setLayoutData(GridDataFactory.fillDefaults().hint(500, SWT.DEFAULT).grab(true, true).create());
        
        Label typeLabel = new Label(composite, SWT.NONE);
        typeLabel.setText("Type:");
        final Text typeText = new Text(composite, SWT.SINGLE | SWT.BORDER);
        typeText.setText("Anything");

        Label nameLabel = new Label(composite, SWT.NONE);
        nameLabel.setText("Name:");
        final Text nameText = new Text(composite, SWT.SINGLE | SWT.BORDER);
        nameText.setText("something");
        nameText.selectAll();
        nameText.setLayoutData(GridDataFactory.fillDefaults().create());
        
        Label valLabel = new Label(composite, SWT.NONE);
        valLabel.setText("Argument:");
        final Text argumentText = new Text(composite, SWT.SINGLE | SWT.BORDER);
        argumentText.setLayoutData(GridDataFactory.fillDefaults().grab(true, false).create());
        argumentText.setText("nothing");

        final CLabel errorLabel = new CLabel(composite, SWT.NONE);
        errorLabel.setLayoutData(GridDataFactory.fillDefaults().span(4, 1).grab(true, true).create());
        errorLabel.setVisible(false);
        errorLabel.setImage(CeylonResources.ERROR);
        
        nameText.addModifyListener(new ModifyListener() {
            @Override
            public void modifyText(ModifyEvent e) {
                if (updateName(nameText, errorLabel)) {
                    if (updateType(typeText, errorLabel)) {
                        updateArgument(argumentText, errorLabel);
                    }
                }
            }
        });
        argumentText.addModifyListener(new ModifyListener() {
            @Override
            public void modifyText(ModifyEvent e) {
                argument = argumentText.getText();
                if (updateArgument(argumentText, errorLabel)) {
                    if (updateType(typeText, errorLabel)) {
                        updateName(nameText, errorLabel);
                    }
                }
            }
        });
        typeText.addModifyListener(new ModifyListener() {
            @Override
            public void modifyText(ModifyEvent event) {
                if (updateType(typeText, errorLabel)) {
                    if (updateName(nameText, errorLabel)) {
                        updateArgument(argumentText, errorLabel);
                    }
                }
            }
        });
        typeText.setLayoutData(GridDataFactory.fillDefaults().grab(true, false).hint(300, SWT.DEFAULT).create());
        return parent;
    }

    private boolean updateType(final Text typeText, 
            final CLabel errorLabel) {
        try {
            String text = typeText.getText();
            
            // TODO replace with parseTypeExpression() in common
            CeylonLexer lexer = new CeylonLexer(new ANTLRStringStream(text));
            CommonTokenStream ts = new CommonTokenStream(lexer);
            ts.fill();
            List<LexError> lexErrors = lexer.getErrors();
            if (!lexErrors.isEmpty()) {
                errorLabel.setText(lexErrors.get(0).getMessage());
                errorLabel.setVisible(true);
                return false;
            }
            
            CeylonParser parser = new CeylonParser(ts);
            StaticType staticType = parser.type();
            if (ts.index()<ts.size()-1) {
                errorLabel.setText("extra tokens in type expression");
                errorLabel.setVisible(true);
                return false;
            }
            List<ParseError> parseErrors = parser.getErrors();
            if (!parseErrors.isEmpty()) {
                errorLabel.setText(parseErrors.get(0).getMessage());
                errorLabel.setVisible(true);
                return false;
            }
            
            staticType.visit(new Visitor() {
                @Override
                public void visitAny(Node that) {
                    that.setUnit(unit);
                    that.setScope(node.getScope());
                    super.visitAny(that);
                }
            });
            staticType.visit(new TypeVisitor(unit, Cancellable.ALWAYS_CANCELLED));
            staticType.visit(new ExpressionVisitor(unit, Cancellable.ALWAYS_CANCELLED));
            
            errorLabel.setVisible(false);
            
            new ErrorVisitor() {
                @Override
                protected void handleMessage(int startOffset, int endOffset, 
                        int startCol, int startLine, Message error) {
                    errorLabel.setText(error.getMessage());
                    errorLabel.setVisible(true);
                }
            }.visit(staticType);
            
            if (errorLabel.isVisible()) { 
                return false;
            }
            else {
                type = staticType.getTypeModel();
                return true;
            }
            
        }
        catch (Exception e) {
            errorLabel.setText("Could not parse type expression");
            errorLabel.setVisible(true);
            return false;
        }
    }

    private boolean updateArgument(final Text argumentText, 
            final CLabel errorLabel) {
        try {
            String text = argumentText.getText();
            if (text.isEmpty()) {
                errorLabel.setText("Missing argument expression");
                errorLabel.setVisible(true);
                return false;
            }
            String typeExpression = type==null ? "Anything" : type.asString(unit);
            String parameterName = name==null ? "something" : name;
            String paramDeclaration = "(" + typeExpression + " " + parameterName + " = " + text + ")";
            
            CeylonLexer lexer = new CeylonLexer(new ANTLRStringStream(paramDeclaration));
            CommonTokenStream ts = new CommonTokenStream(lexer);
            ts.fill();
            List<LexError> lexErrors = lexer.getErrors();
            if (!lexErrors.isEmpty()) {
                errorLabel.setText(lexErrors.get(0).getMessage());
                errorLabel.setVisible(true);
                return false;
            }
            
            CeylonParser parser = new CeylonParser(ts);
            Tree.ParameterList parameters = parser.parameters();
            if (ts.index()<ts.size()-1) {
                errorLabel.setText("extra tokens in argument expression");
                errorLabel.setVisible(true);
                return false;
            }
            List<ParseError> parseErrors = parser.getErrors();
            if (!parseErrors.isEmpty()) {
                errorLabel.setText(parseErrors.get(0).getMessage());
                errorLabel.setVisible(true);
                return false;
            }
            
            final Value value = new Value();
            value.setName(name);
            final Parameter param = new Parameter();
            param.setName(name);
            param.setModel(value);
            parameters.visit(new Visitor() {
                @Override
                public void visitAny(Node that) {
                    that.setUnit(unit);
                    that.setScope(node.getScope());
                    super.visitAny(that);
                }
                @Override
                public void visit(Tree.AttributeDeclaration that) {
                    that.setDeclarationModel(value);
                    super.visit(that);
                }
                @Override public void visit(Tree.ParameterDeclaration that) {
                    that.setParameterModel(param);
                    super.visit(that);
                }
            });
            parameters.visit(new TypeVisitor(unit, Cancellable.ALWAYS_CANCELLED));
            parameters.visit(new ExpressionVisitor(unit, Cancellable.ALWAYS_CANCELLED));
            
            errorLabel.setVisible(false);
            
            new ErrorVisitor() {
                @Override
                protected void handleMessage(int startOffset, int endOffset, 
                        int startCol, int startLine, Message error) {
                    errorLabel.setText(error.getMessage());
                    errorLabel.setVisible(true);
                }
            }.visit(parameters);
            
            if (errorLabel.isVisible()) { 
                return false;
            }
            else {
                this.argument = text;
                return true;
            }
            
        }
        catch (Exception e) {
            errorLabel.setText("Could not parse argument expression");
            errorLabel.setVisible(true);
            return false;
        }
    }

    private boolean updateName(final Text nameText, 
            final CLabel errorLabel) {
        String text = nameText.getText();
        if (text.isEmpty()) {
            errorLabel.setText("Missing name");
            errorLabel.setVisible(true);
            return false;
        }
        else if (!text.matches("^[a-z_]\\w*$")) {
            errorLabel.setText("Illegal parameter name");
            errorLabel.setVisible(true);
            return false;
        }
        else if (parameterNames.contains(text)) {
            errorLabel.setText("Duplicate parameter name");
            errorLabel.setVisible(true);
            return false;
        }
        else {
            name = text;
            errorLabel.setVisible(false);
            return true;
        }
    }
    
}
