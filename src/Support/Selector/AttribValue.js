/**
 * @project : modula.js
 * @package : 
 * @internal : Support.Selector.AttribValue
 * @type : function / Declaration
 * @dependencies :	Support.Support
 * 					Defaults.Defaults
 * 					Support.Selector.AttribNodes
 */


	/**
	 * support attribute "value"
	 * in some versions of IE its better to take defaultValue
	 */
	_(
		true ,
		[ 'Support' , 'Selector' , 'AttribValue' ] ,
		_( [ 'Support' , 'AttribNodes' ] ) === false && 
		Support(
			function( div ) {
				div.innerHTML = '<input/>';
				div.firstChild.setAttribute( 'value' , '' );
				return div.firstChild.getAttribute( 'value' ) === '';
			}
		)
	);


