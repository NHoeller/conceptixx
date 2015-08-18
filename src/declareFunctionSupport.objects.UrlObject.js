/**
* @project : modula
* @package : core
* @internal : declareFunctionSupport.objects.UrlObject
* @type : function
* @dependencies :	defaults
*/


	/**
	 * defines if have to use the modula UrlObject or if we can use the native URL Object instead
	 * 
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/URL
	 */
	_(
		_( [ 'Support' ] ) ,
		false ,
		[ 'UrlObject' ] ,
		!( typeof URL === 'function' )
	);


