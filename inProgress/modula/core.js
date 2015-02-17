/**
 * @project : modula.js
 * @package : core
 * @internal : modula.core
 * @type : object
 * @dependencies : none
 *
 * @description :
 * the modula.core is the object used when NO selector is given to the modula.js
 * here in are only the basic functions available
 */


	/**
	 * define modula.core and it's prototype
	 */
	modula.core = {

		version : version,

		constructor : modula,

		uid : 'modula.js' + 1 * Date.now(),

		extend : Propertizer( 'extend' ),

//		task : tasks.create(),

	};


	/**
	 * define enhanced core
	 */
	var enhanced = {	
	}

	/**
	 * define core
	 */
	var
	core = modula.core.prototype = {};


	/**
	 * define init for modula.core
	 */
	var
	coreinit = modula.core.init = function() {};


	/**
	 * bind prototype for further usage
	 */
	coreinit.prototype = modula.core;


