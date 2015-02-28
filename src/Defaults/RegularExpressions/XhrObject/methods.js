/**
 * @project : modula.js
 * @package :
 * @internal : Defaults.RegularExpressions.XhrObject.url
 * @type : Regular Expression
 * @dependencies :	Defaults.Defaults
 */


		/**
		 * define regular expression for allowed request methods
		 */
		_( true , [ 'RegularExpressions' , 'XhrObject' , 'methods' ] , new RegExp( 
			"^(CONNECT|DELETE|GET|HEAD|OPTIONS|POST|PUT|TRACE|TRACK)$" ) );


