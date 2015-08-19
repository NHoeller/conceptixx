/**
 * @project : modula
 * @package : core
 * @internal : declareFunctionCache
 * @type : function
 * @dependencies :	none
 *
 * @description :
 * cache is a simple but effective caching engine. also define some needed
 * caching objects
 */


	/**
	 * cache is the modula caching
	 */
	var
	cache = function( cacheName ) {
		// return caching function
		return cache[ ' ' + cacheName ] || ( cache[ ' ' + cacheName ] = function( index , content ) {
			// if index is cached
			if( cache[ ' ' + cacheName ][ ' ' + index ] ) { return cache[ ' ' + cacheName ][ ' ' + index ]; }
			// if not cached and empty index or content return false
			if( !content || !index ) { return false; } // !1
			// set content to cache and return content
			return ( cache[ ' ' + cacheName ][ ' ' + index ] = content );
		} );
	};


