/**
 * @project : modula.js
 * @package : core
 * @internal : modulaCache
 * @type : constructor / object
 * @dependencies : none
 *
 * @description :
 * modulaCache creates a simple object based caching function
 * 
 * @example
 * var myCache = modulaCache();
 * myCache( "index_name" , "content" ); // results myCache { index_name : "content" }
 * myCache( "index_name" ); // returns "content"
 * myCache["index_name"]; // contains "content"
 * myCache.index_name // is the same like the 2 examples before
 */


	/**
	 * modulaCache (this is nearly the smallest cache possible)
	 */
	modulaCache = function() {
		return function fn( name , content ) {
			return ( content ? ( fn[name] = content ) : fn[name] );
		};
	};


