/**
 * @project : modula.js
 * @package : core
 * @internal : modula.modula
 * @type : constructor / function
 * @dependencies : modulaCore , modula.core.init , modula.extended.init
 *
 * @description :
 * modula is the basic constructor function of the modula.js
 */


	/**
	 * define modula
	 */
	var
	modula = function( selector , context ) {
		// check for empty selector (null, false, undefined and '')
		if( !selector ) {
			// return core object (basic functions)
			return self || new modula.core.init();
		};
		// if we have a selector return core object ( with enhanced functions)
		return new modula.core.init( selector , context );
	};


