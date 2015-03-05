/**
 * @project : modula.js
 * @package : core
 * @internal : last.last
 * @type : function
 * @dependencies :	_array.array
 *
 * @description :
 * gets the last element of an array
 */


	/**
	 * define last
	 */
	var
	last = function( arr ) {
		// check for length
		if( !arr.length || arr.length === 0 ) { return false; };
		// create regex
		var regex = last._Regex || ( last._Regex = new RegExp( "(?:" + uid + ")*$|(" + uid + ")(?:" + uid + ")*" , 'g' ) );
		// return the result
		return ( arr = arr.join(uid).replace( regex , "$1" ).split( uid ) ) && slice( arr , -1 )[ 0 ];
	};


