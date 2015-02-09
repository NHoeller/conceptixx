/**
 * @project : modula.js
 * @package : core
 * @internal : DEMAND
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
		 * add DEMAND as available ReadyHandler
		 */
		ReadyHandler[ 'DEMAND' ] = {


			/**
			 * define ready
			 * 
			 * @param [array] type
			 */
			ready : function( task , type , args ) {
console.log( task , type , args , last( PushStack[ task.PushStack ] ) );
				// define ready object
				var ready = ReadyHandler[ type ];
				/**
				 * check for DEMAND Stack in ready
				 */
				if( !ready[ ' '+args[ 0 ] ] ) {
					// set ready for args[ 0 ]
					ready[ ' '+args[ 0 ] ] = [];
				}
				/**
				 * if we have a not ready task
				 */
				if( task && task.ReadyStates[ type ] && !task.ReadyStates[ type ][ args[ 0 ] ] ) {
					// add task's PushStack to ready for completition
					ready[ ( ready.count = ready.count >>> 0 ) ] = task;
					// increase count for next turn
					ready.count++;

					// remove appended function if needed
					if( last( PushStack[ task.PushStack ] ) === args[ 1 ] ) { task.remove(); }

					// add readyTrigger to task's Stack
					PushStack[ task.PushStack ].push( [ function(){ return task.ReadyStates[ type ][ args[ 0 ] ]; } ] );
					// set ReadyStates for SELECT ready
					task.ReadyStates[ type ][ args[ 0 ] ] = UseStates.progress;
					// bind SELECT to trigger;
					task.trigger[ type ] = true;
					// add function to task (if set)
					if( args[ 1 ] ) { task.append( args[ 1 ] , args[ 2 ] ); }
				};				
			},


			/**
			 * define completed
			 */
			completed : function( task ,args ) {
				// check if we have args and args are set to 
				
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
				
			}


		};


