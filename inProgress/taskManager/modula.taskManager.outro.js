/**
 * @project : modula.js
 * @package : core
 * @internal : taskManager.outro
 * @type : constructor
 * @dependencies : Propertizer , extend
 *
 * @description :
 * the taskManager object is to control single tasks of the modula
 * the modula will be designed to extend itself on demand. so most
 * functions of the project will be included as taskmanaged place-
 * holder functions.
 */


// <-- ready modules


		};


		/**
		 * define prototype
		 */
		var
		task = function( taskId , fn , args ) {
			// return task function
			return function() {
				// check for current state
				console.log(TaskCache[ taskId ]);
			};
		};


		/**
		 * return taskManager
		 */
		return taskManager;


	} )();


	/**
	 * create default ready task for depends
	 */
	taskManager.create( modula() , 'ready' , undefined , 'ready' );


	window.taskManager = taskManager;


