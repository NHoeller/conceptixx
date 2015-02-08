/**
 * @project : modula.js
 * @package : core
 * @internal : functions.isFunction
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
	isFunction = function( subject ) {
		return type( subject ) === "Function";
	};


