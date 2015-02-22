/**
 * @project : modula.js
 * @package : 
 * @internal : Defaults.RegularExpressions.Filter.select
 * @type : object
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 * 					Defaults.RegularExpressions._define
 * 					Defaults.RegularExpressions.Filter._define
 * 					Regex._define
 */


			/**
			 * seperator like the comma in "div , div"
			 */
			// alternative line:18-22 'Regex.Filter[ 'SEPERATOR' ] = new RegExp( "^\\s*,\\s*" );'
			Defaults(
				true , 
				[ 'RegularExpressions' , 'Filter' , 'SEPERATOR' ] , 
				new RegExp( "^\\s*,\\s*" )
				,

			/**
			 * combinators are ">" , "+" , "~" and " "
			 */
			// alternative line:28-31 'Regex.Filter[ 'COMBINATOR' ] = new RegExp( "^\\s*([>+~]|\\s)\\s*" );'
				true ,
				[ 'RegularExpressions' , 'Filter' , 'COMBINATOR' ] , 
				new RegExp( "^\\s*([>+~]|\\s)\\s*" )
			);


