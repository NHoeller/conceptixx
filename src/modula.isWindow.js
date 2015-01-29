/**
 * @project : modula.js
 * @package : core
 * @internal : isWindow
 * @type : function
 * @dependencies : none
 *
 * @description :
 * isWindow checks if an object is a window object
 * 
 */


	/**
	 * check if object is the window object
	 */
	isWindow = function( obj ) {
		return !!obj && obj === obj.window;
	};