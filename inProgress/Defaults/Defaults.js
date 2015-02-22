/**
 * @project : modula.js
 * @package : core
 * @internal : Defaults.Defaults
 * @type : function
 * @dependencies :	simplify.simplify
 * 					_array.array
 */


	/**
	 * Defaults is a special modula Data caching system that provides each data to be also a cache
	 * 
	 * @example :
	 * Defaults( 'data' , 'value' ); // creates a 'data' cache with 'value'
	 * Defaults( 'data' )(); // results 'value'
	 * Defaults( [ 'data' , 'key' ] , [ 1 , 2 ] ); // creates a 'key' cache with [ 1 , 2 ] inside 'data'
	 * Defaults( [ 'data' , 'key' ] ); // results [ 1 , 2 ]
	 * Defaults( [ 'cache' , 'obj' ] ); // returns false
	 * Defaults( true , [ 'cache' , 'obj' ] ); // creates obj in cache (even if both does not exist)
	 * Defaults( 'cache,obj' , { a:1 , b:2 } ); // adds { a:1 , b:2 } as 'obj' in cache
	 * Defaults( [ 'cache' , 'obj' ] ); // returns { a:1 , b:2 } now
	 */
	var
	Defaults = function() {
		// set variables
		var
		keys , create , current , indices , counter = 0 , args = slice( arguments );
		// loop the arguments (if multiple notation)
		while( ( keys = args.shift() ) ) {
			// increase counter
			counter++;
			// check for boolean and args length
			if( typeof keys === 'boolean' ) {
				// set create as true
				create = true;
				// get new keys
				keys = args.shift();
			};
			// set variables for detection
			current = Defaults,
			indices = typeof keys === 'string' ? keys.split( ',' ) : keys;
			// loop indices
			for( var i = 0 , l = indices.length ; i < l ; i++ ) {
				// check for current
				if( !current[ indices[ i ] ] && !create ) {
					// so we are done here
					return false;
				}
				// set current as new object if needed
				current = ( current[ indices[ i ] ] = ( i + 1 === l && args.shift() ) || current[ indices[ i ] ] || {} );
			};
			// check if we have another args
			if( args.length === 0 ) {
				// return last current
				return current || true;
			};
		};
	};

	/** TESTING **/
	var p = {};
	p.p = Defaults;
	console.log( Defaults( true , 'data,clip,type' , 'audio' , true , 'data,clip,size' , '16:9' ) );
	console.log( Defaults( true , 'keys' ) );
	console.log( Defaults( true , [ 'keys' , 'pair' ] , 'value' ) );
	console.log( Defaults( 'data,clip,type' ) );
	console.log( p );


