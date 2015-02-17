/**
 * @project : modula.js
 * @package : core
 * @internal : IECompatible.IECompatible
 * @type : function
 * @dependencies : none
 *
 * @description :
 * checks if the browser is compatible with checkVersion of Internet Explorer
 */


	/**
	 * define IECompatible
	 * returns the version of an Internet Explorer from 5 to 10 (estimate 11 if 'false')
	 */
	var
	IECompatible = ( function() {
		

		/**
		 * define function
		 */
		var
		IECompatible = function( checkVersion ) {
			return checkVersion >= IEVersion;
		};


		// define IEVersion
		var
		IEVersion = 11;
		// check for document.all (internet explorer x - 10)
		if( document.all ) {
			IEVersion = window.atob ? 10 : document.addEventListener ? 9 : document.querySelector ? 8
			: window.XMLHttpRequest ? 7 : document.compatMode ? 6 : 5;
		};


		/**
		 * return IEPossible
		 */
		return IECompatible


	} )();


