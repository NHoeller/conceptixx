/**
 * @project : modula
 * @package : core, support, selector, querySelector
 * @internal : declareFunctionSupport.selector.querySelectorAll.attribBools
 * @type : declaration
 * @dependencies :	support
 * 					defaults
 */


	/**
	 * support boolean attributes
	 * in some versions of IE its better to use getAttributeNode
	 * instead of getAttribute
	 */
		
	_(
		true ,
		[ 'support' , 'selector' , 'attribBools' ] ,
		support(
			function( div ) {
			return div.getAttribute( 'disabled' ) == null;
		})
	);
