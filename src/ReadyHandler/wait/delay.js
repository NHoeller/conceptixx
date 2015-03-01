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
		[ 'Objects' , 'ReadyHandler' , 'WAIT' , 'PlugIns' , 'delay' ] ,
		{


			/**
			 * create a delay to a readyHandler
			 */
			create : function( ReadyTask , ReadyOptions ) {
				// check for delay
				if( ReadyOptions.delay >>> 0 === 0 ) {
					throw new Error( 'ReadyHandler expects delay as a numeric value' );
				};
				// set Timeout for delay
				window.setTimeout( function(){ ReadyTask.trigger( ReadyOptions ) } , ReadyOptions.delay );
				// return delay information
				return { name : 'delay' , value : ReadyOptions.delay };
			},


		}
	);