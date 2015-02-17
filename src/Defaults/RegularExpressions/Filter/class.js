/**
 * @project : modula.js
 * @package : 
 * @internal : Defaults.RegularExpressions.Filter.class
 * @type : object
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 * 					Defaults.RegularExpressions._define
 * 					Defaults.RegularExpressions.Filter._define
 * 					Regex._define
 */


			/**
			 * class selector ".class"
			 */
			// alternative 'Defaults( 'RegularExpressions' )( 'Filter' )[ 'CLASS' ] = ...'
			Regex.Filter[ 'CLASS' ] = new RegExp( "^\\.([\\w-]+)");


