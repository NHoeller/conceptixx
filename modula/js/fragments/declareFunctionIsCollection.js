/**
 * @project : modula
 * @package : core
 * @internal : declareFunctionIsCollection
 * @type : function
 * @dependencies :	object
 * 					isNode
 *
 * @description :
 * isCollection checks if an object is a HTMLCollection, NodeList or a single DOM node
 */


	/**
	 * check if subject is a valid modula node collection
	 */
	var
	isCollection = function( obj ) {
		var regex = isCollection._Regex.regular || ( isCollection._Regex = {
			regular : new RegExp( "^\\[object (HTMLCollection|NodeList)\\]$" ) ,
			modern : new RegExp( "^\\[object (Object|Array)\\]$" ) } ).regular;
		// if object is a HTMLCollection or a NodeList
		if( typeof obj === 'object' && regex.test( toString( obj ) ) ) {
			// we are done
			return true;
		};
		regex = isCollection._Regex.modern;
		// if object is an Object or an Array
		if( typeof obj === 'object' && regex.test( toString( obj ) ) && obj.hasOwnProperty( 'length' ) ) {
			// check if each index equals a node
			for( var i = 0 ; i < obj.length ; i++ ) {
				if( !isNode( obj[ i ] ) ) { return false; }
			};
			// return true if tests passed
			return true;
		};
		// tests failed return false
		return false;
	};


