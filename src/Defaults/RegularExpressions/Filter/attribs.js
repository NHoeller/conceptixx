/**
 * @project : modula.js
 * @package : 
 * @internal : Defaults.RegularExpressions.Filter.attribs
 * @type : object
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 * 					Defaults.RegularExpressions._define
 * 					Defaults.RegularExpressions.Filter._define
 * 					Regex._define
 */


			/**
			 * attribute selector '[attribute=value]'
			 */
			// alternative 'Defaults( 'RegularExpressions' )( 'Filter' )( 'ATTR' , new ... );'
			Regex.Filter[ 'ATTR' ] = new RegExp( "^\\[\\s*(?:([\\w-]+\\|)?([\\w-]+)\\s*)(?:(?:((?:~|\\^|\\$|" +
				"\\*|\\||!)?=)\\s*(?:(?:\"((?:\\\\.|[^\\\\\"])*)\")|(?:'((?:\\\\.|[^\\\\'])*" +
				")')|(?:([^\\]]*)))?)?)\\s*\\]" );


