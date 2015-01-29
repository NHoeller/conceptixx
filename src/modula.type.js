/**
 * @project : modula.js
 * @package : core
 * @internal : type
 * @type : function
 * @dependencies : none
 *
 * @description :
 * type returns the object's type. the type will NOT be lower cased
 * 
 * @example
 * var myType = type( function() {} ); // result myType = "Function"
 */


	/**
	 * gets the type of an object
	 */
	type = function( obj ) {
		var regex = new RegExp("^(?:\\[object\\s([^\\]]*)\\])$") , value;
		return ( ( value = regex.exec( toString( obj ) ) ) ) && value && value[1] || obj;
	};