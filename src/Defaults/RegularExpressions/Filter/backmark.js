/**
 * @project : modula.js
 * @package : 
 * @internal : Defaults.RegularExpressions.Filter.backmark
 * @type : object
 * @dependencies :	Defaults.Defaults
 */


			/**
			 * backmark is used for selectors level 4 "div > !div  > div"
			 */
			_( true , [ 'RegularExpressions' , 'Filter' , 'BACKMARK' ] , new RegExp( "^!" ) );


