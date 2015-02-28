/**
 * @project : modula.js
 * @package : 
 * @internal : Defaults.RegularExpressions.Filter.select
 * @type : object
 * @dependencies :	Defaults.Defaults
 */


			/**
			 * seperator like the comma in "div , div"
			 */
			_(
				true , 
				[ 'RegularExpressions' , 'Filter' , 'SEPERATOR' ] , 
				new RegExp( "^\\s*,\\s*" )
				,

			/**
			 * combinators are ">" , "+" , "~" and " "
			 */
				true ,
				[ 'RegularExpressions' , 'Filter' , 'COMBINATOR' ] , 
				new RegExp( "^\\s*([>+~]|\\s)\\s*" )
			);


