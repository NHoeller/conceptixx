/**
 * @project : modula.js
 * @package : 
 * @internal : XhrObject.send
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
 * 					Defaults.RegularExpressions._define
 * 					Regex._define
 * 					Objects._define
 * 					Prototypes._define
 * 					XhrObject.XhrObject
 * 					objectToString.objectToString
 */


		/**
		 *
		 */
		// alternative 1 line:34-37 'Prototypes.XhrObject.send = function( XhrOptions ) {'
		// alternative 1 line:39 'var XhrSendData = XhrOptions.sendData || Defaults.XhrObject.sendData;'
		// alternative 1 line:45-46 'var XhrMethod = ( XhrOptions.method || Defaults.XhrObject.method ).toUpperCase();'
		// alternative 1 line:48 'if( !Regex.XhrObject.methods.test( XhrMethod ) ) {'
		// alternative 1 line:52 'var XhrCaching = !( XhrOptions.cache === false || !( !XhrOptions.cache &&'
		// alternative 1 line:53 'Defaults.XhrObject.cache !== true ) );'
		// alternative 1 line:72-73 '};'
		Defaults(
			false ,
			[ 'Prototypes' , 'XhrObject' , 'send' ] ,
			function( XhrOptions ) {
				// define variables
				var XhrSendData = XhrOptions.sendData || Defaults( [ 'Defaults' , 'XhrObject' , 'sendData' ] );
				// if we have an invalid XhrSendData
				if( XhrSendData !== null || !( toString( XhrSendData ) === '[object String]' ) ) {
					throw new Error( 'XhrObject:send() : sendData parameter must be null or a string' );
				};
				// define XhrMethod as given parameter, from the object or by defaults
				var XhrMethod = ( XhrOptions.method ||
					Defaults( [ 'Defaults' , 'XhrObject' , 'method' ] ) ).toUpperCase();
				// if we have an invalid XhrSendData
				if( !Defaults( [ 'RegularExpressions' , 'XhrObject' , 'methods' ] ).test( XhrMethod ) ) {
					throw new Error( 'XhrObject:send() : invalid method parameter' );
				};
				// define XhrCaching
				var XhrCaching = !( XhrOptions.cache === false || !( !XhrOptions.cache &&
					Defaults( [ 'Defaults' , 'XhrObject' , 'cache' ] ) !== true ) );
				// check for caching
				if( XhrMethod === 'POST' && XhrCaching ) {
					// define XhrSendData as url extension
					var XhrSendData = objectToString( XhrSendData || '' );
					// extend XHRExtendUrl by url added query
					XhrSendData += !XhrOptions.query ? '' : ( XhrSendData !== '' ? '&' : '' ) +
						XhrOptions.query.substring( 1 );
					// also extend by caching
					XhrSendData += ( XhrSendData !== '' ? '&' : '' ) + 'caching=' + Date.now();
				};
				// check request
				if( !this.request ) {
					throw new Error( 'XhrObject.send() : no valid request opened' );
				}
				// send request with parameter
				this.request.send( XhrMethod === 'POST' ? XhrSendData : null );
				// we are done
				return this;
			}
		);


