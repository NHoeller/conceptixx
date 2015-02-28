/**
 * @project : modula.js
 * @package : RegularExpressions , Defaults
 * @internal : Defaults.RegularExpressions.bools
 * @type : Regular Expression
 * @dependencies :	Defaults.Defaults
 * 					Defaults.Strings.bools
 */


		/**
		 * boolean attributes
		 */
		// alternative 'Regex.bools = new RegExp( "^(" + Strings.bools + ")$" );'
		_( true , [ 'RegularExpressions' , 'bools' ] , new RegExp( "^(" +
			_( [ 'Strings' , 'bools' ] ) + ")$" ) );


