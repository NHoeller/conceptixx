/**
 * @project : modula
 * @package : core
 * @internal : declareFunctionSupport
 * @type : function
 * @dependencies :	none
 *
 * @description :
 * the support is used to build crossbrowser compatible modula.js functions.
 * 
 * @example
 * support.test = support( function() { return true; } ); // result support.test = true
 * support.test = support( function() { return false; } ); // result support.test = false
 */


	/**
	 * Support
	 */
	var
	support = _(
		true ,
		[ 'support' ] ,
		function( fn ) {
		// create div element
		var div = doc.createElement( 'div' );
		// try to ...
		try {
			// execute fn with the created div
			return !!fn( div );
		// catch if error occured ...
		} catch( e ) {
			// and return false
			return false;
		// finally ...
		} finally {
			// remove div if added to the document
			div.parentNode && div.parentNode.removeChild( div );
			// delete div for memory release
			div = null;
		};
	} );


