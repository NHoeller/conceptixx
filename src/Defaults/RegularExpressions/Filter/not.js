/**
 * @project : modula.js
 * @package : 
 * @internal : Defaults.RegularExpressions.Filter.not
 * @type : object
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 * 					Defaults.RegularExpressions._define
 * 					Defaults.RegularExpressions.Filter._define
 * 					Regex._define
 */


			/**
			 * not statements like ":not(p)" also support qualified selectors ":not(p>p>p)"
			 */
			// alternative 'Defaults( 'RegularExpressions' )( 'Filter' )( 'NOT' , new ... );'
			Regex.Filter[ 'NOT' ] = new RegExp( "^(:not\\s*(?:\\())" );

			/**
			 * delimiter ")" is used only for the qualified selectors on not statements
			 */
			// alternative 'Defaults( 'RegularExpressions' )( 'Filter' )( 'DELIMITER' , new ... );'
			Regex.Filter[ 'DELIMITER' ] = new RegExp( "^(\\))" );


			// the Defaults() method can use combined
			// 'Defaults( 'RegularExpressions' )( 'Filter' )
			//		( 'NOT' , new ... , 'DELIMITER' , new ... );


