/**
 * @project : modula.js
 * @package : core
 * @internal : 
 * @type : 
 * @dependencies : simplify
 *
 * @description :
 * modula intro is the basic start of the modula.js project
 */
( function( context , undefined ) {


	"use strict";


// --> insert src files here


/**
 * @project : modula.js
 * @package : core
 * @internal : simpilfy
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
		var call = Function.call;
	    return function () {
	        return call.apply( f, arguments );
	    };
	};


/**
 * @project : modula.js
 * @package : core
 * @internal : 
 * @type : 
 * @dependencies : simplify
 *
 * @description :
 * define some variables and function
 */
// <-- insert source files here


	/**
	 * define some variables
	 */
	var
	win = context && context.window && context.window === window ? context : window,
	doc = win.document && win.document.nodeType === 9 && win.document || window.document,
	root = doc.documentElement,
	version = '1.01.001 prototype',
	modulaCore;


	/**
	 * define Array functions
	 *
	 * @dependency : simplify
	 */
	var
	Arr = [], // nearly the same as Array.prototype, but Arr otherwise simplify works in window scope
	push = simplify( Arr.push ),
	slice = simplify( Arr.slice ),
	concat = simplify( Arr.concat );


	/**
	 * define some Object functions
	 *
	 * @dependency : simplify
	 */
	var
	Obj = {}, // nearly the same as Object.prototype, but Obj otherwise simplify works in window scope
	toString = simplify( Obj.toString ),
	hasOwnProperty = simplify( Obj );


// --> insert src files here


/**
 * @project : modula.js
 * @package : core
 * @internal : Cache
 * @type : constructor / function
 * @dependencies : none
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
		return Cache[ cacheName ] || ( Cache[ cacheName ] = function( index , content ) {
			// if index is cached
			if( Cache[ cacheName ][ " " + index ] ) { return Cache[ cacheName ][ " " + index ]; }
			// if not cached and empty index or content return false
			if( !content || !index ) { return false; }
			// set content to cache and return content
			return ( Cache[ cacheName ][ " " + index ] = content );
		} );
	};


	/**
	 * SelectorCache
	 */
	var
	SelectorCache = Cache( "Selector" );


	/**
	 * ElementsCache
	 */
	var
	ElementsCache = Cache( "Elements" );


	/**
	 * TokenizeCache
	 */
	var
	TokenizeCache = Cache( "Tokenize" );


	/**
	 * PropertyCache
	 */
	var
	PropertyCache = Cache( "Properties" );


/**
* @project : modula.js
* @package : core
* @internal : Propertizer
* @type : constructor / function
* @dependencies : Cache
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
 * @internal : containsAll
 * @type : function
 * @dependencies : isArraylike , indexOf
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
	 * combines 2 arraylike objects by adding the second one to the first
	 * this effects only numeric indices. objects will added as reference
	 */
	var
	combine = function( source , target ) {
		// define some variables
		var tlen = target.length , slen = source.length || 0 , i;
		// loop target's elements
		for( i = 0 ; i < tlen ; i++ ) {
			// add current target's element to source
			source[slen++] = target[i];
		};
		// addjust source's length property
		source.length = slen;
	};


/**
 * @project : modula.js
 * @package : core
 * @internal : containsAll
 * @type : function
 * @dependencies : isArraylike , indexOf
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
 * @internal : Support
 * @type : function / object
 * @dependencies : Propertizer
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
		var div = doc.createElement( 'div' );
		try {
			return !!fn( div );
		} catch( e ) {
			return false;
		} finally {
			div.parentNode && div.parentNode.removeChild( div );
			div = null;
		};
	} );


/**
 * @project : modula.js
 * @package : core
 * @internal : indexOf
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
 * @internal : isArray
 * @type : function
 * @dependencies : type
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
 * @internal : Support
 * @type : isArraylike
 * @dependencies : isWindow , type
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
 * @internal : Support
 * @type : function / object
 * @dependencies : none
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
 * @internal : isCollection
 * @type : function
 * @dependencies : isNode
 *
 * @description :
 * isCollection checks if an object is a HTMLCollection, NodeList or a single DOM node
 */


	/**
	 * check if subject is a valid modula node collection
	 */
	var
	isCollection = function( obj ) {
		var regex = new RegExp( "^\\[object (HTMLCollection|NodeList)\\]$" );
		// if object is a HTMLCollection or a NodeList
		if( typeof obj === 'object' && regex.test( toString( obj ) ) ) {
			return true;
		};
		regex = new RegExp( "^\\[object (Object|Array)\\]$" );
		// if object is an Object or an Array
		if( typeof obj === 'object' && regex.test( toString( obj ) ) && obj.hasOwnProperty( 'length' ) ) {
			// check if each index equals a node
			for( var i = 0 ; i < obj.length ; i++ ) {
				if( !isNode( obj[i] ) ) { return false; }
			};
			// return true if tests passed
			return true;
		};
		// tests failed return false
		return false;
	};


/**
 * @project : modula.js
 * @package : core
 * @internal : isEqual
 * @type : function
 * @dependencies : type , isEqual
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
 * @internal : isInstance
 * @type : function
 * @dependencies : none
 *
 * @description :
 * isInstance checks for a given instance or modula if left empty
 */


	/**
	 * isInstance function checks for modula objects
	 */
	var
	isInstance = function( obj , inst ) {
		inst = inst||modula;
		return ( obj instanceof inst );
	};


/**
 * @project : modula.js
 * @package : core
 * @internal : isNative
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
		var regex = new RegExp( "^[^{]*\\{\\s*\\[native \\w" );
		return regex.test( fn );
	};


/**
 * @project : modula.js
 * @package : core
 * @internal : isNode
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
 * @internal : isPlainObject
 * @type : function
 * @dependencies : type , isWindow
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
	 * 
	 * Not plain objects:
	 * - Any object or value whose internal [[Class]] property is not "[object Object]"
	 * - DOM nodes
	 * - window
	 */
	var
	isPlainObject = function( obj ) {
		// check for DOM node and window
		if ( type( obj ) !== "Object" || obj.nodeType || isWindow( obj ) ) {
			return false;
		};
		// check constructor and prototype
		if ( obj.constructor && !hasOwnProperty( obj.constructor.prototype , "isPrototypeOf" ) ) {
			return false;
		};
		// if test were passed we have a plain object
		return true;
	};


/**
 * @project : modula.js
 * @package : core
 * @internal : Support
 * @type : function / object
 * @dependencies : indexOf
 *
 * @description :
 * isScion checks if a child argument (must be a DOM node) is a scion of
 * parent (parent must be a DOM node or a HTMLcollection / nodeList)
 * 
 * @example
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
			if( ( result = indexOf( parent , child ) ) !== -1 ) { return parent[result]; };
		};
		return false;
	};


/**
 * @project : modula.js
 * @package : core
 * @internal : isSibling
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
 * @internal : isWindow
 * @type : function
 * @dependencies : none
 *
 * @description :
 * isWindow checks if an object is a window object
 * 
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
 * @internal : modula
 * @type : constructor / function
 * @dependencies : modulaCore , modula.core.init , modula.extended.init
 *
 * @description :
 * modula is the basic constructor function of the modula.js
 */


	/**
	 * define modula
	 */
	var
	modula = function( selector , context ) {
		// check for empty selector (null, false, undefined and '')
		if( !selector ) {
			// return core object (basic functions)
			return modulaCore || new modula.core.init();
		};
		// if we have a selector return extended object
		return new modula.extended.init( selector , context );
	};


/**
 * @project : modula.js
 * @package : core
 * @internal : modula.core
 * @type : object
 * @dependencies : none
 *
 * @description :
 * the modula.core is the object used when NO selector is given to the modula.js
 * here in are only the basic functions available
 */


	/**
	 * define modula.core and it's prototype
	 */
	modula.core = {

			version : version,
			
			constructor : modula,

			uid : 'modula.js' + 1 * Date.now(),

	};
	var
	core = modula.core.prototype = {};


	/**
	 * define init for modula.core
	 */
	var
	coreinit = modula.core.init = function() {};


	/**
	 * bind prototype for further usage
	 */
	coreinit.prototype = modula.core;


/**
 * @project : modula.js
 * @package : core
 * @internal : modula.extended
 * @type : object
 * @dependencies : none
 *
 * @description :
 * the modula.extended is the object used when a selector is given to the modula.js
 * this object contains the basic functionality as well as the extended DOM functions
 * and all extended modules
 */


	/**
	 * define modula.extended and it's prototype
	 */
	modula.extended = {

			version : version,
			
			constructor : modula,

			uid : 'extended.modula.js' + 1 * Date.now(),

	};
	var
	extended = modula.extended.prototype = {};


	/**
	 * define init for modula.extended
	 */
	var
	extendedinit = modula.extended.init = function() {};


	/**
	 * bind prototype for further usage
	 */
	extendedinit.prototype = modula.extended;


/**
 * @project : modula.js
 * @package : select
 * @internal : Strings
 * @type : object
 * @dependencies : Propertizer
 *
 * @description :
 * in 'Strings' are several used Strings for the 'select' engine
 */


	/**
	 * define string expressions for the selector engine
	 */
	var
	Strings = Propertizer( "Strings" , {
		bools : "checked|selected|async|autofocus|autoplay|" +
			"controls|defer|disabled|hidden|ismap|loop|" +
			"multiple|open|readonly|required|scoped",
	} );


/**
 * @project : modula.js
 * @package : select
 * @internal : Regex
 * @type : object
 * @dependencies : Propertizer
 *
 * @description :
 * the 'Regex' contains regular expressions for the modula.js
 */


	/**
	 * define regular expressions for selector engine
	 */
	var
	Regex = Propertizer( "Regex" , {
		// trim and escaping
		trim : new RegExp( "^\\s*|\\s*$" , "g" ),

		// newTag matches new html/xml tags and their attributes
		newTag : new RegExp("^\\<([\\w-]+)(?:\\s*)((?:[^\\>]|[\\/](?!\\>$))*)(?:\\/)?\\>$"),

		// attribs matches attributes with or without assignment
		attribs : new RegExp("\\s*([\\w-]+)(?:\\s*(=)\\s*" +
			"(?:(?:\"((?:\\\\.|[^\\\\\"])*)\")|(?:'((?:\\\\.|[^\\\\'])*)')|([^\\s]*)))?","g"),

		// boolean attributes
		bools : new RegExp("^("+Strings.bools+")$"),

		// filter : contains single regex tasks
		filter : {
			/*
			 * see http://www.w3schools.com/cssref/css_selectors.asp or
			 * http://www.w3.org/TR/#tr_CSS for further details
			 */

			// seperator like the comma in "div , div"
			"SEPERATOR" : new RegExp( "^\\s*,\\s*" ),

			// combinators are ">" , "+" , "~" and " "
			"COMBINATOR" : new RegExp( "^\\s*([>+~]|\\s)\\s*" ),

			// backmark is used for selectors level 4 "div > !div  > div"
			"BACKMARK" : new RegExp( "^!" ),

			// id selector "#id"
			"ID" : new RegExp( "^#([\\w-]+)" ),

			// class selector ".class"
			"CLASS" : new RegExp( "^\\.([\\w-]+)"),

			// tag selector "div"
			"TAG" : new RegExp( "^(?:(?:\\*|[\\w-]+)\\|)?(\\*|[\\w-]+)" ),

			// attribute selector "[attribute=value]"
			"ATTR" : new RegExp( "^\\[\\s*(?:([\\w-]+\\|)?([\\w-]+)\\s*)(?:(?:((?:~|\\^|\\$|" +
				"\\*|\\||!)?=)\\s*(?:(?:\"((?:\\\\.|[^\\\\\"])*)\")|(?:'((?:\\\\.|[^\\\\'])*" +
				")')|(?:([^\\]]*)))?)?)\\s*\\]" ),

			// child selector ":first-child"
			"CHILD" : new RegExp( "^:(first|last|(nth)(?:-last)?|only)-(child|of-type)(?:\\(" +
				"\\s*(even|odd|(?:([+-]|)(\\d*)n|)\\s*(?:([+-]|)\\s*(\\d+)|))\\s*\\)|)", "i"),

			// not statements like ":not(p)" also support qualified selectors ":not(p>p>p)"
			"NOT" : new RegExp( "^(:not\\s*(?:\\())" ),

			// other pseudos "::before"
			"PSEUDO" : new RegExp( "^(:(?::)?[\\w-]+)(?:\\(((?:'((?:\\\\.|[^\\\\'])*)'|" +
				"\"((?:\\\\.|[^\\\\\"])*)\")|.*)\\))?" ),

			// delimiter ")" is used only for the qualified selectors on not statements
			"DELIMITER" : new RegExp( "^(\\))" ),

		},

		// the quick objet is an extendable object for the quick detection
		quick : {},

		// cache is a regular expression that is used for the selector manual caching
		cache : new RegExp("^(?:([+](?=[\\w\\|%]))?([\\w]*[\\w](?=[\\|%]))?(?:([\\|])" +
			"(?=[\\d%]))?([\\d]*)?%)?(?:\\s*(.*))?$")
	} );


/**
 * @project : modula.js
 * @package : select
 * @internal : Tokenizer
 * @type : function
 * @dependencies : Cache , Regex.filter ( Regex ) , ElementsCache ( Cache ) , SelectorCache ( Cache )
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
	var
	Tokenizer = function(selector){
		// if cached we are done
		if( Cache.Tokenizer[ " "+selector ] ) { return Cache.Tokenizer[ " "+selector ]; };

		// define used variables
		var i , groups , group , match , matched , parts , result = [] ,
			gtoken = "" , ptoken = "" , token = "";

		// copy selector to this.newSelector
		this.newSelector = selector;

		// so we have a new token
		groups = [ ( group = [ ( parts = [] ) ] ) ];
		// so we loop all token we detect
		while( this.newSelector ) {
			// delete matched
			matched = false;
			// loop the defined filter
			for( var filter in Regex.filter ) {
				//check if match detected and
				//also check and handle tokenizer filter
				if( ( match = Regex.filter[ filter ].exec( this.newSelector ) ) && 
					( !Tokenizer[ filter ] || ( match = Tokenizer[ filter ].call( this , match ) ) ) ) {
		//			( !Tokenizer[ filter ] || ( match = Tokenizer[ filter ]( this , match ) ) ) ) { // if simplify

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
					 * if we have a not statement and detect the delimiter ")"
					 * so we have to handle the end of a selector
					 */
					if( this.limited && delete this.limited ) {
						// add "group"-token to group
						group.token = gtoken;
						// add token to parts
						parts.token = ptoken;
						// add Group to ElementsCache
						ElementsCache( ptoken , parts );
						// loop through groups
						i = groups.length;
						while( ( group = groups[ --i ] ) ) {
							// check for empty parts
							if( group[ group.length - 1 ].length === 0 ) {
								delete group[ ( group.length = group.length - 1 ) ];
							};
							// check for trailing combinators
							if( group[ group.length - 1 ][ group[ group.length - 1 ].length - 1 ].type === "COMBINATOR" ) {
								group.trail = true
							};
							// check if native querySelectorAll is usable
							group.useNative = !group.lead && !group.trail && !group.advancedNot;
							// add group to result
							result.push( group.token );
							// add single selector to cache
							SelectorCache( group.token , group );
						};

						// seperate selector from not statement
						var notSelecotor = selector.slice( 0 , selector.length - this.newSelector.length - 1 );
						// add result to Tokenizer cache
						Cache.Tokenizer[ " "+notSelecotor ] = result;
						// return remaining selector string (we are still inside the not)
						return selector.slice( 0 , selector.length - this.newSelector.length );
					};

					// extract regex matching string
					matched = match.shift();
					// refactor the newSelector string
					this.newSelector = this.newSelector.slice( matched.length );

					/**
					 * check for Seperator "," and start new Group
					 */
					if( this.nextGroup && delete this.nextGroup ) {
						// add "group"-token to group 
						group.token = gtoken;
						// reset gtoken
						gtoken = "";
						// add token to parts
						parts.token = ptoken;
						// add Group to ElementsCache
						ElementsCache( ptoken , parts );
						// reset ptoken
						ptoken = "";
						// start new group
						groups.push( ( group=[ ( parts = [] ) ] ) );
						// continue loop
						continue;
					};

					/**
					 * check now for combinator ">~+ "
					 */
					if( filter === "COMBINATOR" ) {
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
								parts.push( { matched : "" , token : "*" , type : "TAG" , match : [ "*" ] } );
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
						ElementsCache( ptoken , parts );
						// reset ptoken
						ptoken = "";
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
			if( !matched ){ throw new Error( "invalid selector : " + newSelector ); return []; }

		};

		// set gtoken to group
		group.token = gtoken;
		// add token to parts
		parts.token = ptoken;
		// add Group to ElementsCache
		ElementsCache( ptoken , parts );
		// loop through groups
		i = groups.length;
		while( ( group = groups[ --i ] ) ) {
			// check for empty parts
			if( group[ group.length - 1 ].length === 0 ) {
				// and delete empty parts
				delete group[ ( group.length = group.length - 1 ) ];
			};
			// check for trailing combinators
			if( group[ group.length - 1 ][ group[ group.length - 1 ].length - 1 ].type === "COMBINATOR" ) {
				group.trail = true;
			};
			// check if native querySelectorAll is usable
			group.useNative = !group.lead && !group.trail && !group.advancedNot;
			// add group to result
			result.push( group.token );
			// add single selector to cache
			SelectorCache( group.token , group );
		};

		// return cached result
		return( Cache.Tokenizer[ " "+selector ] = result );

	};


	/**
	 * not extracts the correct advanced selectors from not statements
	 */
	// Tokenizer[ "NOT" ] = simplify( function( regexMatch ) {
	Tokenizer[ "NOT" ] = function( regexMatch ) {
		// create new Tokenizer for the not statement
		var subSelector = Tokenizer( regexMatch.input.slice( regexMatch[ 0 ].length ) ),
		// create validated selector
		subSelector = [ regexMatch[ 0 ] + subSelector , subSelector.slice( 0 , - 1 ) ];
		// check if not statment is a qualified selector
		this.advancedNot = Cache.Tokenizer[ " " + subSelector[ 1 ] ].length > 1 || Cache.Tokenizer[ " " + subSelector[ 1 ] ].multiple;
		// reset new Selector
		this.newSelector = regexMatch.input;
		// return subSelector to Tokenizer
		return subSelector;
	};
	// } );


	/**
	 * workout for combinators (">","~","+" and " ") 
	 */
	// Tokenizer[ "COMBINATOR" ] = simplify( function( regexMatch ) {
	Tokenizer[ "COMBINATOR" ] = function( regexMatch ) {
		// set nextParts as true for Tokenizer
		this.nextParts = true;
		// return unchanged argument
		return regexMatch;
	};
	// } );


	/**
	 * workout for seperator ","
	 */
	// Tokenizer[ "SEPERATOR" ] = simplify( function( regexMatch ) {
	Tokenizer[ "SEPERATOR" ] = function( regexMatch ) {
		// set nextGroup as true for Tokenizer
		this.nextGroup = true;
		// return unchanged argument
		return regexMatch;
	};
	// } );


	/**
	 * workout for delimter ")" used for not statements
	 */
	// Tokenizer[ "DELIMITER" ] = simplify( function( regexMatch ) {
	Tokenizer[ "DELIMITER" ] = function( regexMatch ) {
		// recreate newSelector for Tokenizer
		this.newSelector = this.newSelector.slice( regexMatch[ 0 ].length );
		// set limited as true for Tokenizer
		this.limited = true;
		// return unchanged argument
		return regexMatch;
	};
	// } );


/**
 * @project : modula.js
 * @package : core
 * @internal : taskManager
 * @type : constructor
 * @dependencies : simplify
 *
 * @description :
 * the taskManager object is to control single tasks of the modula
 * the modula will be designed to extend itself on demand. so most
 * functions of the project will be included as taskmanaged place-
 * holder functions.
 */


/**
 * @project : modula.js
 * @package : core
 * @internal : 
 * @type : 
 * @dependencies : none
 *
 * @description :
 * modula outro is the basic end of the modula.js project
 */
// <-- insert source files here


	/**
	 * set modula to context
	 */
	window.modula = modula;
  
  
	/**
	 * return the modula
	 */
	return modula;


} )( window );