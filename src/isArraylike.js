/**
 * @project : modula.js
 * @package : core
 * @internal : Support
 * @type : isArraylike
 * @dependencies : isWindow , type
 *
 * @description :
 * isArraylike checks if an object is an array or behaves like an array
 */

	/**
	 * checks if an object is arraylike
	 */
	isArraylike = function( obj ) {
		var len;
		return (
			// obj must not be a function
			type( obj ) !== 'Function' &&
			// obj must not be a window
			!isWindow( obj ) &&
			// obj must have a length property
			obj.length &&
			// get obj.length as numeric value
			( len = obj.length ) >>> 0 >= 0 &&
			(
				// obj is a nodelist
				obj.nodeType === 1 ||
				// or obj is an array
				type( obj ) === 'Array' ||
				// or last elem in obj exists
				( len > 0 && ( len - 1 ) in obj ) ||
				// objects length equals 0
				( obj.length === 0 )
			)
		);
	};