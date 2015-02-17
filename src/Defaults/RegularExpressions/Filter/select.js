/**
 * @project : modula.js
 * @package : 
 * @internal : Defaults.RegularExpressions.Filter.select
 * @type : object
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 * 					Defaults.RegularExpressions._define
 * 					Defaults.RegularExpressions.Filter._define
 * 					Regex._define
 */


			/**
			 * seperator like the comma in "div , div"
			 */
			// alternative 'Defaults( 'RegularExpressions' )( 'Filter' )[ 'SEPERATOR' ] = ...'
			Regex.Filter[ 'SEPERATOR' ] = new RegExp( "^\\s*,\\s*" );

			/**
			 * combinators are ">" , "+" , "~" and " "
			 */
			// alternative 'Defaults( 'RegularExpressions' )( 'Filter' )[ 'COMBINATOR' ] = ...'
			Regex.Filter[ 'COMBINATOR' ] = new RegExp( "^\\s*([>+~]|\\s)\\s*" );


