/**
 * @project : modula.js
 * @package : core
 * @internal : taskManager
 * @type : constructor
 * @dependencies : Propertizer , readyList , extend
 *
 * @description :
 * the taskManager object is to control single tasks of the modula
 * the modula will be designed to extend itself on demand. so most
 * functions of the project will be included as taskmanaged place-
 * holder functions.
 */


	/**
	 * define taskManager
	 */
	var
	taskManager = ( function() {


		/**
		 * define some variables
		 */
		var TaskCache = Propertizer( "tasks" , { length : 0 } );
		

		/**
		 * define states
		 */
		var
		states = {
			pending : 'pending',
			complete : 'complete',
			rejected : 'rejected'
		};


		/**
		 * define taskManager
		 */
		var
		taskManager = {


			/**
			 * create generates a new "task" function and adds the
			 * arguments object as its prototype
			 */
			create : function( taskObject , fn ,fnArgs , taskId , dependId ) {
				// create taskId
				var taskId = taskId||TaskCache.length,
				// add new entry to TaskCache
				newCache = ( TaskCache[ taskId ] = {} );
				// create new task
				var newTask = ( newCache.task = new task( taskId , taskObject ) );
				// extend newCache
				newCache.id = taskId;
				// store function's name (must be modula.fn or modula().fn) to newCache
				newCache.pushStack = [ { fn:fn , args:fnArgs , state:states.pending } ];
				// extend taskOject by the task function
				extend( taskObject , newTask );
				// we are done 
				return newTask;
			},


// --> ready modules

