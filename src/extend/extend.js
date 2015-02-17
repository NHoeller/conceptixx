/**
 * @project : modula.js
 * @package : core
 * @internal : extend.extend
 * @type : function
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 * 					Defaults.RegularExpressions._define
 * 					Defaults.RegularExpressions.types
 * 					Regex._define
 * 					_object.object
 * 					type.type
 * 					isWindow.isWindow
 * 					isPlainObject.isPlainObject
 * 					extend.extend
 *
 * @description :
 * this function is used to extend objects with other objects
 * 
 * @notice : this function licensed unter the copyright of
 * the jquery foundation.
 */


	/**
	 * extend module
	 * 
	 * taken from jQuery, but is nearly identically to
	 * other scripts found in the world wide web
	 */
	var
	extend = function( /* [ target , ] source , ... , source(n) */ ) {
		// define variables
		var options , name , source , copy , clone ,
			length = arguments.length,
			i = 1,
			target = arguments[ 0 ] || {},
			deep = typeof target === 'boolean' && target || false;
		// check for deepCopy and handle the target
		if( deep ) {
			target = arguments[ i++ ] || {};
		};
		// check for target type is not usable object
		if( typeof target !== 'object' && type( target ) !== 'Function' ) {
			target = {};
		};
		// check if we have target (use this if not)
		if( i === length ) {
			 target = this;
			 i--;
		};
		// loop the given source((s) only works with a target)
		for( ; i < length ; i++ ) {
			// check we have no null or undefined (use != and not !== to get undefined)
			if( ( options = arguments[ i ] ) != null ) {
				// extend the target
				for( name in options ) {
					// get 'name' from target and options
					source = target[ name ];
					copy = options[ name ];
					// prevent never ending loops (jQuery)
					if( source === copy ) {
						continue;
					};
					// for deepCopy option we need recurse
					if( deep && copy ){
						// handle deepCopy situation
						clone = source ? source : isArray( source ) ? [] : isPlainObject( source ) ? {} : source;
						// clone object with recurse call
						target[ name ] = extend( deep , clone , copy );
					}
					// do not copy undefined values
					else if( copy !== undefined ) {
						target[ name ] = copy;
					};
				};
			};
		};
	};


