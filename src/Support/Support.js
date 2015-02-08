/**
 * @project : modula.js
 * @package : core
 * @internal : Support.Support
 * @type : function (object)
 * @dependencies :	functions.Propertizer
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
	var
	Support = Propertizer( "Support" , function( fn ) {
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


