/**
 * @project : modula
 * @package : core
 * @internal : declareFunctionSupport.events.HandlerType
 * @type : function / Declaration
 * @dependencies :	support
 * 					defaults
 */


	/**
	 * Support for adding and removing EventHandler
	 */
	_(
		true ,
		[ 'Support' , 'Events' , 'useHandler' ] ,
		window.addEventListener ? true : window.addEvent ? false : undefined
	);


