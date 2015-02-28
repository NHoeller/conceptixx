/**
 * @project : modula.js
 * @package : 
 * @internal : Defaults.RegularExpressions.Filter.tag
 * @type : object
 * @dependencies :	Defaults.Defaults
 */


			/**
			 * tag selector "div"
			 */
			_( true , [ 'RegularExpressions' , 'Filter' , 'TAG' ] , 
				new RegExp( "^(?:(?:\\*|[\\w-]+)\\|)?(\\*|[\\w-]+)" ) );


