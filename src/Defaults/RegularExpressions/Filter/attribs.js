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
			// alternative line:19-21 'Regex.Filter[ 'ATTR' ] = '
			// alternative line:25 ';'
			Defaults(
				true ,
				[ 'RegularExpressions' , 'Filter' , 'ATTR' ] , 
				new RegExp( "^\\[\\s*(?:([\\w-]+\\|)?([\\w-]+)\\s*)(?:(?:((?:~|" +
				"\\^|\\$|\\*|\\||!)?=)\\s*(?:(?:\"((?:\\\\.|[^\\\\\"])*)\")|(?:" +
				"'((?:\\\\.|[^\\\\'])*)')|(?:([^\\]]*)))?)?)\\s*\\]" )
			);


