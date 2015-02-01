/**
 * @project : modula.js
 * @package : core/taskManager
 * @internal : taskManager/ready.outro
 * @type : function
 * @dependencies : 
 *
 * @description :
 * ready is a function used to trigger the following 'ready' statements
 * - DOMContentLoaded
 * - DEMANDContentLoaded (modula's own)
 * - AJAXContentLoaded (for handling ajax requests)
 * - CUSTOMReadyEvent
 * 
 * the DOMContentLoaded is always implemented, the other ready statements
 * should be implemented by the 'conceptixx - modula.php'  
 */


// <-- ready submodules


		/**
		 * return the ready function
		 */
		return DOMReady;


	} )(),

