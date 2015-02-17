/**
 * @project : modula.js
 * @package : 
 * @internal : Defaults.RegularExpressions.Filter.tag
 * @type : object
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 * 					Defaults.RegularExpressions._define
 * 					Defaults.RegularExpressions.Filter._define
 * 					Regex._define
 */


			/**
			 * tag selector "div"
			 */
			// alternative 'Defaults( 'RegularExpressions' )( 'Filter' )( 'TAG' , new ... );'
			Regex.Filter[ 'TAG' ] = new RegExp( "^(?:(?:\\*|[\\w-]+)\\|)?(\\*|[\\w-]+)" );


