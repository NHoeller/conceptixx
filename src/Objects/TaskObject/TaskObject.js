/**
 * @project : modula.js
 * @package : 
 * @internal : TaskObject.TaskObject
 * @type : object
 * @dependencies :	Defaults.Defaults
 * 					_array.array
 * 					isFunction.isFunction.js
 *
 * @description :
 */


		/**
		 * define TaskObject as function
		 */
		var
		TaskObject = function( TaskTarget ) {
			// return new TaskObject
			return new TaskObject.fn.init( TaskTarget );
		};


		/**
		 * define TaskObject in Prototypes
		 */
		TaskObject.fn = _( true , [ 'Prototypes' , 'TaskObject' ] , ( TaskObject.prototype = {


			/**
			 * define append
			 */
			append : function( fn , args ) {
				// define variables
				var PushStack = _( [ 'PushStack' ] )[ this.PushStack ];
				// append task with given function 'call'
				push(
					PushStack ,
					{
						// set type to be callable
						'type' : 'call',
						// add callback depending on parameters
						'call' : 	isFunction( fn ) ?
							{ fn : fn , args : args } :
							{ id : fn , args : args },
						// set task entry as removable
						'move' : true
					}
				);
				// return the task
				return PushStack.length > 1 ? this : this.resolve();
			},

				
			/**
			 * define completed
			 */
			completed : function() {
				// return if task is currently ready or waiting
				return !(_( [ 'PushStack' ] )[ this.PushStack ].length > 0);
			},


			/**
			 * define ready
			 */
			ready : function( Options ) {
				// define variables
				var ReadyHandler = _( [ 'ReadyHandler' ] ),
					PlugIns = _( [ 'PlugIns' , 'ReadyHandler' ] ),
					PushStack = _( [ 'PushStack' ] )[ this.PushStack ],
					id = PushStack.length,
					PlugIn
				;
				// check for objected handler 'type' = { ... }
				if( !Options.type ) {
					// loop all elements
					for( PlugIn in Options ) {
						// check for ReadyHandler
						if( ReadyHandler[ PlugIn ] ) {
							// set type to Options
							Options.type = PlugIn;
							// done here
							break;
						};
					};
				};
				// establish ready task of type 'type'
				ReadyHandler[ Options.type ].ready( this , Options , PushStack );
				// check for PlugIns
				for( PlugIn in Options ) {
					// check for PlugIn
					if( PlugIns[ PlugIn ] ) {
						// run the create of the PlugIn
						PlugIns[ PlugIn ].create( this , Options , PushStack , PushStack[ id ] );
					};
				};
/** => TEMPORARY **/
				// set uHID to Handler
				PushStack[ id ].uHID = _( true , [ 'Defaults' , 'ReadyHandler' , 'uHID' ] ,
					_( [ 'Defaults' , 'ReadyHandler' , 'uHID' ] ) + 1 || 0 );
/** => TEMPORARY **/
				// return the task
				return PushStack.length > 1 ? this : this.resolve();
			},


			/**
			 * define resolve
			 */
			resolve : function() {
				// define PushStack as local
				var ReadyHandler = _( [ 'ReadyHandler' ] ),
					PushStack = _( [ 'PushStack' ] )[ this.PushStack ];
				// define some variables
				var current , type;
				// loop all PushStack entries for this task
				while( ( current = PushStack[ 0 ] ) ) {
					// get type
					type = current.type
					// if we have something to call
					if( type === 'call' ) {
						// check if we have a function
						if( current[ type ].fn ) {
							// call function in global scope
							current[ type ].fn.call( window , current[ type ].args );
						}
						// otherwise we have a modula id
						else {
							// call id() of modula in its scope
							this.target[ current[ type ].id ].apply( this.target , current[ type ].args );
						};
						// delete current entry from PushStack
						shift( PushStack );
						// so we are done
						continue;
					};
					// check for resolvables
					if( ReadyHandler[ type ].resolve ) {
						// run pull with current PushStack
						ReadyHandler[ type ].resolve( this , PushStack , current );
					};
					// return the task
					return this;
				};
				// return the task
				return this;
			},


			/**
			 * define trigger
			 */
			trigger : function( Options ) {
				// define PushStack as local
				var PushStack = _( [ 'PushStack' ] )[ this.PushStack ];
				// define ReadyHandler as local
				var ReadyHandler = _( [ 'ReadyHandler' ] );
				// define variables
				var type = Options.type;
				// check for type in existing readyHandler
				if( ReadyHandler[ type ] ) {
					// define counter
					var current , result , i = -1;
					// loop the entries of this PushStack
					while( ( current = PushStack[ ++i ] ) ) {
						// check for type in current PushStack
						if( current.type === type ) {
							// complete trigger with given args
							result = ReadyHandler[ type ].trigger( this , Options , PushStack , current );
							// if we have true as result
							if( result ) {
								// delete entry from PushStack
								splice( PushStack , i , 1 );
								// and we are done
								break;
							};
						};
					};
				};
				// return the task
				return this.resolve();
			},


			/**
			 * define remove
			 */
			remove : function( deleteAll ) {
				// define PushStack as local
				var PushStack = _( [ 'PushStack' ] );
				// if we have no PushStack entry we are done
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


		} ) );


		/**
		 * define TaskObject in Constructors
		 */
		TaskObject.fn.init = _( true , [ 'Constructors' , 'TaskObject' ] , ( function() {


			/**
			 * define a pushStack for TaskObject as Empty Array
			 */
			_( true , [ 'PushStack' ] , { length : 0 } );


			/**
			 * define a PlugIns object for ReadyHandler
			 */
			_( true , [ 'PlugIns' , 'ReadyHandler' ] );


			/**
			 * Constructor
			 */
			var
			Constructor = function( TaskTarget ) {
				// define PushStack
				var PushStack = _( [ 'PushStack' ] );
				// set id to task (equal to PushStack id)
				this.PushStack = PushStack.length;
				// create new PushStack entry
				push( PushStack , { length: 0 } );
				// bind a ReadyStates array to task
				PushStack[ this.PushStack ].ReadyStates = [];
				// asign TaskTarget to object
				PushStack[ this.PushStack ].target = TaskTarget;
				// return TaskObject
				return this;
			};


			/**
			 * return Constructor
			 */
			return Constructor;


		} )() );


		/**
		 * bind init
		 */
		TaskObject.fn.init.prototype = TaskObject.fn;

