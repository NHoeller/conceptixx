/**
 * @project : modula.js
 * @package : 
 * @internal : Defaults.Defaults.ReadyHandler.useStates.js
 * @type : Defaults
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 * 					Defaults.Defaults._define
 * 					Defaults.Defaults.ReadyHandler._define
 */


		/**
		 * define States
		 */
		// alternative line: 'var UseStates = {'
		// alternative line: '};'
		Defaults(
			true ,
			[ 'Defaults' , 'ReadyHandler' , 'UseStates' ] ,
			{
				undefine : 'undefine', 
				progress : 'progress',
				complete : 'complete',
				rejected : 'rejected'
			}
		);


