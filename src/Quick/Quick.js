/**
 * @project : modula.js
 * @package : 
 * @internal : Quick.Quick
 * @type : object
 * @dependencies :	Defaults.Defaults
 */


		/**
		 * define Quick as function
		 */
		var
		Quick = function( QuickName ) {
			// return new Quick
			return new Quick.fn.init( QuickName );
		};


		/**
		 * define Quick in Prototypes
		 */
		Quick.fn = _( true , [ 'Prototypes' , 'Quick' ] , ( Quick.prototype = {


			/**
			 * define the regex
			 */
			regex : undefined,


			/**
			 * {method}
			 */
			add : function() {
			},

				
		} ) );

		/**
		 * define Quick in Constructors
		 */
		Quick.fn.init = _( true , [ 'Constructors' , 'Quick' ] , ( function() {


			/**
			 * Constructor
			 */
			var
			Constructor = function( QuickName ) {
				// return Quick
				return this;
			};


			/**
			 * return Constructor
			 */
			return Constructor;


		} )() );


		/**
		 * bind init
		 */
		Quick.fn.init.prototype = Quick.fn;

