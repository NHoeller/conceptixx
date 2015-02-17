/**
 * @project : modula.js
 * @package : RegularExpressions , Defaults
 * @internal : Defaults.RegularExpressions.Selector.attribs
 * @type : Regular Expression
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 * 					Defaults.RegularExpressions._define
 * 					Defaults.RegularExpressions.Selector._define
 * 					Regex._define
 * 					Regex.Selector._define
 */


		/**
		 * attribs matches attributes with or without assignment
		 */
		// alternative Defaults( 'RegularExpressions' )( 'Selector' )( 'attribs' , ... );'
		Regex[ 'Selector' ].attribs = new RegExp( "\\s*([\\w-]+)(?:\\s*(=)\\s*(?:(?:" +
			"\"((?:\\\\.|[^\\\\\"])*)\")|(?:'((?:\\\\.|[^\\\\'])*)')|([^\\s]*)))?" , 'g' );


