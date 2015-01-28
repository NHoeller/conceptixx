/**
 * @project : modula.js
 * @package : core
 * @internal : isInstance
 * @type : function
 * @dependencies : none
 *
 * @description :
 * isInstance checks for a given instance or modula if left empty
 */

	/**
	 * isInstance function checks for modula objects
	 */
	isInstance = function( obj , inst ) {
		inst = inst||modula;
		return ( obj instanceof inst );
	};