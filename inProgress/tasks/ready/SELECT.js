/**
 * @project : modula.js
 * @package : core
 * @internal : tasks.ready.SELECT
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
		 * add SELECT as available ReadyHandler
		 */
		ReadyHandler[ 'SELECT' ] = {


			/**
			 * define ready
			 */
			ready : function( task , type ) {
				// define ready object
				var ready = ReadyHandler[ type ];
				/**
				 * if we have a not ready task
				 */
				if( task && task.ReadyStates[ type ] === undefined ) {
					// add readyTrigger to task's Stack
					PushStack[ task.PushStack ].push( [ function(){ return task.ReadyStates[ type ]; } ] );
					// set ReadyStates for SELECT ready
					task.ReadyStates[ type ] = UseStates.progress;
					// bind SELECT to trigger;
					task.trigger[ type ] = true;
				};
			},


			/**
			 * completed
			 */
			completed : function( task ) {
				// define ready object
				var ready = ReadyHandler[ type ];
				// set state for SELECT as completed
				task.ReadyStates[ type ] = UseStates.complete;
				// execute task by setting timeout
				window.setTimeout( function() { tasks.resolve( task ); } ); 
			}


		};


