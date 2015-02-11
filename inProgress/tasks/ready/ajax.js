/**
 * @project : modula.js
 * @package : core
 * @internal : tasks.ready.ajax
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
		 * add AJAX as available ReadyHandler
		 */
		ReadyHandler[ 'AJAX' ] = {


			/**
			 * define requests
			 */
			requests : {},


			/**
			 * define ready
			 */
			ready : function( task , type , args ) {
				// define ready object
				var ready = ReadyHandler[ type ];
				/**
				 * if we have a not ready task
				 */
			},


			/**
			 * set DOMContentLoaded.state to undefine (not used yet)
			 */
			state : UseStates.undefine,


			/**
			 * addEvent
			 */
			addEvent : function( task , type , args ) {
				// define ready object
				var ready = ReadyHandler[ 'AJAX' ]
				// add eventHandler aswell as Fallback
				document.addEventListener( 'DOMContentLoaded' , ready.completed , false );
				window.addEventListener( 'load' , ready.completed , false );
				// set ready.state as progress
				ready.state = UseStates.progress;
			},


			/**
			 * completed
			 */
			completed : function( /* task , type , args */ ) {
				// define ready object
				var ready = ReadyHandler[ 'AJAX' ]
				// check if we have set eventHandler
				if( ready.state === UseStates.progress ) {
					// remove eventHandler
					document.removeEventListener( 'DOMContentLoaded' , ready.completed , false );
					window.removeEventListener( 'load' , ready.completed , false );
					// set ready.state as complete
					ready.state = UseStates.complete;
					// re-run the ready fuction
					ready.ready();
				};
			}


		};


