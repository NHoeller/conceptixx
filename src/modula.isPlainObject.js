/**
 * @project : modula.js
 * @package : core
 * @internal : isPlainObject
 * @type : function
 * @dependencies : type , isWindow
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
	 * 
	 * Not plain objects:
	 * - Any object or value whose internal [[Class]] property is not "[object Object]"
	 * - DOM nodes
	 * - window
	 */
	isPlainObject = function( obj ) {
		// check for DOM node and window
		if ( type( obj ) !== "Object" || obj.nodeType || isWindow( obj ) ) {
			return false;
		};
		// check constructor and prototype
		if ( obj.constructor && !hasOwnProperty( obj.constructor.prototype , "isPrototypeOf" ) ) {
			return false;
		};
		// if test were passed we have a plain object
		return true;
	};


