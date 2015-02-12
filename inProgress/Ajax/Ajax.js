/**
 * @project : modula.js
 * @package : core
 * @internal : Ajax.Ajax
 * @type : constructor / function
 * @dependencies : none
 *
 * @description :
 * enter description here ...
 * 
 * @example :
 * 
 * @notice :
 * 
 */


		/**
		 * define the Ajax
		 */
		var
		Ajax = {
			
		};


		/**
		 * define setRequestOptions
		 */
		var
		setRequestOptions = function( modulaXHR , options ) {
			// loop the options
			for( var opt in options ) {
				// set options to modulaXHR if available
				if( modulaXHR[ options[ opt ].func ] ) {
					modulaXHR[ options[ opt ].func ]( options[ opt ].type , options[ opt ].value )
					continue;
				}
				modulaXHR[ options[ opt ].type ] = options[ opt ].value;
			}
		};


		/**
		 * define XHRsend
		 */
		var
		XHRsend = function(  ) {
			
		};


		/**
		 * define XHRopen
		 */
		var
		XHRopen = function( modulaXHR , XHRMethod , XHRUrl , XHRAsync , XHRUser , XHRPassword ) {
			// define some variables
			var
			method = XHRMethod || Defaults.method;
			useUrl = XHRUrlCheck( XHRUrl);
			useAsync = XHRAsync || Defaults.async;
			useUser = XHRUser || Defaults.user;
			usePassword = XHRPassword || Defaults.password;
			if( !useUrl ) {
				throw new Error( 'no valid url : '+XHRUrl );
			};
			// open request with parameters
			modulaXHR.open( method , useUrl , useAsync , useUser , usePassword );
		};


		/**
		 * define createRequest
		 */
		var
		createRequest = function( override ) {
			// if we have a regular XMLHttpRequest
			if ( window.XMLHttpRequest ) {
				var modulaXHR = new XMLHttpRequest();
				// if override is requested
				if ( override || modulaXHR.overrideMimeType ) {
					// we use it
					modulaXHR.overrideMimeType( override || Defaults.override );
				};
				// return the XHR
				return modulaXHR;
			}
			// so we try the microsoft requests
			if ( window.ActiveXObject ) {
				// need to try to prevent exceptions
				try {
					return new ActiveXObject( 'Msxml2.XMLHTTP' );
				} catch ( e ) {
					// need to try to prevent exceptions
					try {
						return new ActiveXObject( 'Microsoft.XMLHTTP' );
					} catch ( e ) {
					};
				};
			};
		};


