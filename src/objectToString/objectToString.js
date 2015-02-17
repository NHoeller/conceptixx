/**
 * @project : modula.js
 * @package : core
 * @internal : functions.objectToString
 * @type : function
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 * 					Defaults.RegularExpressions._define
 * 					Defaults.RegularExpressions.types
 * 					Regex._define
 * 					_object.object
 * 					type.type
 * 					isString.isString
 *
 * @description :
 * turns an object into a separated and delimited string
 * 
 * @example :
 * objectToString( { a:1 , b:2 , c:3 } , ',' , '=' ) // result String 'a=1,b=2,c=3'
 */


		/**
		 * define objectToString
		 */
		var
		objectToString = function( Obj , Separator , Delimiter ) {
			// if we have a string object we are done
			if( isString( Obj ) ) { return Obj; };			
			// check parameter
			Separator = isString( Separator ) ? Separator : '&';
			Delimiter = isString( Delimiter ) ? Delimiter : '='
			// define result
			var result = '';
			// loop the datafields
			for( var data in Obj ) {
				// check for ownProperties
				if( hasOwnProperty( Obj , data ) ) {
					// add key|value to result
					result += Separator + data + ( Obj[ data ] !== true ? Delimiter + Obj[ data ] : '' );
				};
			};
			// return cleansed result
			return result.substring( Separator.length );
		};


