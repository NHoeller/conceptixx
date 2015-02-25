/**
 * @project : modula.js
 * @package : 
 * @internal : ReadyHandler.wait
 * @type : function
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 */


		/**
		 * add WAIT as available ReadyHandler
		 */
		Defaults(
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
					}
					// define type as 'WAIT'
					var type = 'WAIT';
					// define ready object
					var ready = Defaults( [ 'Objects' , 'ReadyHandler' , 'WAIT' ] );
					// define PushStack as local
					var PushStack = ( PushStack = Defaults( [ 'Objects' , 'TaskObject' , 'PushStack' ] ) );
					// define the UseStates
					var UseStates = Defaults( [ 'Defaults' , 'ReadyHandler' , 'UseStates' ] );
					// define task's ReadyStates if needed
					task.ReadyStates[ type ] = task.ReadyStates[ type ] || { length : 0 };
					// define readyId for this WAIT
					var readyId = task.ReadyStates[ type ].length;
					// add readyTrigger to task's Stack
					push( PushStack[ task.PushStack ] ,
						[ function(){ 
							return task.ReadyStates[ type ][ readyId ]; } , args ] );
					// check if we have args
					if( args ) {
						// we have to add an identifier for args in PushStack
						PushStack[ task.PushStack ][ ' ' + args ] = readyId;
					}
					// set ReadyStates for WAIT ready
					push( task.ReadyStates[ type ] , UseStates.progress );
					// define trigger[ type ] if needed
					task.trigger[ type ] = task.trigger[ type ] || { length : 0 };
					// bind WAIT to trigger;
					task.trigger[ type ][ args || readyId ] = args || true;
				},


				/**
				 * completed
				 */
				completed : function( task , type , args ) {
					// check for args
					if( args && !isString( args ) ) {
						throw new Error( 'trigger( \'WAIT\' , argument ) requires a String as argument' );
					}
					// define ready object
					var ready = Defaults( [ 'Objects' , 'ReadyHandler' , 'WAIT' ] );
					// define PushStack as local
					var PushStack = ( PushStack = Defaults( [ 'Objects' , 'TaskObject' , 'PushStack' ] ) );
					// define the UseStates
					var UseStates = Defaults( [ 'Defaults' , 'ReadyHandler' , 'UseStates' ] );
					// check for args in PushStack
					if( args && args === PushStack[ task.PushStack ][ 0 ][ 1 ] ) {
						// set state for WAIT as completed
						task.ReadyStates[ type ][ PushStack[ task.PushStack ][ ' ' + args ] ] = UseStates.complete;
						// execute task by setting timeout
						window.setTimeout( function() { task.resolve(); } ); 
					}
					else {
						alert( 'TODO' );
					}
				}


			}
		);


