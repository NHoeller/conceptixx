/**
 * @project : modula
 * @package : core, support, selector
 * @internal : declareFunctionSupport.selector.attribNodes
 * @type : declaration
 * @dependencies :	support
 * 					defaults
 */


	/**
	 * support for AttribNodes
	 * prevent getting properties instead attributes
	 */
	_(
		true ,
		[ 'support' , 'selector' , 'attribNodes' ] ,
		support(
			function( div ) {
				div.className = uid;
				return !div.getAttribute( 'className' );
			}
		)
	);
