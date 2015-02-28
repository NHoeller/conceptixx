/**
* @project : modula.js
* @package :
* @internal : UrlObject.Support
* @type : function
* @dependencies :	Defaults.Defaults
*/


	/**
	 * defines if have to use the modula UrlObject or if we can use the native URL Object instead
	 * 
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/URL
	 */
	_(
		false ,
		[ 'Support' , 'UrlObject' ] ,
		typeof !( URL === 'function' )
	);


