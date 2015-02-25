/**
 * @project : modula.js
 * @package : RegularExpressions , Defaults
 * @internal : Defaults.RegularExpressions.bools
 * @type : Regular Expression
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 * 					Defaults.RegularExpressions._define
 * 					Defaults.Strings._define
 * 					Regex._define
 * 					Strings._define
 */


		/**
		 * boolean attributes
		 */
		// alternative 'Regex.bools = new RegExp( "^(" + Strings.bools + ")$" );'
		Defaults( true , [ 'RegularExpressions' , 'bools' ] , new RegExp( "^(" +
			Defaults( [ 'Strings' , 'bools' ] ) + ")$" ) );

