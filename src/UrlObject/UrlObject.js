/**
 * @project : modula.js
 * @package : 
 * @internal : UrlObject.UrlObject
 * @type : object
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 * 					Defaults.Constructors._define
 * 					Defaults.Constructors.UrlObject._define
 * 					Defaults.Objects._define
 * 					Defaults.Objects.UrlObject._define
 * 					Defaults.Prototypes._define
 * 					Defaults.Prototypes.UrlObject._define
 * 					Defaults.RegularExpressions._define
 * 					Regex._define
 * 					Objects._define
 * 					Prototypes._define
 *
 * @description :
 * the main part of the modula is a self extending loader object
 */


		/**
		 * define UrlObject as function
		 * this function returns a modula UrlObject. its nearly the same as URL (ECMA-7)
		 */
		// alternative replace 'Objects[ 'UrlObject' ]' by 'Defaults( 'Objects' )( 'UrlObject' )' 
		var
		UrlObject = function( URLString , URLCache ) {
			// if we have the URLString as Object we are done quickly
			if( Objects[ 'UrlObject' ][ URLString ] ) { return Objects[ 'UrlObject' ][ URLString ]; };
			// return new URLObject
			return URLCache
				? ( Objects[ 'UrlObject' ][ URLString ] = new UrlObject.fn.init( URLString ) )
				: new UrlObject.fn.init( URLString )
			;
		};


		/**
		 * define UrlObject in Prototypes
		 */
		// alternative 'UrlObject.fn = Defaults( 'Prototypes' )( 'UrlObject' , { ...} );'
		UrlObject.fn = ( Prototypes.UrlObject = UrlObject.prototype = {


			/**
			 * getSafe
			 */
			getSafe : function() {
				// return combined Safe URL
				return ( this.safemode || this.origin ) + this.pathname + this.search + this.hash;
			},

				
		} );

		/**
		 * define UrlObject in Constructors
		 */
		// alternative 'UrlObject.fn.init = Defaults( 'Constructors' )( 'UrlObject' , ( function() { ...} )() );'
		UrlObject.fn.init = ( Constructors.UrlObject = ( function() {


			/**
			 * regex
			 */
			var
			// alternative 'regex = Defaults( 'RegularExpressions' )( 'UrlObject' );'
			regex = Regex[ 'UrlObject' ];


			/**
			 * Constructor
			 * 
			 * @param [string] URLString
			 */
			var
			Constructor = function( URLString ) {
				// match URLString with regex
				var match = regex.url.exec( URLString );
				// if we have no valid url with host and/or path
				if( !match || ( !match[ 6 ] && !match[ 9 ] ) ) {
					// throw an Error
					throw new Error ( 'UrlObject() needs a valid URL as parameter' );
				};
				// set scheme
				this.protocol = match[ 1 ] || '';
				// set user and password
				this.username = match[ 3 ] || '';
				this.password = match[ 5 ] || '';
				// set host
				this.hostname = match[ 6 ] || '';
				// set port
				this.port = match[ 8 ] || '';
				// set path
				this.pathname = match[ 9 ] || '';
				// set query
				this.search = match[ 10 ] || '';
				// set hash
				this.hash = match[ 11 ] || '';

				// set host
				this.host = this.hostname + ( match[ 7 ] || this.port );
				// set href
				this.href = this.protocol + ( match[ 2 ] || this.username ) + ( match[ 2 ] || this.password ) + 
					this.hostname + ( match[ 7 ] || this.port ) + this.pathname + this.search + this.hash;
				// set origin
				this.origin = this.protocol + this.host;

				// check for cross-over
				if( URLString !== window.location.href ) {
					// get window.location.href as UrlObject
					var Origin = UrlObject( window.location.href , true );
					// check if we have a match on the origins
					if( Origin.origin !== this.origin ) {
						// create URL for origin URL
						this.safemode = Origin.origin;
					};
				};
				// return UrlObject
				return this;
			};


			/**
			 * return url
			 */
			return Constructor;


		} )() );


		/**
		 * bind init
		 */
		UrlObject.fn.init.prototype = UrlObject.fn;

