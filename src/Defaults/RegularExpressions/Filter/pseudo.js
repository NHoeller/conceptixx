/**
 * @project : modula.js
 * @package : 
 * @internal : Defaults.RegularExpressions.Filter.pseudo
 * @type : object
 * @dependencies :	Defaults.Defaults
 */


			/**
			 * child/of-type selector like ":first-child"
			 */
			_(
				true ,
				[ 'RegularExpressions' , 'Filter' , 'CHILD' ] ,
				new RegExp( "^:(first|last|(nth)(?:-last)?|only)-(child|of-type)(?:\\(" +
				"\\s*(even|odd|(?:([+-]|)(\\d*)n|)\\s*(?:([+-]|)\\s*(\\d+)|))\\s*\\)|)", "i")
				,

			/**
			 * other pseudos like "::before"
			 */
				true ,
				[ 'RegularExpressions' , 'Filter' , 'PSEUDO' ] , 
				new RegExp( "^(:(?::)?[\\w-]+)(?:\\(((?:'((?:\\\\.|[^\\\\'])*)'|" +
				"\"((?:\\\\.|[^\\\\\"])*)\")|.*)\\))?" )
			) ;


