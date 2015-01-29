/**
 * @project : modula.js
 * @package : core
 * @internal : isCollection
 * @type : function
 * @dependencies : isNode
 *
 * @description :
 * isCollection checks if an object is a HTMLCollection, NodeList or a single DOM node
 */


	/**
	 * check if subject is a valid modula node collection
	 */
	isCollection = function( obj ) {
		var regex = new RegExp( "^\\[object (HTMLCollection|NodeList)\\]$" );
		// if object is a HTMLCollection or a NodeList
		if( typeof obj === 'object' && regex.test( toString( obj ) ) ) {
			return true;
		};
		regex = new RegExp( "^\\[object (Object|Array)\\]$" );
		// if object is an Object or an Array
		if( typeof obj === 'object' && regex.test( toString( obj ) ) && obj.hasOwnProperty( 'length' ) ) {
			// check if each index equals a node
			for( var i = 0 ; i < obj.length ; i++ ) {
				if( !isNode( obj[i] ) ) { return false; }
			};
			// return true if tests passed
			return true;
		};
		// tests failed return false
		return false;
	};