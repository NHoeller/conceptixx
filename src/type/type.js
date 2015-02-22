/**
 * @project : modula.js
 * @package : core
 * @internal : type.type
 * @type : function
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 * 					Defaults.RegularExpressions._define
 * 					Defaults.RegularExpressions.types
 * 					Regex._define
 * 					_object.object
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
	// alternative line:28 'regex = type._Regex || ( type._Regex = Regex.types );'
	var
	type = function( obj ) {
		var value ,
		regex = type._Regex || ( type._Regex = Defaults( [ 'RegularExpressions' , 'types' ] ) );
		return ( ( value = regex.exec( toString( obj ) ) ) ) && value && value[1] || obj;
	};

