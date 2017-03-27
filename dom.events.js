// @todo: Study events better.
Framework.prototype.ready = function(fn){

	if ( document.addEventListener ){
		// Use the handy event callback
		// document.addEventListener( "DOMContentLoaded", fn, false );

		// A fallback to window.onload, that will always work
		window.addEventListener( "load", fn, false );

	// If IE event model is used
	} else {

		// Ensure firing before onload, maybe late but safe also for iframes
		// document.attachEvent( "onreadystatechange", fn );

		// A fallback to window.onload, that will always work
		window.attachEvent( "onload", fn );

	}

}    
    
// Basic bind event method.
//
// @ref:	https://github.com/jquery/jquery/blob/master/src/event.js
//
// @usage:	var elem = document.getElementByClassName('someButton');
//			f.bind(elem, 'click', function(){ this.style.border = '1px solid red'; });
//			f.bind('click', function(){ this.style.border = '1px solid red'; });

Framework.prototype.bindEvent = function(elem, eventType, eventHandle){

	// There can be more than one element.
	for(i=0; i<elem.length; i++){

		// Bind the global event handler to the element
		if ( elem[i].addEventListener ) {
			elem[i].addEventListener( eventType, eventHandle, false );
		} else if ( elem[i].attachEvent ) {
			elem[i].attachEvent( "on" + eventType, eventHandle );
		}

	}

	return elem;

}
