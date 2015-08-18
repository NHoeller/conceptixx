/**
 * @project : modula
 * @package : core
 * @internal : declareFunctionIsWindow
 * @type : function
 * @dependencies : none
 *
 * @description :
 * isWindow checks if an object is a window object
 */


	/**
	 * check if object is the window object
	 */
	var
	isWindow = function( obj ) {
		return !!obj && obj === obj.window;
	};


