// Give the init function the Framework prototype for later instantiation
Framework.fn.init.prototype = Framework.fn;

// All Framework objects should point back to these
rootFramework = Framework(document);

// Expose Framework to the global object
window.Framework = window.$ = Framework;