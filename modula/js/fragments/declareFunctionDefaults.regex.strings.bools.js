/**
 * @project : modula
 * @package : core, strings, defaults, regex
 * @internal : declareFunctionDefaults.regex.strings.bools
 * @type : RegularExpression
 * @dependencies :	defaults
 * 					defaults.strings.bools
 */


		/**
		 * boolean attributes
		 */
		_( true , [ 'regex' , 'bools' ] , new RegExp( "^(" +
			_( [ 'strings' , 'bools' ] ) + ")$" ) );


