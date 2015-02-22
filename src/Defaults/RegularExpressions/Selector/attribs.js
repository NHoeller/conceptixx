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
		// alternative line:20 'Regex[ 'Selector' ].attribs = new RegExp( "\\s*([\\w-]+)(?:\\s*(=)\\s*(?:(?:" +
		// alternative line:20 '"\"((?:\\\\.|[^\\\\\"])*)\")|(?:'((?:\\\\.|[^\\\\'])*)')|([^\\s]*)))?" , 'g' );
		Defaults( true , [ 'RegularExpressions' , 'Selector' , 'attribs' ] , new RegExp( "\\s*([\\w-]+)(?:" +
			"\\s*(=)\\s*(?:(?:\"((?:\\\\.|[^\\\\\"])*)\")|(?:'((?:\\\\.|[^\\\\'])*)')|([^\\s]*)))?" , 'g' ) );


