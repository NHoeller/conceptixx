/**
 * @project : modula.js
 * @package : core
 * @internal : isFunction
 * @type : function
 * @dependencies : type
 *
 * @description :
 * isFunction checks if a given subject is a function
 */


	/**
	 * define isFunction
	 */
	var
	isFunctions = function( subject ) {
		return type( subject ) === "function";
	};

