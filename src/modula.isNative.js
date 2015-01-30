/**
 * @project : modula.js
 * @package : core
 * @internal : isNative
 * @type : function
 * @dependencies : none
 *
 * @description :
 * the Support is used to build crossbrowser compatible modula.js
 * functions. the results will be stored to the Support-object
 * 
 * @example
 * console.log( isNative( function() {} ) ); // logs "false" to console
 * console.log( isNative( alert ) ); // logs "true" to console
 */


	/**
	 * isNative checks for native functions
	 */
	var
	isNative = function( fn ) {
		var regex = new RegExp( "^[^{]*\\{\\s*\\[native \\w" );
		return regex.test( fn );
	};


