/**
* @project : modula.js
* @package : 
* @internal : Support.XhrObject
* @type : function
* @dependencies : none
*/


	Defaults(
		false ,
		[ 'Support' , 'XhrObject' ] ,
		( function() { 
			// check for regular XMLHttpRequests
			if( XMLHttpRequest ) { return true };
			// check for the microsoft's way
			try {
				// check for Msxml2.XMLHTTP
				new ActiveXObject( 'Msxml2.XMLHTTP' );
				// without error we are done
				return true;
			}
			catch( e ) {
				try {
					// check for Msxml2.XMLHTTP
					new ActiveXObject( 'Microsoft.XMLHTTP' );
					// without error we are done
					return true;
				}
				catch( e ) {
				}
			}
			// so we passed not without an error or no XMLHttpRequest can be used
			return false;
		} )() );



	
