/**
 * @project : modula.js
 * @package : 
 * @internal : Defaults.Defaults.XhrObject.
 * @type : Regular Expression
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 * 					Defaults.RegularExpressions._define
 * 					Defaults.RegularExpressions.XhrObject._define
 * 					Regex._define
 * 					Regex.XhrObject._define
 */


		/**
		 * define ContentTypes as regular expressions
		 */
		// alternative 'Regex.XhrObject.ContentTypes = {'
		// alternative '};'
		Defaults(
			true,
			[ 'RegularExpressions' , 'XhrObject' , 'ContentTypes' ] ,
			{
				html : /html/,
				json : /json/,
				text : /text\/plain/,
				xml : /xml/,
			}
		);


