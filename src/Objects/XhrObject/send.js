/**
 * @project : modula.js
 * @package : 
 * @internal : XhrObject.send
 * @type : function
 * @dependencies :	Defaults.Defaults
 * 					XhrObject.XhrObject
 * 					objectToString.objectToString
 */


		/**
		 * define send method for XhrObject
		 */
		_(
			false ,
			[ 'Prototypes' , 'XhrObject' , 'send' ] ,
			function( XhrOptions ) {
				// define variables
				var XhrSendData = XhrOptions.sendData || _( [ 'Defaults' , 'XhrObject' , 'sendData' ] );
				// if we have an invalid XhrSendData
				if( XhrSendData !== null || !( toString( XhrSendData ) === '[object String]' ) ) {
					throw new Error( 'XhrObject:send() : sendData parameter must be null or a string' );
				};
				// define XhrMethod as given parameter, from the object or by defaults
				var XhrMethod = ( XhrOptions.method ||
					_( [ 'Defaults' , 'XhrObject' , 'method' ] ) ).toUpperCase();
				// if we have an invalid XhrSendData
				if( !_( [ 'RegularExpressions' , 'XhrObject' , 'methods' ] ).test( XhrMethod ) ) {
					throw new Error( 'XhrObject:send() : invalid method parameter' );
				};
				// define XhrCaching
				var XhrCaching = !( XhrOptions.cache === false || !( !XhrOptions.cache &&
					_( [ 'Defaults' , 'XhrObject' , 'cache' ] ) !== true ) );
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


