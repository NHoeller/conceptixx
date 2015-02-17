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
	var
	type = function( obj ) {
		var value;
		// alternative 'Defaults.RegularExpressions.types.exec( ...'
		// or 'Defaults( 'RegularExpressions' )[ 'types' ].exec
		return ( ( value = Regex.types.exec( toString( obj ) ) ) ) && value && value[1] || obj;
	};

