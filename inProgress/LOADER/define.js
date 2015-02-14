/**
 * @project : modula.js
 * @package : loader
 * @internal : loader.intro
 * @type : constructor
 * @dependencies : none
 *
 * @description :
 * the main part of the modula is a self extending loader object
 */


		/**
		 * pre init
		 */
		var
		XHRParameter = function() {
			// get the primary script tag of the modula
			var Script = document.getElementById( 'modula' );
			// define HashTag
			var HashTag
			// check if we have primary script and get HashTag
			if( Script && ( HashTag = Script.dataset[ 'demand' ] || Script.title || Script.className ) ) {
				// return ajax handle (must set all needed values because Defaults are 'essential'
				return {
					// set URL
					url : '/modulajs.php',
					// set method
					method : 'POST',
					// set async (Default setting : true)
					async : true,
					// set requestHeader
					requestHeader : {
						'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
					},
					// set cache (Default setting : true)
					cache : false,
					// set responseType to text
					responseType : 'text',
					// set sendData (Default setting : null)
					sendData : { hash : HashTag },
					// set user (Default : '')
					user : '',
					// set password (Default : '')
					password : '',
					// set override (Default : 'text/xml')
					override : 'text/xml',
					/*
					 * set urlParameter
					 *   1: scheme
					 *   2: user
					 *   4: password
					 *   8: host
					 *  16: port
					 *  32: path
					 *  64: query
					 * 128: anchor
					 */
					urlParameter : 1 + 8 + 16 + 32,
					// set urlUseOrigin
					urlUseOrigin : true,
				}
			};
		}();


		/* *************************************************************************** *
		 *                                                                             *
		 * the modula loader creates an ajax request for the modula essentials of THIS *
		 * page (may vary for other subpages) and adds them to the current (loader's)  *
		 * scope by using eval( 'JSObject' ).                                          *
		 * also the modula's extend MUST be placed in this scope.                      *
		 * all ajax calls and task handlers are placed in this scope.                  *
		 * there has to be a special 'addHandler' method to extend the loader's        *
		 * ajax and task functions                                                     *
		 *                                                                             *
		 * *************************************************************************** */


		/**
		 * define modulaURL
		 */
		var
		modulaURL = ( function() {

			
			var modulaURL = {


				/**
				 * define URLRegex
				 *       scheme-specific-part →                          →                           → |
				 *      |
				 * http://name:password@example.org:80/demo/example.php?key1=value1&key2=value2#anchor
				 * |      |    |        |           | |     |       |   |                      |
				 * |      |    |        host        | |     |       |   query                  fragment
				 * |      |    password             | path  |       extension
				 * |      user                      port    filename
				 * scheme
				 */
				regex : new RegExp(
					"^(?:([\\w.+-]+):\\/\\/)?" + // 1:scheme
					"(?:([^\\/\\?#]*):" + // 2:user
					"([^\\/?#]*)@)?" + // 3:password
					"((?:[^\\/\\.\\?#:]*\\.)*(?:[^\\/\\?#:]*))?" + // 4:host
					"(?::(\\d+))?" + // 5:port
					"((?:\\/[^\\/\\?#]+)*(?:\\/)?)?" + // 6:path
					"(?:\\?([^#]+))?" + // 7:query
					"(?:#(.*))?$" // 8:fragment
				),


				/**
				 * create
				 * returns an object/function
				 * 
				 * @example:
				 * URL = modulaURL.create( 'http://name:password@example.org:80/demo/example.php?key1=value1&key2=value2#anchor' )
				 * returns a function that puts the url to string. also all parts of the url can be reached by
				 * property. if no complete URL is ommited the essential missing parts will be taken from the
				 * window.location object.
				 * URL() returns the URL with same scheme / host / port as the window.location
				 * URL( true ) returns the url even if scheme, host and/or port are different to window.location
				 * URL.scheme returns http
				 * URL.port returns 80
				 */
				create : function( URLUrl , URLUseOrigin ) {
					// define variables
					var match = modulaURL.regex.exec( URLUrl );
					// create result function
					var URLObject = {
						print : function( URLParts ) {
							// create result
							var result = '';
							// add scheme
							result += ( URLParts &   1 && this.scheme ) ? this.scheme + '://' : '';
							// add user
							result += ( URLParts &   6 && this.user ) ? this.user + ':' : '';
							// add password
							result += ( URLParts &   6 && this.password ) ? this.password + '@' : '';
							// add host
							result += ( URLParts &   8 && this.host ) ? this.host : '';
							// add port
							result += ( URLParts &  16 && this.port ) ? ':' + this.port  : '';
							// add path
							result += ( URLParts &  32 && this.path ) ? this.path : '';
							// add query
							result += ( URLParts &  64 && this.query ) ? '?' + this.query : '';
							// add anchor
							result += ( URLParts & 128 && this.anchor ) ? '#' + this.anchor : '';
							// return result
							return result;
						},
						string : function() { return URLUrl; },
					};
					// if we have a 'valid' url
					if( match && ( match[ 4 ] || match[ 6 ] ) ) {
						// create result function
						var result = Object.create( URLObject );
						// add scheme if ommited
						if( match[ 1 ] || ( URLUseOrigin && modulaURL.origin.scheme ) ) {
							result.scheme = URLUseOrigin ? modulaURL.origin.scheme : match[ 1 ];
						};
						// add user and password if ommited
						if( match[ 2 ] || ( URLUseOrigin && modulaURL.origin.user ) ) {
							result.user = URLUseOrigin ? modulaURL.origin.user : match[ 2 ];
							result.password = URLUseOrigin ? modulaURL.origin.password : match[ 3 ];
						};
						// add host (must be ommited)
						if( match[ 4 ] || ( URLUseOrigin && modulaURL.origin.host ) ) {
							result.host = URLUseOrigin ? modulaURL.origin.host : match[ 4 ];
						};
						// add port if ommited
						if( match[ 5 ] || ( URLUseOrigin && modulaURL.origin.port ) ) {
							result.port = URLUseOrigin ? modulaURL.origin.port : match[ 5 ];
						};
						// add path (must be ommited)
						if( match[ 6 ] ) { result.path = match[ 6 ]; };
						// add query if ommited
						if( match[ 7 ] ) { result.query = match[ 7 ]; };
						// add anchor if ommited
						if( match[ 8 ] ) { result.anchor = match[ 8 ]; };
					};
console.log( 'URL.create' , match , result );
					// done here
					return result;
				},


			};
			// set modulaURL.origin
			modulaURL.origin = modulaURL.create( window.location.href , false )
			// return modulaURL
			return modulaURL;
		} )();


		/**
		 * define modulaXHR (ajax handler, extendable)
		 * this handler is chainable
		 * 
		 * @example:
		 * XHR.request().open().header().send();
		 */
		var
		modulaXHR = {

				
			/**
			 * define inject (ONLY INTERNAL)
			 * this method will be overwritten by essentials
			 */
			inject : function( XHRResponse ) {
				// define variables
				var
				indirect = eval;
				// execute XHRResponse
				indirect( XHRResponse );
			},


			/**
			 * request
			 */
			request : function( XHRParameter ) {
				// check for quick request
				if( modulaXHR.request.quickRequest ) {
					// we are done here
					return modulaXHR.request.quickRequest( XHRParameter );
				};
				// if we have a regular XMLHttpRequest
				if ( window.XMLHttpRequest ) {
					// define the XHRRequest.quickRequest
					modulaXHR.request.quickRequest = function( XHRParameter ) {
						// define variables
						var XHRObject = Object.create( modulaXHR.executable );
						// set parameter
						XHRObject.parameter = XHRParameter;
						// create new XMLHttpRequest
						XHRObject.request = new XMLHttpRequest();
						// if override is requested
						if ( XHRObject.parameter.override || XHRObject.request.overrideMimeType ) {
							// we use it
							XHRObject.request.overrideMimeType( XHRObject.parameter.override || Defaults.XHR.override );
						};
						// return the XHR
						return XHRObject;
					};
					// we are done here
					return modulaXHR.request.quickRequest( XHRParameter );
				};
				// so we try the microsoft requests
				if ( window.ActiveXObject ) {
					// need to try to prevent exceptions
					try {
						// try to create microsoft request
						XHRObject.request = new ActiveXObject( 'Msxml2.XMLHTTP' );
						// define the XHRRequest.quickRequest
						modulaXHR.request.quickRequest = function( XHRParameter ) {
							// define variables
							var XHRObject = Object.create( modulaXHR.executable );
							// return new microsoft request
							XHRObject.request = new ActiveXObject( 'Msxml2.XMLHTTP' );
							// return the XHR
							return XHRObject;
						};
						// we are done
						return XHRObject;
					}
					catch ( e ) {
						// need to try to prevent exceptions
						try {
							// try to create microsoft request
							XHRObject.request = new ActiveXObject( 'Microsoft.XMLHTTP' );
							// define the XHRRequest.quickRequest
							modulaXHR.request.quickRequest = function( XHRParameter ) {
								// define variables
								var XHRObject = Object.create( modulaXHR.executable );
								// return new microsoft request
								XHRObject.request = new ActiveXObject( 'Microsoft.XMLHTTP' );
								// return the XHR
								return XHRObject;
							};
							// we are done
							return XHRObject;
						}
						catch ( e ) {
						};
					};
				};					
			},


			executable : {
				/**
				 * cache
				 */
				cache : function( XHRCache ) {
					// define variables
					var
					XHRCache = XHRCache || this.parameter.cache || Defaults.XHR.cache;
					// check for caching
					if( !XHRCache ) {
						// set no caching header
						this.request.setRequestHeader( 'Cache-Control' , 'no-cache' );
					};
					// we are done
					return this;
				},


				/**
				 * define header
				 */
				header : function( XHRRequestHeader ) {
					// define variables
					var
					XHRRequestHeader = XHRRequestHeader || this.parameter.requestHeader || Defaults.XHR.requestHeader;
					// loop the headers 
					for( var XHRHeader in XHRRequestHeader ) {
						// set header to request
						this.request.setRequestHeader( XHRHeader , XHRRequestHeader[ XHRHeader ] );
					};
					// return request
					return this;
				},


				/**
				 * define open
				 */
				open : function( XHRMethod , XHRUrl , XHRAsync , XHRUser , XHRPassword ) {
					// define some variables
					var
					XHRMethod = XHRMethod || this.parameter.method || Defaults.XHR.method;
					XHRUrl = modulaURL.create(
						XHRUrl || this.parameter.url ,
						this.parameter.urlUseOrigin || Defaults.XHR.urlUseOrigin
					).print(
						this.parameter.urlParameter || Defaults.XHR.urlParameter
					);
					XHRAsync = XHRAsync || this.parameter.async || Defaults.XHR.async;
					XHRUser = XHRUser || this.parameter.user !== undefined ? this.parameter.user : Defaults.XHR.user;
					XHRPassword = XHRPassword || this.parameter.password !== undefined ? this.parameter.password : Defaults.XHR.password;
					if( !XHRUrl ) {
						throw new Error( 'no valid url : ' + XHRUrl.string() );
					};
					// open request with parameters
					this.request.open( XHRMethod , XHRUrl , XHRAsync , XHRUser , XHRPassword );
					// return the request
					return this;
				},


				/**
				 * define send
				 */
				send : function( XHRSendData ) {
					// define variables
					var XHRSendData = XHRSendData || this.parameter.sendData || Defaults.XHR.sendData;
					// send request with parameter
					this.request.send( XHRSendData );
					// we are done
					return this;
				},


			},


		};


		/*
		 * create ajax request for essentials
		 */
		var XHRModula = modulaXHR.request( XHRParameter ).open().header().send( XHRParameter );
		

