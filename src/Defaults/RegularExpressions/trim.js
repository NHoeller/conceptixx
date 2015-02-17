/**
 * @project : modula.js
 * @package : RegularExpressions , Defaults
 * @internal : Defaults.RegularExpressions.trim
 * @type : Regular Expression
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 * 					Defaults.RegularExpressions._define
 * 					Regex._define
 */


		/**
		 * trim and escaping
		 */
		// alternative 'Defaults( 'RegularExpressions' )( 'trim' , new ... );'
		Regex.trim = new RegExp( "^\\s*|\\s*$" , 'g' );


