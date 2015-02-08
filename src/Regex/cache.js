/**
 * @project : modula.js
 * @package : Regex
 * @internal : Regex.cache
 * @type : object
 * @dependencies : functions.Propertizer , Strings.bools
 *
 * @description :
 * the 'Regex' contains regular expressions for the modula.js
 */


		// cache is a regular expression that is used for the selector manual caching
		cache : new RegExp("^(?:([+](?=[\\w\\|%]))?([\\w]*[\\w](?=[\\|%]))?(?:([\\|])" +
			"(?=[\\d%]))?([\\d]*)?%)?(?:\\s*(.*))?$")


