/**
 * @project : modula
 * @package : core, support, selector
 * @internal : declareFunctionSupport.selector.attribTypes
 * @type : declaration
 * @dependencies :	support
 * 					defaults
 */


	/**
	 * support attribute (type,href,width,heigth)
	 * in some browsers the geAttribute returns incorrect results
	 */
	_(
		true ,
		[ 'support' , 'selector' , 'attribTypes' ] ,
		!support( function( div ) {
			div.innerHTML = '<a href=\'#\'></a>';
			return div.firstChild.getAttribute( 'href' ) === '#';
			}
		)
	);


