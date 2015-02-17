/**
 * @project : modula.js
 * @package : core
 * @internal : functions.combine
 * @type : function
 * @dependencies : none
 *
 * @description :
 * combines 2 arraylike objects by adding the second one to the first
 * this effects only numeric indices. objects will added as reference
 */


	/**
	 * combines 2 arraylike objects by adding the second one to the first
	 */
	var
	combine = function( source , target ) {
		// define some variables
		var tlen = target.length , slen = source.length || 0 , i;
		// loop target's elements
		for( i = 0 ; i < tlen ; i++ ) {
			// add current target's element to source
			source[slen++] = target[i];
		};
		// addjust source's length property
		source.length = slen;
	};


