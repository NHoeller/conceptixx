/**
* @project : modula
* @package : core
* @internal : declareFunctionSupport.objects.XhrObject
* @type : function
* @dependencies :	defaults
*/


	_(
		_( [ 'Support' ] ) ,
		false ,
		[ 'XhrObject' ] ,
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



	
