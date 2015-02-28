/**
 * @project : modula.js
 * @package : 
 * @internal : Defaults.RegularExpressions.Filter.not
 * @type : object
 * @dependencies :	Defaults.Defaults
 */


			/**
			 * not statements like ":not(p)" also support qualified selectors ":not(p>p>p)"
			 */
			_(
				true ,
				[ 'RegularExpressions' , 'Filter' , 'NOT' ] , 
				new RegExp( "^(:not\\s*(?:\\())" )
				,

			/**
			 * delimiter ")" is used only for the qualified selectors on not statements
			 */
				true ,
				[ 'RegularExpressions' , 'Filter' , 'DELIMITER' ] ,
				new RegExp( "^(\\))" )
			) ;


