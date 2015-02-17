/**
 * @project : modula.js
 * @package : core
 * @internal : isArray.isArray
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
	 * checks if object is an Array
	 */
	var
	isArray = Array.prototype.isArray || function( obj ) {
		return type( obj ) === 'Array';
	};


