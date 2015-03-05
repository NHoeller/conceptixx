/**
 * @project : modula.js
 * @package : 
 * @internal : wait.delay
 * @type : function
 * @dependencies :	Defaults.Defaults
 * 					ReadyHandler.wait
 */


	/**
	 * wait.delay
	 */
	_(
		false ,
		[ 'PlugIns' , 'ReadyHandler' , 'delay' ] ,
		{


			/**
			 * pull option
			 */
			pull : true,


			/**
			 * create a delay to a readyHandler
			 */
			create : function( task , Options , PushStack , Handler ) {
				// check for delay
				if( Options.delay >>> 0 === 0 ) {
					throw new Error( 'ReadyHandler expects delay as a numeric value' );
				};
				// set delay for PushStack
				Handler.delay = {
					// set timer
					timer : window.setTimeout(
						function(){
							task.trigger( Handler );
						} ,
						Options.delay
					 ),
					 // set delay
					 delay : Options.delay
				};
			},


			/**
			 * create a resolve function to catch if wait solved before timeout
			 */
//			resolve : function( task , Options , PushStack ) {
//				// return false , always!
//				return false;
//			},


			/**
			 * create remove to remove delay
			 */
			trigger : function( task , Options , PushStack , Handler ) {
				// delete timeout
				window.clearTimeout( Handler.delay.timer );
				// delete PushStackEntry
				return delete Handler.delay;
			},


		}
	);


