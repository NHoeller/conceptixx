/**
 * @project : modula
 * @package : core
 * @internal : declareFunctionDefaults
 * @type : function
 * @dependencies :	simplify
 * 					array
 */


	/**
	 * Defaults is a special modula Data caching system 
	 */
	var
	_ = function() {
		// set variables
		var
		keys , current , indices , create , args = slice( arguments ),
		// define object to work on as first argument
		target = ( typeof args[ 0 ] !== 'boolean' && typeof args[ 0 ] !== 'string' && type( args[ 0 ] ) !== 'Array' ) ? args.shift() : _;
		// loop the arguments (if multiple notation)
		while( ( keys = args.shift() ) !== undefined ) {
			// set create as none
			create = 'none';
			// check for boolean and args length
			if( typeof keys === 'boolean' ) {
				// set create as true
				create = keys ? 'all' : 'last';
				// get new keys
				keys = args.shift();
			};
			// set variables for detection
			current = target,
			indices = typeof keys === 'string' ? keys.split( ',' ) : keys;
			// loop indices
			for( var i = 0 , l = indices.length ; i < l ; i++ ) {
				// check for current
				if( current[ indices[ i ] ] === undefined && ( create === 'none' || ( create === 'last' && i + 1 < l ) ) ) {
					// so we are done here
					return;
				}
				// set current as new object if needed
				current = ( current[ indices[ i ] ] = ( i + 1 === l && args.length > 0 ) ? args.shift() :
					current[ indices[ i ] ] !== undefined ? current[ indices[ i ] ] : {} );
			};
			// check if we have another args
			if( args.length === 0 ) {
				// return last current
				return ( current !== undefined ? current : true );
			};
		};
	};


