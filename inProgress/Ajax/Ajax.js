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
// todo			
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
		 * define XHREvents
		 */
		var
		XHREvents = function( modulaXHR , XHREventData ) {
			// loop the XHREventData by its properties
			for( var event in XHREventData ) {
				// check if a Handler function is ommited
				if( isFunction( XHREventData[ event ] ) ) {
// todo
				}
				// so we use the default handler
				else {
// todo
				}
			}
		};


		/**
		 * define XHRsend
		 */
		var
		XHRsend = function( XHRRequest , XHRSendData ) {
			// simple done here
			XHRRequest.send( XHRSendData || Defaults.sendData );
		};


		/**
		 * define XHRComplete
		 */
		var XHRcomplete = function() {};


		/**
		 * define XHRComplete
		 */
		var XHRcomplete = function() {};


		/**
		 * define XHRComplete
		 */
		var XHRcomplete = function() {};


		/**
		 * define XHRProgress
		 */
		var XHRProgress = ( function() {
			// create new XHRRequest
			var newXHRRequest = XHRRequest();
			//check if XHRRequest supports onprogress
			if( newXHRRequest.onprogress ) {
				// check if onprogress returns a function
				try {
					// check for addEventListener
					if( newXHRRequest.addEventListener ) {
						// try to add event
						newXHRRequest.addEventListener( 'progress' , '' , false );
					}
					// use addEvent
					else {
						// try to add event
						newXHRRequest.addEvent( 'onprogress' , '' );
					};
					// now check for function
					if( typeof newXHRRequest.onpgrogress === 'function' ) {
						// delete request
						newXHRRequest = null;
						// we are done
						return {


							/**
							 * 
							 */
							loadstart : function() {},


							/**
							 * 
							 */
							progress : function() {},


							/**
							 * 
							 */
							abort : function() {},


							/**
							 * 
							 */
							error : function() {},


							/**
							 * 
							 */
							load : function() {},


							/**
							 * 
							 */
							timeout : function() {},


							/**
							 * 
							 */
							loadend : function() {},								


						};
					};
				}
				catch( e ) {
					// no support
					return false;
				};
			};		
		} );


		/**
		 * define XHRopen
		 */
		var
		XHRopen = function( XHRRequest , XHRMethod , XHRUrl , XHRAsync , XHRUser , XHRPassword ) {
			// define some variables
			XHRMethod = XHRMethod || Defaults.method;
			XHRuseUrl = XHRUrlCheck( XHRUrl);
			XHRAsync = XHRAsync || Defaults.async;
			XHRUser = XHRUser || Defaults.user;
			XHRPassword = XHRPassword || Defaults.password;
			if( !XHRuseUrl ) {
				throw new Error( 'no valid url : '+XHRUrl );
			};
			// open request with parameters
			XHRRequest.open( XHRMethod , XHRUrl , XHRAsync , XHRUser , XHRPassword );
		};


		/**
		 * define XHRRequest
		 */
		var
		XHRRequest = function( XHROverride ) {
			// check for quick request
			if( XHRRequest.quickRequest ) {
				// we are done here
				return XHRRequest.quickRequest( XHROverride );
			};
			// define variables
			var JSRequest;
			// if we have a regular XMLHttpRequest
			if ( window.XMLHttpRequest ) {
				// define the XHRRequest.quickRequest
				XHRRequest.quickRequest = function( XHROverride ) {
					// create new XMLHttpRequest
					var JSRequest = new XMLHttpRequest();
					// if override is requested
					if ( XHROverride || JSRequest.overrideMimeType ) {
						// we use it
						JSRequest.overrideMimeType( XHROverride || Defaults.override );
					};
					// return the XHR
					return JSRequest;
				};
				// we are done here
				return XHRRequest.quickRequest( XHROverride );
			};
			// so we try the microsoft requests
			if ( window.ActiveXObject ) {
				// need to try to prevent exceptions
				try {
					// try to create microsoft request
					JSRequest = new ActiveXObject( 'Msxml2.XMLHTTP' );
					// define the XHRRequest.quickRequest
					XHRRequest.quickRequest = function( XHROverride ) {
						// return new microsoft request
						return new ActiveXObject( 'Msxml2.XMLHTTP' );
					};
					// we are done
					return JSRequest;
				}
				catch ( e ) {
					// need to try to prevent exceptions
					try {
						// try to create microsoft request
						JSRequest = new ActiveXObject( 'Microsoft.XMLHTTP' );
						// define the XHRRequest.quickRequest
						XHRRequest.quickRequest = function( XHROverride ) {
							// return new microsoft request
							return new ActiveXObject( 'Microsoft.XMLHTTP' );
						};
						// we are done
						return JSRequest;
					}
					catch ( e ) {
					};
				};
			};
		};


