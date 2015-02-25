/**
 * @project : modula.js
 * @package :
 * @internal : Defaults.RegularExpressions.XhrObject.url
 * @type : Regular Expression
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 * 					Defaults.RegularExpressions._define
 * 					Defaults.RegularExpressions.XhrObject._define
 * 					Regex._define
 * 					Regex.XhrObject._define
 */


		/**
		 * define regular expression for allowed request methods
		 */
		// alternative line:19-20 'Regex[ 'XhrObject' ].url = new RegExp('
		Defaults( true , [ 'RegularExpressions' , 'XhrObject' , 'methods' ] , new RegExp( 
			"^(CONNECT|DELETE|GET|HEAD|OPTIONS|POST|PUT|TRACE|TRACK)$" ) );


