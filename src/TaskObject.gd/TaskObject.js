/**
 * @project : modula.js
 * @package : 
 * @internal : TaskObject.TaskObject
 * @type : object
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 * 					Defaults.Constructors._define
 * 					Defaults.Constructors.TaskObject._define
 * 					Defaults.Objects._define
 * 					Defaults.Objects.TaskObject._define
 * 					Defaults.Prototypes._define
 * 					Defaults.Prototypes.TaskObject._define
 * 					Objects._define
 * 					Prototypes._define
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
		// alternative line:46 'TaskObject.fn = ( Prototypes.TaskObject = TaskObject.prototype = {'
		// alternative line:54 'var PushStack = Defaults( [ 'Objects' , 'TaskObject' , 'PushStack' ] );'
		// alternative line:67 'var PushStack = Defaults( [ 'Objects' , 'TaskObject' , 'PushStack' ] );'
		// alternative line:78 'var PushStack = Defaults( [ 'Objects' , 'TaskObject' , 'PushStack' ] );'
		// alternative line:80 'var ReadyHandler = Defaults( [ 'Objects' , 'ReadyHandler' ] );'
		// alternative line:96 'var PushStack = Defaults( [ 'Objects' , 'TaskObject' , 'PushStack' ] );'
		// alternative line:116 'var PushStack = Defaults( [ 'Objects' , 'TaskObject' , 'PushStack' ] );'
		// alternative line:129 'if( entry[ 0 ]() !== Defaults( [ 'Defaults' , 'ReadyHandler' , 'useSates' ] ).complete ) {'
		// alternative line:150 'var ReadyHandler = Defaults( [ 'Objects' , 'ReadyHandler' ] );'
		// alternative line:166 '} );'
		TaskObject.fn = Defaults( true , [ 'Prototypes' , 'TaskObject' ] , ( TaskObject.prototype = {


			/**
			 * define append
			 */
			append : function( func , args ) {
				// define PushStack as local
				var PushStack = Defaults( [ 'Objects' , 'TaskObject' , 'PushStack' ] );
				// append task with given function
				PushStack[ this.PushStack ].push( isFunction( func ) ? func : [ func , args] );
				// return the task
				return PushStack[ this.PushStack ].length > 1 ? this : this.resolve();
			},

				
			/**
			 * define completed
			 */
			completed : function() {
				// define PushStack as local
				var PushStack = Defaults( [ 'Objects' , 'TaskObject' , 'PushStack' ] );
				// return if task is currently ready or waiting
				return !(PushStack[ this.PushStack ].length > 0);
			},


			/**
			 * define ready
			 */
			ready : function( type , args ) {
				// define PushStack as local
				var PushStack = Defaults( [ 'Objects' , 'TaskObject' , 'PushStack' ] );
				// also define ReadyHandler as local
				var ReadyHandler = Defaults( [ 'Objects' , 'ReadyHandler' ] );
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
				var PushStack = Defaults( [ 'Objects' , 'TaskObject' , 'PushStack' ] );
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
				var PushStack = Defaults( [ 'Objects' , 'TaskObject' , 'PushStack' ] );
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
						if( entry[ 0 ]() !== Defaults( [ 'Defaults' , 'ReadyHandler' , 'UseStates' ] ).complete ) {
							// return the task
							return this;
						};
					}
					// if we have a function name and its args
					else { 
						// call it with scope of this modula
						this.target[ entry[ 0 ] ].apply( this.target , entry[ 1 ] );
					};
					shift( PushStack[ this.PushStack ] );
				}
				return this;
			},


			/**
			 * define trigger
			 */
			trigger : function( type , args ) {
				// define ReadyHandler as local
				var ReadyHandler = Defaults( [ 'Objects' , 'ReadyHandler' ] );
				// check for bound triggers
				if( this.trigger[ type ] ) {
					// check for args
					if( args && !this.trigger[ type ][ args ] ) {
						// return task if not bound to task's trigger
						return this;
					};
					// complete trigger with given args
					ReadyHandler[ type ].completed( this , type , args );
				};
				// return the task
				return this;
			},


		} ) );


		/**
		 * define TaskObject in Constructors
		 */
		// alternative line:174 'TaskObject.fn.init = ( Constructors.TaskObject = ( function() {'
		// alternative line:180 'Defaults.Defaults.TaskObject.override'
		TaskObject.fn.init = Defaults( true , [ 'Constructors' , 'TaskObject' ] , ( function() {


			/**
			 * define a pushStack for TaskObject as Empty Array
			 */
			Defaults( true , [ 'Objects' , 'TaskObject' , 'PushStack' ] , { length : 0 } );


			/**
			 * Constructor
			 * 
			 * @param [string] URLString
			 */
			var
			Constructor = function( TaskTarget /* , TasksOptions */ ) {
				// set id to task (equal to PushStack id)
				this.PushStack = Defaults( [ 'Objects' , 'TaskObject' , 'PushStack' ] ).length;
				// create new PushStack entry
				push( Defaults( [ 'Objects' , 'TaskObject' , 'PushStack' ] ) , [] );
				// bind a ReadyStates array to task
				this.ReadyStates = [];
				// asign TaskTarget to object
				this.target = TaskTarget;
				// return TaskObject
				return this;
			};


			/**
			 * return url
			 */
			return Constructor;


		} )() );


		/**
		 * bind init
		 */
		TaskObject.fn.init.prototype = TaskObject.fn;

