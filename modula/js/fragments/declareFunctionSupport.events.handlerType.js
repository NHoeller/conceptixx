/**
 * @project : modula
 * @package : core
 * @internal : declareFunctionSupport.events.handlerType
 * @type : function / Declaration
 * @dependencies :	support
 * 					defaults
 */


	/**
	 * Support for adding and removing EventHandler
	 */
	_(
		true ,
		[ 'support' , 'events' , 'useHandler' ] ,
		window.addEventListener ? true : window.addEvent ? false : undefined
	);


