/**
 * @project : modula.js
 * @package : 
 * @internal : Defaults.RegularExpressions.Filter.backmark
 * @type : object
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 * 					Defaults.RegularExpressions._define
 * 					Defaults.RegularExpressions.Filter._define
 * 					Regex._define
 */


			/**
			 * backmark is used for selectors level 4 "div > !div  > div"
			 */
			// alternative 'Regex.Filter[ 'BACKMARK' ] = new RegExp( "^!" );'
			Defaults( true , [ 'RegularExpressions' , 'Filter' , 'BACKMARK' ] , new RegExp( "^!" ) );


