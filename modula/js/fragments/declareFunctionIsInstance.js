/**
 * @project : modula
 * @package : core
 * @internal : declareFunctionIsInstance
 * @type : function
 * @dependencies :	none
 *
 * @description :
 * isInstance checks for a given instance or modula if inst left empty
 */


	/**
	 * isInstance function checks for modula objects
	 */
	var
	isInstance = function( obj , inst ) {
		// if inst is omitted use 'modula' instead
		inst = inst || modula;
		// return result
		return ( obj instanceof inst );
	};


