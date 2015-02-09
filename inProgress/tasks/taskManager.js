/**
 * @project : modula.js
 * @package : core
 * @internal : taskManager.taskManager
 * @type : function
 * @dependencies :	extend
 *					functions.simplify
 *
 * @description :
 * enter description here ...
 * 
 * @example :
 * 
 * @notice :
 * 
 */


		/**
		 * define taskManager
		 */
		var
		taskManager = {


			/**
			 * create generates a new "task" function and adds the
			 * object by extend function
			 * 
			 * @param object modula
			 * @param object ready
			 */
			create : function( modula , ready ) {
console.log( modula , ready );
				// add new entry to TaskCache
				var newTask = ( TaskCache[ TaskCache.length ] = {} );
				// extend newTask by Id so the task know's its own Id
				newTask.id = TaskCache.length++;
				// create pushStack
				newTask.pushStack = [];
				// create new task function
				newTask.task = new task( newTask.id );
				// bind task to modula
				modula.task = newTask.task;
				// check for task's pushStack
				if( ready ) {
					// add function and arguments to pushStack
					newTask.pushStack.push( [ ready.func , ready.args ] );
					// if we have dependencies for the newTask
					if( ready.type ) {
						// add ready to the task
						taskManager.addTrigger( newTask , ready );
						// done here
//						return modula.task();
					};
				};
				// so we have no dependency
				return modula;
				
			},

			
			/**
			 * update
			 */
			update : function( task , modula ) {
				// generate new task function
				task.task = new task( task.id );
				// create new reference to modula
				task.modula = modula;
				// create returnvalue
				task.result = {};
				// extend task function by this
				extend( task.result , task.task , modula );
				// done here
				return task.result;
			},


			/**
			 * addTrigger adds a readyHandler to a task
			 */
			addTrigger : function( task , ready ) {
				// run ready for type
				readyTypes[ ready.type ].ready( task , ready );
			},


		};


// <-- taskManager


// --> ready modules


