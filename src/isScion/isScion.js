/**
 * @project : modula.js
 * @package : 
 * @internal : isScion.isScion
 * @type : function
 * @dependencies :	indexOf.indexOf
 *
 * @description :
 * isScion checks if a child argument (must be a DOM node) is a scion of
 * parent (parent must be a DOM node or a HTMLcollection / nodeList)
 */


	/**
	 * isScion function (child,parent) checks if child and parent are related to each other
	 * returns boolean success or node if parent is nodelist
	 */
	var
	isScion = function( child , parent ) {
		var result;
		while( ( child = child.parentNode ) ) {
			if( child === parent ) { return true; };
			if( ( result = indexOf( parent , child ) ) !== -1 ) { return parent[ result ]; };
		};
		return false;
	};


