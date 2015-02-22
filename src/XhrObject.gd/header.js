/**
 * @project : modula.js
 * @package : 
 * @internal : XhrObject.header
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
		 * define header function
		 */
		// alternative 1 line:26-29 'Prototypes.XhrObject.header = function( XhrOptions ) {'
		// alternative 1 line:33 'Defaults.XHRObject.requestHeader;'
		// alternative 1 line:41-42 '};'
		Defaults(
			false ,
			[ 'Prototypes' , 'XhrObject' , 'header' ],
			function( XhrOptions ) {
				// define variables
				var
				XhrRequestHeader = XhrOptions.requestHeader || 
					Defaults( [ 'Defaults' , 'XHRObject' , 'requestHeader' ] );
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


