/**
 * @project : modula.js
 * @package : core
 * @internal : functions.first
 * @type : function
 * @dependencies : slice
 *
 * @description :
 * gets the first element of an array
 */


	/**
	 * define first
	 */
	var
	first = function( arr ) {
		// check for length
		if( !arr.length || arr.length === 0 ) { return false; };
		// create regex
		var regex = new RegExp( "^(?:"+uid+")*|("+uid+")(?:"+uid+")*" , "g" );
		// return the result
		return ( arr = arr.join(uid).replace( regex , "$1" ).split( uid ) ) && slice( arr , 0 , 1 );
	};


