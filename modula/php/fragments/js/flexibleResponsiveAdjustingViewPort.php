<?php
/**
 * @project : modula
 * @package : core
 * @internal : flexibleResponsiveAdjustingViewPort
 * @type : php-script
 * @dependencies :	none
 *
 * @description :
 * define some variables and function
 */

/*
 * check if already send headers
 */
if ( !headers_sent() ) {

	// send header for javascript
	header('Content-Type: application/javascript');

	/*
	 * get cookie informations if available
	 */
	if( $_COOKIE[ 'fravp' ] ) {
		
		/*
		 * explode fravp cookie value
		 */
		$fravp = explode( ',' , $_COOKIE[ 'fravp' ] );
		/*
		 * check cookie for fravp state
		 */
		switch ($fravp[0]) {
			/*
			 * case init
			 * this is the first call of the website on this device
			 */
			case 'init':
				
				/*
				 * send expire for javascript
				 */
				header( 'Expires: ' . gmdate( 'D, d M Y H:i:s' , time() + 180 ) . ' GMT' );
?>
/*
 * flexible responisve adjusting viewport (fravp)
 */

( function( f , r , a , v , p ) {
	
} )( window , document , window.screen , document.head )
<?php
				break;
			/*
			 * case wa it
			 * this state determines that we have not chosen the exact
			 * device - a users aktion is required
			 */
			case 'wait':
				/*
				 * send expire for javascript
				 */
				header( 'Expires: ' . gmdate( 'D, d M Y H:i:s' , time() + 180 ) . ' GMT' );
				break;
			/*
			 * case detect
			 * this state is reached if we have recognized the exact
			 * device or the user chosed it
			 */
			case 'detect':
				break;
			/*
			 * the default state is normally not possible
			 */
			default:
				break;
		}
		
		
	};
	
	
};

?>