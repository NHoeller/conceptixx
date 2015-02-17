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
			// alternative 'Defaults( 'RegularExpressions' )( 'Filter' )( 'SEPERATOR' , new ... );'
			Regex.Filter[ 'SEPERATOR' ] = new RegExp( "^\\s*,\\s*" );

			/**
			 * combinators are ">" , "+" , "~" and " "
			 */
			// alternative 'Defaults( 'RegularExpressions' )( 'Filter' )( 'COMBINATOR' , new ... );'
			Regex.Filter[ 'COMBINATOR' ] = new RegExp( "^\\s*([>+~]|\\s)\\s*" );


			// the Defaults() method can use combined
			// 'Defaults( 'RegularExpressions' )( 'Filter' )
			//		( 'SEPERATOR' , new ... , 'COMBINATOR' , new ... );


