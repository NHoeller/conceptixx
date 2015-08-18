/**
 * @project : modula
 * @package : core, defaults, regex
 * @internal : declareFunctionDefaults.regex.types
 * @type : Regular Expression
 * @dependencies :	defaults
 */


		/**
		 * object type regular expression
		 */
		_( true , [ 'regex' , 'types' ] , new RegExp( "^(?:\\[object\\s([^\\]]*)\\])$" ) );


