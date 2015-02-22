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
		// alternative line:29 'if( ( cache = Objects[ 'modula' ][ selector ] ) ) { return cache; };'
		// alternative line:32 '( Objects[ 'modula' ][ selector ] = new modula.fn.init( selector ) )'
		var
		modula = function( selector ) {
			// if we have the  selector  as Object we are done quickly
			if( ( cache = Defaults( [ 'Objects' , 'modula' , selector ] ) ) ) { return cache; };
			// return new modula
			return  selector ?
				Defaults( true , [ 'Objects' , 'modula' , selector ] , new modula.fn.init( selector ) )
				: new modula.fn.init( selector )
			;
		};


		/**
		 * define modula in Prototypes
		 */
		// alternative line:42 'modula.fn = ( Prototypes.modula = modula.prototype = {'
		modula.fn = Defaults( true , [ 'Prototypes' , 'modula' ] , ( modula.prototype = {


			/**
			 * set version
			 */
			version : version,


			/**
			 * method
			 */
			method : function() {
				// testmethod
				alert( 'modula' );
			},

				
		} ) );

		/**
		 * define modula in Constructors
		 */
		// alternative line:60 'modula.fn.init = ( Constructors.modula = ( function() {'
		modula.fn.init = Defaults( true , [ 'Constructors' , 'modula' ] , ( function() {


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
			 * prefill the modula functions
			 */
			var modulaDummy = Defaults( [ 'Prototypes' , 'modula' ] );
			for( var i = 0 , methods = 
				'css,html,ajax,whatever'.split( ',' ) ,
				l = methods.length ; i < l ; i++
			){
				// set tasks demand function to each entry
				modulaDummy[ methods[ i ] ] = ( function( text ) {
					return function() {
						alert( 'demand started for ' + text );
						return this;
					}
				} )( methods[ i ] );
				console.log( 'implementing : modula.'+methods[ i ] );
			}


			/**
			 * return url
			 */
			return Constructor;


		} )() );


		/**
		 * bind init
		 */
		modula.fn.init.prototype = modula.fn;

