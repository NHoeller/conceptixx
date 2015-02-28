/**
 * @project : modula.js
 * @package : 
 * @internal : Support.Selector.ElementsById
 * @type : function / Declaration
 * @dependencies :	Support.Support
 * 					Defaults.Defaults
 */


	/**
	 * Support for getElementById
	 * some browser also return id on getElementsByName
	 * @return [boolean]
	 * true = we need to use supporting functions
	 * false = no support needed
	 */
	_(
		true ,
		[ 'Support' , 'Selector' , 'ElementsById' ] ,
		Support(
			function( div ) {
				root.appendChild( div ).id = uid;
				return !doc.getElementsByName || !doc.getElementsByName( uid ).length;
			}
		)
	);


