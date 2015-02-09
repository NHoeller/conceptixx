/**
* @project : modula.js
* @package : core
* @internal : tasks.ready.SELECT
* @type : function
* @dependencies :
*
* @description :
* ready is used to trigger the following 'ready' statements
* - DOM
* - DEMAND
* - AJAX
* - CUSTOM
* - SELECT
*
* the DOM is always implemented, the other ready statements
* should be implemented by the 'conceptixx - modula.php'
*/


		/**
		 * add DOMContentLoaded as available ReadyHandler
		 */
		ReadyHandler[ 'SELECT' ] = {


			/**
			 * define ready
			 */
			ready : function( task , type ) {

				// define ready object
				var ready = ReadyHandler[ 'SELECT' ];

				/**
				 * if we have a not ready task
				 */
				if( task && task.ReadyStates[ 'SELECT' ] === undefined ) {
console.log( "ready.add" );
				};

				/**
				 * check if we have already completed this ready check
				 */
				if( ready.state === UseStates.complete && ready.count >>> 0 > 0 ) {
console.log( "ready.solve" );
				};
			};


			/**
			 * set SELECT.state to undefine (not used yet)
			 */
			state : UseStates.undefine,


			/**
			 * addEvent
			 */
			addEvent : function() {

			},


			/**
			 * completed
			 */
			completed : function() {

			},


		};


