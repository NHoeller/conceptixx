/**
 * @project : modula.js
 * @package : core
 * @internal : functions.type
 * @type : function
 * @dependencies :	Regex.types
 * 					functions.toString
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
	var
	type = function( obj ) {
		var value;
		return ( ( value = Regex.types.exec( toString( obj ) ) ) ) && value && value[1] || obj;
	};


