/**
 * @project : modula
 * @package : core
 * @internal : declareFunctionIsArray
 * @type : function
 * @dependencies :	defaults
 * 					type
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


