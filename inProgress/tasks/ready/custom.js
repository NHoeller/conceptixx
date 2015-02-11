/**
 * @project : modula.js
 * @package : core
 * @internal : tasks.ready.custom
 * @type : function
 * @dependencies : 
 *
 * @description :
 * ready is used to trigger the following 'ready' statements
 * - AJAX
 * - CUSTOM
 * - DEMAND
 * - DOM
 * - SELECT
 * 
 * the DOM is always implemented, the other ready statements
 * should be implemented by the 'conceptixx - modula.php'  
 */


		/**
		 * add CUSTOM as available ReadyHandler
		 */
		ReadyHandler[ 'CUSTOM' ] = {


			/**
			 * define ready
			 */
			ready : function( task , type , args ) {
				// define ready object
				var ready = ReadyHandler[ type ];
				/**
				 * if we have a not ready task
				 */
			}

		};


