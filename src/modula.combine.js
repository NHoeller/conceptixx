/**
 * @project : modula.js
 * @package : core
 * @internal : containsAll
 * @type : function
 * @dependencies : isArraylike , indexOf
 *
 * @description :
 * checks if all values of needle or needle itself are values from target (array)
 * 
 * @example :
 * containsAll( [ 1 , 2 , 3 ] , [ 4 , 3 , 1 , 2 ] ) // results true
 * containsAll( [ 4 , 3 , 1 , 2 ] , [ 1 , 2 , 3 ] ) // results false
 * containsAll( "apple" , [ "orange" , "banana" , "apple" ] // returns true
 */


	/**
	 * combines 2 arraylike objects by adding the second one to the first
	 * this effects only numeric indices. objects will added as reference
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


