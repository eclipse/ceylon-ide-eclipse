/********************************************************************************
 * Copyright (c) 2011-2017 Red Hat Inc. and/or its affiliates and others
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License 1.0 which is available at
 * http://www.eclipse.org/legal/epl-v10.html.
 *
 * SPDX-License-Identifier: EPL-1.0
 ********************************************************************************/
package org.eclipse.ceylon.ide.eclipse.util;

import org.eclipse.ceylon.compiler.typechecker.tree.Node;
import org.eclipse.ceylon.compiler.typechecker.tree.Tree;
import org.eclipse.ceylon.compiler.typechecker.tree.Visitor;

@Deprecated
class FindScopeVisitor extends Visitor {
    
    FindScopeVisitor(int fStartOffset, int fEndOffset) {
        this.fStartOffset = fStartOffset;
        this.fEndOffset = fEndOffset;
    }
    
    private Node node;
    private int fStartOffset;
    private int fEndOffset;
    
    public Node getNode() {
        return node;
    }
        
    @Override
    public void visit(Tree.Import that) {
        if (inBounds(that)) {
            node = that;
        }
        super.visit(that);
    }
    
    @Override
    public void visit(Tree.PackageDescriptor that) {
        if (inBounds(that)) {
            node = that;
        }
        super.visit(that);
    }
    
    @Override
    public void visit(Tree.ModuleDescriptor that) {
        if (inBounds(that)) {
            node = that;
        }
        super.visit(that);
    }
    
    @Override
    public void visit(Tree.ImportModule that) {
        if (inBounds(that)) {
            node = that;
        }
        super.visit(that);
    }
    
    @Override
    public void visit(Tree.InterfaceDefinition that) {
        if (inBounds(that)) {
            node = that;
        }
        super.visit(that);
    }
    
    @Override
    public void visit(Tree.ClassDefinition that) {
        if (inBounds(that)) {
            node = that;
        }
        super.visit(that);
    }
    
    @Override
    public void visit(Tree.MethodDefinition that) {
        if (inBounds(that)) {
            node = that;
        }
        super.visit(that);
    }
    
    @Override
    public void visit(Tree.AttributeGetterDefinition that) {
        if (inBounds(that)) {
            node = that;
        }
        super.visit(that);
    }
    
    @Override
    public void visit(Tree.AttributeSetterDefinition that) {
        if (inBounds(that)) {
            node = that;
        }
        super.visit(that);
    }
    
    @Override
    public void visit(Tree.ObjectDefinition that) {
        if (inBounds(that)) {
            node = that;
        }
        super.visit(that);
    }
    
    @Override
    public void visit(Tree.TypedArgument that) {
        if (inBounds(that)) {
            node = that;
        }
        super.visit(that);
    }
    
    private boolean inBounds(Node that) {
        return inBounds(that, that);
    }
    
    private boolean inBounds(Node left, Node right) {
        if (left==null) return false;
        if (right==null) left=right;
        Integer tokenStartIndex = left.getStartIndex();
        Integer tokenEndIndex = right.getEndIndex();
        return tokenStartIndex!=null && tokenEndIndex!=null &&
                tokenStartIndex <= fStartOffset && 
                tokenEndIndex >= fEndOffset;
    }
    
}