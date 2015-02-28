/**
 * @project : modula.js
 * @package : RegularExpressions , Defaults
 * @internal : Defaults.RegularExpressions.Selector.attribs
 * @type : Regular Expression
 * @dependencies :	Defaults.Defaults
 */


		/**
		 * attribs matches attributes with or without assignment
		 */
		_( true , [ 'RegularExpressions' , 'Selector' , 'attribs' ] , new RegExp( "\\s*([\\w-]+)(?:" +
			"\\s*(=)\\s*(?:(?:\"((?:\\\\.|[^\\\\\"])*)\")|(?:'((?:\\\\.|[^\\\\'])*)')|([^\\s]*)))?" , 'g' ) );


