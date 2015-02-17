/**
 * @project : modula.js
 * @package : RegularExpressions , Defaults , Selector
 * @internal : Defaults.RegularExpressions.Selector.cache
 * @type : Regular Expression
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 * 					Defaults.RegularExpressions._define
 * 					Defaults.RegularExpressions.Selector._define
 * 					Regex._define
 * 					Regex.Selector._define
 */


		/**
		 * cache is a regular expression that is used for the selector manual caching
		 */
		// alternative Defaults( 'RegularExpressions' )( 'Selector' )( 'cache' , new ... );'
		Regex[ 'Selector' ].cache = new RegExp( "^(?:([+](?=[\\w\\|%]))?([\\w]*[\\w]" +
			"(?=[\\|%]))?(?:([\\|])(?=[\\d%]))?([\\d]*)?%)?(?:\\s*(.*))?$" );


