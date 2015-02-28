/**
 * @project : modula.js
 * @package : 
 * @internal : Support.Selector.AttribBools
 * @type : function / Declaration
 * @dependencies :	Support.Support
 * 					Defaults.Defaults
 */


	/**
	 * support boolean attributes
	 * in some versions of IE its better to use getAttributeNode
	 * instead of getAttribute
	 */
		
	_(
		true ,
		[ 'Support' , 'Selector' , 'AttribBools' ] ,
		Support(
			function( div ) {
			return div.getAttribute( 'disabled' ) == null;
		})
	);
