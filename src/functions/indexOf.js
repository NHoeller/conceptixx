/**
 * @project : modula.js
 * @package : core
 * @internal : functions.indexOf
 * @type : function
 * @dependencies : none
 *
 * @description :
 * indexOf is a faster function than the native one. it is also prepared like
 * Array.prototype.indexOf.call usage. simplifying this function is not necessary
 */


	/**
	 * indexOf (this is faster than the native one)
	 * @see : http://jsperf.com/js-for-loop-vs-array-indexof/82
	 */
	var
	indexOf = function( obj , elem ) {
		var i , len = obj.length;
		for( i = 0 ; i < len ; i++ ) {
			if( obj[i] === elem && i in obj ) { return i; };
		};
		return -1;
	};


