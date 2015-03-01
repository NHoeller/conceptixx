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
				 * prepare for further PlugIns
				 */
				PlugIns : {},


				/**
				 * define ready
				 */
				ready : function( TaskObject , ReadyOptions ) {
					// define readyObject for PushStack
					var readyObject = {};
					// define type as 'WAIT'
					var type = ReadyOptions.type || 'WAIT';
					// define PushStack as local
					var PushStack = ( PushStack = _( [ 'Objects' , 'TaskObject' , 'PushStack' ] ) );
					// define the UseStates
					var UseStates = _( [ 'Defaults' , 'ReadyHandler' , 'UseStates' ] );
					// define TaskObject's ReadyStates if needed
					PushStack[ TaskObject.PushStack ].ReadyStates[ type ] = PushStack[ TaskObject.PushStack ].ReadyStates[ type ] || { length : 0 };
					// define readyId for this WAIT
					readyObject.id = PushStack[ TaskObject.PushStack ].ReadyStates[ type ].length;
					// check for args
					if( ReadyOptions ) {
						// add id to ReadyOptions
						ReadyOptions.id = readyObject.id;
						// define PlugIns object from WAIT
						var PlugIn , PlugInResult , PlugIns = _( [ 'Objects' , 'ReadyHandler' , 'WAIT' , 'PlugIns' ] ); 
						// loop args and call PlugIn if existing
						for( PlugIn in ReadyOptions ) {
							// check for PlugIn
							if( PlugIns[ PlugIn ] ) {
								// get adding information from PlugIn
								PlugInResult = PlugIns[ PlugIn ].create( TaskObject , ReadyOptions );
								// add the result to readyObject
								readyObject[ PlugInResult.name ] = PlugInResult.value;
								// if we have to restrict the WAIT
								if( PlugInResult.restricted ) {
									// set value to PushStack
									readyObject.restricted = true
								}
							};
						};
					};
					// add readyTrigger to TaskObject's Stack
					push( PushStack[ TaskObject.PushStack ] ,
						[ function(){ 
							return PushStack[ TaskObject.PushStack ].ReadyStates[ type ][ readyObject.id ]; } , readyObject , type ] );
					// set ReadyStates for WAIT ready
					push( PushStack[ TaskObject.PushStack ].ReadyStates[ type ] , UseStates.progress );
					// define trigger[ type ] if needed
					TaskObject.trigger[ type ] = TaskObject.trigger[ type ] || {};
					// bind WAIT to trigger;
					TaskObject.trigger[ type ][ /* args || */ readyObject.id ] = /* args || */ true;
				},


				/**
				 * resolve
				 */
				resolve : function( TaskObject , ReadyOptions ) {
					// define PushStack as local
					var PushStack = ( PushStack = _( [ 'Objects' , 'TaskObject' , 'PushStack' ] ) );
					// define the UseStates
					var UseStates = _( [ 'Defaults' , 'ReadyHandler' , 'UseStates' ] );
					try {
						// check if we have a TaskObject to trigger
						if(
							!PushStack[ TaskObject.PushStack ].ReadyStates[ ReadyOptions.type ] ||
							!PushStack[ TaskObject.PushStack ].ReadyStates[ ReadyOptions.type ].length
						) {
							throw new Error( 'trigger( ReadyOptions ) no WAIT found in task' );
						};
						// define PlugIns object from WAIT
						var PlugIn , PlugInResult = true, PlugIns = _( [ 'Objects' , 'ReadyHandler' , 'WAIT' , 'PlugIns' ] ); 
						// loop args and call PlugIn if existing
						for( PlugIn in ReadyOptions ) {
							// check for PlugIn
							if( PlugIns[ PlugIn ] && PlugIns[ PlugIn ].resolve ) {
								// get adding information from PlugIn
								PlugInResult = PlugIns[ PlugIn ].resolve( TaskObject , ReadyOptions );
								// check for PlugInResult
								if( !PlugInResult ) {
									// exit the loop
									break;
								};
							};
						};
						// if we have no false on PlugInResult from PlugIns
						if( PlugInResult ){
							// if we have a PushStack
							if( PushStack[ TaskObject.PushStack ].ReadyStates[ ReadyOptions.type ].length > 0 ) {
								// create counter
								var i = 0;
								// loop the PushStack to find next unvalued WAIT
								while( PushStack[ TaskObject.PushStack ][ i ] && (
									!PushStack[ TaskObject.PushStack ][ i ][ 2 ] ||
									PushStack[ TaskObject.PushStack ][ i ][ 1 ].restricted === true ||
									PushStack[ TaskObject.PushStack ].ReadyStates[ ReadyOptions.type ][ PushStack[ TaskObject.PushStack ][ i ][ 1 ].id ] === 'complete' ||
									PushStack[ TaskObject.PushStack ][ i ][ 2 ] !== 'WAIT' ) 
								) {
									// so we have an invalid entry , next
									i++;
								};
							};
							// check if we have a WAIT detected
							if( PushStack[ TaskObject.PushStack ][ i ] ) {
								// mark entry as completed
								PushStack[ TaskObject.PushStack ].ReadyStates[ ReadyOptions.type ][ PushStack[ TaskObject.PushStack ][ i ][ 1 ].id ] = UseStates.complete;
							}
							// otherwise we trigger an error
							else{
								throw new Error( 'trigger( ReadyOptions ) no valid WAIT detected' );
							};
						};
						// execute TaskObject by setting timeout
						window.setTimeout( function() { TaskObject.resolve(); } ); 
					}
					// if we have an error we have no WAIT on the TaskObject
					catch( e ) {
						console.log( TaskObject , ReadyOptions );
						throw new Error( 'trigger( ReadyOptions ) requires a WAIT on the task' );
					};
				}
			}
		);


