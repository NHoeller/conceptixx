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
			// alternative 'Regex.Filter[ 'ID' ] = new RegExp( "^#([\\w-]+)" );'
			Defaults( true , [ 'RegularExpressions' , 'Filter' , 'ID' ] , new RegExp( "^#([\\w-]+)" ) );


