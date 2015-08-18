/**
 * @project : modula.js
 * @package : core
 * @internal : type.type
 * @type : function
 * @dependencies :	_object.object
 * 					Defaults.Defaults
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
		regex = type._Regex || ( type._Regex = _( [ 'RegularExpressions' , 'types' ] ) );
		return ( ( value = regex.exec( toString( obj ) ) ) ) && value && value[1] || obj;
	};


