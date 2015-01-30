/**
 * @project : modula.js
 * @package : core
 * @internal : ready / DOMready
 * @type : function
 * @dependencies : taskManager
 *
 * @description :
 * ready is a function used to trigger the DOMContentLoaded, so no 
 * selector or manipulation function will run into an uncompleted
 * DOM.
 * the ready can be extended to DEMANDContentLoaded (modula's own)
 * and AJAXContentLoaded (for handling ajax requests). this cases
 * will be handled by the modula itself. there is no configuration
 * to be done
 */


	/**
	 * define ready function
	 */
	var
	ready = ( function() {


		/**
		 * isReady defines if the DOMContentLoaded is complete
		 */
		var
		isReady = false,


		/**
		 * define ready function
		 */
		ready = function() {
			
			//check if the DOMContentLoaded is complete and isReady is still false
			if( !isReady && document.readyState === "complete" ) {
console.log("timeout");
				// set isReady as true
				isReady = true;
				// Handle it asynchronously to allow scripts the opportunity to delay ready
				setTimeout( ready );
			}
			// otherwise if the isReady is false set eventHandler
			else if( !isReady ) {
console.log("sethandler");
				// add eventHandler aswell as Fallback
				document.addEventListener( "DOMContentLoaded", function(){ isReady = true; ready(); }, false );
				window.addEventListener( "load", function(){ isReady = true; ready(); }, false );
			}
			// so we are done
			else {
console.log("done");
				alert("ready");
			}
		};


		/**
		 * return the ready function
		 */
		return ready;


	} )();


	ready();

