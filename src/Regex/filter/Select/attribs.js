/**
 * @project : modula.js
 * @package : Regex
 * @internal : Regex.filter.Select.attribs
 * @type : object
 * @dependencies : Propertizer , Strings.bools
 *
 * @description :
 * the 'Regex' contains regular expressions for the modula.js
 */


			// attribute selector "[attribute=value]"
			"ATTR" : new RegExp( "^\\[\\s*(?:([\\w-]+\\|)?([\\w-]+)\\s*)(?:(?:((?:~|\\^|\\$|" +
				"\\*|\\||!)?=)\\s*(?:(?:\"((?:\\\\.|[^\\\\\"])*)\")|(?:'((?:\\\\.|[^\\\\'])*" +
				")')|(?:([^\\]]*)))?)?)\\s*\\]" ),


