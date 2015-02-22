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
		// alternative line:20 'Regex[ 'Selector' ].cache = new RegExp( "^(?:([+](?=[\\w\\|%]))?([\\w]*" +
		// alternative line:21 '"[\\w](?=[\\|%]))?(?:([\\|])(?=[\\d%]))?([\\d]*)?%)?(?:\\s*(.*))?$" );'
		Defaults( true , [ 'RegularExpressions' , 'Selector' , 'cache' ] , new RegExp( "^(?:([+](?=" +
			"[\\w\\|%]))?([\\w]*[\\w](?=[\\|%]))?(?:([\\|])(?=[\\d%]))?([\\d]*)?%)?(?:\\s*(.*))?$" ) );


