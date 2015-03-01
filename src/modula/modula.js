/**
 * @project : modula.js
 * @package : 
 * @internal : modula.modula
 * @type : object
 * @dependencies :	Defaults.Defaults
 */


		/**
		 * define modula as function
		 */
		var
		modula = function( selector ) {
			// if we have the  selector  as Object we are done quickly
			if( ( cache = _( [ 'Objects' , 'modula' , selector ] ) ) ) { return cache; };
			// return new modula
			return  selector ?
				_( true , [ 'Objects' , 'modula' , selector ] , new modula.fn.init( selector ) )
				: new modula.fn.init( selector )
			;
		};


		/**
		 * define modula in Prototypes
		 */
		modula.fn = _( true , [ 'Prototypes' , 'modula' ] , ( modula.prototype = {


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
		modula.fn.init = _( true , [ 'Constructors' , 'modula' ] , ( function() {


			/**
			 * Constructor
			 * 
			 * @param [string] URLString
			 */
			var
			Constructor = function( selector ) {
				// bind new task
//				this.task = new TaskObject( this );
				// return modula
				return this;
			};

			/**
			 * prefill the modula functions
			 */
			var modulaDummy = _( [ 'Prototypes' , 'modula' ] );
			for( var i = 0 , methods = 
				'css,html,ajax,whatever'.split( ',' ) ,
				l = methods.length ; i < l ; i++
			){
				// set tasks demand function to each entry
				modulaDummy[ methods[ i ] ] = ( function( text ) {
					return function( args ) {
						alert( 'demand started for \'' + text + '\' with args : ' + args );
						return this;
					}
				} )( methods[ i ] );
				console.log( 'implementing : modula.'+methods[ i ] );
			}


			/**
			 * return Constructor
			 */
			return Constructor;


		} )() );


		/**
		 * bind init
		 */
		modula.fn.init.prototype = modula.fn;

