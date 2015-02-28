/**
 * @project : modula.js
 * @package : 
 * @internal : Support.Selector.AttribNodes
 * @type : function / Declaration
 * @dependencies :	Support.Support
 * 					Defaults.Defaults
 */


	/**
	 * Support for AttribNodes
	 * prevent getting properties instead attributes
	 */
	_(
		true ,
		[ 'Support' , 'Selector' , 'AttribNodes' ] ,
		Support(
			function( div ) {
				div.className = uid;
				return !div.getAttribute( 'className' );
			}
		)
	);
