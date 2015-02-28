/**
 * @project : modula.js
 * @package : 
 * @internal : Support.Selector.ElementsByTagName
 * @type : function / Declaration
 * @dependencies :	Support.Support
 * 					Defaults.Defaults
 */


	/**
	 * Support for getElementsByTagName
	 * some Browser return also comments
	 */
	_(
		true ,
		[ 'Support' , 'Selector' , 'ElementsByTagName' ] ,
		Support(
			function( div ) {
				div.appendChild( doc.createComment( '' ) );
				return !div.getElementsByTagName( '*' ).length;
			}
		)
	);


