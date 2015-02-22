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
			// alternative line:19-21 'Regex.Filter[ 'CHILD' ] ='
			// alternative line:24 ';'
			Defaults(
				true ,
				[ 'RegularExpressions' , 'Filter' , 'CHILD' ] ,
				new RegExp( "^:(first|last|(nth)(?:-last)?|only)-(child|of-type)(?:\\(" +
				"\\s*(even|odd|(?:([+-]|)(\\d*)n|)\\s*(?:([+-]|)\\s*(\\d+)|))\\s*\\)|)", "i")
				,

			/**
			 * other pseudos like "::before"
			 */
			// alternative line:31-32 'Regex.Filter[ 'PSEUDO' ] = '
			// alternative line:35 ';'
				true ,
				[ 'RegularExpressions' , 'Filter' , 'PSEUDO' ] , 
				new RegExp( "^(:(?::)?[\\w-]+)(?:\\(((?:'((?:\\\\.|[^\\\\'])*)'|" +
				"\"((?:\\\\.|[^\\\\\"])*)\")|.*)\\))?" )
			) ;


