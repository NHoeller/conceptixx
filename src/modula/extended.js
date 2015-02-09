/**
 * @project : modula.js
 * @package : core
 * @internal : modula.extended
 * @type : object
 * @dependencies : none
 *
 * @description :
 * the modula.extended is the object used when a selector is given to the modula.js
 * this object contains the basic functionality as well as the extended DOM functions
 * and all extended modules
 */


	/**
	 * define modula.extended and it's prototype
	 */
	modula.extended = {

			version : version,

			constructor : modula,

			uid : 'extended.modula.js' + 1 * Date.now(),

			extend : Propertizer( 'extend' ),

//			task : tasks.create().ready( 'DOM'),

	};
	var
	extended = modula.extended.prototype = {
	};


	/**
	 * define init for modula.extended
	 */
	var
	extendedinit = modula.extended.init = function() {
	};


	/**
	 * bind prototype for further usage
	 */
	extendedinit.prototype = modula.extended;


