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
			// alternative line:19-21 'Regex.Filter[ 'NOT' ] = '
			// alternative line:23 ';'
			Defaults(
				true ,
				[ 'RegularExpressions' , 'Filter' , 'NOT' ] , 
				new RegExp( "^(:not\\s*(?:\\())" )
				,

			/**
			 * delimiter ")" is used only for the qualified selectors on not statements
			 */
			// alternative line:30-31 'Regex.Filter[ 'DELIMITER' ] = '
			// alternative line:33 ';'
				true ,
				[ 'RegularExpressions' , 'Filter' , 'DELIMITER' ] ,
				new RegExp( "^(\\))" )
			) ;


