/********************************************************************************
 * Copyright (c) 2011-2017 Red Hat Inc. and/or its affiliates and others
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License 1.0 which is available at
 * http://www.eclipse.org/legal/epl-v10.html.
 *
 * SPDX-License-Identifier: EPL-1.0
 ********************************************************************************/
package org.eclipse.ceylon.test.eclipse.plugin.launch;

import static org.eclipse.ceylon.ide.eclipse.java2ceylon.Java2CeylonProxies.modelJ2C;
import static org.eclipse.ceylon.ide.eclipse.java2ceylon.Java2CeylonProxies.vfsJ2C;
import static org.eclipse.ceylon.test.eclipse.plugin.CeylonTestMessages.errorCanNotFindSelectedTest;
import static org.eclipse.ceylon.test.eclipse.plugin.CeylonTestMessages.errorDialogTitle;
import static org.eclipse.ceylon.test.eclipse.plugin.CeylonTestPlugin.LAUNCH_CONFIG_ENTRIES_KEY;
import static org.eclipse.ceylon.test.eclipse.plugin.CeylonTestPlugin.LAUNCH_CONFIG_TYPE;
import static org.eclipse.ceylon.test.eclipse.plugin.CeylonTestPlugin.LAUNCH_CONFIG_TYPE_JS;
import static org.eclipse.ceylon.test.eclipse.plugin.launch.CeylonTestLaunchConfigEntry.Type.CLASS;
import static org.eclipse.ceylon.test.eclipse.plugin.launch.CeylonTestLaunchConfigEntry.Type.CLASS_LOCAL;
import static org.eclipse.ceylon.test.eclipse.plugin.launch.CeylonTestLaunchConfigEntry.Type.METHOD;
import static org.eclipse.ceylon.test.eclipse.plugin.launch.CeylonTestLaunchConfigEntry.Type.METHOD_LOCAL;
import static org.eclipse.ceylon.test.eclipse.plugin.launch.CeylonTestLaunchConfigEntry.Type.MODULE;
import static org.eclipse.ceylon.test.eclipse.plugin.launch.CeylonTestLaunchConfigEntry.Type.PACKAGE;
import static org.eclipse.ceylon.test.eclipse.plugin.launch.CeylonTestLaunchConfigEntry.Type.PROJECT;
import static org.eclipse.ceylon.test.eclipse.plugin.util.CeylonTestUtil.getModule;
import static org.eclipse.ceylon.test.eclipse.plugin.util.CeylonTestUtil.getShell;
import static org.eclipse.ceylon.test.eclipse.plugin.util.CeylonTestUtil.isCeylonFile;
import static org.eclipse.ceylon.test.eclipse.plugin.util.CeylonTestUtil.isCeylonProject;
import static org.eclipse.ceylon.test.eclipse.plugin.util.CeylonTestUtil.isTestable;
import static org.eclipse.jdt.launching.IJavaLaunchConfigurationConstants.ATTR_PROJECT_NAME;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IFolder;
import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.IResource;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.debug.core.DebugPlugin;
import org.eclipse.debug.core.ILaunch;
import org.eclipse.debug.core.ILaunchConfiguration;
import org.eclipse.debug.core.ILaunchConfigurationType;
import org.eclipse.debug.core.ILaunchConfigurationWorkingCopy;
import org.eclipse.debug.core.ILaunchManager;
import org.eclipse.debug.ui.DebugUITools;
import org.eclipse.debug.ui.ILaunchShortcut;
import org.eclipse.jdt.core.IJavaElement;
import org.eclipse.jdt.core.IJavaProject;
import org.eclipse.jdt.core.IPackageFragment;
import org.eclipse.jdt.core.IPackageFragmentRoot;
import org.eclipse.jdt.core.JavaModelException;
import org.eclipse.jface.dialogs.MessageDialog;
import org.eclipse.jface.text.ITextSelection;
import org.eclipse.jface.viewers.ISelection;
import org.eclipse.jface.viewers.IStructuredSelection;
import org.eclipse.jface.window.Window;
import org.eclipse.ui.IEditorPart;
import org.eclipse.ui.dialogs.ElementListSelectionDialog;

import org.eclipse.ceylon.common.Backend;
import org.eclipse.ceylon.compiler.typechecker.TypeChecker;
import org.eclipse.ceylon.compiler.typechecker.context.PhasedUnit;
import org.eclipse.ceylon.compiler.typechecker.tree.Node;
import org.eclipse.ceylon.compiler.typechecker.tree.Tree;
import org.eclipse.ceylon.ide.eclipse.code.editor.CeylonEditor;
import org.eclipse.ceylon.ide.eclipse.code.parse.CeylonParseController;
import org.eclipse.ceylon.ide.eclipse.core.builder.CeylonBuilder;
import org.eclipse.ceylon.ide.eclipse.util.EditorUtil;
import org.eclipse.ceylon.ide.common.util.FindContainerVisitor;
import org.eclipse.ceylon.ide.eclipse.util.Nodes;
import org.eclipse.ceylon.ide.common.model.CeylonProject;
import org.eclipse.ceylon.model.typechecker.model.Class;
import org.eclipse.ceylon.model.typechecker.model.Declaration;
import org.eclipse.ceylon.model.typechecker.model.Function;
import org.eclipse.ceylon.model.typechecker.model.Module;
import org.eclipse.ceylon.model.typechecker.model.Package;
import org.eclipse.ceylon.test.eclipse.plugin.CeylonTestMessages;
import org.eclipse.ceylon.test.eclipse.plugin.CeylonTestPlugin;
import org.eclipse.ceylon.test.eclipse.plugin.launch.CeylonTestLaunchConfigEntry.Type;
import org.eclipse.ceylon.test.eclipse.plugin.util.CeylonTestUtil;
import org.eclipse.ceylon.test.eclipse.plugin.util.MethodWithContainer;

public class CeylonTestLaunchShortcut implements ILaunchShortcut {

    private final String configTypeId;

    public CeylonTestLaunchShortcut() {
        this(LAUNCH_CONFIG_TYPE);
    }

    public CeylonTestLaunchShortcut(String configTypeId) {
        this.configTypeId = configTypeId;
    }

    @Override
    public void launch(ISelection selection, String mode) {
        if (selection instanceof IStructuredSelection) {
            IStructuredSelection structuredSelection = (IStructuredSelection) selection;

            List<String> names = new ArrayList<String>();
            List<CeylonTestLaunchConfigEntry> entries = new ArrayList<CeylonTestLaunchConfigEntry>();

            Object[] selectedElements = structuredSelection.toArray();
            for (Object selectedElement : selectedElements) {
                processSelectedElement(selectedElement, mode, names, entries);
            }
            
            launch(getLaunchName(names), entries, mode, configTypeId);
        }
    }

    @Override
    public void launch(IEditorPart editor, String mode) {
        List<String> names = new ArrayList<String>();
        List<CeylonTestLaunchConfigEntry> entries = new ArrayList<CeylonTestLaunchConfigEntry>();

        if (editor instanceof CeylonEditor) {
            processCeylonEditorSelection(names, entries, (CeylonEditor) editor);
        }
        if (entries.isEmpty()) {
            IFile file = EditorUtil.getFile(editor.getEditorInput());
            processFile(names, entries, file);
        }

        launch(getLaunchName(names), entries, mode, configTypeId);
    }
    
    public static void relaunch(ILaunch launch, String launchName, String launchMode, List<String> qualifiedNames) throws CoreException {
        String configTypeId = launch.getLaunchConfiguration().getType().getIdentifier();
        List<CeylonTestLaunchConfigEntry> entries = new ArrayList<CeylonTestLaunchConfigEntry>();
        
        IProject project = CeylonTestUtil.getProject(launch);
        if( project != null ) {
            for(String qualifiedName : qualifiedNames) {
                Object result = CeylonTestUtil.getPackageOrDeclaration(project, qualifiedName);
                if( result instanceof Package ) {
                    Package pkg = (Package) result;
                    entries.add(CeylonTestLaunchConfigEntry.build(project, Type.PACKAGE, pkg.getNameAsString()));
                } else if (result instanceof Class) {
                    Class clazz = (Class) result;
                    entries.add(CeylonTestLaunchConfigEntry.build(project, clazz.isShared() ? CLASS : CLASS_LOCAL, clazz.getQualifiedNameString()));
                }
                else if (result instanceof Function) {
                    Function method = (Function) result;
                    entries.add(CeylonTestLaunchConfigEntry.build(project, method.isShared() ? METHOD : METHOD_LOCAL, method.getQualifiedNameString()));
                }
                else if( result instanceof MethodWithContainer ) {
                    MethodWithContainer methodWithContainer = (MethodWithContainer) result;
                    entries.add(CeylonTestLaunchConfigEntry.build(project, methodWithContainer.getMethod().isShared() ? METHOD : METHOD_LOCAL, methodWithContainer.getContainer().getQualifiedNameString() + "." + methodWithContainer.getMethod().getName()));
                }
            }
        }
        
        if (entries.isEmpty()) {
            MessageDialog.openInformation(getShell(), errorDialogTitle, errorCanNotFindSelectedTest);
        } else {
            CeylonTestLaunchShortcut.launch(launchName, entries, launchMode, configTypeId);
        }       
    }

    public static void launch(String name, List<CeylonTestLaunchConfigEntry> entries, String mode, String configTypeId) {
        if (entries.isEmpty()) {
            MessageDialog.openInformation(getShell(), CeylonTestMessages.launchDialogInfoTitle, CeylonTestMessages.launchNoTestsFound);
            return;
        }

        try {
            ILaunchConfigurationType configType = getLaunchManager().getLaunchConfigurationType(configTypeId);
            ILaunchConfiguration config = findExistingLaunchConfig(configType, entries);
            if (config == null) {
                config = createLaunchConfig(name, entries, configType);
            }

            DebugUITools.launch(config, mode);
        } catch (CoreException e) {
            CeylonTestPlugin.logError("", e);
        }
    }

    private void processSelectedElement(Object selectedElement, String mode, List<String> names, List<CeylonTestLaunchConfigEntry> entries) {
        if( selectedElement instanceof IProject ) {
            processProject(names, entries, (IProject) selectedElement);
        } else if (selectedElement instanceof IJavaProject) {
            processProject(names, entries, ((IJavaProject) selectedElement).getProject());
        } else if (selectedElement instanceof IPackageFragmentRoot) {
            processPackageFragmentRoot(names, entries, (IPackageFragmentRoot) selectedElement);
        } else if (selectedElement instanceof IPackageFragment) {
            processPackage(names, entries, (IPackageFragment) selectedElement);
        } else if (selectedElement instanceof IFile) {
            processFile(names, entries, (IFile) selectedElement);
        }
    }

    private void processProject(List<String> names, List<CeylonTestLaunchConfigEntry> entries, IProject project) {
        if (isCeylonProject(project)) {
            names.add(project.getName());
            entries.add(CeylonTestLaunchConfigEntry.build(project, PROJECT, null));
        }
    }
    
    private void processPackageFragmentRoot(List<String> names, List<CeylonTestLaunchConfigEntry> entries, IPackageFragmentRoot packageFragmentRoot) {
        try {
            IProject project = packageFragmentRoot.getJavaProject().getProject();
            if (isCeylonProject(project)) {
                names.add(packageFragmentRoot.getElementName());
                IJavaElement[] children = packageFragmentRoot.getChildren();
                for (IJavaElement child : children) {
                    if (child instanceof IPackageFragment) {
                        IPackageFragment packageFragment = (IPackageFragment) child;
                        Module module = getModule(project, packageFragment.getElementName());
                        if (CeylonTestUtil.containsCeylonTestImport(module) && CeylonTestUtil.checkNativeBackend(module, configTypeId)) {
                            entries.add(CeylonTestLaunchConfigEntry.build(project, MODULE, packageFragment.getElementName()));
                        }
                    }
                }
            }
        } catch (JavaModelException e) {
            throw new RuntimeException(e);
        }
    }

    private void processPackage(List<String> names, List<CeylonTestLaunchConfigEntry> entries, IPackageFragment packageFragment) {
        IProject project = packageFragment.getJavaProject().getProject();
        if (isCeylonProject(project)) {
            names.add(packageFragment.getElementName());
            Module module = getModule(project, packageFragment.getElementName());
            if (module != null) {
                entries.add(CeylonTestLaunchConfigEntry.build(project, MODULE, packageFragment.getElementName()));
            } else {
                entries.add(CeylonTestLaunchConfigEntry.build(project, PACKAGE, packageFragment.getElementName()));
            }
        }
    }

    private void processFile(List<String> names, List<CeylonTestLaunchConfigEntry> entries, IFile file) {
        if (!isCeylonFile(file)) {
            return;
        }

        IProject project = file.getProject();
        TypeChecker typeChecker = CeylonBuilder.getProjectTypeChecker(project);
        if (project == null || typeChecker == null) {
            return;
        }

        String fileName = file.getName().substring(0, file.getName().length() - file.getFileExtension().length() - 1);
        names.add(fileName);

        CeylonProject<IProject, IResource, IFolder, IFile> ceylonProject = modelJ2C().ceylonModel().getProject(project);

        PhasedUnit phasedUnit = typeChecker.getPhasedUnits().getPhasedUnit(vfsJ2C().createVirtualFile(file, ceylonProject.getIdeArtifact()));
        if (phasedUnit != null) {
            List<Declaration> declarations = phasedUnit.getDeclarations();
            for (Declaration d : declarations) {
                if (d.isNative()) {
                    if (Objects.equals(configTypeId, LAUNCH_CONFIG_TYPE) && !d.getNativeBackends().supports(Backend.Java.asSet())) {
                        continue;
                    }
                    if (Objects.equals(configTypeId, LAUNCH_CONFIG_TYPE_JS) && !d.getNativeBackends().supports(Backend.JavaScript.asSet())) {
                        continue;
                    }
                }
                if (d.isToplevel()) {
                    if (d instanceof Class) {
                        Class clazz = (Class) d;
                        if (isTestable(clazz)) {
                            entries.add(CeylonTestLaunchConfigEntry.build(project, clazz.isShared() ? CLASS : CLASS_LOCAL,
                                    clazz.getQualifiedNameString()));
                        }
                    }
                    else if (d instanceof Function) {
                        Function method = (Function) d;
                        if (isTestable(method)) {
                            entries.add(CeylonTestLaunchConfigEntry.build(project, method.isShared() ? METHOD : METHOD_LOCAL,
                                    method.getQualifiedNameString()));
                        }
                    }
                }
            }
        }
    }

    private void processCeylonEditorSelection(List<String> names, List<CeylonTestLaunchConfigEntry> entries, CeylonEditor ce) {
        CeylonParseController cpc = ce.getParseController();
        if (cpc == null) {
            return;
        }

        IProject project = cpc.getProject();
        ISelection selection = ce.getSelectionProvider().getSelection();
        Tree.CompilationUnit cu = cpc.getLastCompilationUnit();
        if (project == null || selection == null || !(selection instanceof ITextSelection) || cu == null) {
            return;
        }

        Node node = Nodes.findNode(cu, cpc.getTokens(), (ITextSelection) selection);
        FindContainerVisitor fcv = new FindContainerVisitor(node);
        fcv.visit(cu);
        node = fcv.getDeclaration();

        if (node instanceof Tree.AnyMethod) {
            Function method = ((Tree.AnyMethod) node).getDeclarationModel();
            if ((method.getContainer() instanceof Class && isTestable(new MethodWithContainer((Class)method.getContainer(), method))) || (method.getContainer() instanceof Package && isTestable(method)) ) {
                if (method.isMember()) {
                    names.add(((Declaration) method.getContainer()).getName() + "." + method.getName());
                } else {
                    names.add(method.getName());
                }
                entries.add(CeylonTestLaunchConfigEntry.build(project, method.isShared() ? METHOD : METHOD_LOCAL,
                        method.getQualifiedNameString()));
            }
        }
        if (node instanceof Tree.AnyClass) {
            Class clazz = ((Tree.AnyClass) node).getDeclarationModel();
            if (isTestable(clazz)) {
                names.add(clazz.getName());
                entries.add(CeylonTestLaunchConfigEntry.build(project, clazz.isShared() ? CLASS : CLASS_LOCAL,
                        clazz.getQualifiedNameString()));
            }
        }
        if( node instanceof Tree.ObjectDefinition ) {
            Class clazz = ((Tree.ObjectDefinition) node).getAnonymousClass();
            if (isTestable(clazz)) {
                names.add(clazz.getName());
                entries.add(CeylonTestLaunchConfigEntry.build(project, clazz.isShared() ? CLASS : CLASS_LOCAL,
                        clazz.getQualifiedNameString()));
            }
        }
    }

    private static ILaunchConfiguration createLaunchConfig(String name, List<CeylonTestLaunchConfigEntry> entries,
            ILaunchConfigurationType configType) throws CoreException {
        ILaunchConfigurationWorkingCopy configWorkingCopy = configType.newInstance(null, getLaunchManager()
                .generateLaunchConfigurationName(name));
        configWorkingCopy.setAttribute(ATTR_PROJECT_NAME, entries.get(0).getProjectName());
        configWorkingCopy.setAttribute(LAUNCH_CONFIG_ENTRIES_KEY, CeylonTestLaunchConfigEntry.buildLaunchConfigAttributes(entries));
        return configWorkingCopy.doSave();
    }

    private static ILaunchConfiguration findExistingLaunchConfig(ILaunchConfigurationType configType,
            List<CeylonTestLaunchConfigEntry> entries) throws CoreException {
        List<String> attributes = CeylonTestLaunchConfigEntry.buildLaunchConfigAttributes(entries);

        List<ILaunchConfiguration> candidateConfigs = new ArrayList<ILaunchConfiguration>();
        for (ILaunchConfiguration candidateConfig : getLaunchManager().getLaunchConfigurations(configType)) {
            List<String> candidateAttributes = candidateConfig.getAttribute(LAUNCH_CONFIG_ENTRIES_KEY, new ArrayList<String>());
            if (candidateAttributes.equals(attributes)) {
                candidateConfigs.add(candidateConfig);
            }
        }

        if (candidateConfigs.size() == 0) {
            return null;
        } else if (candidateConfigs.size() == 1) {
            return candidateConfigs.get(0);
        } else {
            return chooseExistingLaunchConfig(candidateConfigs);
        }
    }

    private static ILaunchConfiguration chooseExistingLaunchConfig(List<ILaunchConfiguration> configList) {
        ElementListSelectionDialog dialog = new ElementListSelectionDialog(getShell(), DebugUITools.newDebugModelPresentation());
        dialog.setTitle(CeylonTestMessages.launchSelectLaunchConfigTitle);
        dialog.setMessage(CeylonTestMessages.launchSelectLaunchConfigMessage);
        dialog.setElements(configList.toArray());
        dialog.setMultipleSelection(false);
        if (dialog.open() == Window.OK) {
            return (ILaunchConfiguration) dialog.getFirstResult();
        } else {
            return null;
        }
    }

    private static ILaunchManager getLaunchManager() {
        return DebugPlugin.getDefault().getLaunchManager();
    }

    private String getLaunchName(List<String> names) {
        StringBuilder nameBuilder = new StringBuilder();
        boolean first = true;
        for (String name : names) {
            if (first) {
                first = false;
            }
            else {
                nameBuilder.append(", ");
            }
            nameBuilder.append(name);
        }
        
        return nameBuilder.toString()+ 
                " \u2192 " + launchType();
    }

    String launchType() {
        return "Java";
    }

}
