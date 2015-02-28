/**
 * @project : modula.js
 * @package : 
 * @internal : Defaults.RegularExpressions.Filter.id
 * @type : object
 * @dependencies :	Defaults.Defaults
 */


			/**
			 * id selector "#id"
			 */
			_( true , [ 'RegularExpressions' , 'Filter' , 'ID' ] , new RegExp( "^#([\\w-]+)" ) );


