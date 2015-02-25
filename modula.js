/**
 * @project : modula.js
 * @package : xxx
 * @internal : xxx
 * @type : xxx
 * @dependencies : none
 *
 * @description :
 * enter description here ...
 * 
 * @example :
 * 
 * @notice :
 * 
 */


	/**
	 * define context for temporary definition in window scope
	 */
	var context = window;


/**
 * @project : modula.js
 * @package : core
 * @internal : _define
 * @type : declaration
 * @dependencies :	none
 *
 * @description :
 * define some variables and function
 */


	/**
	 * define some variables
	 */
	var
	win = context && context.window && context.window === window ? context : window,
	doc = win.document && win.document.nodeType === 9 && win.document || window.document,
	root = doc.documentElement;


	/**
	 * define modula properties
	 */
	var
	// define version number of this modula
	version = '1.01.001 prototype',
	// define unique identifier for this modula
	uid = 'modula ' + Date.now();


/**
 * @project : modula.js
 * @package : core
 * @internal : simpilfy.simpilfy
 * @type : function
 * @dependencies : none
 * 
 * @description :
 * simplify is a simple 'uncurry' used to work with
 * the 'this' inside of the most functions
 * 
 * @example :
 *---- js.code

var myFunc_1 = simplify( Array.prototype.push );
var myArray = [ 1 , 2 , 3 ];
myFunc_1( myArray , 4 ); // result myArray [ 1 , 2 , 3 , 4 ]

var myFunc_2 = simplify( function( value ) { this.property = value; } );
var myObject = {};
myFunc_2( myObject , "newValue" ); // result myObject { property : "newValue" }

 *---- js.code
 */


	/**
	 * define 'simplify' function
	 */
	var
	simplify = function( f ) {
		// define call function from Function.prototype
		var call = Function.call;
		// return simplify function
		return function () {
			// return call.apply construct
			return call.apply( f, arguments );
		};
	};


/**
 * @project : modula.js
 * @package : core
 * @internal : _array.array
 * @type : declartion
 * @dependencies :	simplify.simplify
 *
 * @description :
 * define some variables and function
 */


	/**
	 * define Array functions
	 */
	var
	_array = [],
	concat = simplify( _array.concat ),
	push = simplify( _array.push ),
	shift = simplify( _array.shift ),
	slice = simplify( _array.slice );
	

/**
 * @project : modula.js
 * @package : core
 * @internal : _object.object
 * @type : declaration
 * @dependencies :	simplify.simplify
 *
 * @description :
 * define some variables and function
 */


	/**
	 * define some Object functions
	 */
	var
	_object = {},
	toString = simplify( _object.toString ),
	hasOwnProperty = simplify( _object.hasOwnProperty );


/**
 * @project : modula.js
 * @package : core
 * @internal : Defaults.Defaults
 * @type : function
 * @dependencies :	simplify.simplify
 * 					_array.array
 */


	/**
	 * Defaults is a special modula Data caching system 
	 */
	var
	Defaults = function() {
		// set variables
		var
		keys , current , indices , create , counter = 0 , args = slice( arguments );
		// loop the arguments (if multiple notation)
		while( ( keys = args.shift() ) !== undefined ) {
			// increase counter
			counter++;
			// set create as none
			create = 'none';
			// check for boolean and args length
			if( typeof keys === 'boolean' ) {
				// set create as true
				create = keys ? 'all' : 'last';
				// get new keys
				keys = args.shift();
			};
			// set variables for detection
			current = Defaults,
			indices = typeof keys === 'string' ? keys.split( ',' ) : keys;
			// loop indices
			for( var i = 0 , l = indices.length ; i < l ; i++ ) {
				// check for current
				if( !current[ indices[ i ] ] && ( create === 'none' || ( create === 'last' && i + 1 < l ) ) ) {
					// so we are done here
					return false;
				}
				// set current as new object if needed
				current = ( current[ indices[ i ] ] = ( i + 1 === l && args.shift() ) || current[ indices[ i ] ] || {} );
			};
			// check if we have another args
			if( args.length === 0 ) {
				// return last current
				return current || true;
			};
		};
	};

	/** TESTING **/
	var p = {};
	p.p = Defaults;
	console.log( p );


/**
 * @project : modula.js
 * @package : core
 * @internal : Cache.Cache
 * @type : function
 * @dependencies :	none
 *
 * @description :
 * cache is a simple but effective caching engine. also define some needed
 * caching objects
 */


	/**
	 * Cache is the modula caching
	 */
	var
	Cache = function( cacheName ) {
		// return caching function
		return Cache[ ' ' + cacheName ] || ( Cache[ ' ' + cacheName ] = function( index , content ) {
			// if index is cached
			if( Cache[ ' ' + cacheName ][ ' ' + index ] ) { return Cache[ ' ' + cacheName ][ ' ' + index ]; }
			// if not cached and empty index or content return false
			if( !content || !index ) { return false; }
			// set content to cache and return content
			return ( Cache[ ' ' + cacheName ][ ' ' + index ] = content );
		} );
	};


/**
 * @project : modula.js
 * @package : 
 * @internal : ElementsCache._define
 * @type : declaration
 * @dependencies :	Cache.Cache
 */


	/**
	 * define ElementsCache for modula.js
	 */
	var
	ElementsCache = Cache( "Elements" );


/**
 * @project : modula.js
 * @package : 
 * @internal : PropertyCache._define
 * @type : declaration
 * @dependencies :	Cache.Cache
 */


	/**
	 * define PropertyCache for modula.js
	 */
	var
	PropertyCache = Cache( 'Properties' );


/**
 * @project : modula.js
 * @package : 
 * @internal : SelectorCache._define
 * @type : declaration
 * @dependencies :	Cache.Cache
 */


	/**
	 * define SelectorCache for modula.js
	 */
	var
	SelectorCache = Cache( 'Selector' );


/**
 * @project : modula.js
 * @package : 
 * @internal : TokenizeCache._define
 * @type : declaration
 * @dependencies :	Cache.Cache
 */


	/**
	 * define TokenizeCache for modula.js
	 */
	var
	TokenizeCache = Cache( 'Tokenizer' );


/**
* @project : modula.js
* @package : 
* @internal : Propertizer.Propertizer
* @type : function
* @dependencies :	Cache.Cache
*
* @description :
* the Propertizer is used to store a reference to variables in any scope of the modula.js
* so it can be reached by extending functions
*/


	/**
	 * define Propertizer
	 */
	var
	Propertizer = function( propertyName , propertyValue ) {
		// check if property is already in cache or store propertyValue to cache
		return Cache.Properties[ propertyName ] || ( Cache.Properties[ propertyName ] = propertyValue );
	};


/**
 * @project : modula.js
 * @package : core
 * @internal : Support.Support
 * @type : function
 * @dependencies :	none
 *
 * @description :
 * the Support is used to build crossbrowser compatible modula.js functions.
 * 
 * @example
 * Support.test = Support( function() { return true; } ); // result Support.test = true
 * Support.test = Support( function() { return false; } ); // result Support.test = false
 */


	/**
	 * Support
	 */
	var
	Support = function( fn ) {
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
	};


/**
 * @project : modula.js
 * @package : core
 * @internal : containsAll.containsAll
 * @type : function
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 * 					Defaults.RegularExpressions._define
 * 					Defaults.RegularExpressions.types
 * 					Regex._define
 * 					_object.object
 * 					type.type
 * 					isWindow.isWindow
 * 					isArraylike.isArraylike
 * 					indexOf.indexOf
 *
 * @description :
 * checks if all values of needle or needle itself are values from target (array)
 * 
 * @example :
 * containsAll( [ 1 , 2 , 3 ] , [ 4 , 3 , 1 , 2 ] ) // results true
 * containsAll( [ 4 , 3 , 1 , 2 ] , [ 1 , 2 , 3 ] ) // results false
 * containsAll( "apple" , [ "orange" , "banana" , "apple" ] // returns true
 */


	/**
	 * checks for existance of all indeces
	 */
	var
	containsAll = function( needle , target ) {
		// define needle.length
		var len = needle.length;
		// if needle is not arraylike return check for indexOf on target
		if( !isArraylike( needle ) ) { return indexOf( target , needle ) !== -1; };
		// if needle has more indeces than target return false
		if( target.length < c-- ) { return false; };
		// loop needle elements
		for( ; len > -1 ; len-- ) {
			// if only one element is missing in target return false
			if( indexOf( target , needle[len] ) === -1 ) { return false; };
		};
		// test passed so return true
		return true;
	};


/**
 * @project : modula.js
 * @package : core
 * @internal : first.first
 * @type : function
 * @dependencies :	_define
 * 					_array.array
 *
 * @description :
 * gets the first element of an array
 */


	/**
	 * define first
	 */
	var
	first = function( arr ) {
		// check for length
		if( !arr.length || arr.length === 0 ) { return false; };
		// create regex
		var regex = first._Regex || ( first._Regex = new RegExp( "^(?:" + uid + ")*|(" + uid + ")(?:" + uid + ")*" , 'g' ) );
		// return the result
		return ( arr = arr.join(uid).replace( regex , "$1" ).split( uid ) ) && slice( arr , 0 , 1 );
	};


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


/**
 * @project : modula.js
 * @package : core
 * @internal : indexOf.indexOf
 * @type : function
 * @dependencies : none
 *
 * @description :
 * indexOf is a faster function than the native one. it is also prepared like
 * Array.prototype.indexOf.call usage. simplifying this function is not necessary
 */


	/**
	 * indexOf (this is faster than the native one)
	 * @see : http://jsperf.com/js-for-loop-vs-array-indexof/82
	 */
	var
	indexOf = function( obj , elem ) {
		var i , len = obj.length;
		for( i = 0 ; i < len ; i++ ) {
			if( obj[i] === elem && i in obj ) { return i; };
		};
		return -1;
	};


/**
 * @project : modula.js
 * @package : core
 * @internal : isArray.isArray
 * @type : function
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 * 					Defaults.RegularExpressions._define
 * 					Defaults.RegularExpressions.types
 * 					Regex._define
 * 					_object.object
 * 					type.type
 *
 * @description :
 * isArray checks if an object is an array
 */


	/**
	 * checks if object is an Array
	 */
	var
	isArray = Array.prototype.isArray || function( obj ) {
		return type( obj ) === 'Array';
	};


/**
 * @project : modula.js
 * @package : core
 * @internal : isArraylike.isArraylike
 * @type : function
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 * 					Defaults.RegularExpressions._define
 * 					Defaults.RegularExpressions.types
 * 					Regex._define
 * 					_object.object
 * 					type.type
 * 					isWindow.isWindow
 *
 * @description :
 * isArraylike checks if an object is an array or behaves like an array
 */


	/**
	 * checks if an object is arraylike
	 */
	var
	isArraylike = function( obj ) {
		var len;
		return (
			// obj must not be a function
			type( obj ) !== 'Function' &&
			// obj must not be a window
			!isWindow( obj ) &&
			// obj must have a length property
			obj.length &&
			// get obj.length as numeric value
			( len = obj.length ) >>> 0 >= 0 &&
			(
				// obj is a nodelist
				obj.nodeType === 1 ||
				// or obj is an array
				type( obj ) === 'Array' ||
				// or last elem in obj exists
				( len > 0 && ( len - 1 ) in obj ) ||
				// objects length equals 0
				( obj.length === 0 )
			)
		);
	};


/**
 * @project : modula.js
 * @package : core
 * @internal : isBool.isBool
 * @type : function
 * @dependencies :	none
 *
 * @description :
 * isBool checks if an argument is of type boolean
 */


	/**
	 * isBool
	 */
	var
	isBool = function( value ) {
		return typeof value === 'boolean';
	};


/**
 * @project : modula.js
 * @package : core
 * @internal : isCollection.isCollection
 * @type : function
 * @dependencies :	_object.object
 * 					isNode.isNode
 *
 * @description :
 * isCollection checks if an object is a HTMLCollection, NodeList or a single DOM node
 */


	/**
	 * check if subject is a valid modula node collection
	 */
	var
	isCollection = function( obj ) {
		var regex = isCollection._Regex.regular || ( isCollection._Regex = {
			regular : new RegExp( "^\\[object (HTMLCollection|NodeList)\\]$" ) ,
			modern : new RegExp( "^\\[object (Object|Array)\\]$" ) } ).regular;
		// if object is a HTMLCollection or a NodeList
		if( typeof obj === 'object' && regex.test( toString( obj ) ) ) {
			// we are done
			return true;
		};
		regex = isCollection._Regex.modern;
		// if object is an Object or an Array
		if( typeof obj === 'object' && regex.test( toString( obj ) ) && obj.hasOwnProperty( 'length' ) ) {
			// check if each index equals a node
			for( var i = 0 ; i < obj.length ; i++ ) {
				if( !isNode( obj[ i ] ) ) { return false; }
			};
			// return true if tests passed
			return true;
		};
		// tests failed return false
		return false;
	};


/**
 * @project : modula.js
 * @package : 
 * @internal : isEqual.isEqual
 * @type : function
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 * 					Defaults.RegularExpressions._define
 * 					Defaults.RegularExpressions.types
 * 					Regex._define
 * 					_object.object
 * 					type.type
 * 					isEqual.isEqual
 *
 * @description :
 * isEqual compares to objects. if there are objects or array inside the will be checked
 * with recursion
 */


	/**
	 * isEqual function checks if 2 objects/arrays are (deep)equal
	 */
	var
	isEqual = function( source , target ) {
		var compare;
		// if not 2 arguments were passed
		if( !source || !target ) { return source === target; };
		// if types are not equal
		if( ( compare = type( source ) ) !== type( target ) ) { return false; };
		// if objects are given loop the properties
		if( compare === 'Object' ) {
			for( compare in source ) {
				if( source.hasOwnProperty( compare ) != target.hasOwnProperty( compare ) ) { return false; }
				else if( type( source[compare] ) != type( target[compare] ) ) { return false; };
			};
			for( compare in source ) {
				if( target.hasOwnProperty( compare ) != source.hasOwnProperty( compare ) ) { return false; }
				else if( type( target[compare] ) != type( source[compare] ) ) { return false; };
				if( !target.hasOwnProperty( compare ) ) { continue; };
				// if Array or Object is found in object run isEqual recursively
				if( ( type( source[compare] ) === 'Array' && type( target[compare] ) === 'Array' ) ||
					( type( source[compare] ) === 'Object' && type( target[compare] ) === 'Object' ) ) {
					if( !isEqual( target[compare] , source[compare] ) ) { return false; };
				} 
				else if( target[compare] != source[compare] ) { return false; };
			};
			return true;
		};
		// if arrays are given loop the indices 
		if( compare === 'Array' ) {
			if( source.length != target.length ) { return false; };
			if( source.length === 0 ) { return true; };
			for( compare = 0 ; compare < target.length ; compare++ ) {
				// if Array or Object is found in array run isEqual recursively
				if( ( type( source[compare] ) === 'Array' && type( target[compare] ) === 'Array' ) ||
					( type( source[compare] ) === 'Object' && type( target[compare] ) === 'Object' ) ) {
					if( !isEqual( target[compare] , source[compare] ) ) { return false; };
				}
				else if( target[compare] != source[compare] ) { return false; };
			};
			return true;
		};
		return source === target;
	};


/**
 * @project : modula.js
 * @package : core
 * @internal : isFunction.isFunction
 * @type : function
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 * 					Defaults.RegularExpressions._define
 * 					Defaults.RegularExpressions.types
 * 					Regex._define
 * 					_object.object
 * 					type.type
 *
 * @description :
 * isFunction checks if a given subject is a function
 */


	/**
	 * define isFunction
	 */
	var
	isFunction = function( subject ) {
		return type( subject ) === 'Function';
	};


/**
 * @project : modula.js
 * @package : core
 * @internal : isInstance.isInstance
 * @type : function
 * @dependencies : none
 *
 * @description :
 * isInstance checks for a given instance or modula if inst left empty
 */


	/**
	 * isInstance function checks for modula objects
	 */
	var
	isInstance = function( obj , inst ) {
		// if inst is omitted use 'modula' instead
		inst = inst || modula;
		// return result
		return ( obj instanceof inst );
	};


/**
 * @project : modula.js
 * @package : core
 * @internal : isNative.isNative
 * @type : function
 * @dependencies : none
 *
 * @description :
 * the Support is used to build crossbrowser compatible modula.js
 * functions. the results will be stored to the Support-object
 * 
 * @example
 * console.log( isNative( function() {} ) ); // logs "false" to console
 * console.log( isNative( alert ) ); // logs "true" to console
 */


	/**
	 * isNative checks for native functions
	 */
	var
	isNative = function( fn ) {
		var regex = isNative._Regex || ( isNative._Regex = new RegExp( "^[^{]*\\{\\s*\\[native \\w" ) );
		return regex.test( fn );
	};


/**
 * @project : modula.js
 * @package : core
 * @internal : isNode.isNode
 * @type : function
 * @dependencies : none
 *
 * @description :
 * isNode detects if the given argument is a DOM node
 * 
 * @example
 * alert( isNode( window.document ) ); // alerts "true"
 * alert( isNode( new Array() ) ); // alerts "false"
 */


	/**
	 * isNode function returns true if node, false otherwise
	 */
	var
	isNode = function( obj ) {
		return !!( obj && obj.nodeType );
	};


/**
 * @project : modula.js
 * @package : core
 * @internal : isPlainObject.isPlainObject
 * @type : function
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 * 					Defaults.RegularExpressions._define
 * 					Defaults.RegularExpressions.types
 * 					Regex._define
 * 					_object.object
 * 					type.type
 * 					isWindow.isWindow
 *
 * @description :
 * isPlainObject checks if we have a plain object
 * Not plain objects:
 * - Any object or value whose internal [[Class]] property is not "[object Object]"
 * - DOM nodes
 * - window
 * 
 * @notice : this function is taken from the jQuery sourcecode
 */


	/**
	 * isPlainObject
	 */
	var
	isPlainObject = function( obj ) {
		// check for DOM node and window
		if ( type( obj ) !== 'Object' || obj.nodeType || isWindow( obj ) ) {
			return false;
		};
		// check constructor and prototype
		if ( obj.constructor && !hasOwnProperty( obj.constructor.prototype , 'isPrototypeOf' ) ) {
			return false;
		};
		// if test were passed we have a plain object
		return true;
	};


/**
 * @project : modula.js
 * @package : core
 * @internal : isScion.isScion
 * @type : function
 * @dependencies :	indexOf.indexOf
 *
 * @description :
 * isScion checks if a child argument (must be a DOM node) is a scion of
 * parent (parent must be a DOM node or a HTMLcollection / nodeList)
 */


	/**
	 * isScion function (child,parent) checks if child and parent are related to each other
	 * returns boolean success or node if parent is nodelist
	 */
	var
	isScion = function( child , parent ) {
		var result;
		while( ( child = child.parentNode ) ) {
			if( child === parent ) { return true; };
			if( ( result = indexOf( parent , child ) ) !== -1 ) { return parent[ result ]; };
		};
		return false;
	};


/**
 * @project : modula.js
 * @package : core
 * @internal : isSibling.isSibling
 * @type : function
 * @dependencies : none
 *
 * @description :
 * isSibling checks if 2 DOM nodes are siblings
 */


	/**
	 * isSibling function (child,child) checks if 2 nodes have the same parent
	 */
	var
	isSibling = function( elem , sibling ) {
		return elem.parentNode === sibling.parentNode;
	};


/**
 * @project : modula.js
 * @package : core
 * @internal : isString.isString
 * @type : function
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 * 					Defaults.RegularExpressions._define
 * 					Defaults.RegularExpressions.types
 * 					Regex._define
 * 					_object.object
 * 					type.type
 *
 * @description :
 * isArray checks if an object is an array
 */


	/**
	 * checks if object is a String
	 */
	var
	isString = function( obj ) {
		return type( obj ) === 'String';
	};


/**
 * @project : modula.js
 * @package : core
 * @internal : isWindow.isWindow
 * @type : function
 * @dependencies : none
 *
 * @description :
 * isWindow checks if an object is a window object
 */


	/**
	 * check if object is the window object
	 */
	var
	isWindow = function( obj ) {
		return !!obj && obj === obj.window;
	};


/**
 * @project : modula.js
 * @package : core
 * @internal : last.last
 * @type : function
 * @dependencies :	_define
 * 					_array.array
 *
 * @description :
 * gets the last element of an array
 */


	/**
	 * define last
	 */
	var
	last = function( arr ) {
		// check for length
		if( !arr.length || arr.length === 0 ) { return false; };
		// create regex
		var regex = last._Regex || ( last._Regex = new RegExp( "(?:" + uid + ")*$|(" + uid + ")(?:" + uid + ")*" , 'g' ) );
		// return the result
		return ( arr = arr.join(uid).replace( regex , "$1" ).split( uid ) ) && slice( arr , -1 );
	};


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


/**
 * @project : modula.js
 * @package : core
 * @internal : functions.stringToObject
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


/**
 * @project : modula.js
 * @package : core
 * @internal : type.type
 * @type : function
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 * 					Defaults.RegularExpressions._define
 * 					Defaults.RegularExpressions.types
 * 					Regex._define
 * 					_object.object
 *
 * @description :
 * type returns the object's type. the type will NOT be lower cased
 * 
 * @example
 * var myType = type( function() {} ); // result myType = "Function"
 */


	/**
	 * gets the type of an object
	 */
	// alternative line:28 'regex = type._Regex || ( type._Regex = Regex.types );'
	var
	type = function( obj ) {
		var value ,
		regex = type._Regex || ( type._Regex = Defaults( [ 'RegularExpressions' , 'types' ] ) );
		return ( ( value = regex.exec( toString( obj ) ) ) ) && value && value[1] || obj;
	};

/**
 * @project : modula.js
 * @package : core
 * @internal : extend.extend
 * @type : function
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 * 					Defaults.RegularExpressions._define
 * 					Defaults.RegularExpressions.types
 * 					Regex._define
 * 					_object.object
 * 					type.type
 * 					isWindow.isWindow
 * 					isPlainObject.isPlainObject
 * 					extend.extend
 *
 * @description :
 * this function is used to extend objects with other objects
 * 
 * @notice : this function licensed unter the copyright of
 * the jquery foundation.
 */


	/**
	 * extend module
	 * 
	 * taken from jQuery, but is nearly identically to
	 * other scripts found in the world wide web
	 */
	var
	extend = function( /* [ target , ] source , ... , source(n) */ ) {
		// define variables
		var options , name , source , copy , clone ,
			length = arguments.length,
			i = 1,
			target = arguments[ 0 ] || {},
			deep = typeof target === 'boolean' && target || false;
		// check for deepCopy and handle the target
		if( deep ) {
			target = arguments[ i++ ] || {};
		};
		// check for target type is not usable object
		if( typeof target !== 'object' && type( target ) !== 'Function' ) {
			target = {};
		};
		// check if we have target (use this if not)
		if( i === length ) {
			 target = this;
			 i--;
		};
		// loop the given source((s) only works with a target)
		for( ; i < length ; i++ ) {
			// check we have no null or undefined (use != and not !== to get undefined)
			if( ( options = arguments[ i ] ) != null ) {
				// extend the target
				for( name in options ) {
					// get 'name' from target and options
					source = target[ name ];
					copy = options[ name ];
					// prevent never ending loops (jQuery)
					if( source === copy ) {
						continue;
					};
					// for deepCopy option we need recurse
					if( deep && copy ){
						// handle deepCopy situation
						clone = source ? source : isArray( source ) ? [] : isPlainObject( source ) ? {} : source;
						// clone object with recurse call
						target[ name ] = extend( deep , clone , copy );
					}
					// do not copy undefined values
					else if( copy !== undefined ) {
						target[ name ] = copy;
					};
				};
			};
		};
	};


/**
 * @project : modula.js
 * @package : 
 * @internal : Defaults.Defaults.XhrObject.
 * @type : Defaults
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 * 					Defaults.Defaults._define
 * 					Defaults.Defaults.XhrObject._define
 */


		/**
		 * define XhrObject defaults
		 */
		// alternative 'Defaults.Defaults.XhrObject = {'
		// alternative '};'
		Defaults(
			true ,
			[ 'Defaults' , 'XhrObject' ] ,
			{
				// url : (must be defined by function)
				method : 'POST',
				protocol : window.location.protocol === 'https:' ? 'https' : 'http:',
				cache : false,
				async : true,
				responseType : 'html',
				requestHeader : {
					'Accept' : 'text/xml',
					'Accept-Charset' : 'UTF-8',
					'Content-Type' : 'application/x-www-form-urlencoded',
				},
				timeout : 0,
				override : 'text/xml',
				user : '',
				password : '',
				multipart : false,
				sendData : null,
			}
		);


/**
 * @project : modula.js
 * @package : 
 * @internal : Defaults.Defaults.XhrObject.
 * @type : Defaults
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 * 					Defaults.Defaults._define
 * 					Defaults.Defaults.XhrObject._define
 */


		/**
		 * define MimeTypes in Defaults
		 */
		// alternative 'Defaults.Defaults.XhrObject.MimeTypes = {'
		// alternative '};'
		Defaults(
			true ,
			[ 'Defaults' , 'XhrObject' , 'MimeTypes' ] ,
			{
				'html' : 'text/html',
				'json' : 'application/json, text/javascript',
				'text' : 'text/plain',
				'xml' : 'application/xml, text/xml',
			}
		);


/**
 * @project : modula.js
 * @package : 
 * @internal : Defaults.Defaults.XhrObject.
 * @type : Defaults
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 * 					Defaults.Defaults._define
 * 					Defaults.Defaults.XhrObject._define
 */


		/**
		 * define ResponseFields in Defaults
		 */
		// alternative 'Defaults.Defaults.XhrObject.ResponseFields = {'
		// alternative '};'
		Defaults(
			true,
			[ 'Defaults' , 'XhrObject' , 'ResponseFields' ] ,
			{
				html: "responseText",
				json: "responseJSON",
				text: "responseText",
				xml: "responseXML",
			}
		);


/**
 * @project : modula.js
 * @package : 
 * @internal : Defaults.Defaults.ReadyHandler.useStates.js
 * @type : Defaults
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 * 					Defaults.Defaults._define
 * 					Defaults.Defaults.ReadyHandler._define
 */


		/**
		 * define States
		 */
		// alternative line: 'var UseStates = {'
		// alternative line: '};'
		Defaults(
			true ,
			[ 'Defaults' , 'ReadyHandler' , 'UseStates' ] ,
			{
				undefine : 'undefine', 
				progress : 'progress',
				complete : 'complete',
				rejected : 'rejected'
			}
		);


/**
 * @project : modula.js
 * @package : Strings , Defaults
 * @internal : Defaults.Strings.bools
 * @type : object
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 * 					Defaults.Strings._define
 * 					Strings._define
 */


		/**
		 * bools defines the most used boolean values pipe seperated
		 */
		// alternative line:18 'Strings.bools = 'checked|selected|async|autofocus|autoplay|controls|' +'
		// alternative line:19 ''defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped';'
		Defaults( true , [ 'Strings' , 'bools' ] , 'checked|selected|async|autofocus|autoplay|' +
			'controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped' );


/**
 * @project : modula.js
 * @package : RegularExpressions , Defaults
 * @internal : Defaults.RegularExpressions.types
 * @type : Regular Expression
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 * 					Defaults.RegularExpressions._define
 * 					Regex._define
 */


		/**
		 * object type regular expression
		 */
		// alternative 'Regex.types = new RegExp( "^(?:\\[object\\s([^\\]]*)\\])$" );'
		Defaults( true , [ 'RegularExpressions' , 'types' ] , new RegExp( "^(?:\\[object\\s([^\\]]*)\\])$" ) );


/**
 * @project : modula.js
 * @package : RegularExpressions , Defaults
 * @internal : Defaults.RegularExpressions.trim
 * @type : Regular Expression
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 * 					Defaults.RegularExpressions._define
 * 					Regex._define
 */


		/**
		 * trim and escaping
		 */
		// alternative 'Regex.trim = new RegExp( "^\\s*|\\s*$" , 'g' );'
		Defaults( true , [ 'RegularExpressions' , 'trim' ] , new RegExp( "^\\s*|\\s*$" , 'g' ) );


/**
 * @project : modula.js
 * @package : RegularExpressions , Defaults
 * @internal : Defaults.RegularExpressions.bools
 * @type : Regular Expression
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 * 					Defaults.RegularExpressions._define
 * 					Defaults.Strings._define
 * 					Regex._define
 * 					Strings._define
 */


		/**
		 * boolean attributes
		 */
		// alternative 'Regex.bools = new RegExp( "^(" + Strings.bools + ")$" );'
		Defaults( true , [ 'RegularExpressions' , 'bools' ] , new RegExp( "^(" +
			Defaults( [ 'Strings' , 'bools' ] ) + ")$" ) );


/**
 * @project : modula.js
 * @package :
 * @internal : Defaults.RegularExpressions.XhrObject.url
 * @type : Regular Expression
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 * 					Defaults.RegularExpressions._define
 * 					Defaults.RegularExpressions.XhrObject._define
 * 					Regex._define
 * 					Regex.XhrObject._define
 */


		/**
		 * define regular expression for allowed request methods
		 */
		// alternative line:19-20 'Regex[ 'XhrObject' ].url = new RegExp('
		Defaults( true , [ 'RegularExpressions' , 'XhrObject' , 'methods' ] , new RegExp( 
			"^(CONNECT|DELETE|GET|HEAD|OPTIONS|POST|PUT|TRACE|TRACK)$" ) );


/**
 * @project : modula.js
 * @package : 
 * @internal : Defaults.Defaults.XhrObject.
 * @type : Regular Expression
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 * 					Defaults.RegularExpressions._define
 * 					Defaults.RegularExpressions.XhrObject._define
 * 					Regex._define
 * 					Regex.XhrObject._define
 */


		/**
		 * define ContentTypes as regular expressions
		 */
		// alternative 'Regex.XhrObject.ContentTypes = {'
		// alternative '};'
		Defaults(
			true,
			[ 'RegularExpressions' , 'XhrObject' , 'ContentTypes' ] ,
			{
				html : /html/,
				json : /json/,
				text : /text\/plain/,
				xml : /xml/,
			}
		);


/**
 * @project : modula.js
 * @package :
 * @internal : Defaults.RegularExpressions.UrlObject.url
 * @type : Regular Expression
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 * 					Defaults.RegularExpressions._define
 * 					Defaults.RegularExpressions.UrlObject._define
 * 					Regex._define
 * 					Regex.Selector._define
 */


		/**
		 * define regular expression for URL building
		 */
		// alternative line:20 'Regex[ 'UrlObject' ].url = new RegExp('
		// alternative line:37 ');'
		Defaults( true , [ 'RegularExpressions' , 'UrlObject' , 'url' ] , new RegExp(
			/**
			 * http://name:password@example.org:80/demo/example.php?key1=value1&key2=value2#anchor
			 * |      |    |        |           | |                 |                      |
			 * |      |    |        hostname    | |                 search                 hash
			 * |      |    password             | pathname
			 * |      username                  port
			 * protocol
			 */
			/* 1   :protocol */ "^(?:([\\w.+-]+:\\/\\/))?" +
			/* 2+3 :username */ "(?:(([^\\/\\?#]*):)" +
			/* 4+5 :password */ "(([^\\/?#]*)@))?" +
			/* 6   :hostname */ "((?:(?:[^\\/\\.\\?#:]*\\.)+(?:[^\\/\\?#:]*))|(?:localhost))?" +
			/* 7+8 :port     */ "(?:(:([\\d]+)))?" +
			/* 9   :pathname */ "((?:\\/[^\\/\\?#]+)*(?:\\/)?)?" +
			/* 10  :search   */ "(?:(\\?[^#]+))?" +
			/* 11  :hash     */ "(?:(#.*))?$"
		) );


/**
 * @project : modula.js
 * @package : RegularExpressions , Defaults
 * @internal : Defaults.RegularExpressions.Selector.attribs
 * @type : Regular Expression
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 * 					Defaults.RegularExpressions._define
 * 					Defaults.RegularExpressions.Selector._define
 * 					Regex._define
 * 					Regex.Selector._define
 */


		/**
		 * attribs matches attributes with or without assignment
		 */
		// alternative line:20 'Regex[ 'Selector' ].attribs = new RegExp( "\\s*([\\w-]+)(?:\\s*(=)\\s*(?:(?:" +
		// alternative line:20 '"\"((?:\\\\.|[^\\\\\"])*)\")|(?:'((?:\\\\.|[^\\\\'])*)')|([^\\s]*)))?" , 'g' );
		Defaults( true , [ 'RegularExpressions' , 'Selector' , 'attribs' ] , new RegExp( "\\s*([\\w-]+)(?:" +
			"\\s*(=)\\s*(?:(?:\"((?:\\\\.|[^\\\\\"])*)\")|(?:'((?:\\\\.|[^\\\\'])*)')|([^\\s]*)))?" , 'g' ) );


/**
 * @project : modula.js
 * @package : RegularExpressions , Defaults , Selector
 * @internal : Defaults.RegularExpressions.Selector.cache
 * @type : Regular Expression
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 * 					Defaults.RegularExpressions._define
 * 					Defaults.RegularExpressions.Selector._define
 * 					Regex._define
 * 					Regex.Selector._define
 */


		/**
		 * cache is a regular expression that is used for the selector manual caching
		 */
		// alternative line:20 'Regex[ 'Selector' ].cache = new RegExp( "^(?:([+](?=[\\w\\|%]))?([\\w]*" +
		// alternative line:21 '"[\\w](?=[\\|%]))?(?:([\\|])(?=[\\d%]))?([\\d]*)?%)?(?:\\s*(.*))?$" );'
		Defaults( true , [ 'RegularExpressions' , 'Selector' , 'cache' ] , new RegExp( "^(?:([+](?=" +
			"[\\w\\|%]))?([\\w]*[\\w](?=[\\|%]))?(?:([\\|])(?=[\\d%]))?([\\d]*)?%)?(?:\\s*(.*))?$" ) );


/**
 * @project : modula.js
 * @package : RegularExpressions , Defaults , Selector
 * @internal : Defaults.RegularExpressions.Selector.newTag
 * @type : Regular Expression
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 * 					Defaults.RegularExpressions._define
 * 					Defaults.RegularExpressions.Selector._define
 * 					Regex._define
 * 					Regex.Selector._define
 */


		/**
		 * newTag matches new html/xml tags and their attributes
		 */
		// alternative line:20 'Regex[ 'Selector' ].newTag = '
		// alternative line:21 'new RegExp( "^\\<([\\w-]+)(?:\\s*)((?:[^\\>]|[\\/](?!\\>$))*)(?:\\/)?\\>$" );'
		Defaults( true , [ 'RegularExpressions' , 'Selector' , 'newTag' ] , 
			new RegExp( "^\\<([\\w-]+)(?:\\s*)((?:[^\\>]|[\\/](?!\\>$))*)(?:\\/)?\\>$" ) );


/**
 * @project : modula.js
 * @package : 
 * @internal : Defaults.RegularExpressions.Filter.backmark
 * @type : object
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 * 					Defaults.RegularExpressions._define
 * 					Defaults.RegularExpressions.Filter._define
 * 					Regex._define
 */


			/**
			 * backmark is used for selectors level 4 "div > !div  > div"
			 */
			// alternative 'Regex.Filter[ 'BACKMARK' ] = new RegExp( "^!" );'
			Defaults( true , [ 'RegularExpressions' , 'Filter' , 'BACKMARK' ] , new RegExp( "^!" ) );


/**
 * @project : modula.js
 * @package : 
 * @internal : Defaults.RegularExpressions.Filter.id
 * @type : object
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 * 					Defaults.RegularExpressions._define
 * 					Defaults.RegularExpressions.Filter._define
 * 					Regex._define
 */


			/**
			 * id selector "#id"
			 */
			// alternative 'Regex.Filter[ 'ID' ] = new RegExp( "^#([\\w-]+)" );'
			Defaults( true , [ 'RegularExpressions' , 'Filter' , 'ID' ] , new RegExp( "^#([\\w-]+)" ) );


/**
 * @project : modula.js
 * @package : 
 * @internal : Defaults.RegularExpressions.Filter.class
 * @type : object
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 * 					Defaults.RegularExpressions._define
 * 					Defaults.RegularExpressions.Filter._define
 * 					Regex._define
 */


			/**
			 * class selector ".class"
			 */
			// alternative 'Regex.Filter[ 'CLASS' ] = new RegExp( "^\\.([\\w-]+)" );'
			Defaults( true , [ 'RegularExpressions' , 'Filter' , 'CLASS' ] , new RegExp( "^\\.([\\w-]+)" ) );


/**
 * @project : modula.js
 * @package : 
 * @internal : Defaults.RegularExpressions.Filter.tag
 * @type : object
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 * 					Defaults.RegularExpressions._define
 * 					Defaults.RegularExpressions.Filter._define
 * 					Regex._define
 */


			/**
			 * tag selector "div"
			 */
			// alternative 'Regex.Filter[ 'TAG' ] = new RegExp( "^(?:(?:\\*|[\\w-]+)\\|)?(\\*|[\\w-]+)" );'
			Defaults( true , [ 'RegularExpressions' , 'Filter' , 'TAG' ] , 
				new RegExp( "^(?:(?:\\*|[\\w-]+)\\|)?(\\*|[\\w-]+)" ) );


/**
 * @project : modula.js
 * @package : 
 * @internal : Defaults.RegularExpressions.Filter.attribs
 * @type : object
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 * 					Defaults.RegularExpressions._define
 * 					Defaults.RegularExpressions.Filter._define
 * 					Regex._define
 */


			/**
			 * attribute selector '[attribute=value]'
			 */
			// alternative line:19-21 'Regex.Filter[ 'ATTR' ] = '
			// alternative line:25 ';'
			Defaults(
				true ,
				[ 'RegularExpressions' , 'Filter' , 'ATTR' ] , 
				new RegExp( "^\\[\\s*(?:([\\w-]+\\|)?([\\w-]+)\\s*)(?:(?:((?:~|" +
				"\\^|\\$|\\*|\\||!)?=)\\s*(?:(?:\"((?:\\\\.|[^\\\\\"])*)\")|(?:" +
				"'((?:\\\\.|[^\\\\'])*)')|(?:([^\\]]*)))?)?)\\s*\\]" )
			);


/**
 * @project : modula.js
 * @package : 
 * @internal : Defaults.RegularExpressions.Filter.not
 * @type : object
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 * 					Defaults.RegularExpressions._define
 * 					Defaults.RegularExpressions.Filter._define
 * 					Regex._define
 */


			/**
			 * not statements like ":not(p)" also support qualified selectors ":not(p>p>p)"
			 */
			// alternative line:19-21 'Regex.Filter[ 'NOT' ] = '
			// alternative line:23 ';'
			Defaults(
				true ,
				[ 'RegularExpressions' , 'Filter' , 'NOT' ] , 
				new RegExp( "^(:not\\s*(?:\\())" )
				,

			/**
			 * delimiter ")" is used only for the qualified selectors on not statements
			 */
			// alternative line:30-31 'Regex.Filter[ 'DELIMITER' ] = '
			// alternative line:33 ';'
				true ,
				[ 'RegularExpressions' , 'Filter' , 'DELIMITER' ] ,
				new RegExp( "^(\\))" )
			) ;


/**
 * @project : modula.js
 * @package : 
 * @internal : Defaults.RegularExpressions.Filter.pseudo
 * @type : object
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 * 					Defaults.RegularExpressions._define
 * 					Defaults.RegularExpressions.Filter._define
 * 					Regex._define
 */


			/**
			 * child/of-type selector like ":first-child"
			 */
			// alternative line:19-21 'Regex.Filter[ 'CHILD' ] ='
			// alternative line:24 ';'
			Defaults(
				true ,
				[ 'RegularExpressions' , 'Filter' , 'CHILD' ] ,
				new RegExp( "^:(first|last|(nth)(?:-last)?|only)-(child|of-type)(?:\\(" +
				"\\s*(even|odd|(?:([+-]|)(\\d*)n|)\\s*(?:([+-]|)\\s*(\\d+)|))\\s*\\)|)", "i")
				,

			/**
			 * other pseudos like "::before"
			 */
			// alternative line:31-32 'Regex.Filter[ 'PSEUDO' ] = '
			// alternative line:35 ';'
				true ,
				[ 'RegularExpressions' , 'Filter' , 'PSEUDO' ] , 
				new RegExp( "^(:(?::)?[\\w-]+)(?:\\(((?:'((?:\\\\.|[^\\\\'])*)'|" +
				"\"((?:\\\\.|[^\\\\\"])*)\")|.*)\\))?" )
			) ;


/**
 * @project : modula.js
 * @package : 
 * @internal : Defaults.RegularExpressions.Filter.select
 * @type : object
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 * 					Defaults.RegularExpressions._define
 * 					Defaults.RegularExpressions.Filter._define
 * 					Regex._define
 */


			/**
			 * seperator like the comma in "div , div"
			 */
			// alternative line:18-22 'Regex.Filter[ 'SEPERATOR' ] = new RegExp( "^\\s*,\\s*" );'
			Defaults(
				true , 
				[ 'RegularExpressions' , 'Filter' , 'SEPERATOR' ] , 
				new RegExp( "^\\s*,\\s*" )
				,

			/**
			 * combinators are ">" , "+" , "~" and " "
			 */
			// alternative line:28-31 'Regex.Filter[ 'COMBINATOR' ] = new RegExp( "^\\s*([>+~]|\\s)\\s*" );'
				true ,
				[ 'RegularExpressions' , 'Filter' , 'COMBINATOR' ] , 
				new RegExp( "^\\s*([>+~]|\\s)\\s*" )
			);


/**
 * @project : modula.js
 * @package : 
 * @internal : Tokenizer.Tokenizer
 * @type : function
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 * 					Defaults.RegularExpressions._define
 * 					Defaults.RegularExpressions.Filter._define
 * 					Regex._define
 * 					Cache.Cache
 * 				(	simplify.simplify	)
 *
 * @description :
 * the Tokenizer is used to split any valid selector into single "elements" and their "token"
 * 
 * @example
 * Tokenizer("div.class div#id") // result in
 * // [
 * //   [ { type:"TAG" , token:"div" } , { type:"CLASS" , token:".class" } , { type:"COMBINATOR" , token:" " } ] ,
 * //   [ { type:"TAG" , token:"div" } , { type:"ID" , token:"#id" } ]
 * // ]
 * their will be more details on the result
 */


	/**
	 * Tokenizer
	 * 
	 * tokenize function extracts single selectors and
	 * splits them to their elements and caches results
	 */
	// alternative 1 line:38 'Tokenizer = function( selector ){'
	// alternative 1 line:45 'Filter = Tokenizer._Regex || ( Tokenizer._Regex = Regex.Filter );'
	// alternative 1 line:203 '};'
	// alternative 2 line:59 '( !Tokenizer[ filter ] || ( match = Tokenizer[ filter ]( this , match ) ) ) ) {'
	var
	Tokenizer = Defaults( true , [ 'Objects' , 'Selector' , 'Tokenizer' ] , function( selector ){
		// if cached we are done
		if( Cache( 'Tokenizer' )( selector ) ) { return Cache( 'Tokenizer' )( selector ); };
		// define used variables
		var i , groups , group , match , matched , parts , result = [] ,
			gtoken = '' , ptoken = '' , token = '',
			// get Defaults 'Filter' (if not existing create object)
			Filter =  Tokenizer._Regex || ( Tokenizer._Regex = Defaults( true , [ 'RegularExpressions' , 'Filter' ] ) );
		// copy selector to this.newSelector
		this.newSelector = selector;
		// so we have a new token
		groups = [ ( group = [ ( parts = [] ) ] ) ];
		// so we loop all token we detect
		while( this.newSelector ) {
			// delete matched
			matched = false;
			// loop the defined filter
			for( var filter in Filter ) {
				//check if match detected and
				//also check and handle tokenizer filter
				if( ( match = Filter[ filter ].exec( this.newSelector ) ) && 
					( !Tokenizer[ filter ] || ( match = Tokenizer[ filter ].call( this , match ) ) ) ) {
					/**
					 * if we handled a not statemant directly before
					 */
					if( this.advancedNot ) {
						// set advanced not to true or false
						group.advancedNot = this.advancedNot;
						// delete this.advancedNot
						delete this.advancedNot;
					};
					/**
					 * if we have a not statement and detect the delimiter ')'
					 * so we have to handle the end of a selector
					 */
					if( this.limited && delete this.limited ) {
						// add 'group'-token to group
						group.token = gtoken;
						// add token to parts
						parts.token = ptoken;
						// add Group to ElementsCache
						Cache( 'Elements' )( ptoken , parts );
						// loop through groups
						i = groups.length;
						while( ( group = groups[ --i ] ) ) {
							// check for empty parts
							if( group[ group.length - 1 ].length === 0 ) {
								delete group[ ( group.length = group.length - 1 ) ];
							};
							// check for trailing combinators
							if( group[ group.length - 1 ][ group[ group.length - 1 ].length - 1 ].type === 'COMBINATOR' ) {
								group.trail = true
							};
							// check if native querySelectorAll is usable
							group.useNative = !group.lead && !group.trail && !group.advancedNot;
							// add group to result
							result.push( group.token );
							// add single selector to cache
							Cache( 'Selector' )( group.token , group );
						};
						// seperate selector from not statement
						var notSelecotor = selector.slice( 0 , selector.length - this.newSelector.length - 1 );
						// add result to Tokenizer cache
						Cache( 'Tokenizer' )( notSelecotor , result );
						// return remaining selector string (we are still inside the not)
						return selector.slice( 0 , selector.length - this.newSelector.length );
					};
					// extract regex matching string
					matched = match.shift();
					// refactor the newSelector string
					this.newSelector = this.newSelector.slice( matched.length );
					/**
					 * check for Seperator ',' and start new Group
					 */
					if( this.nextGroup && delete this.nextGroup ) {
						// add 'group'-token to group 
						group.token = gtoken;
						// reset gtoken
						gtoken = '';
						// add token to parts
						parts.token = ptoken;
						// add Group to ElementsCache
						Cache( 'Elements' )( ptoken , parts );
						// reset ptoken
						ptoken = '';
						// start new group
						groups.push( ( group=[ ( parts = [] ) ] ) );
						// continue loop
						continue;
					};
					/**
					 * check now for combinator '>~+ '
					 */
					if( filter === 'COMBINATOR' ) {
						// if we have no parts elements (only combinator)
						if( parts.length === 0 ) {
							// if we have first group = leading combinator
							if( group.length === 1 ) {
								// set leading property to group
								group.lead = true;
							}
							// if we have a leading parts = empty element
							else {
								// add a wildcard element
								parts.push( { matched : '' , token : '*' , type : 'TAG' , match : [ '*' ] } );
								// set wildcard property to group
								group.wild = true;
							};
						};
						// push combinator to parts
						parts.push( { matched : matched , token : match[ 0 ] , type : filter , match : match.slice() } );
						// so we have multiple elements - add a property
						result.multiple = ( group.multiple = true );
						// add combinator to gtoken and ptoken
						gtoken += match[ 0 ];
						// add token to parts
						parts.token = ptoken;
						// add Group to ElementsCache
						Cache( 'Elements' )( ptoken , parts );
						// reset ptoken
						ptoken = '';
						// create new parts
						group.push( ( parts = [] ) );
						// continue loop
						continue;
					};
					/**
					 * so we have a regular filter to use
					 */
					ptoken += matched;
					gtoken += matched;
					// add filter to parts
					parts.push( { matched : matched , token : matched , type : filter , match : match.slice() } );
				};
			};
			// return empty array on failure
			if( !matched ){ throw new Error( 'invalid selector : ' + newSelector ); return []; }
		};
		// set gtoken to group
		group.token = gtoken;
		// add token to parts
		parts.token = ptoken;
		// add Group to ElementsCache
		Cache( 'Elements' )( ptoken , parts );
		// loop through groups
		i = groups.length;
		while( ( group = groups[ --i ] ) ) {
			// check for empty parts
			if( group[ group.length - 1 ].length === 0 ) {
				// and delete empty parts
				delete group[ ( group.length = group.length - 1 ) ];
			};
			// check for trailing combinators
			if( group[ group.length - 1 ][ group[ group.length - 1 ].length - 1 ].type === 'COMBINATOR' ) {
				group.trail = true;
			};
			// check if native querySelectorAll is usable
			group.useNative = !group.lead && !group.trail && !group.advancedNot;
			// add group to result
			result.push( group.token );
			// add single selector to cache
			Cache( 'Selector' )( group.token , group );
		};
		// return cached result
		return Cache( 'Tokenizer' )( selector , result );
	} );


/**
 * @project : modula.js
 * @package : 
 * @internal : Select.Tokenizer.select
 * @type : function
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 * 					Defaults.RegularExpressions._define
 * 					Defaults.RegularExpressions.Filter._define
 * 					Regex._define
 * 					Cache.Cache
 * 					Tokenizer.Tokenizer
 * 				(	simplify.simplify	)
 */


	/**
	 * workout for combinators (">","~","+" and " ") 
	 */
	// alternative 1 line:25-28 'Tokenizer[ 'COMBINATOR' ] = function( regexMatch ) {'
	// alternative 1 line:33 ');'
	// alternative 2 line:25-28 'Tokenizer[ 'COMBINATOR' ] = simplify( function( regexMatch ) {'
	// alternative 2 line:33 ');'
	// alternative 3 line:28 'simplify( function( regexMatch ) {'
	Defaults(
		false ,
		[ 'Objects' , 'Selector' , 'Tokenizer' , 'COMBINATOR' ] ,
		function( regexMatch ) {
			// set nextParts as true for Tokenizer
			this.nextParts = true;
			// return unchanged argument
			return regexMatch;
		},


	/**
	 * workout for seperator ","
	 */
	// alternative 1 line:44-46 'Tokenizer[ 'SEPERATOR' ] = function( regexMatch ) {'
	// alternative 1 line:51-52 ');'
	// alternative 2 line:44-46 'Tokenizer[ 'SEPERATOR' ] = simplify( function( regexMatch ) {'
	// alternative 2 line:51-52 ');'
	// alternative 3 line:46 'simplify( function( regexMatch ) {'
		false ,
		[ 'Objects' , 'Selector' , 'Tokenizer' , 'SEPERATOR' ] ,
		function( regexMatch ) {
			// set nextGroup as true for Tokenizer
			this.nextGroup = true;
			// return unchanged argument
			return regexMatch;
		}
	);


/**
 * @project : modula.js
 * @package : 
 * @internal : Tokenizer.not
 * @type : function
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 * 					Defaults.RegularExpressions._define
 * 					Defaults.RegularExpressions.Filter._define
 * 					Regex._define
 * 					Cache.Cache
 * 					Tokenizer.Tokenizer
 * 				(	simplify.simplify	)
 */


	/**
	 * not extracts the correct advanced selectors from not statements
	 */
	// alternative 1 line:25-28 'Tokenizer[ 'NOT' ] = function( regexMatch ) {'
	// alternative 1 line:39 ');'
	// alternative 2 line:25-28 'Tokenizer[ 'NOT' ] = simplify( function( regexMatch ) {'
	// alternative 2 line:39 ');'
	// alternative 3 line:28 'simplify( function( regexMatch ) {'
	Defaults(
		false , 
		[ 'Objects' , 'Selector' , 'Tokenizer' , 'NOT' ] , 
		function( regexMatch ) {
			// create new Tokenizer for the not statement
			var subSelector = Tokenizer( regexMatch.input.slice( regexMatch[ 0 ].length ) ),
			// create validated selector
			subSelector = [ regexMatch[ 0 ] + subSelector , subSelector.slice( 0 , - 1 ) ];
			// check if not statment is a qualified selector
			this.advancedNot = Cache.Tokenizer[ ' ' + subSelector[ 1 ] ].length > 1 || Cache.Tokenizer[ ' ' + subSelector[ 1 ] ].multiple;
			// reset new Selector
			this.newSelector = regexMatch.input;
			// return subSelector to Tokenizer
			return subSelector;
		},


	/**
	 * workout for delimter ")" used for not statements
	 */
	// alternative 1 line:50-52 'Tokenizer[ 'DELIMITER' ] = function( regexMatch ) {'
	// alternative 1 line:59-60 ');'
	// alternative 2 line:50-52 'Tokenizer[ 'DELIMITER' ] = simplify( function( regexMatch ) {'
	// alternative 2 line:59-60 ');'
	// alternative 3 line:52 'simplify( function( regexMatch ) {'
		false ,
		[ 'Objects' , 'Selector' , 'Tokenizer' , 'DELIMITER' ] ,
		function( regexMatch ) {
			// recreate newSelector for Tokenizer
			this.newSelector = this.newSelector.slice( regexMatch[ 0 ].length );
			// set limited as true for Tokenizer
			this.limited = true;
			// return unchanged argument
			return regexMatch;
		}
	);


/**
 * @project : modula.js
 * @package : 
 * @internal : TaskObject.TaskObject
 * @type : object
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 * 					Defaults.Constructors._define
 * 					Defaults.Constructors.TaskObject._define
 * 					Defaults.Objects._define
 * 					Defaults.Objects.TaskObject._define
 * 					Defaults.Prototypes._define
 * 					Defaults.Prototypes.TaskObject._define
 * 					Objects._define
 * 					Prototypes._define
 * 					_array.array
 * 					isFunction.isFunction.js
 *
 * @description :
 */


		/**
		 * define TaskObject as function
		 */
		var
		TaskObject = function( TaskTarget , TasksOptions ) {
			// return new TaskObject
			return new TaskObject.fn.init( TaskTarget , TasksOptions );
		};


		/**
		 * define TaskObject in Prototypes
		 */
		// alternative line:46 'TaskObject.fn = ( Prototypes.TaskObject = TaskObject.prototype = {'
		// alternative line:54 'var PushStack = Defaults( [ 'Objects' , 'TaskObject' , 'PushStack' ] );'
		// alternative line:67 'var PushStack = Defaults( [ 'Objects' , 'TaskObject' , 'PushStack' ] );'
		// alternative line:78 'var PushStack = Defaults( [ 'Objects' , 'TaskObject' , 'PushStack' ] );'
		// alternative line:80 'var ReadyHandler = Defaults( [ 'Objects' , 'ReadyHandler' ] );'
		// alternative line:96 'var PushStack = Defaults( [ 'Objects' , 'TaskObject' , 'PushStack' ] );'
		// alternative line:116 'var PushStack = Defaults( [ 'Objects' , 'TaskObject' , 'PushStack' ] );'
		// alternative line:129 'if( entry[ 0 ]() !== Defaults( [ 'Defaults' , 'ReadyHandler' , 'useSates' ] ).complete ) {'
		// alternative line:150 'var ReadyHandler = Defaults( [ 'Objects' , 'ReadyHandler' ] );'
		// alternative line:166 '} );'
		TaskObject.fn = Defaults( true , [ 'Prototypes' , 'TaskObject' ] , ( TaskObject.prototype = {


			/**
			 * define append
			 */
			append : function( func , args ) {
				// define PushStack as local
				var PushStack = Defaults( [ 'Objects' , 'TaskObject' , 'PushStack' ] );
				// append task with given function
				PushStack[ this.PushStack ].push( isFunction( func ) ? func : [ func , args] );
				// return the task
				return PushStack[ this.PushStack ].length > 1 ? this : this.resolve();
			},

				
			/**
			 * define completed
			 */
			completed : function() {
				// define PushStack as local
				var PushStack = Defaults( [ 'Objects' , 'TaskObject' , 'PushStack' ] );
				// return if task is currently ready or waiting
				return !(PushStack[ this.PushStack ].length > 0);
			},


			/**
			 * define ready
			 */
			ready : function( type , args ) {
				// define PushStack as local
				var PushStack = Defaults( [ 'Objects' , 'TaskObject' , 'PushStack' ] );
				// also define ReadyHandler as local
				var ReadyHandler = Defaults( [ 'Objects' , 'ReadyHandler' ] );
				// check for handler
				if( ReadyHandler[ type ] ) {
					// establish ready task of type 'type'
					ReadyHandler[ type ].ready( this , type , args );
				};
				// return the task
				return PushStack[ this.PushStack ].length > 1 ? this : this.resolve();
			},


			/**
			 * define remove
			 */
			remove : function( deleteAll ) {
				// define PushStack as local
				var PushStack = Defaults( [ 'Objects' , 'TaskObject' , 'PushStack' ] );
				// if we have no PushStack entry we are done
				if( PushStack[ this.PushStack ].length === 0 ) { return this; }
				// so delete only the last entry
				delete PushStack[ this.PushStack ][ PushStack[ this.PushStack ].length - 1 ];
				// if PushStack has to be emptied
				if( deleteAll ) {
					// reset PushStack
					PushStack[ this.PushStack ] = [];
				};
				// return task
				return this;
			},


			/**
			 * define resolve
			 */
			resolve : function() {
				// define PushStack as local
				var PushStack = Defaults( [ 'Objects' , 'TaskObject' , 'PushStack' ] );
				// define some variables
				var entry;
				// loop all PushStack entries for this task
				while( ( entry = PushStack[ this.PushStack ][ 0 ] ) ) {
					// if we have a executable
					if( isFunction( entry ) ){
						// call it with scope of this modula
						entry.call( this );
					}
					// if we have a ReadyState
					else if( isFunction( entry[ 0 ] ) ) {
						// if ReadyState is not complete we are done
						if( entry[ 0 ]() !== Defaults( [ 'Defaults' , 'ReadyHandler' , 'UseStates' ] ).complete ) {
							// return the task
							return this;
						};
					}
					// if we have a function name and its args
					else { 
						// call it with scope of this modula
						this.target[ entry[ 0 ] ].apply( this.target , entry[ 1 ] );
					};
					shift( PushStack[ this.PushStack ] );
				}
				return this;
			},


			/**
			 * define trigger
			 */
			trigger : function( type , args ) {
				// define ReadyHandler as local
				var ReadyHandler = Defaults( [ 'Objects' , 'ReadyHandler' ] );
				// check for bound triggers
				if( this.trigger[ type ] ) {
					// check for args
					if( args && !this.trigger[ type ][ args ] ) {
						// return task if not bound to task's trigger
						return this;
					};
					// complete trigger with given args
					ReadyHandler[ type ].completed( this , type , args );
				};
				// return the task
				return this;
			},


		} ) );


		/**
		 * define TaskObject in Constructors
		 */
		// alternative line:174 'TaskObject.fn.init = ( Constructors.TaskObject = ( function() {'
		// alternative line:180 'Defaults.Defaults.TaskObject.override'
		TaskObject.fn.init = Defaults( true , [ 'Constructors' , 'TaskObject' ] , ( function() {


			/**
			 * define a pushStack for TaskObject as Empty Array
			 */
			Defaults( true , [ 'Objects' , 'TaskObject' , 'PushStack' ] , { length : 0 } );


			/**
			 * Constructor
			 * 
			 * @param [string] URLString
			 */
			var
			Constructor = function( TaskTarget /* , TasksOptions */ ) {
				// set id to task (equal to PushStack id)
				this.PushStack = Defaults( [ 'Objects' , 'TaskObject' , 'PushStack' ] ).length;
				// create new PushStack entry
				push( Defaults( [ 'Objects' , 'TaskObject' , 'PushStack' ] ) , [] );
				// bind a ReadyStates array to task
				this.ReadyStates = [];
				// asign TaskTarget to object
				this.target = TaskTarget;
				// return TaskObject
				return this;
			};


			/**
			 * return url
			 */
			return Constructor;


		} )() );


		/**
		 * bind init
		 */
		TaskObject.fn.init.prototype = TaskObject.fn;

/**
 * @project : modula.js
 * @package : 
 * @internal : ReadyHandler.dom
 * @type : function
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 */


		/**
		 * add DOM as available ReadyHandler
		 */
		// alternative
		// alternative
		Defaults(
			true ,
			[ 'Objects' , 'ReadyHandler' , 'DOM' ] ,
			{


				/**
				 * define ready
				 */
				ready : function( task /* , type , args */ ) {
					// define type as 'DOM'
					var type = 'DOM';
					// define ready object
					var ready = Defaults( [ 'Objects' , 'ReadyHandler' , 'DOM' ] );
					// define PushStack as local
					var PushStack = ( PushStack = Defaults( [ 'Objects' , 'TaskObject' , 'PushStack' ] ) );
					// define the UseStates
					var UseStates = Defaults( [ 'Defaults' , 'ReadyHandler' , 'UseStates' ] );
					/**
					 * if we have a not ready task
					 */
					if( task && task.ReadyStates[ type ] === undefined ) {
						// add task's PushStack to ready for completition
						ready[ ( ready.count = ready.count >>> 0 ) ] = task;
						// add readyTrigger to task's Stack
						push( PushStack[ task.PushStack ] , [ function(){ return task.ReadyStates[ type ]; } ] );
						// set ReadyStates for DOM ready
						task.ReadyStates[ type ] = UseStates.progress;
						// increase count for next turn
						ready.count++;
					};
					/**
					 * check if we have already completed this ready check
					 */
					if( document.readyState === UseStates.complete && ready.count >>> 0 > 0 ) {
						// define some variables
						var i = 0 , task;
						// loop the counts
						while( ready[ i ] !== undefined ) {
							// get task from ready[ i ]
							task = ready[ i ];
							// set readyState as complete for this task
							task.ReadyStates[ type ] = UseStates.complete; 
							// execute task by setting timeout
							window.setTimeout( function() { task.resolve(); } ); 
							// delete ready[ i ] in fact of execution and increase counter
							delete ready[ i++ ];
						};
						// reset ready.count
						ready.count = 0;
						// we are done sucessfully
						return true;
					};
					/**
					 * add eventHandler if needed
					 */
					if( ready.state === UseStates.undefine ) {
						// set eventHandler
						ready.addEvent();
					};
					/**
					 * if we have completed the ready event
					 */
					if( ready.state === UseStates.complete ) {
						// use a timeout to handle this
						window.setTimeout( ready.ready );
					}
					/**
					 * return false when ready check has not been completed
					 */
					return false;
				},


				/**
				 * set DOMContentLoaded.state to undefine (not used yet)
				 */
				state : Defaults( [ 'Defaults' , 'ReadyHandler' , 'UseStates' ] ).undefine,


				/**
				 * addEvent
				 */
				addEvent : function( /* task , type , args */ ) {
					// define ready object
					var ready = Defaults( [ 'Objects' , 'ReadyHandler' , 'DOM' ] );
					// define the UseStates
					var UseStates = Defaults( [ 'Defaults' , 'ReadyHandler' , 'UseStates' ] );
					// add eventHandler aswell as Fallback
					document.addEventListener( 'DOMContentLoaded' , ready.completed , false );
					window.addEventListener( 'load' , ready.completed , false );
					// set ready.state as progress
					ready.state = UseStates.progress;
				},


				/**
				 * completed
				 */
				completed : function( /* task , type , args */ ) {
					// define ready object
					var ready = Defaults( [ 'Objects' , 'ReadyHandler' , 'DOM' ] );
					// define the UseStates
					var UseStates = Defaults( [ 'Defaults' , 'ReadyHandler' , 'UseStates' ] );
					// check if we have set eventHandler
					if( ready.state === UseStates.progress ) {
						// remove eventHandler
						document.removeEventListener( 'DOMContentLoaded' , ready.completed , false );
						window.removeEventListener( 'load' , ready.completed , false );
						// set ready.state as complete
						ready.state = UseStates.complete;
						// re-run the ready fuction
						ready.ready();
					};
				}


			}
		);


/**
 * @project : modula.js
 * @package : 
 * @internal : UrlObject.UrlObject
 * @type : object
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 * 					Defaults.Constructors._define
 * 					Defaults.Constructors.UrlObject._define
 * 					Defaults.Objects._define
 * 					Defaults.Objects.UrlObject._define
 * 					Defaults.Prototypes._define
 * 					Defaults.Prototypes.UrlObject._define
 * 					Defaults.RegularExpressions._define
 * 					Regex._define
 * 					Objects._define
 * 					Prototypes._define
 *
 * @description :
 * the main part of the modula is a self extending loader object
 */


		/**
		 * define UrlObject as function
		 * this function returns a modula UrlObject. its nearly the same as URL (ECMA-7)
		 */
		// alternative line:35 'if( ( cache = Objects[ 'UrlObject' ][ URLString ] ) ) { return cache; };'
		// alternative line:38 '( Objects[ 'UrlObject' ][ URLString ] = new UrlObject.fn.init( URLString ) )'
		var
		UrlObject = function( URLString , URLCache ) {
			// define cache
			var cache;
			// if we have the URLString as Object we are done quickly
			if( ( cache = Defaults( [ 'Objects' , 'UrlObject' , URLString ] ) ) ) { return cache; };
			// return new URLObject
			return URLCache ?
				Defaults( true , [ 'Objects' , 'UrlObject' , URLString ] , new UrlObject.fn.init( URLString ) )
				: new UrlObject.fn.init( URLString )
			;
		};


		/**
		 * define UrlObject in Prototypes
		 */
		// alternative line:48 'UrlObject.fn = ( Prototypes.UrlObject = UrlObject.prototype = {'
		UrlObject.fn = Defaults( true , [ 'Prototypes' , 'UrlObject' ] , ( UrlObject.prototype = {


			/**
			 * getSafe
			 */
			getSafe : function() {
				// return combined Safe URL
				return ( this.safemode || this.origin ) + this.pathname + this.search + this.hash;
			},

				
		} ) );


		/**
		 * define UrlObject in Constructors
		 */
		// alternative line:68 'UrlObject.fn.init = ( Constructors.UrlObject = ( function() {'
		// alternative line:76 'regex = UrlObject._Regex || ( UrlObject._Regex = Regex[ 'UrlObject' ] );'
		UrlObject.fn.init = Defaults( true , [ 'Constructors' , 'UrlObject' ] , ( function() {


			/**
			 * regex
			 */
			var
			// get Defaults 'UrlObject' ( create if not existing)
			regex = UrlObject._Regex || ( UrlObject._Regex = Defaults( true , [ 'RegularExpressions' , 'UrlObject' ] ) );


			/**
			 * Constructor
			 * 
			 * @param [string] URLString
			 */
			var
			Constructor = function( URLString ) {
				// check for regular expression
				if( !regex.url ) {
					// throw error if no valid regex
					throw new Error( 'no regular expression asigned for : \'url\'' );
				};
				// match URLString with regex
				var match = regex.url.exec( URLString );
				// if we have no valid url with host and/or path
				if( !match || ( !match[ 6 ] && !match[ 9 ] ) ) {
					// throw an Error
					throw new Error ( 'UrlObject() needs a valid URL as parameter' );
				};
				// set scheme
				this.protocol = match[ 1 ] || '';
				// set user and password
				this.username = match[ 3 ] || '';
				this.password = match[ 5 ] || '';
				// set host
				this.hostname = match[ 6 ] || '';
				// set port
				this.port = match[ 8 ] || '';
				// set path
				this.pathname = match[ 9 ] || '';
				// set query
				this.search = match[ 10 ] || '';
				// set hash
				this.hash = match[ 11 ] || '';

				// set host
				this.host = this.hostname + ( match[ 7 ] || this.port );
				// set href
				this.href = this.protocol + ( match[ 2 ] || this.username ) + ( match[ 2 ] || this.password ) + 
					this.hostname + ( match[ 7 ] || this.port ) + this.pathname + this.search + this.hash;
				// set origin
				this.origin = this.protocol + this.host;

				// check for cross-over
				if( URLString !== window.location.href ) {
					// get window.location.href as UrlObject
					var Origin = UrlObject( window.location.href , true );
					// check if we have a match on the origins
					if( Origin.origin !== this.origin ) {
						// create URL for origin URL
						this.safemode = Origin.origin;
					};
				};
				// return UrlObject
				return this;
			};


			/**
			 * return url
			 */
			return Constructor;


		} )() );


		/**
		 * bind init
		 */
		UrlObject.fn.init.prototype = UrlObject.fn;

/**
 * @project : modula.js
 * @package : 
 * @internal : XhrObject.XhrObject
 * @type : object
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 * 					Defaults.Defaults._define
 * 					Defaults.Defaults.XhrObject._define
 * 					Defaults.Defaults.XhrObject.Defaults
 * 					Defaults.Constructors._define
 * 					Defaults.Constructors.XhrObject._define
 * 					Defaults.Prototypes._define
 * 					Defaults.Prototypes.XhrObject._define
 * 					Defaults.RegularExpressions._define
 * 					Regex._define
 * 					Objects._define
 * 					Prototypes._define
 *
 * @description :
 * the main part of the modula is a self extending loader object
 */


		/**
		 * define XhrObject as function
		 */
		var
		XhrObject = function( XhrOptions ) {
			// return new XhrObject
			return new XhrObject.fn.init( XhrOptions );
		};


		/**
		 * define XhrObject in Prototypes
		 */
		// alternative line:40 'XhrObject.fn = ( Prototypes.XhrObject = XhrObject.prototype = {'
		// alternative line:47 'regex : XhrObject._Regex || ( XhrObject._Regex = Regex[ 'XhrObject' ] ),'
		XhrObject.fn = Defaults( true , [ 'Prototypes' , 'XhrObject' ] , ( XhrObject.prototype = {


			/**
			 * regex
			 */
			// get Defaults 'XhrObject' ( create if not existing)
			regex : XhrObject._Regex || ( XhrObject._Regex = Defaults( true , [ 'RegularExpressions' , 'XhrObject' ] ) ),


		} ) );


		/**
		 * define XhrObject in Constructors
		 */
		// alternative line:65 'XhrObject.fn.init = ( Constructors.XhrObject = ( function() {'
		// alternative line:82 'Defaults.Defaults.XHRObject.override'
		XhrObject.fn.init = Defaults( true , [ 'Constructors' , 'XhrObject' ] , ( function() {


			/**
			 * define prototypes request method create
			 */
			if( !XhrObject.fn.create ) {
				// if we have a regular XMLHttpRequest
				if ( window.XMLHttpRequest ) {
					// define the XhrObject.fn.request
					XhrObject.fn.create = function( XhrOptions ) {
						// create new XMLHttpRequest and return it
						XhrRequest = ( this.request = new XMLHttpRequest() );
						// if override is requested
						if ( XhrOptions.override || XhrRequest.overrideMimeType ) {
							// we use it
							XhrRequest.overrideMimeType( XhrOptions.override || 
								Defaults( true , [ 'Defaults' , 'XHRObject' ] ).override );
						};
						// return the XhrObject
						return this;
					};
				}
				// so we try the microsoft requests
				else if ( window.ActiveXObject ) {
					// need to try to prevent exceptions
					try {
						// try to create microsoft request
						var XhrRequest = new ActiveXObject( 'Msxml2.XMLHTTP' );
						// define the XhrRequest
						XhrObject.fn.create = function( XhrOptions ) {
							// create new microsoft request
							this.request = new ActiveXObject( 'Msxml2.XMLHTTP' );
							// return the XhrObject
							return this;
						};
					}
					catch ( e ) {
						// need to try to prevent exceptions
						try {
							// try to create microsoft request
							var XhrRequest = new ActiveXObject( 'Microsoft.XMLHTTP' );
							// define the XhrRequest
							XhrObject.fn.create = function( XhrOptions ) {
								// create new microsoft request
								this.request =  new ActiveXObject( 'Microsoft.XMLHTTP' );
								// return the XhrObject
								return this;
							};
						}
						catch ( e ) {
						};
					};
				}
				// so we have no ajax
				else {
					// define request method as alternative
					XhrObject.fn.create = function( XhrOptions ) {
						// set request to boolean false
						this.request = false;
						// return the XhrObject
						return this;
					};
				}
			};
	

			/**
			 * Constructor
			 * 
			 * @param [string] XhrOptions
			 */
			var
			Constructor = function( XhrOptions ) {
				// return XhrObject
				return this;
			};


			/**
			 * return url
			 */
			return Constructor;


		} )() );


		/**
		 * bind init
		 */
		XhrObject.fn.init.prototype = XhrObject.fn;

/**
 * @project : modula.js
 * @package : 
 * @internal : XhrObject.open
 * @type : function
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 * 					Defaults.Defaults._define
 * 					Defaults.Defaults.XhrObject._define
 * 					Defaults.Defaults.XhrObject.Defaults
 * 					Defaults.Constructors._define
 * 					Defaults.Constructors.XhrObject._define
 * 					Defaults.Prototypes._define
 * 					Defaults.Prototypes.XhrObject._define
 * 					Prototypes._define
 * 					XhrObject.XhrObject
 */


				/**
				 * define open to open a XMLHttpRequest. 
				 */
				// alternative 1 line:26-29 'Prototypes.XhrObject.header = function( XhrOptions ) {'
				// alternative 1 line:33 'Defaults.Defaults.XhrObject.method ).toUpperCase(),'
				// alternative 1 line:33 'Defaults.Defaults.XhrObject.async !== true ) ),'
				// alternative 1 line:33 'Defaults.Defaults.XhrObject.user,'
				// alternative 1 line:33 'Defaults.Defaults.XhrObject.password,'
				// alternative 1 line:33 'Defaults.Defaults.XhrObject.cache !== true ) );'
				// alternative 1 line:33 'Defaults.Defaults.XhrObject.timeout >>> 0 > 0'
				// alternative 1 line:33 'Defaults.Defaults.XhrObject.responseType'
				// alternative 1 line:33 'Defaults.Defaults.XhrObject.withCredentials'
				// alternative 1 line:33 'Defaults.Defaults.XhrObject.sendData ) || '' );'
				// alternative 1 line:41-42 '};'
				Defaults(
					false ,
					[ 'Prototypes' , 'XhrObject' , 'open' ],
					function( XhrOptions ) {
						// define some variables
						var
						// define XhrMethod
						XhrMethod = ( XhrOptions.method ||
							Defaults( [ 'Defaults' , 'XhrObject' , 'method' ] ) ).toUpperCase(),
						// define XhrUrl
						XhrUrl = new URLObject( XhrOptions.url ).getSafe(),
						// define XhrAsync
						XhrAsync = !( XhrOptions.async === false || !( !XhrOptions.async &&
							Defaults( [ 'Defaults' , 'XhrObject' , 'async' ] ) !== true ) ),
						// define XhrUser
						XhrUser = XhrOptions.user !== undefined ? XhrOptions.user : 
							Defaults( [ 'Defaults' , 'XhrObject' , 'user' ] ),
						// define XhrPassword
						XhrPassword = XhrOptions.password !== undefined ? XhrOptions.password :
							Defaults( [ 'Defaults' , 'XhrObject' , 'password' ] ),
						// define XhrCaching
						XhrCaching = !( XhrOptions.cache === false || !( !XhrOptions.cache === undefined &&
							Defaults( [ 'Defaults' , 'XhrObject' , 'cache' ] ) ) );
						// if XhrMethod is no valid request method
						if( !RegularExpressions.XhrObject.method.test( XhrMethod ) ) {
							throw new Error( 'XhrObject:open() : no valid method : ' + XhrMethod )
						}
						// if XhrUrl is no valid modula URL throw an error
						if( !XhrUrl ) {
							throw new Error( 'XhrObject:open() : no valid url : ' + XhrUrl.getOrigin() );
						};
						// check if we have a 'false' on async paramter
						if( !XhrAsync ) {
							// check for timeout
							if( XhrOptions.timeout >>> 0 > 0 || 
								Defaults( [ 'Defaults' , 'XhrObject' , 'timeout' ] ) >>> 0 > 0
							) {
								throw new Error( 'XhrObject:open() : on timeout > 0 async is required to be true' );
							};
							// check for responseType
							if( XhrOptions.responseType || 
								Defaults( [ 'Defaults' , 'XhrObject' , 'responseType' ] )
							) {
								throw new Error( 'XhrObject:open() : on responseType != "" async is required to be true' );
							};
							// check for withCredentials
							if( XhrOptions.withCredentials ||
								Defaults( [ 'Defaults' , 'XhrObject' , 'withCredentials' ] )
							) {
								throw new Error( 'XhrObject:open() : on timeout > 0 async is required to be true' );
							};
							console.log( 'Synchronous XMLHttpRequest on the main thread is deprecated because of its ' +
								'detrimental effects to the end user\'s experience. For more help, check ' + 
								'http://xhr.spec.whatwg.org/.'
							);
						};
						// check for user and password
						if( ( !XhrUser && XhrPassword) || ( XhrUser && !XhrPassword ) ) {
							throw new Error( 'XhrObject:open() : it\'s not allowed to pass only user or only password' );
						};
						// define XhrExtendUrl
						var XhrExtendUrl = parseSendData( XhrOptions.sendData || ( XhrOptions.sendData !== false &&
							Defaults( [ 'Defaults' , 'XhrObject' , 'sendData' ] ) ) || '' );
						// extend XhrExtendUrl by url added query
						XhrExtendUrl += !XhrOptions.query ? '' : ( XhrExtendUrl !== '' ? '&' : '' ) + XhrOptions.query.substring( 1 );
						// check for caching
						if( XhrMethod === 'GET' && XhrCaching ) {
							// also extend by caching
							XhrExtendUrl += ( XhrExtendUrl !== '' ? '&' : '' ) + 'caching=' + Date.now();
							// create new XhrUrl
							XhrUrl = XhrUrl + '?' + XhrExtendUrl;
						};
						// open request with parameters
						this.request.open( XhrMethod , XhrUrl , XhrAsync , XhrUser , XhrPassword );
						// return the request
						return this;
					}
				);


/**
 * @project : modula.js
 * @package : 
 * @internal : XhrObject.send
 * @type : function
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 * 					Defaults.Defaults._define
 * 					Defaults.Defaults.XhrObject._define
 * 					Defaults.Defaults.XhrObject.Defaults
 * 					Defaults.Constructors._define
 * 					Defaults.Constructors.XhrObject._define
 * 					Defaults.Prototypes._define
 * 					Defaults.Prototypes.XhrObject._define
 * 					Defaults.RegularExpressions._define
 * 					Regex._define
 * 					Objects._define
 * 					Prototypes._define
 * 					XhrObject.XhrObject
 * 					objectToString.objectToString
 */


		/**
		 *
		 */
		// alternative 1 line:34-37 'Prototypes.XhrObject.send = function( XhrOptions ) {'
		// alternative 1 line:39 'var XhrSendData = XhrOptions.sendData || Defaults.Defaults.XhrObject.sendData;'
		// alternative 1 line:45-46 'var XhrMethod = ( XhrOptions.method || Defaults.Defaults.XhrObject.method ).toUpperCase();'
		// alternative 1 line:48 'if( !Regex.XhrObject.methods.test( XhrMethod ) ) {'
		// alternative 1 line:52 'var XhrCaching = !( XhrOptions.cache === false || !( !XhrOptions.cache &&'
		// alternative 1 line:53 'Defaults.Defaults.XhrObject.cache !== true ) );'
		// alternative 1 line:72-73 '};'
		Defaults(
			false ,
			[ 'Prototypes' , 'XhrObject' , 'send' ] ,
			function( XhrOptions ) {
				// define variables
				var XhrSendData = XhrOptions.sendData || Defaults( [ 'Defaults' , 'XhrObject' , 'sendData' ] );
				// if we have an invalid XhrSendData
				if( XhrSendData !== null || !( toString( XhrSendData ) === '[object String]' ) ) {
					throw new Error( 'XhrObject:send() : sendData parameter must be null or a string' );
				};
				// define XhrMethod as given parameter, from the object or by defaults
				var XhrMethod = ( XhrOptions.method ||
					Defaults( [ 'Defaults' , 'XhrObject' , 'method' ] ) ).toUpperCase();
				// if we have an invalid XhrSendData
				if( !Defaults( [ 'RegularExpressions' , 'XhrObject' , 'methods' ] ).test( XhrMethod ) ) {
					throw new Error( 'XhrObject:send() : invalid method parameter' );
				};
				// define XhrCaching
				var XhrCaching = !( XhrOptions.cache === false || !( !XhrOptions.cache &&
					Defaults( [ 'Defaults' , 'XhrObject' , 'cache' ] ) !== true ) );
				// check for caching
				if( XhrMethod === 'POST' && XhrCaching ) {
					// define XhrSendData as url extension
					var XhrSendData = objectToString( XhrSendData || '' );
					// extend XHRExtendUrl by url added query
					XhrSendData += !XhrOptions.query ? '' : ( XhrSendData !== '' ? '&' : '' ) +
						XhrOptions.query.substring( 1 );
					// also extend by caching
					XhrSendData += ( XhrSendData !== '' ? '&' : '' ) + 'caching=' + Date.now();
				};
				// check request
				if( !this.request ) {
					throw new Error( 'XhrObject.send() : no valid request opened' );
				}
				// send request with parameter
				this.request.send( XhrMethod === 'POST' ? XhrSendData : null );
				// we are done
				return this;
			}
		);


/**
 * @project : modula.js
 * @package : 
 * @internal : XhrObject.header
 * @type : function
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 * 					Defaults.Defaults._define
 * 					Defaults.Defaults.XhrObject._define
 * 					Defaults.Defaults.XhrObject.Defaults
 * 					Defaults.Constructors._define
 * 					Defaults.Constructors.XhrObject._define
 * 					Defaults.Prototypes._define
 * 					Defaults.Prototypes.XhrObject._define
 * 					Prototypes._define
 * 					XhrObject.XhrObject
 */


		/**
		 * define header function
		 */
		// alternative 1 line:26-29 'Prototypes.XhrObject.header = function( XhrOptions ) {'
		// alternative 1 line:33 'Defaults.Defaults.XHRObject.requestHeader;'
		// alternative 1 line:41-42 '};'
		Defaults(
			false ,
			[ 'Prototypes' , 'XhrObject' , 'header' ],
			function( XhrOptions ) {
				// define variables
				var
				XhrRequestHeader = XhrOptions.requestHeader || 
					Defaults( [ 'Defaults' , 'XHRObject' , 'requestHeader' ] );
				// check request
				if( !this.request ) {
					throw new Error( 'XhrObject.header() : no valid request opened' );
				}
				// loop the headers 
				for( var XhrHeader in XhrRequestHeader ) {
					// set header to request
					this.request.setRequestHeader( XhrHeader , XhrRequestHeader[ XhrHeader ] );
				};
				// return request
				return this;
			}
		);


/**
 * @project : modula.js
 * @package : 
 * @internal : modula.modula
 * @type : object
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 * 					Defaults.Constructors._define
 * 					Defaults.Constructors.modula._define
 * 					Defaults.Objects._define
 * 					Defaults.Objects.modula._define
 * 					Defaults.Prototypes._define
 * 					Defaults.Prototypes.modula._define
 * 					Objects._define
 * 					Prototypes._define
 *
 * @description :
 */


		/**
		 * define modula as function
		 */
		// alternative line:29 'if( ( cache = Objects[ 'modula' ][ selector ] ) ) { return cache; };'
		// alternative line:32 '( Objects[ 'modula' ][ selector ] = new modula.fn.init( selector ) )'
		var
		modula = function( selector ) {
			// if we have the  selector  as Object we are done quickly
			if( ( cache = Defaults( [ 'Objects' , 'modula' , selector ] ) ) ) { return cache; };
			// return new modula
			return  selector ?
				Defaults( true , [ 'Objects' , 'modula' , selector ] , new modula.fn.init( selector ) )
				: new modula.fn.init( selector )
			;
		};


		/**
		 * define modula in Prototypes
		 */
		// alternative line:42 'modula.fn = ( Prototypes.modula = modula.prototype = {'
		modula.fn = Defaults( true , [ 'Prototypes' , 'modula' ] , ( modula.prototype = {


			/**
			 * set version
			 */
			version : version,


			/**
			 * method
			 */
			method : function() {
				// testmethod
				alert( 'modula' );
			},

				
		} ) );

		/**
		 * define modula in Constructors
		 */
		// alternative line:60 'modula.fn.init = ( Constructors.modula = ( function() {'
		modula.fn.init = Defaults( true , [ 'Constructors' , 'modula' ] , ( function() {


			/**
			 * Constructor
			 * 
			 * @param [string] URLString
			 */
			var
			Constructor = function( selector ) {
				// return modula
				return this;
			};

			/**
			 * prefill the modula functions
			 */
			var modulaDummy = Defaults( [ 'Prototypes' , 'modula' ] );
			for( var i = 0 , methods = 
				'css,html,ajax,whatever'.split( ',' ) ,
				l = methods.length ; i < l ; i++
			){
				// set tasks demand function to each entry
				modulaDummy[ methods[ i ] ] = ( function( text ) {
					return function() {
						alert( 'demand started for ' + text );
						return this;
					}
				} )( methods[ i ] );
				console.log( 'implementing : modula.'+methods[ i ] );
			}


			/**
			 * return url
			 */
			return Constructor;


		} )() );


		/**
		 * bind init
		 */
		modula.fn.init.prototype = modula.fn;
