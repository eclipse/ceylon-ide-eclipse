package com.redhat.ceylon.eclipse.java2ceylon;

import org.eclipse.jface.text.IDocument;
import org.eclipse.ltk.core.refactoring.Change;

import com.redhat.ceylon.ide.common.platform.CommonDocument;
import com.redhat.ceylon.ide.common.platform.PlatformServices;

public interface PlatformJ2C {
    PlatformServices platformServices();
    
    Change getNativeChange(Object cc);
}