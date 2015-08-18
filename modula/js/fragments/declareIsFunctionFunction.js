/**
 * @project : modula.js
 * @package :
 * @internal : isFunction.isFunction
 * @type : function
 * @dependencies :	type.type
 *
 * @description :
 * isFunction checks if a given subject is a function
 */


	/**
	 * define isFunction
	 */
	var
	isFunction = function( subject ) {
		return type( subject ) === 'Function';
	};


