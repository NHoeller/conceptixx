/**
 * @project : modula.js
 * @package : core/taskManager
 * @internal : taskManager/ready.ready
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


		/**
		 * define ready function
		 */
		var
		ready = function( listItem , eventHandler ) {
			
			//check readyList for state and completition
			if( !readyList[ listItem ].completed && readyList[ listItem ].state === states.complete ) {
				// check for tasks to run
				if( readyList[ listItem ].tasks.length > 0 ) {
					// so we have to handle the bound tasks
					for( var task in readyList[ listItem ].tasks ) {
						// we set a timeout so we do not disturb the workflow
						window.setTimeout( readyList[ listItem ].tasks[ task ] );
					};
				};
				// now set readyList item as completed
				readyList[ listItem ].completed = true;
			}

			// otherwise if the readyList item is not set we set eventHandler
			else if( !readyList[ listItem ] ) {
				// create eventHandler 
				readyList[ listItem ].completed = function() {
					// carry listItem
					var thisItem = listItem; 
					
				}
			}
			// so we are done
			else {
console.log("done");
				alert("ready");
			}
		};


		/**
		 * DOMevent
		 */
		var
		DOMevent = function() {
			// add eventHandler aswell as Fallback
			document.addEventListener( "DOMContentLoaded" , completed , false );
			window.addEventListener( "load" , completed , false );
		}
		/**
		 * 
		 */
		var
		completed = function() {
			// set isReady for DOMContentLoaded as true
			isReady["DOMContentLoaded"] = true;
		};


// --> ready submodules

