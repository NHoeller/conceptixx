/**
 * @project : modula.js
 * @package : 
 * @internal : wait.delay
 * @type : function
 * @dependencies :	Defaults.Defaults
 * 					ReadyHandler.wait
 *
 * @description :
 * adds the lock functionality to the wait handler
 * 
 * @example :
 * Object.wait({key:'triggerkey'}); //adds a lock to the wait handler
 * Object.trigger({key:'triggerkey'}); // will release the wait handler
 */


	/**
	 * wait.delay
	 */
	_(
		false ,
		[ 'PlugIns' , 'ReadyHandler' , 'key' ] ,
		{


			/**
			 * pull option
			 */
			pull : false,


			/**
			 * create a keyword for triggering to a readyHandler
			 */
			create : function( Task , Options , PushStack , Handler ) {
				// check for key
				if( !isString( Options.key ) ) {
					throw new Error( 'ReadyHandler expects lock as a string value ' );
				};
				// we have to add an identifier for key in PushStack
				Handler[ 'key' ] = Options.key;
				// switch 'move' to false
				Handler[ 'move' ] = false;
				// set dependency for resolving
			},


			/**
			 * create a trigger function for resolving the handler
			 */
			trigger : function( Task , Options , PushStack , Handler ) {
				// define ReadyHandler as local
				var ReadyHandler = _( [ 'ReadyHandler' ] );
				// check for key in Handler
				if( Options.key && Handler.key === Options.key ) {
					// we are done can proceed
					return true;
				};
				// if we did not pass the test abort the resolve
				return false;
			},


		}
	);


