/**
 * @project : modula
 * @package : core
 * @internal : declareFunctionType
 * @type : function
 * @dependencies :	object
 * 					defaults
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
		var value ,
		regex = type._Regex || ( type._Regex = new RegExp( "^(?:\\[object\\s([^\\]]*)\\])$" ) );
		return ( ( value = regex.exec( toString( obj ) ) ) ) && value && value[1] || obj;
	};


