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
	 * checks for existance of all indeces
	 */
	containsAll = function( needle , target ) {
		// define needle.length
		var len = needle.length;
		// if needle is not arraylike return check for indexOf on target
		if( !isArraylike( needle ) ) { return indexOf( target , needle ) !== -1; };
		// if needle has more indeces than target return false
		if( target.length < c-- ) { return false; };
		// loop needle elements
		for( ; len > -1 ; len-- ) {
			// if only one element is missing in target return false
			if( indexOf( target , needle[len] ) === -1 ) { return false; };
		};
		// test passed so return true
		return true;
	};