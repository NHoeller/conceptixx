/**
 * @project : modula.js
 * @package : 
 * @internal : Support.Selector.QuerySelector.DisconnectedMatches
 * @type : function / Declaration
 * @dependencies :	Support.Support
 * 					Defaults.Defaults
 * 					Support.Selector.QuerySelector.MatchesType
 */


	/**
	 * Support for DisconnectedMatches
	 * @return [boolean]
	 * true =
	 * false = 
	 */
	_(
		true ,
		[ 'Support' , 'Selector' , 'QuerySelector' , 'DisconnectedMatches' ] ,
		_( [ 'Support' , 'Selector' , 'QuerySelector' , 'MatchesType' ] ) && 
		Support(
			function( div ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			return root[ _( [ 'Support' , 'Selector' , 'QuerySelector' , 'MatchesType' ] ) ].call( div , 'div' );
			}
		)
	);


