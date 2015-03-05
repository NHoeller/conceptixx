/**
 * @project : modula.js
 * @package : 
 * @internal : ReadyHandler.wait
 * @type : function
 * @dependencies :	Defaults.Defaults
 */


		/**
		 * add WAIT as available ReadyHandler
		 */
		_(
			true ,
			[ 'ReadyHandler' , 'wait' ] ,
			{


				/**
				 * define ready
				 */
				ready : function( task , Options , PushStack ) {
					// define variables
					var PlugIns = _( [ 'PlugIns' , 'ReadyHandler' ] ) ,
						id = PushStack.length,
						PlugIn ,
						type = 'wait';
					// add readyTrigger to task's Stack
					push(
						PushStack ,
						{
							'type' : Options.type, 
							'move' : true
						}
					);
					// check for objected handler
					if( Options[ type ] ) {
						// create a pull object
						PushStack[ id ].pull = {};
						// check for PlugIns
						for( PlugIn in Options[ type ] ) {
							// check for PlugIn
							if( PlugIns[ PlugIn ] ) {
								// if we have to pull the PlugIn
								if( PlugIns[ PlugIn ].pull ) {
									// deposit PlugIn in the pull
									PushStack[ id ].pull[ PlugIn ] = Options[ type ][ PlugIn ];
								}
								// otherwise create PlugIn
								else {
									// run the create of the pull
									PlugIns[ PlugIn ].create( task , Options[ type ] , PushStack , PushStack[ id ] );
								};
							};
						};
					};
					// remove type from Options and return result
					return delete Options.type;
				},


				/**
				 * resolve
				 */
				resolve : function( task , PushStack , Handler ) {
					// define PlugIns object
					var PlugIn , PlugIns = _( [ 'PlugIns' , 'ReadyHandler' ] );
					// check for objected handler
					if( Handler.pull ) {
						// check for PlugIns
						for( PlugIn in Handler.pull ) {
							// check for PlugIn
							if( PlugIns[ PlugIn ] ) {
								// run the create of the PlugIn
								PlugIns[ PlugIn ].create( task , Handler.pull , PushStack , Handler );
								// delete pull
								delete Handler.pull[ PlugIn ];
							};
						};
					};
				},


				/**
				 * trigger
				 */
				trigger : function( task , Options , PushStack , Handler ) {
					// define PlugIns object
					var result = true , PlugIn , PlugIns = _( [ 'PlugIns' , 'ReadyHandler' ] );
					// loop the PlugIns of Handler
					for( PlugIn in PlugIns ) {
						// check if PlugIn is used in Handler
						if( Handler[ PlugIn ] ) {
							// get result from PlugIn
							result = PlugIns[ PlugIn ].trigger( task , Options , PushStack , Handler );
						};
						// if trigger failed we are done
						if( !result ) {
							return false;
						};
					};
					// we are done here
					return true;
				}


			}
		);


