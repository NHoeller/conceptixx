/**
 * @project : modula.js
 * @package : RegularExpressions , Defaults , Selector
 * @internal : Defaults.RegularExpressions.Selector.cache
 * @type : Regular Expression
 * @dependencies :	Defaults.Defaults
 */


		/**
		 * cache is a regular expression that is used for the selector manual caching
		 */
		_( true , [ 'RegularExpressions' , 'Selector' , 'cache' ] , new RegExp( 
			/**
			 * the caching regular expression is for internal detection
			 * 
			 *           seperator
			 *           |    endmark
			 *           |    |
			 * +cachename|1234%
			 * ||         |
			 * ||         interval
			 * |cachename
			 * refresh
			 */
			"^(?:([+](?=[\\w\\|%]))?([\\w]*[\\w](?=[\\|%]))?" +
			"(?:([\\|])(?=[\\d%]))?([\\d]*)?%)?(?:\\s*(.*))?$" )
		);


