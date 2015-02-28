/**
 * @project : modula.js
 * @package : 
 * @internal : Support.Events.HandlerType
 * @type : function / Declaration
 * @dependencies :	Support.Support
 * 					Defaults.Defaults
 */


	/**
	 * Support for adding EventHandler
	 */
	_(
		true ,
		[ 'Support' , 'Events' , 'HandlerType' ] ,
		( function() {
			return window.addEventListener ? 'addEventListener' :
				window.addEvent ? 'addEvent' : '';
		} )()
	);


