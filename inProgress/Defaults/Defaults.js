/**
 * @project : modula.js
 * @package : core
 * @internal : Defaults.Defaults
 * @type : function
 * @dependencies :	none
 */


	/**
	 * Defaults is the modula Data caching
	 */
	var
	Defaults = function( cacheName ) {
		return Cache[ cacheName ] || ( Cache[ cacheName ] = function( index , content ) {
			// if index is cached
			if( Cache[ cacheName ][ ' ' + index ] ) { return Cache[ cacheName ][ ' ' + index ]; }
			// if not cached and empty index or content return false
			if( !content || !index ) { return false; }
			// set content to cache and return content
			return ( Cache[ cacheName ][ ' ' + index ] = content );
		} );
	};


