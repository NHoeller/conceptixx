/**
 * @project : modula.js
 * @package : core
 * @internal : tasks.define
 * @type : constructor
 * @dependencies : Propertizer
 *
 * @description :
 * the modula adds a tasks object to each instance of itself
 */


		/**
		 * define some variables
		 */
		var
//		Tasks = Propertizer( "Tasks" , [] );
		PushStack = [];
		

		/**
		 * define States
		 */
		var
		UseStates = {
			undefine : 'undefine', 
			progress : 'progress',
			complete : 'complete',
			rejected : 'rejected'
		};


		/**
		 * define Handler
		 * 
		 * @notice :
		 * these values should be created by the readyHandler itself, so there
		 * are only that values defined, an handler is bound to
		 */
		var
		ReadyHandler = Propertizer( "ReadyHandler" , {
			// DOM : {},
			// DEMAND : {},
			// AJAX : {},
			// CUSTOM : [ {} , ... , {} ],
		} );


// --> tasks


