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
		_(
			true ,
			[ 'Objects' , 'ReadyHandler' , 'DOM' ] ,
			{


				/**
				 * define ready
				 */
				ready : function( TaskObject , ReadyOptions ) {
					// define type as 'DOM'
					var type = ReadyOptions.type || 'DOM';
					// define ready object
					var ready = _( [ 'Objects' , 'ReadyHandler' , 'DOM' ] );
					// define PushStack as local
					var PushStack = ( PushStack = _( [ 'Objects' , 'TaskObject' , 'PushStack' ] ) );
					// define the UseStates
					var UseStates = _( [ 'Defaults' , 'ReadyHandler' , 'UseStates' ] );
					/**
					 * if we have a not ready task
					 */
					if( TaskObject && PushStack[ TaskObject.PushStack ].ReadyStates[ type ] === undefined ) {
						// add TaskObject's PushStack to ready for completition
						ready[ ( ready.count = ready.count >>> 0 ) ] = TaskObject;
						// add readyTrigger to TaskObject's Stack
						push( PushStack[ TaskObject.PushStack ] , [ function(){ return PushStack[ TaskObject.PushStack ].ReadyStates[ type ]; } ] );
						// set ReadyStates for DOM ready
						PushStack[ TaskObject.PushStack ].ReadyStates[ type ] = UseStates.progress;
						// increase count for next turn
						ready.count++;
					};
					/**
					 * check if we have already completed this ready check
					 */
					if( document.readyState === UseStates.complete && ready.count >>> 0 > 0 ) {
						// define some variables
						var i = 0 , TaskObject;
						// loop the counts
						while( ready[ i ] !== undefined ) {
							// get TaskObject from ready[ i ]
							TaskObject = ready[ i ];
							// set readyState as complete for this TaskObject
							PushStack[ TaskObject.PushStack ].ReadyStates[ type ] = UseStates.complete; 
							// execute TaskObject by setting timeout
							window.setTimeout( function() { TaskObject.resolve(); } ); 
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
				state : _( [ 'Defaults' , 'ReadyHandler' , 'UseStates' ] ).undefine,


				/**
				 * addEvent
				 */
				addEvent : function( /* TaskObject , ReadyOptions */ ) {
					// define ready object
					var ready = _( [ 'Objects' , 'ReadyHandler' , 'DOM' ] );
					// define the UseStates
					var UseStates = _( [ 'Defaults' , 'ReadyHandler' , 'UseStates' ] );
					// add eventHandler aswell as Fallback
					document.addEventListener( 'DOMContentLoaded' , ready.completed , false );
					window.addEventListener( 'load' , ready.completed , false );
					// set ready.state as progress
					ready.state = UseStates.progress;
				},


				/**
				 * completed
				 */
				completed : function( /* TaskObject , ReadyOptions */ ) {
					// define ready object
					var ready = _( [ 'Objects' , 'ReadyHandler' , 'DOM' ] );
					// define the UseStates
					var UseStates = _( [ 'Defaults' , 'ReadyHandler' , 'UseStates' ] );
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


