/**
 * @project : modula.js
 * @package : core
 * @internal : isString.isString
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
 * isArray checks if an object is an array
 */


	/**
	 * checks if object is a String
	 */
	var
	isString = function( obj ) {
		return type( obj ) === 'String';
	};


