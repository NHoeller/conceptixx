/**
 * @project : modula.js
 * @package : core
 * @internal : isFunction.isFunction
 * @type : function
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 * 					Defaults.RegularExpressions._define
 * 					Defaults.RegularExpressions.types
 * 					Regex._define
 * 					_object.object
 * 					type.type
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


