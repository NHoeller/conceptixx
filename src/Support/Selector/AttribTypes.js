/**
 * @project : modula.js
 * @package : 
 * @internal : Support.Selector.AttribTypes
 * @type : function / Declaration
 * @dependencies :	Support.Support
 * 					Defaults.Defaults
 */


	/**
	 * Support attribute (type,href,width,heigth)
	 * in some browsers the geAttribute returns incorrect results
	 */
	_(
		true ,
		[ 'Support' , 'Selector' , 'AttribTypes' ] ,
		!Support( function( div ) {
			div.innerHTML = '<a href=\'#\'></a>';
			return div.firstChild.getAttribute( 'href' ) === '#';
			}
		)
	);


