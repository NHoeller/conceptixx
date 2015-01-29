/**
 * @project : modula.js
 * @package : select
 * @internal : Regex
 * @type : object
 * @dependencies : none
 *
 * @description :
 * the 'Regex' contains regular expressions for the modula.js
 */


	/**
	 * define regular expressions for selector engine
	 */
	Regex = {
		// trim and escaping
		trim : new RegExp( "^\\s*|\\s*$" , "g" ),

		// newTag matches new html/xml tags and their attributes
		newTag : new RegExp("^\\<([\\w-]+)(?:\\s*)((?:[^\\>]|[\\/](?!\\>$))*)(?:\\/)?\\>$"),

		// attribs matches attributes with or without assignment
		attribs : new RegExp("\\s*([\\w-]+)(?:\\s*(=)\\s*" +
				"(?:(?:\"((?:\\\\.|[^\\\\\"])*)\")|(?:'((?:\\\\.|[^\\\\'])*)')|([^\\s]*)))?","g"),

		// boolean attributes
		bools : new RegExp("^("+Strings.bools+")$"),

		// filter : contains single regex tasks
		filter : {
			/*
			 * see http://www.w3schools.com/cssref/css_selectors.asp or
			 * http://www.w3.org/TR/#tr_CSS for further details
			 */

			// seperator like the comma in "div , div"
			"SEPERATOR" : new RegExp( "^\\s*,\\s*" ),

			// combinators are ">" , "+" , "~" and " "
			"COMBINATOR" : new RegExp( "^\\s*([>+~]|\\s)\\s*" ),

			// backmark is used for selectors level 4 "div > !div  > div"
			"BACKMARK" : new RegExp( "^!" ),

			// id selector "#id"
			"ID" : new RegExp( "^#([\\w-]+)" ),

			// class selector ".class"
			"CLASS" : new RegExp( "^\\.([\\w-]+)"),

			// tag selector "div"
			"TAG" : new RegExp( "^(?:(?:\\*|[\\w-]+)\\|)?(\\*|[\\w-]+)" ),

			// attribute selector "[attribute=value]"
			"ATTR" : new RegExp( "^\\[\\s*(?:([\\w-]+\\|)?([\\w-]+)\\s*)(?:(?:((?:~|\\^|\\$|" +
				"\\*|\\||!)?=)\\s*(?:(?:\"((?:\\\\.|[^\\\\\"])*)\")|(?:'((?:\\\\.|[^\\\\'])*" +
				")')|(?:([^\\]]*)))?)?)\\s*\\]" ),

			// child selector ":first-child"
			"CHILD" : new RegExp( "^:(first|last|(nth)(?:-last)?|only)-(child|of-type)(?:\\(" +
				"\\s*(even|odd|(?:([+-]|)(\\d*)n|)\\s*(?:([+-]|)\\s*(\\d+)|))\\s*\\)|)", "i"),

			// not statements like ":not(p)" also support qualified selectors ":not(p>p>p)"
			"NOT" : new RegExp( "^(:not\\s*(?:\\())" ),

			// other pseudos "::before"
			"PSEUDO" : new RegExp( "^(:(?::)?[\\w-]+)(?:\\(((?:'((?:\\\\.|[^\\\\'])*)'|" +
				"\"((?:\\\\.|[^\\\\\"])*)\")|.*)\\))?" ),

			// delimiter ")" is used only for the qualified selectors on not statements
			"DELIMITER" : new RegExp( "^(\\))" ),

		},

		// the quick objet is an extendable object for the quick detection
		quick : {},

		// cache is a regular expression that is used for the selector manual caching
		cache : new RegExp("^(?:([+](?=[\\w\\|%]))?([\\w]*[\\w](?=[\\|%]))?(?:([\\|])" +
			"(?=[\\d%]))?([\\d]*)?%)?(?:\\s*(.*))?$")
	};