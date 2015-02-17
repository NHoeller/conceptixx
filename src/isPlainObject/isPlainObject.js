/**
 * @project : modula.js
 * @package : core
 * @internal : isPlainObject.isPlainObject
 * @type : function
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 * 					Defaults.RegularExpressions._define
 * 					Defaults.RegularExpressions.types
 * 					Regex._define
 * 					_object.object
 * 					type.type
 * 					isWindow.isWindow
 *
 * @description :
 * isPlainObject checks if we have a plain object
 * Not plain objects:
 * - Any object or value whose internal [[Class]] property is not "[object Object]"
 * - DOM nodes
 * - window
 * 
 * @notice : this function is taken from the jQuery sourcecode
 */


	/**
	 * isPlainObject
	 */
	var
	isPlainObject = function( obj ) {
		// check for DOM node and window
		if ( type( obj ) !== 'Object' || obj.nodeType || isWindow( obj ) ) {
			return false;
		};
		// check constructor and prototype
		if ( obj.constructor && !hasOwnProperty( obj.constructor.prototype , 'isPrototypeOf' ) ) {
			return false;
		};
		// if test were passed we have a plain object
		return true;
	};


