/**
 * @project : modula.js
 * @package : 
 * @internal : XhrObject.open
 * @type : function
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 * 					Defaults.Defaults._define
 * 					Defaults.Defaults.XhrObject._define
 * 					Defaults.Defaults.XhrObject.Defaults
 * 					Defaults.Constructors._define
 * 					Defaults.Constructors.XhrObject._define
 * 					Defaults.Prototypes._define
 * 					Defaults.Prototypes.XhrObject._define
 * 					Prototypes._define
 * 					XhrObject.XhrObject
 */


				/**
				 * define open to open a XMLHttpRequest. 
				 */
				// alternative 1 line:26-29 'Prototypes.XhrObject.header = function( XhrOptions ) {'
				// alternative 1 line:33 'Defaults.Defaults.XhrObject.method ).toUpperCase(),'
				// alternative 1 line:33 'Defaults.Defaults.XhrObject.async !== true ) ),'
				// alternative 1 line:33 'Defaults.Defaults.XhrObject.user,'
				// alternative 1 line:33 'Defaults.Defaults.XhrObject.password,'
				// alternative 1 line:33 'Defaults.Defaults.XhrObject.cache !== true ) );'
				// alternative 1 line:33 'Defaults.Defaults.XhrObject.timeout >>> 0 > 0'
				// alternative 1 line:33 'Defaults.Defaults.XhrObject.responseType'
				// alternative 1 line:33 'Defaults.Defaults.XhrObject.withCredentials'
				// alternative 1 line:33 'Defaults.Defaults.XhrObject.sendData ) || '' );'
				// alternative 1 line:41-42 '};'
				Defaults(
					false ,
					[ 'Prototypes' , 'XhrObject' , 'open' ],
					function( XhrOptions ) {
						// define some variables
						var
						// define XhrMethod
						XhrMethod = ( XhrOptions.method ||
							Defaults( [ 'Defaults' , 'XhrObject' , 'method' ] ) ).toUpperCase(),
						// define XhrUrl
						XhrUrl = new URLObject( XhrOptions.url ).getSafe(),
						// define XhrAsync
						XhrAsync = !( XhrOptions.async === false || !( !XhrOptions.async &&
							Defaults( [ 'Defaults' , 'XhrObject' , 'async' ] ) !== true ) ),
						// define XhrUser
						XhrUser = XhrOptions.user !== undefined ? XhrOptions.user : 
							Defaults( [ 'Defaults' , 'XhrObject' , 'user' ] ),
						// define XhrPassword
						XhrPassword = XhrOptions.password !== undefined ? XhrOptions.password :
							Defaults( [ 'Defaults' , 'XhrObject' , 'password' ] ),
						// define XhrCaching
						XhrCaching = !( XhrOptions.cache === false || !( !XhrOptions.cache === undefined &&
							Defaults( [ 'Defaults' , 'XhrObject' , 'cache' ] ) ) );
						// if XhrMethod is no valid request method
						if( !RegularExpressions.XhrObject.method.test( XhrMethod ) ) {
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
								Defaults( [ 'Defaults' , 'XhrObject' , 'timeout' ] ) >>> 0 > 0
							) {
								throw new Error( 'XhrObject:open() : on timeout > 0 async is required to be true' );
							};
							// check for responseType
							if( XhrOptions.responseType || 
								Defaults( [ 'Defaults' , 'XhrObject' , 'responseType' ] )
							) {
								throw new Error( 'XhrObject:open() : on responseType != "" async is required to be true' );
							};
							// check for withCredentials
							if( XhrOptions.withCredentials ||
								Defaults( [ 'Defaults' , 'XhrObject' , 'withCredentials' ] )
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
							Defaults( [ 'Defaults' , 'XhrObject' , 'sendData' ] ) ) || '' );
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


