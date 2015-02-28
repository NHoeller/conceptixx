/**
 * @project : modula.js
 * @package : 
 * @internal : Support.Selector.QuerySelector.hasQSA
 * @type : function / Declaration
 * @dependencies :	Support.Support
 * 					Defaults.Defaults
 */


	/**
	 * Support for querySelectorAll
	 * not all browser support the querySelectorAll function
	 */
	_(
		true ,
		[ 'Support' , 'Selector' , 'QuerySelector' , 'hasQSA' ] ,
		isNative( root.querySelectorAll )
	);


