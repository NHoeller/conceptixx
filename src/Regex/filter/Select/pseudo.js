/**
 * @project : modula.js
 * @package : Regex
 * @internal : Regex.filter.Select.pseudo
 * @type : object
 * @dependencies : Propertizer , Strings.bools
 *
 * @description :
 * the 'Regex' contains regular expressions for the modula.js
 */


			// child selector ":first-child"
			"CHILD" : new RegExp( "^:(first|last|(nth)(?:-last)?|only)-(child|of-type)(?:\\(" +
				"\\s*(even|odd|(?:([+-]|)(\\d*)n|)\\s*(?:([+-]|)\\s*(\\d+)|))\\s*\\)|)", "i"),

			// other pseudos "::before"
			"PSEUDO" : new RegExp( "^(:(?::)?[\\w-]+)(?:\\(((?:'((?:\\\\.|[^\\\\'])*)'|" +
				"\"((?:\\\\.|[^\\\\\"])*)\")|.*)\\))?" ),


