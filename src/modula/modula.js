/**
 * @project : modula.js
 * @package : 
 * @internal : modula.modula
 * @type : object
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 * 					Defaults.Constructors._define
 * 					Defaults.Constructors.modula._define
 * 					Defaults.Objects._define
 * 					Defaults.Objects.modula._define
 * 					Defaults.Prototypes._define
 * 					Defaults.Prototypes.modula._define
 * 					Objects._define
 * 					Prototypes._define
 *
 * @description :
 */


		/**
		 * define modula as function
		 */
		// alternative replace 'Objects[ 'modula' ]' by 'Defaults( 'Objects' )( 'modula' )' 
		var
		modula = function( selector ) {
			// if we have the  selector  as Object we are done quickly
			if( Objects[ 'modula' ][ selector ] ) { return Objects[ 'modula' ][ selector ]; };
			// return new URLObject
			return  selector 
				? ( Objects[ 'modula' ][ selector ] = new modula.fn.init( selector ) )
				: new modula.fn.init( selector )
			;
		};


		/**
		 * define modula in Prototypes
		 */
		// alternative 'modula.fn = Defaults( 'Prototypes' )( 'modula' , { ...} );'
		modula.fn = ( Prototypes.modula = modula.prototype = {


			/**
			 * method
			 */
			method : function() {
				// testmethod
				alert( 'modula' );
			},

				
		} );

		/**
		 * define modula in Constructors
		 */
		// alternative 'modula.fn.init = Defaults( 'Constructors' )( 'modula' , ( function() { ...} )() );'
		modula.fn.init = ( Constructors.modula = ( function() {


			/**
			 * Constructor
			 * 
			 * @param [string] URLString
			 */
			var
			Constructor = function( selector ) {
				// return modula
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
		modula.fn.init.prototype = modula.fn;

