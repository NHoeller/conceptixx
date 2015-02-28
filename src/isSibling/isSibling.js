/**
 * @project : modula.js
 * @package : 
 * @internal : isSibling.isSibling
 * @type : function
 * @dependencies :	none
 *
 * @description :
 * isSibling checks if 2 DOM nodes are siblings
 */


	/**
	 * isSibling function (child,child) checks if 2 nodes have the same parent
	 */
	var
	isSibling = function( elem , sibling ) {
		return elem.parentNode === sibling.parentNode;
	};


