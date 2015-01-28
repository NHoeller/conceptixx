/**
 * @project : modula.js
 * @package : core
 * @internal : Support
 * @type : function / object
 * @dependencies : none
 *
 * @description :
 * the Support is used to build crossbrowser compatible modula.js
 * functions. the results will be stored to the Support-object
 * 
 * @example
 * Support.test = Support( function() { return true; } ); // result Support.test = true
 */

	/**
	 * Support
	 */
	Support = function( fn ) {
		var div = doc.createElement( 'div' );
		try {
			return !!fn( div );
		} catch( e ) {
			return false;
		} finally {
			div.parentNode && div.parentNode.removeChild( div );
			div = null;
		};
	};