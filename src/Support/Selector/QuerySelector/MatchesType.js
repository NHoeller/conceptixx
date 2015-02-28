/**
 * @project : modula.js
 * @package : 
 * @internal : Support.Selector.QuerySelector.hasQSA
 * @type : function / Declaration
 * @dependencies :	Support.Support
 * 					Defaults.Defaults
 * 					isNative.isNative
 */


	/**
	 * Support for querySelectorAll
	 * not all browser support the querySelectorAll function
	 */
	_(
		true ,
		[ 'Support' , 'Selector' , 'QuerySelector' , 'MatchesType' ] ,
		(
			function() {
				var matches;
				return isNative( ( matches = root.matches || root.webkitMatchesSelector ||
				root.mozMatchesSelector || root.oMatchesSelector ||
				root.msMatchesSelector ) ) && matches.name || false; 
			}
		)()
	);


