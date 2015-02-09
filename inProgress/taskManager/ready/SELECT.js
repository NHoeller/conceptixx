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
		 * add SELECT as available ReadyHandler
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
					// add readyTrigger to task's Stack
					PushStack[ task.PushStack ].push( [ function(){ return task.ReadyStates[ 'SELECT' ]; } ] );
					// set ReadyStates for SELECT ready
					task.ReadyStates[ 'SELECT' ] = UseStates.progress;
//				};

				/**
				 * add eventHandler if needed
				 */
//				if( task && !task.trigger[ 'SELECT' ] ) {
					// set eventHandler
//					ready.addEvent( task );
//				};
//			};


			/**
			 * addEvent
			 */
//			addEvent : function( task ) {

				// define ready object
//				var ready = ReadyHandler[ 'SELECT' ];

				// check if we have already SELECT trigger on task
//				if( !task.trigger[ 'SELECT' ] ) {
					// bind SELECT to trigger;
					task.trigger[ 'SELECT'] = true;
				};
			},


			/**
			 * completed
			 */
			completed : function( task ) {

				// define ready object
				var ready = ReadyHandler[ 'SELECT' ];

				// set state for SELECT as completed
				task.ReadyStates[ 'SELECT' ] = UseStates.complete;

				// we are done here - run ready()
//				ready.ready( task );
			},


		};


