/**
* @project : modula
* @package : core
* @internal : declareFunctionPropertizer
* @type : function
* @dependencies :	cache
*
* @description :
* the Propertizer is used to store a reference to variables in any scope of the modula.js
* so it can be reached by extending functions
*/


	/**
	 * define propertizer
	 */
	var
	propertizer = function( propertyName , propertyValue ) {
		// check if property is already in cache or store propertyValue to cache
		return cache.properties[ propertyName ] || ( cache.properties[ propertyName ] = propertyValue );
	};


