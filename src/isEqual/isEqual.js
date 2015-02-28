/**
 * @project : modula.js
 * @package : 
 * @internal : isEqual.isEqual
 * @type : function
 * @dependencies :	type.type
 * 					isEqual.isEqual
 *
 * @description :
 * isEqual compares to objects. if there are objects or array inside the will be checked
 * with recursion
 */


	/**
	 * isEqual function checks if 2 objects/arrays are (deep)equal
	 */
	var
	isEqual = function( source , target ) {
		var compare;
		// if not 2 arguments were passed
		if( !source || !target ) { return source === target; };
		// if types are not equal
		if( ( compare = type( source ) ) !== type( target ) ) { return false; };
		// if objects are given loop the properties
		if( compare === 'Object' ) {
			for( compare in source ) {
				if( source.hasOwnProperty( compare ) != target.hasOwnProperty( compare ) ) { return false; }
				else if( type( source[compare] ) != type( target[compare] ) ) { return false; };
			};
			for( compare in source ) {
				if( target.hasOwnProperty( compare ) != source.hasOwnProperty( compare ) ) { return false; }
				else if( type( target[compare] ) != type( source[compare] ) ) { return false; };
				if( !target.hasOwnProperty( compare ) ) { continue; };
				// if Array or Object is found in object run isEqual recursively
				if( ( type( source[compare] ) === 'Array' && type( target[compare] ) === 'Array' ) ||
					( type( source[compare] ) === 'Object' && type( target[compare] ) === 'Object' ) ) {
					if( !isEqual( target[compare] , source[compare] ) ) { return false; };
				} 
				else if( target[compare] != source[compare] ) { return false; };
			};
			return true;
		};
		// if arrays are given loop the indices 
		if( compare === 'Array' ) {
			if( source.length != target.length ) { return false; };
			if( source.length === 0 ) { return true; };
			for( compare = 0 ; compare < target.length ; compare++ ) {
				// if Array or Object is found in array run isEqual recursively
				if( ( type( source[compare] ) === 'Array' && type( target[compare] ) === 'Array' ) ||
					( type( source[compare] ) === 'Object' && type( target[compare] ) === 'Object' ) ) {
					if( !isEqual( target[compare] , source[compare] ) ) { return false; };
				}
				else if( target[compare] != source[compare] ) { return false; };
			};
			return true;
		};
		return source === target;
	};


