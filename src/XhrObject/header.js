/**
 * @project : modula.js
 * @package : 
 * @internal : XhrObject.header
 * @type : function
 * @dependencies :	Defaults.Defaults
 * 					XhrObject.XhrObject
 */


		/**
		 * define header function
		 */
		_(
			false ,
			[ 'Prototypes' , 'XhrObject' , 'header' ],
			function( XhrOptions ) {
				// define variables
				var
				XhrRequestHeader = XhrOptions.requestHeader || 
					_( [ 'Defaults' , 'XHRObject' , 'requestHeader' ] );
				// check request
				if( !this.request ) {
					throw new Error( 'XhrObject.header() : no valid request opened' );
				}
				// loop the headers 
				for( var XhrHeader in XhrRequestHeader ) {
					// set header to request
					this.request.setRequestHeader( XhrHeader , XhrRequestHeader[ XhrHeader ] );
				};
				// return request
				return this;
			}
		);


