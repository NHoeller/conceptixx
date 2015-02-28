/**
 * @project : modula.js
 * @package : 
 * @internal : Defaults.RegularExpressions.Filter.attribs
 * @type : object
 * @dependencies :	Defaults.Defaults
 */


			/**
			 * attribute selector '[attribute=value]'
			 */
			_(
				true ,
				[ 'RegularExpressions' , 'Filter' , 'ATTR' ] , 
				new RegExp( "^\\[\\s*(?:([\\w-]+\\|)?([\\w-]+)\\s*)(?:(?:((?:~|" +
				"\\^|\\$|\\*|\\||!)?=)\\s*(?:(?:\"((?:\\\\.|[^\\\\\"])*)\")|(?:" +
				"'((?:\\\\.|[^\\\\'])*)')|(?:([^\\]]*)))?)?)\\s*\\]" )
			);


