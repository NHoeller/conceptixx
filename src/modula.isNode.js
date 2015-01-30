/**
 * @project : modula.js
 * @package : core
 * @internal : isNode
 * @type : function
 * @dependencies : none
 *
 * @description :
 * isNode detects if the given argument is a DOM node
 * 
 * @example
 * alert( isNode( window.document ) ); // alerts "true"
 * alert( isNode( new Array() ) ); // alerts "false"
 */


	/**
	 * isNode function returns true if node, false otherwise
	 */
	var
	isNode = function( obj ) {
		return !!( obj && obj.nodeType );
	};


