/**
 * @project : modula.js
 * @package : 
 * @internal : XhrObject.XhrObject
 * @type : object
 * @dependencies :	Defaults.Defaults
 * 					RegularExpressions.XhrObject.
 */


		/**
		 * define XhrObject as function
		 */
		var
		XhrObject = function( XhrOptions ) {
			// return new XhrObject
			return new XhrObject.fn.init( XhrOptions );
		};


		/**
		 * define XhrObject in Prototypes
		 */
		XhrObject.fn = _( true , [ 'Prototypes' , 'XhrObject' ] , ( XhrObject.prototype = {


//			/**
//			 * regex
//			 */
//			// get Defaults 'XhrObject' ( create if not existing)
//			regex : XhrObject._Regex || ( XhrObject._Regex = _( true , [ 'RegularExpressions' , 'XhrObject' ] ) ),


		} ) );


		/**
		 * define XhrObject in Constructors
		 */
		XhrObject.fn.init = _( true , [ 'Constructors' , 'XhrObject' ] , ( function() {


			/**
			 * define prototypes request method create
			 */
			if( !XhrObject.fn.create ) {
				// if we have a regular XMLHttpRequest
				if ( window.XMLHttpRequest ) {
					// define the XhrObject.fn.request
					XhrObject.fn.create = function( XhrOptions ) {
						// create new XMLHttpRequest and return it
						XhrRequest = ( this.request = new XMLHttpRequest() );
						// if override is requested
						if ( XhrOptions.override || XhrRequest.overrideMimeType ) {
							// we use it
							XhrRequest.overrideMimeType( XhrOptions.override || 
								_( true , [ 'Defaults' , 'XHRObject' ] ).override );
						};
						// return the XhrObject
						return this;
					};
				}
				// so we try the microsoft requests
				else if ( window.ActiveXObject ) {
					// need to try to prevent exceptions
					try {
						// try to create microsoft request
						var XhrRequest = new ActiveXObject( 'Msxml2.XMLHTTP' );
						// define the XhrRequest
						XhrObject.fn.create = function( XhrOptions ) {
							// create new microsoft request
							this.request = new ActiveXObject( 'Msxml2.XMLHTTP' );
							// return the XhrObject
							return this;
						};
					}
					catch ( e ) {
						// need to try to prevent exceptions
						try {
							// try to create microsoft request
							var XhrRequest = new ActiveXObject( 'Microsoft.XMLHTTP' );
							// define the XhrRequest
							XhrObject.fn.create = function( XhrOptions ) {
								// create new microsoft request
								this.request =  new ActiveXObject( 'Microsoft.XMLHTTP' );
								// return the XhrObject
								return this;
							};
						}
						catch ( e ) {
						};
					};
				}
				// so we have no ajax
				else {
					// define request method as alternative
					XhrObject.fn.create = function( XhrOptions ) {
						// set request to boolean false
						this.request = false;
						// return the XhrObject
						return this;
					};
				}
			};
	

			/**
			 * Constructor
			 */
			var
			Constructor = function( XhrOptions ) {
				// return XhrObject
				return this;
			};


			/**
			 * return Constructor
			 */
			return Constructor;


		} )() );


		/**
		 * bind init
		 */
		XhrObject.fn.init.prototype = XhrObject.fn;

