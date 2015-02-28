/**
 * @project : modula.js
 * @package : 
 * @internal : Defaults.Defaults.ReadyHandler.useStates.js
 * @type : Defaults
 * @dependencies :	Defaults.Defaults
 */


		/**
		 * define States
		 */
		_(
			true ,
			[ 'Defaults' , 'ReadyHandler' , 'UseStates' ] ,
			{
				undefine : 'undefine', 
				progress : 'progress',
				complete : 'complete',
				rejected : 'rejected'
			}
		);


