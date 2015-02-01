/**
 * @project : modula.js
 * @package : core/taskManager
 * @internal : taskManager/ready.DOMready
 * @type : function
 * @dependencies : isNode , isFunction
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


		/**
		 * DOMReady
		 */
		var
		DOMReady = function() {
			// check the DOMContentLoaded so we catch cases were ready is called after ready
			if( document.readyState === states.complete ) {
				// set DOMReady.state to pending
				DOMReady.state = states.complete;
				// return ready
				return true;
			}
			// check if we have already completed this ready check
			if( DOMReady.state === states.complete ) {
				// return ready
				return true;
			};
			// set eventHandler
			DOMReadyAddEvent
			// return false when ready check has not been completed
			return false;
		};
		// set DOMReady.state to pending
		DOMReady.state = states.pending;


		/**
		 * DOMReadyAddEvent
		 */
		var
		DOMReadyAddEvent = function() {
			// add eventHandler aswell as Fallback
			document.addEventListener( "DOMContentLoaded" , DOMReadyCompleted , false );
			window.addEventListener( "load" , DOMReadyCompleted , false );
			// set DOMReady.state as pending
			DOMReady.state = states.pending;
		};


		/**
		 * DOMreadyCompleted
		 */
		var
		DOMReadyCompleted = function() {
			// add eventHandler aswell as Fallback
			document.removeEventListener( "DOMContentLoaded" , DOMReadyCompleted , false );
			window.removeEventListener( "load" , DOMReadyCompleted , false );
			// set DOMReady.state as complete
			DOMReady.state = states.complete;
		};

