/**
 * @project : modula
 * @package : core
 * @internal : declareFunctionSimpilfy
 * @type : function
 * @dependencies :	none
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


