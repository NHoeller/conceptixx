/**
 * @project : modula.js
 * @package : 
 * @internal : Defaults.RegularExpressions.Filter.pseudo
 * @type : object
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 * 					Defaults.RegularExpressions._define
 * 					Defaults.RegularExpressions.Filter._define
 * 					Regex._define
 */


			/**
			 * child/of-type selector like ":first-child"
			 */
			// alternative 'Defaults( 'RegularExpressions' )( 'Filter' )[ 'CHILD' ] = ...'
			Regex.Filter[ 'CHILD' ] = new RegExp( "^:(first|last|(nth)(?:-last)?|only)-(child|of-type)(?:\\(" +
				"\\s*(even|odd|(?:([+-]|)(\\d*)n|)\\s*(?:([+-]|)\\s*(\\d+)|))\\s*\\)|)", "i");

			/**
			 * other pseudos like "::before"
			 */
			// alternative 'Defaults( 'RegularExpressions' )( 'Filter' )[ 'PSEUDO' ] = ...'
			Regex.Filter[ 'PSEUDO' ] = new RegExp( "^(:(?::)?[\\w-]+)(?:\\(((?:'((?:\\\\.|[^\\\\'])*)'|" +
				"\"((?:\\\\.|[^\\\\\"])*)\")|.*)\\))?" );


