/**
 * @project : modula.js
 * @package : Regex
 * @internal : Regex.newTag
 * @type : object
 * @dependencies : functions.Propertizer , Strings.bools
 *
 * @description :
 * the 'Regex' contains regular expressions for the modula.js
 */


		// newTag matches new html/xml tags and their attributes
		newTag : new RegExp("^\\<([\\w-]+)(?:\\s*)((?:[^\\>]|[\\/](?!\\>$))*)(?:\\/)?\\>$"),


