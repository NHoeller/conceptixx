/**
 * @project : modula.js
 * @package : core
 * @internal : demand.demand
 * @type : constructor / function
 * @dependencies : tasks.ready.demand , modula.core , functions.propertizer
 *
 * @description :
 * demand is the on-demand-creator-tool of the modula. it creates and manages demand
 * calls and their handling. also dependencies of the single demands will be managed.
 * essentials that are similar from one demand to another will be handled. 
 * 
 * @example :
 * 
 * @notice :
 * demand will ONLY BE USED by the modula itself, it is not accessable from outside
 */


		/**
		 * define demand
		 */
		var
		demand = ( function() {


			/**
			 * define Handler
			 */
			var
			Handler = {};


			/**
			 * define demand function
			 */
			var
			demand = function( module , dependencies , functions ) {
				// create onDemand handler for module
				Handler[ ' '+module ] = Object.create( demander );
				// append modula by placeholder functions 
				for( var property in functions ) {
					// create dummy function in Handler
					Handler[ ' '+module ][ property ]

/*
 * USE PROPERTIZER TO LOCALIZE FUNCTIONS TARGET
 */					
					
					// set function if NOT existing in 'modula' to Handler
					Propertizer[ property ] = enhanced[ property ] || functions[ property ];
				};
				
				
			};


			/**
			 * define demander
			 */
			var
			demander = {
					
			};


			/**
			 * return demand
			 */
			return demand;


		} );


