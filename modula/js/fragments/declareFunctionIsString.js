/**
 * @project : modula
 * @package : core
 * @internal : declareFunctionIsString
 * @type : function
 * @dependencies :	type
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


