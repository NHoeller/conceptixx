/**
 * @project : modula
 * @package : core
 * @internal : declareFunctionStringToObject
 * @type : function
 * @dependencies :	isString
 *
 * @description :
 * turns a String to a key/value based object
 * 
 * @example :
 * stringToObject( 'a=1,b=2,c=3', ',' , '=' ); // result Object { a:1 , b:2 , c:3 }
 */


		/**
		 * define stringToObject
		 */
		var
		stringToObject = function( Str , Separator , Delimiter ) {
			// if we have a non string object we are done
			if( !isString( Str ) ) { return Str; };			
			// check parameter
			Separator = isString( Separator ) ? Separator : '&';
			Delimiter = isString( Delimiter ) ? Delimiter : '='
			// define result
			var result = {} , parts , key , pair;
			// split Str to parts
			parts = Str.split( Separator );
			// loop parts
			for( key in parts ) {
				// create pair
				pair = parts[ key ].split( Delimiter );
				// add pair to result
				result[ pair[ 0 ] ] = pair[ 1 ] || true;
			};
			// done here
			return result;
		};


