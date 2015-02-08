/**
 * @project : modula.js
 * @package : Regex
 * @internal : Regex.filter.Select.not
 * @type : object
 * @dependencies : Propertizer , Strings.bools
 *
 * @description :
 * the 'Regex' contains regular expressions for the modula.js
 */


			// not statements like ":not(p)" also support qualified selectors ":not(p>p>p)"
			"NOT" : new RegExp( "^(:not\\s*(?:\\())" ),

			// delimiter ")" is used only for the qualified selectors on not statements
			"DELIMITER" : new RegExp( "^(\\))" ),


