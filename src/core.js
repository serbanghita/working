var
// A central reference to the root Framework(document)
rootFramework,

// Save a reference to some core methods
core_push = Array.prototype.push,
core_slice = Array.prototype.slice,
characterEncoding = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
selectorTypes = {
  "ID": new RegExp( "^#(" + characterEncoding + ")" ),
  "CLASS": new RegExp( "^\\.(" + characterEncoding + ")" ),
  "TAG": new RegExp( "^(" + characterEncoding.replace( "w", "w*" ) + ")" )
},

// Define a local copy of Framework
Framework = function( selector, context ) {
	// The Framework object is actually just the init constructor 'enhanced'
	return new Framework.fn.init( selector, context, rootFramework );
};    

Framework.fn = Framework.prototype = {
    
	constructor: Framework,
	selector: '',
	// The default length of a jQuery object is 0
	length: 0,
	// For internal use only.
	// Behaves like an Array's method, not like a Framework method.
	push: core_push,
	sort: [].sort,
	splice: [].splice,
	init: function( selector, context, rootFramework ) {

		var elem, match,
			// @info - It's good to cache the key in a for() statement http://jsperf.com/objdir
			selectorType, i;

		if ( !selector ) {
			return this;
		}

		// Handle $(DOMElement)
		if ( selector.nodeType ) {
			this.context = this[0] = selector;
			this.length = 1;
			return this;
		}



		// Check the selector type.
		for(selectorType in selectorTypes){

			// match[1]
			match = selectorTypes[selectorType].exec(selector);

			if(match){
				switch(selectorType){
					case 'ID':
						// Generally available selector: http://www.quirksmode.org/dom/w3c_core.html#t10
						elem = document.getElementById(match[1]);
						if(elem){
							this.length = 1;
							this[0] = elem;
						}
					break;
					case 'CLASS':
						try {
							// Not available on IE <= 8
							elem = document.getElementsByClassName(match[1]);
							if(elem){
								this.length = elem.length;
								for(i in elem){
									this[i] = elem[i];
								}
							}
						} catch(e){
							// Polyfill: https://gist.github.com/2299607
							console.log( 'The browser is not supporting getElementsByClassName() (probably <=IE7).' + e.message );
						}
					break;
					case 'TAG':
						// Generally available selector.
						elem = document.getElementsByTagName(match[1]);
						if(elem){
							this.length = elem.length;
							for(i in elem){
								this[i] = elem[i];
							}
						}

					break;
				}

				break;

			}

		}

		if(!elem && !match){
			throw 'The type of selector you are using is not implemented yet.';
		}


		this.context = document;
		this.selector = selector;
		return this;

	},

	attr: function(name, value){

		var ret;

		// All attributes are lowercase
		name = name.toLowerCase();

		// Return only the first element value.
		if(typeof value === 'undefined'){

			return this[0].getAttribute( name );

		} else {

			for(i=0;i<this.length;i++){
				this[i].setAttribute(name, value + '');
			}

			return this;

		}

	},

	bind: function(eventType, eventHandle){

		return this.bindEvent(this, eventType, eventHandle);

	},

	serializeObject: function(){

		return this.serializeObject(this);

	},

	ready: function(fn){

		return this.ready(fn);

	}



};