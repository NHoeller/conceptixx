/**
 * @project : modula.js
 * @package : 
 * @internal : wait.delay
 * @type : function
 * @dependencies :	Defaults.Defaults
 * 					ReadyHandler.wait
 *
 * @description :
 * adds the delay functionality to the wait handler
 * 
 * @example :
 * Object.wait({delay:2000}); //adds a delay of 2000 ms for automatic resolve
 */


	/**
	 * wait.delay
	 */
	_(
		false ,
		[ 'Objects' , 'ReadyHandler' , 'WAIT' , 'PlugIns' , 'key' ] ,
		{


			/**
			 * create a delay to a readyHandler
			 */
			create : function( ReadyTask , ReadyOptions ) {
				// check for key
				if( !isString( ReadyOptions.key ) ) {
					throw new Error( 'ReadyHandler expects lock as a string value ' );
				};
				// define PushStack as local
				var PushStack = ( PushStack = _( [ 'Objects' , 'TaskObject' , 'PushStack' ] ) );
				// we have to add an identifier for args in PushStack
				PushStack[ ReadyTask.PushStack ][ ' ' + ReadyOptions.key ] = ReadyOptions.id;
				// return delay information
				return { name : 'key' , value : ReadyOptions.key , restricted : true };
			},


			/**
			 * resolve 
			 */
			resolve : function( ReadyTask , ReadyOptions ) {
				// define PushStack as local
				var PushStack = ( PushStack = _( [ 'Objects' , 'TaskObject' , 'PushStack' ] ) );
				// define the UseStates
				var UseStates = _( [ 'Defaults' , 'ReadyHandler' , 'UseStates' ] );
				// check for args in PushStack
				if( ReadyOptions.key && PushStack[ ReadyTask.PushStack ][ ' ' + ReadyOptions.key ] !== undefined ) {
					// define counter
					var i = 0;
					// loop PushStack to detect WAIT
					while( 
						PushStack[ ReadyTask.PushStack ][ i ] && (
						!PushStack[ ReadyTask.PushStack ][ i ][ 2 ] ||
						PushStack[ ReadyTask.PushStack ][ i ][ 1 ].key !== ReadyOptions.key
					) ) {
						// not the correct entry - go next
						i++;
					}
					delete PushStack[ ReadyTask.PushStack ][ i ][ 1 ].restricted
					// delete value from PushStack
					delete PushStack[ ReadyTask.PushStack ][ ' ' + ReadyOptions.key ];
					// we are done can proceed with regular WAIT
					return true;
				};
				// if we did not pass the test abort the resolve
				return false;
			}


		}
	);