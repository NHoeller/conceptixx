/**
 * @project : modula
 * @package : core
 * @internal : declareFunctionIsFunction
 * @type : function
 * @dependencies :	type
 *
 * @description :
 * isFunction checks if a given subject is a function
 */


	/**
	 * define isFunction
	 */
	var
	isFunction = function( subject ) {
		return type( subject ) === 'Function';
	};


