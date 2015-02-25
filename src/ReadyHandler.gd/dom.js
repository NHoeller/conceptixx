/**
 * @project : modula.js
 * @package : 
 * @internal : ReadyHandler.dom
 * @type : function
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 */


		/**
		 * add DOM as available ReadyHandler
		 */
		// alternative
		// alternative
		Defaults(
			true ,
			[ 'Objects' , 'ReadyHandler' , 'DOM' ] ,
			{


				/**
				 * define ready
				 */
				ready : function( task /* , type , args */ ) {
					// define type as 'DOM'
					var type = 'DOM';
					// define ready object
					var ready = Defaults( [ 'Objects' , 'ReadyHandler' , 'DOM' ] );
					// define PushStack as local
					var PushStack = ( PushStack = Defaults( [ 'Objects' , 'TaskObject' , 'PushStack' ] ) );
					// define the UseStates
					var UseStates = Defaults( [ 'Defaults' , 'ReadyHandler' , 'UseStates' ] );
					/**
					 * if we have a not ready task
					 */
					if( task && task.ReadyStates[ type ] === undefined ) {
						// add task's PushStack to ready for completition
						ready[ ( ready.count = ready.count >>> 0 ) ] = task;
						// add readyTrigger to task's Stack
						push( PushStack[ task.PushStack ] , [ function(){ return task.ReadyStates[ type ]; } ] );
						// set ReadyStates for DOM ready
						task.ReadyStates[ type ] = UseStates.progress;
						// increase count for next turn
						ready.count++;
					};
					/**
					 * check if we have already completed this ready check
					 */
					if( document.readyState === UseStates.complete && ready.count >>> 0 > 0 ) {
						// define some variables
						var i = 0 , task;
						// loop the counts
						while( ready[ i ] !== undefined ) {
							// get task from ready[ i ]
							task = ready[ i ];
							// set readyState as complete for this task
							task.ReadyStates[ type ] = UseStates.complete; 
							// execute task by setting timeout
							window.setTimeout( function() { task.resolve(); } ); 
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
				state : Defaults( [ 'Defaults' , 'ReadyHandler' , 'UseStates' ] ).undefine,


				/**
				 * addEvent
				 */
				addEvent : function( /* task , type , args */ ) {
					// define ready object
					var ready = Defaults( [ 'Objects' , 'ReadyHandler' , 'DOM' ] );
					// define the UseStates
					var UseStates = Defaults( [ 'Defaults' , 'ReadyHandler' , 'UseStates' ] );
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
					var ready = Defaults( [ 'Objects' , 'ReadyHandler' , 'DOM' ] );
					// define the UseStates
					var UseStates = Defaults( [ 'Defaults' , 'ReadyHandler' , 'UseStates' ] );
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


			}
		);


