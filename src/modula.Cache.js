/**
 * @project : modula.js
 * @package : core
 * @internal : Cache
 * @type : constructor / function
 * @dependencies : none
 *
 * @description :
 * cache is a simple but effective caching engine. also define some needed
 * caching objects
 */


	/**
	 * Cache is the modula caching
	 */
	var
	Cache = function( cacheName ) {
		return Cache[ cacheName ] || ( Cache[ cacheName ] = function( index , content ) {
			// if index is cached
			if( Cache[ cacheName ][ " " + index ] ) { return Cache[ cacheName ][ " " + index ]; }
			// if not cached and empty index or content return false
			if( !content || !index ) { return false; }
			// set content to cache and return content
			return ( Cache[ cacheName ][ " " + index ] = content );
		} );
	};


	/**
	 * SelectorCache
	 */
	var
	SelectorCache = Cache( "Selector" );


	/**
	 * ElementsCache
	 */
	var
	ElementsCache = Cache( "Elements" );


	/**
	 * TokenizeCache
	 */
	var
	TokenizeCache = Cache( "Tokenize" );


	/**
	 * PropertyCache
	 */
	var
	PropertyCache = Cache( "Properties" );


