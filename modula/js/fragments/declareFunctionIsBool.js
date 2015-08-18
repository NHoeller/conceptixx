/**
 * @project : modula
 * @package : core
 * @internal : declareFunctionIsBool
 * @type : function
 * @dependencies :	none
 *
 * @description :
 * isBool checks if an argument is of type boolean
 */


	/**
	 * isBool
	 */
	var
	isBool = function( value ) {
		return typeof value === 'boolean';
	};


