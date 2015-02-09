/**
 * @project : modula.js
 * @package : core
 * @internal : tasks.tasks
 * @type : (constructor) function
 * @dependencies : Propertizer
 *
 * @description :
 * the modula adds a task object to each instance of itself
 */


		/**
		 * define TasksHandler
		 */
		var
		TasksHandler = {


			/**
			 * define create
			 */
			create : function( modula , task ) {
				// if we have no task to transfer
				if( !task ) {
					// create new task object
					task = Object.create( TasksHandler.executable );
					// bind new PushStack entry
					task.PushStack = PushStack.length;
					// add entry to PushStack
					PushStack.push( [] );
					// bind new ReadyStates
					task.ReadyStates = [];
				};
				// bind modula to the task
				task.modula = modula;
				// return the task
				return task;
			},


			/**
			 * define resolve
			 */
			resolve : function( task ) {
				// define some variables
				var entry;
				// loop all PushStack entries for this task
				while( ( entry = PushStack[ task.PushStack ][ 0 ] ) ) {
					// if we have a executable
					if( isFunction( entry ) ){
						// call it with scope of this modula
						entry.call( task , modula );
					}
					// if we have a ReadyState
					else if( isFunction( entry[ 0 ] ) ) {
						// if ReadyState is not complete we are done
						if( entry[ 0 ]() !== UseStates.complete ) {
							return task;
						};
					}
					// if we have a function name and its args
					else { 
						// call it with scope of this modula
						task.modula[ entry[ 0 ] ].apply( task.modula , entry[ 1 ] );
					};
					shift( PushStack[ task.PushStack ] );
				}
				return task;
			},


			/**
			 * executable
			 */
			executable : {


				/**
				 * define append
				 */
				append : function( func , args ) {
console.log( "tasks.append" , func , args );
					// append task with given function
					PushStack[ this.PushStack ].push( isFunction( func ) ? func : [ func , args] );
					// return the task
					return PushStack[ this.PushStack ].length > 1 ? this : tasks.resolve( this );
				},


				/**
				 * define remove
				 */
				remove : function( deleteAll ) {
					if( PushStack[ this.PushStack ].length === 0 ) { return this; }
					// so delete only the last entry
					delete PushStack[ this.PushStack ][ PushStack[ this.PushStack ].length - 1 ];
					// if PushStack has to be emptied
					if( deleteAll ) {
						// reset PushStack
						PushStack[ this.PushStack ] = [];
					};
					// return task
					return this;
				},

				/**
				 * define ready
				 */
				ready : function( type , args ) {
console.log( "tasks.ready" , type , args );
					// check for handler
					if( ReadyHandler[ type ] ) {
						// establish ready task of type 'type'
						ReadyHandler[ type ].ready( this , type , args );
					};
					// return the task
					return PushStack[ this.PushStack ].length > 1 ? this : tasks.resolve( this );
				},	


				/**
				 * define trigger
				 */
				trigger : function( type , args ) {
					// check for bound triggers
					if( this.trigger[ type ] ) {
						// check for args
						if( args && !this.trigger[ type ][ args ] ) {
							// return task if not bound to task's trigger
							return this;
						};
						// complete trigger with given args
						ReadyHandler[ type ].completed( this , args );
					};
					// return the task
					return this;
				},


				/**
				 * define completed
				 */
				completed : function() {
					// return if task is currently ready or waiting
					return PushStack[ this.PushStack ].length > 0;
				}

			}


		};


// <-- tasks


