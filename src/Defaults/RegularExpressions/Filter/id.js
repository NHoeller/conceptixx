/**
 * @project : modula.js
 * @package : 
 * @internal : Defaults.RegularExpressions.Filter.id
 * @type : object
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 * 					Defaults.RegularExpressions._define
 * 					Defaults.RegularExpressions.Filter._define
 * 					Regex._define
 */


			/**
			 * id selector "#id"
			 */
			// alternative 'Defaults( 'RegularExpressions' )( 'Filter' )( 'ID' , new ... );'
			Regex.Filter[ 'ID' ] = new RegExp( "^#([\\w-]+)" );


