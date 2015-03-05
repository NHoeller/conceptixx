/**
 * @project : modula.js
 * @package : 
 * @internal : ReadyHandler.wait.timeout
 * @type : function
 * @dependencies :	Defaults.Defaults
 * 					ReadyHandler.wait
 *
 * @description :
 * adds a timeout to the wait handler
 * 
 * @example :
 * Object.wait({timeout:3000}); // this will add an timeout so all following tasks will be deleted
 * 								// the timeout starts in the moment of adding this wait not when
 * 								// reaching it
 * Object.wait({delay:4000}).wait({timeout:3000}); // this will always result in deletion
 */


	/**
	 * wait.timeout
	 */
	_(
		false ,
		[ 'PlugIns' , 'ReadyHandler' , 'timeout' ] ,
		{


			/**
			 * create a timeout to a readyHandler
			 */
			create : function( Task , Options , PushStack , Handler ) {
				// check for key
				if( Options.timeout >>> 0 === 0 ) {
					throw new Error( 'ReadyHandler expects timeout as a numeric value' );
				};
				// set Timeout for delay
				Options.timeout = window.setTimeout(
					function(){
console.log( 'removing' );
						Task.remove( Options.remStart , Options.remLength );
					} ,
					Options.timeout 
				);
				// return timeout information
				return { name : 'timeout' , value : Options.timeout };
			},


			/**
			 * create a resolve function to catch if wait solved before timeout
			 */
			resolve : function( Task , Options ) {
				// delete timeout
				window.clearTimeout( Options.timeout );
				// return success
				return true;
			},


			/**
			 * create remove to remove delay
			 */
			remove : function( Task , Options ) {
				// delete timeout
				window.clearTimeout( Options.timeout );
				// return success
				return true;
			},


		}
	);


