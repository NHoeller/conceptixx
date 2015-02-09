/**
 * @project : modula.js
 * @package : core
 * @internal : tasks.ready.DOM
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
		 * add DOM as available ReadyHandler
		 */
		ReadyHandler[ 'DOM' ] = {


			/**
			 * define ready
			 */
			ready : function( task , type ) {

				// define ready object
				var ready = ReadyHandler[ 'DOM' ];

				/**
				 * if we have a not ready task
				 */
				if( task && task.ReadyStates[ 'DOM' ] === undefined ) {
console.log( "ready.add" );
					// add task's PushStack to ready for completition
					ready[ ( ready.count = ready.count >>> 0 ) ] = task;
					// add readyTrigger to task's Stack
					PushStack[ task.PushStack ].push( [ function(){ return task.ReadyStates[ 'DOM' ]; } ] );
					// set ReadyStates for DOM ready
					task.ReadyStates[ 'DOM' ] = UseStates.progress;
					// increase count for next turn
					ready.count++;
				};

				/**
				 * check if we have already completed this ready check
				 */
				if( document.readyState === UseStates.complete && ready.count >>> 0 > 0 ) {
console.log( "ready.solve" );
					// define some variables
					var i = 0 , task;
					// loop the counts
					while( ready[ i ] !== undefined ) {
						// get task from ready[ i ]
						task = ready[ i ];
						// set readyState as complete for this task
						task.ReadyStates[ 'DOM' ] = UseStates.complete; 
						// execute task
						tasks.resolve( task ); 
						// delete ready[ i ] in fact of execution and increase counter
						delete ready[ i++ ];
					};
					// reset ready.count
					ready.count = 0;
					// we are done sucessfully
					return true;
				};

				/**
				 * add eventHandler if needed
				 */
				if( ready.state === UseStates.undefine ) {
					// set eventHandler
					ready.addEvent();
				};

				/**
				 * if we have completed the ready event
				 */
				if( ready.state === UseStates.complete ) {
					// use a timeout to handle this
					window.setTimeout( ready.ready );
				}

				/**
				 * return false when ready check has not been completed
				 */
				return false;
			},


			/**
			 * set DOMContentLoaded.state to undefine (not used yet)
			 */
			state : UseStates.undefine,


			/**
			 * addEvent
			 */
			addEvent : function() {
				// define ready object
				var ready = ReadyHandler[ 'DOM' ]
				// add eventHandler aswell as Fallback
				document.addEventListener( 'DOMContentLoaded' , ready.completed , false );
				window.addEventListener( 'load' , ready.completed , false );
				// set ready.state as progress
				ready.state = UseStates.progress;
			},


			/**
			 * completed
			 */
			completed : function() {
				// define ready object
				var ready = ReadyHandler[ 'DOM' ]
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
			},


		};


