/**
 * @project : modula.js
 * @package : 
 * @internal : ReadyHandler.wait
 * @type : function
 * @dependencies :	Defaults.Defaults
 */


		/**
		 * add WAIT as available ReadyHandler
		 */
		_(
			true ,
			[ 'Objects' , 'ReadyHandler' , 'WAIT' ] ,
			{


				/**
				 * define ready
				 */
				ready : function( task , type , args ) {
					// check for args
					if( args && !isString( args ) ) {
						throw new Error( 'ready( \'WAIT\' , argument ) requires a String as argument' );
					};
					// define type as 'WAIT'
					var type = 'WAIT';
					// define ready object
					var ready = _( [ 'Objects' , 'ReadyHandler' , 'WAIT' ] );
					// define PushStack as local
					var PushStack = ( PushStack = _( [ 'Objects' , 'TaskObject' , 'PushStack' ] ) );
					// define the UseStates
					var UseStates = _( [ 'Defaults' , 'ReadyHandler' , 'UseStates' ] );
					// define task's ReadyStates if needed
					PushStack[ task.PushStack ].ReadyStates[ type ] = PushStack[ task.PushStack ].ReadyStates[ type ] || { length : 0 };
					// define readyId for this WAIT
					var readyId = PushStack[ task.PushStack ].ReadyStates[ type ].length;
					// add readyTrigger to task's Stack
					push( PushStack[ task.PushStack ] ,
						[ function(){ 
							return PushStack[ task.PushStack ].ReadyStates[ type ][ readyId ]; } , args || readyId , type ] );
					// check if we have args
					if( args ) {
						// we have to add an identifier for args in PushStack
						PushStack[ task.PushStack ][ ' ' + args ] = [ readyId , PushStack[ task.PushStack ].length - 1 ];
					}
					// set ReadyStates for WAIT ready
					push( PushStack[ task.PushStack ].ReadyStates[ type ] , UseStates.progress );
					// define trigger[ type ] if needed
					task.trigger[ type ] = task.trigger[ type ] || {};
					// bind WAIT to trigger;
					task.trigger[ type ][ /* args || */ readyId ] = /* args || */ true;
				},


				/**
				 * resolve
				 */
				resolve : function( task , type , args ) {
					// check for args
					if( args && !isString( args ) ) {
						throw new Error( 'trigger( \'WAIT\' , argument ) requires a String as argument' );
					};
					// define ready object
					var ready = _( [ 'Objects' , 'ReadyHandler' , 'WAIT' ] );
					// define PushStack as local
					var PushStack = ( PushStack = _( [ 'Objects' , 'TaskObject' , 'PushStack' ] ) );
					// define the UseStates
					var UseStates = _( [ 'Defaults' , 'ReadyHandler' , 'UseStates' ] );
					try {
						// check if we have a task to trigger
						if( !PushStack[ task.PushStack ].ReadyStates[ type ] || !PushStack[ task.PushStack ].ReadyStates[ type ].length ) {
							throw new Error( 'trigger( \'WAIT\' [ , argument ] ) no WAIT found in task' );
						}
						// check for args in PushStack
						if( args && PushStack[ task.PushStack ][ ' ' + args ] ) {
							// define args' values
							var values = PushStack[ task.PushStack ][ ' ' + args ];
							// set state for WAIT as completed
							PushStack[ task.PushStack ].ReadyStates[ type ][ values[ 0 ] ] = UseStates.complete;
							// delete value from PushStack
							delete PushStack[ task.PushStack ][ ' ' + args ];
						}
						// if we have no args but WAITs
						else if( !args && PushStack[ task.PushStack ].ReadyStates[ type ].length > 0 ) {
							// use args as counter
							args = 0;
							// loop the PushStack to find next unvalued WAIT
							while( PushStack[ task.PushStack ][ args ] && (
								PushStack[ task.PushStack ].ReadyStates[ type ][ PushStack[ task.PushStack ][ args ][ 1 ] ] === 'complete' ||
								PushStack[ task.PushStack ][ args ][ 2 ] !== 'WAIT' ||
								isString( PushStack[ task.PushStack ][ args ][ 1 ] ) ) 
							) {
								// so we have an invalid entry , next
								args++;
							};
							// check if we have a WAIT detected
							if( PushStack[ task.PushStack ][ args ] ) {
								// mark entry as completed
								PushStack[ task.PushStack ].ReadyStates[ type ][ PushStack[ task.PushStack ][ args ][ 1 ] ] = UseStates.complete;
							}
							// so we have no valid entry left
							else {
								throw new Error( 'trigger( \'WAIT\' [ , argument ] ) requires a WAIT on the task' );
							};
						}
						// execute task by setting timeout
						window.setTimeout( function() { task.resolve(); } ); 
					}
					// if we have an error we have no WAIT on the task
					catch( e ) {
						throw new Error( 'trigger( \'WAIT\' [ , argument ] ) requires a WAIT on the task' );
					};
				}


			}
		);


