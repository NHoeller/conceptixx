/**
 * @project : modula.js
 * @package : Regex
 * @internal : Regex.attribs
 * @type : object
 * @dependencies : functions.Propertizer , Strings.bools
 *
 * @description :
 * the 'Regex' contains regular expressions for the modula.js
 */


		// attribs matches attributes with or without assignment
		attribs : new RegExp("\\s*([\\w-]+)(?:\\s*(=)\\s*" +
			"(?:(?:\"((?:\\\\.|[^\\\\\"])*)\")|(?:'((?:\\\\.|[^\\\\'])*)')|([^\\s]*)))?","g"),


