/**
 * @project : modula.js
 * @package : RegularExpressions , Defaults
 * @internal : Defaults.RegularExpressions.types
 * @type : Regular Expression
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 * 					Defaults.RegularExpressions._define
 * 					Regex._define
 */


		/**
		 * object type regular expression
		 */
		// alternative 'Defaults( 'RegularExpressions' )( 'types' , = new ... );'
		Regex.types = new RegExp( "^(?:\\[object\\s([^\\]]*)\\])$" );


