/**
 * @project : modula
 * @package : core, defaults, regex
 * @internal : declareFunctionDefaults.regex.trim
 * @type : Regular Expression
 * @dependencies :	defaults
 */


		/**
		 * trim and escaping
		 */
		_( true , [ 'regex' , 'trim' ] , new RegExp( "^\\s*|\\s*$" , 'g' ) );


