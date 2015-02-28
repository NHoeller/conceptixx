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
		TaskObject = function( TaskTarget , TasksOptions ) {
			// return new TaskObject
			return new TaskObject.fn.init( TaskTarget , TasksOptions );
		};


		/**
		 * define TaskObject in Prototypes
		 */
		TaskObject.fn = _( true , [ 'Prototypes' , 'TaskObject' ] , ( TaskObject.prototype = {


			/**
			 * define append
			 */
			append : function( func , args ) {
				// define PushStack as local
				var PushStack = _( [ 'Objects' , 'TaskObject' , 'PushStack' ] );
				// append task with given function
				push( PushStack[ this.PushStack ] , isFunction( func ) ? func : [ func , args] );
				// return the task
				return PushStack[ this.PushStack ].length > 1 ? this : this.resolve();
			},

				
			/**
			 * define completed
			 */
			completed : function() {
				// define PushStack as local
				var PushStack = _( [ 'Objects' , 'TaskObject' , 'PushStack' ] );
				// return if task is currently ready or waiting
				return !(PushStack[ this.PushStack ].length > 0);
			},


			/**
			 * define ready
			 */
			ready : function( type , args ) {
				// define PushStack as local
				var PushStack = _( [ 'Objects' , 'TaskObject' , 'PushStack' ] );
				// also define ReadyHandler as local
				var ReadyHandler = _( [ 'Objects' , 'ReadyHandler' ] );
				// check for handler
				if( ReadyHandler[ type ] ) {
					// establish ready task of type 'type'
					ReadyHandler[ type ].ready( this , type , args );
				};
				// return the task
				return PushStack[ this.PushStack ].length > 1 ? this : this.resolve();
			},


			/**
			 * define remove
			 */
			remove : function( deleteAll ) {
				// define PushStack as local
				var PushStack = _( [ 'Objects' , 'TaskObject' , 'PushStack' ] );
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


			/**
			 * define resolve
			 */
			resolve : function() {
				// define PushStack as local
				var PushStack = _( [ 'Objects' , 'TaskObject' , 'PushStack' ] );
				// define some variables
				var entry;
				// loop all PushStack entries for this task
				while( ( entry = PushStack[ this.PushStack ][ 0 ] ) ) {
					// if we have a executable
					if( isFunction( entry ) ){
						// call it with scope of this modula
						entry.call( this );
					}
					// if we have a ReadyState
					else if( isFunction( entry[ 0 ] ) ) {
						// if ReadyState is not complete we are done
						if( entry[ 0 ]() !== _( [ 'Defaults' , 'ReadyHandler' , 'UseStates' ] ).complete ) {
							// return the task
							return this;
						};
					}
					// if we have a function name and its args
					else { 
						// call it with scope of this modula
						this.target[ entry[ 0 ] ].apply( this.target , entry[ 1 ] );
					};
					// delete current entry from PushStack
					shift( PushStack[ this.PushStack ] );
				}
				return this;
			},


			/**
			 * define trigger
			 */
			trigger : function( type , args ) {
				// define PushStack as local
				var PushStack = _( [ 'Objects' , 'TaskObject' , 'PushStack' ] );
				// define ReadyHandler as local
				var ReadyHandler = _( [ 'Objects' , 'ReadyHandler' ] );
				// check for bound triggers
				if( !PushStack[ this.PushStack ].ReadyStates[ type ] ) {
					throw new Error( 'trigger( type , arguments ) is not set for type : ' + type );
				};
				// check for bound triggers and resolve method
				if( !ReadyHandler[ type ].resolve ) {
					throw new Error( 'trigger( type , arguments ) can\'t be used for type : ' + type );
				};
				// check for args
				if( args && PushStack[ this.PushStack ][ ' ' + args ] === undefined ) {
					throw new Error( 'trigger( type , arguments ) needs the correct argument to trigger');
				};
				// complete trigger with given args
				ReadyHandler[ type ].resolve( this , type , args );
				// return the task
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
			_( true , [ 'Objects' , 'TaskObject' , 'PushStack' ] , { length : 0 } );


			/**
			 * Constructor
			 */
			var
			Constructor = function( TaskTarget /* , TasksOptions */ ) {
				// define PushStack
				var PushStack = _( [ 'Objects' , 'TaskObject' , 'PushStack' ] );
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

