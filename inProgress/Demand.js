/**
 * @project : modula.js
 * @package : init
 * @internal : Demand
 * @type : constructor / function
 * @dependencies : none
 *
 * @description :
 * Demand is the initializing constructor for the modula so we have only a minimum to load
 * with the (only) first script tag
 *
 * @example
 * <[ script type='text/javascript' src='Demand.js' data-demand='{filled_with_individual_demand_hashs}' ]><[ /script ]>
 */
 
 
	/**
	 * run anonymous function(s)
	 */
	( function( context , undefined ) {


		/**
		 * define instances for Demand to work with
		 */
		var
		instances = {


			/**
			 * define Support
			 */
			Support : function() {
				
			}


		};


		/**
		 * define Demand
		 */
		var
		Demand = ( function( context , undefined ) {
			/**
			 * define Demand
			 */
			var
			Demand = {
				/**
				 * setFunction
				 */
				setFunction : function( modula , functions ) {
					// loop all function names
					for( var i = 0 , l = functions.length ; i < l ; i++ ) {
						// add placeholder function
						modula[ functions[ i ] ] = function() {
							// until placeholder is replaced use tasks
							this.task.append( functions[ i ] , arguments );
							// return object for chaining
							return this;
						};
					};
				}
			};
			/**
			 * return Demand
			 */
			return Demand;
		} )( context );


		/**
		 * define a modula
		 */
		var
		modula = function() {
			// placeholder (get loading file)
			// build and return object
			var newObject = Object.create( Modula );
			newObject.task = tasks.ready( 'demand' , loadFile ).append( 'modula' , arguments ); 
		};


		/**
		 * set modula to context
		 */
		context.modula = modula;


		/**
		 * prefill a Modula
		 */
		var
		Modula = {};
		Demand.setFunction(
			Modula , 
			'funcA,funcB,funcC'.split( ',' )
		);


	} )( window );


