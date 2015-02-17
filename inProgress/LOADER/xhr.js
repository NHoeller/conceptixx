/**
 * @project : modula.js
 * @package : loader
 * @internal : loader.xhr
 * @type : XHRObject
 * @dependencies : none
 *
 * @description :
 * the main part of the modula is a self extending loader object
 */


		/**
		 * define XHRObject in Defaults
		 */
		Defaults.XHRObject = {};


		/**
		 * create Objects instance for URLOjects (as array)
		 */
		Objects.XHRObject = [];


		/**
		 * define regular expression in Prototypes
		 */
		RegularExpressions.XHRObject = {
			method : new RegExp( "^(CONNECT|DELETE|GET|HEAD|OPTIONS|POST|PUT|TRACE|TRACK)$" ),
		};


		/**
		 * define XHRObject in Prototypes
		 */
		Prototypes.XHRObject = ( function() {


			/**
			 * return XHRObject
			 */
			return {


				/**
				 * define header
				 */
				header : function() {
					// define variables
					var
					XHRRequestHeader = this().requestHeader || Defaults.XHRObject.requestHeader;
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
				 * opens the XMLHttpRequest. 
				 */
				open : function() {
					// define some variables
					var
					// define XHRMethod
					XHRMethod = ( this().method || Defaults.XHRObject.method ).toUpperCase();
					// define XHRUrl
					XHRUrl = new URLObject(
						this().url
					).getSelected(
						( this().urlParameter || Defaults.XHRObject.urlParameter ) & 31 ,
						this().urlUseInputs || Defaults.XHRObject.urlUseInputs
					);
					// define XHRAsync
					XHRAsync = !( this().async === false || !( this().async === undefined && Defaults.XHRObject.async !== true ) );
					// define XHRUser
					XHRUser = this().user !== undefined ? this().user : Defaults.XHRObject.user;
					// define XHRPassword
					XHRPassword = this().password !== undefined ? this().password : Defaults.XHRObject.password;
					// define XHRCaching
					var XHRCaching = !( this().cache === false || !( this().cache === undefined && Defaults.XHRObject.cache !== true ) );

					/**
					 * if XHRMethod is no valid request method
					 */
					if( !RegularExpressions.XHRObject.method.test( XHRMethod ) ) {
						throw new Error( 'XHRObject:open() : no valid method : ' + XHRMethod )
					}

					/**
					 * if XHRUrl is no valid modula URL throw an error
					 */
					if( !XHRUrl ) {
						throw new Error( 'XHRObject:open() : no valid url : ' + XHRUrl.getOrigin() );
					};

					/**
					 * check if we have a 'false' on async paramter
					 */
					if( !XHRAsync ) {
						// check for timeout
						if( this().timeout >>> 0 > 0 || Defaults.XHRObject.timeout >>> 0 > 0 ) {
							throw new Error( 'XHRObject:open() : on timeout > 0 async is required to be true' );
						};
						// check for responseType
						if( this().responseType || Defaults.XHRObject.responseType ) {
							throw new Error( 'XHRObject:open() : on responseType != "" async is required to be true' );
						};
						// check for withCredentials
						if( this().withCredentials || Defaults.XHRObject.withCredentials ) {
							throw new Error( 'XHRObject:open() : on timeout > 0 async is required to be true' );
						};
						console.log( 'Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user\'s experience. For more help, check http://xhr.spec.whatwg.org/.' );
					};

					/**
					 * check for user and password
					 */
					if( ( !XHRUser && XHRPassword) || ( XHRUser && !XHRPassword ) ) {
						throw new Error( 'XHRObject:open() : it\'s not allowed to pass only user or only password' );
					};

					// define XHRExtendUrl
					var XHRExtendUrl = parseSendData( this().sendData || ( this().sendData !== false && Default.XHRObject.sendData ) || '' );
					// extend XHRExtendUrl by url added query
					XHRExtendUrl += !this().query ? '' : ( XHRExtendUrl !== '' ? '&' : '' ) + this().query.substring( 1 );
					// check for caching
					if( XHRMethod === 'GET' && XHRCaching ) {
						// also extend by caching
						XHRExtendUrl += ( XHRExtendUrl !== '' ? '&' : '' ) + 'caching=' + Date.now();
						// create new XHRUrl
						XHRUrl = XHRUrl + '?' + XHRExtendUrl;
					};
					// open request with parameters
					this.request.open( XHRMethod , XHRUrl , XHRAsync , XHRUser , XHRPassword );
					// return the request
					return this;
				},


				/**
				 * define send
				 * sends the XMLHttpRequest. the XHRSendData can be omitted
				 */
				send : function() {
					// define variables
					var XHRSendData = this().sendData || Defaults.XHRObject.sendData;
					// define XHRMethod as given parameter, from the object or by defaults
					var XHRMethod = ( this().method || Defaults.XHRObject.method ).toUpperCase();
					// if we have an invalid XHRSendData
					if( XHRSendData !== null || !( Object.prototype.toString.call( XHRSendData ) === '[object String]' ) ) {
						throw new Error( 'XHRObject:send() : parameter must be null or a string' );
					};
					// define XHRCaching
					var XHRCaching = !( this().cache === false || !( this().cache === undefined && Defaults.XHRObject.cache !== true ) );
					// check for caching
					if( XHRMethod === 'POST' && XHRCaching ) {
						// define XHRExtendUrl
						var XHRSendData = parseSendData( this().sendData || ( this().sendData !== false && Default.XHRObject.sendData ) || '' );
						// extend XHRExtendUrl by url added query
						XHRSendData += !this().query ? '' : ( XHRSendData !== '' ? '&' : '' ) + this().query.substring( 1 );
						// also extend by caching
						XHRSendData += ( XHRSendData !== '' ? '&' : '' ) + 'caching=' + Date.now();
					};
					// send request with parameter
					this.request.send( XHRMethod === 'POST' ? parseSendData( XHRSendData ) : null );
					// we are done
					return this;
				},


				/**
				 * define resolve
				 * resolve easily takes XHRParameter and fullfills the complete ajax request.
				 * alternatively you can trigger all methods as single tasks
				 */
				resolve : function( XHRParamter ) {
					// open request
					this.request.open();
					// check for headers and caching
					this.request.send();
					
				},


			};


		} )();


		/**
		 * define XHR (ajax handler, extendable)
		 * this handler is chainable
		 * 
		 * @example:
		 * XHR.request( XHRParameter ).open().header().send();
		 */
		var
		XHRObject = ( Constructors.XHRObject = ( function() {


			/**
			 * define create
			 * creates a new XMLHttpRequest with the given XHRParameter object
			 * 
			 * @param [object] XHRParameter
			 */
			XHRObject = function( XHRParameter ) {
				// create new XHRObject
				var newXHRObject = ( Objects.XHRObject[ Objects.XHRObject.length ] = function() {
					return XHRParameter;
				} );
				// check for quick request
				if( XHRRequest ) {
					// we are done here
					newXHRObject.request = XHRRequest( XHRParameter );
				};
				// lets fill the newXHRObject with some methods
				for( var transfer in Prototypes.XHRObject ) {
					// check for own properties
					if( Prototypes.XHRObject.hasOwnProperty( transfer ) ) {
						// add to URLObject
						newXHRObject[ transfer ] = Prototypes.XHRObject[ transfer ];
					};
				};
				// done here
				return newXHRObject;
			};


			/**
			 * define XHRRequest
			 */
			var XHRRequest = ( function() {
				// if we have a regular XMLHttpRequest
				if ( window.XMLHttpRequest ) {
					// define the XHRRequest
					return function( XHRParameter ) {
						// create new XMLHttpRequest and return it
						XHRRequest = new XMLHttpRequest();
						// if override is requested
						if ( XHRParameter.override || XHRRequest.overrideMimeType ) {
							// we use it
							XHRRequest.overrideMimeType( XHRParameter.override || Defaults.XHRObject.override );
						};
						// return the XHR
						return XHRRequest;
					};
				};
				// so we try the microsoft requests
				if ( window.ActiveXObject ) {
					// need to try to prevent exceptions
					try {
						// try to create microsoft request
						var XHRRequest = new ActiveXObject( 'Msxml2.XMLHTTP' );
						// define the XHRRequest
						return = function( XHRParameter ) {
							// return new microsoft request
							return new ActiveXObject( 'Msxml2.XMLHTTP' );
						};
					}
					catch ( e ) {
						// need to try to prevent exceptions
						try {
							// try to create microsoft request
							var XHRRequest = new ActiveXObject( 'Microsoft.XMLHTTP' );
							// define the XHRRequest
							return function( XHRParameter ) {
								// return new microsoft request
								return new ActiveXObject( 'Microsoft.XMLHTTP' );
							};
						}
						catch ( e ) {
						};
					};
				};
				// so we have no ajax
				return null;
			} )();


			/**
			 * return the XHRObject
			 */
			return XHRObject;


		} )() );
		

