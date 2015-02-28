/**
 * @project : modula.js
 * @package : 
 * @internal : XhrObject.open
 * @type : function
 * @dependencies :	Defaults.Defaults
 * 					XhrObject.XhrObject
 */


				/**
				 * define open to open a XMLHttpRequest. 
				 */
				_(
					false ,
					[ 'Prototypes' , 'XhrObject' , 'open' ],
					function( XhrOptions ) {
						// define some variables
						var
						// define XhrMethod
						XhrMethod = ( XhrOptions.method ||
							_( [ 'Defaults' , 'XhrObject' , 'method' ] ) ).toUpperCase(),
						// define XhrUrl
						XhrUrl = new URLObject( XhrOptions.url ).getSafe(),
						// define XhrAsync
						XhrAsync = !( XhrOptions.async === false || !( !XhrOptions.async &&
							_( [ 'Defaults' , 'XhrObject' , 'async' ] ) !== true ) ),
						// define XhrUser
						XhrUser = XhrOptions.user !== undefined ? XhrOptions.user : 
							_( [ 'Defaults' , 'XhrObject' , 'user' ] ),
						// define XhrPassword
						XhrPassword = XhrOptions.password !== undefined ? XhrOptions.password :
							_( [ 'Defaults' , 'XhrObject' , 'password' ] ),
						// define XhrCaching
						XhrCaching = !( XhrOptions.cache === false || !( !XhrOptions.cache === undefined &&
							_( [ 'Defaults' , 'XhrObject' , 'cache' ] ) ) );
						// if XhrMethod is no valid request method
						if( !_( [ 'RegularExpressions' , 'XhrObject' , 'methods' ] ).test( XhrMethod ) ) {
							throw new Error( 'XhrObject:open() : no valid method : ' + XhrMethod )
						}
						// if XhrUrl is no valid modula URL throw an error
						if( !XhrUrl ) {
							throw new Error( 'XhrObject:open() : no valid url : ' + XhrUrl.getOrigin() );
						};
						// check if we have a 'false' on async paramter
						if( !XhrAsync ) {
							// check for timeout
							if( XhrOptions.timeout >>> 0 > 0 || 
								_( [ 'Defaults' , 'XhrObject' , 'timeout' ] ) >>> 0 > 0
							) {
								throw new Error( 'XhrObject:open() : on timeout > 0 async is required to be true' );
							};
							// check for responseType
							if( XhrOptions.responseType || 
								_( [ 'Defaults' , 'XhrObject' , 'responseType' ] )
							) {
								throw new Error( 'XhrObject:open() : on responseType != "" async is required to be true' );
							};
							// check for withCredentials
							if( XhrOptions.withCredentials ||
								_( [ 'Defaults' , 'XhrObject' , 'withCredentials' ] )
							) {
								throw new Error( 'XhrObject:open() : on timeout > 0 async is required to be true' );
							};
							console.log( 'Synchronous XMLHttpRequest on the main thread is deprecated because of its ' +
								'detrimental effects to the end user\'s experience. For more help, check ' + 
								'http://xhr.spec.whatwg.org/.'
							);
						};
						// check for user and password
						if( ( !XhrUser && XhrPassword) || ( XhrUser && !XhrPassword ) ) {
							throw new Error( 'XhrObject:open() : it\'s not allowed to pass only user or only password' );
						};
						// define XhrExtendUrl
						var XhrExtendUrl = parseSendData( XhrOptions.sendData || ( XhrOptions.sendData !== false &&
							_( [ 'Defaults' , 'XhrObject' , 'sendData' ] ) ) || '' );
						// extend XhrExtendUrl by url added query
						XhrExtendUrl += !XhrOptions.query ? '' : ( XhrExtendUrl !== '' ? '&' : '' ) + XhrOptions.query.substring( 1 );
						// check for caching
						if( XhrMethod === 'GET' && XhrCaching ) {
							// also extend by caching
							XhrExtendUrl += ( XhrExtendUrl !== '' ? '&' : '' ) + 'caching=' + Date.now();
							// create new XhrUrl
							XhrUrl = XhrUrl + '?' + XhrExtendUrl;
						};
						// open request with parameters
						this.request.open( XhrMethod , XhrUrl , XhrAsync , XhrUser , XhrPassword );
						// return the request
						return this;
					}
				);


