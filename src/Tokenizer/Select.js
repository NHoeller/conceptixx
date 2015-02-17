/**
 * @project : modula.js
 * @package : Select
 * @internal : Select.Tokenizer.Select
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
	// Tokenizer[ 'COMBINATOR' ] = simplify( function( regexMatch ) {
	Tokenizer[ 'COMBINATOR' ] = function( regexMatch ) {
		// set nextParts as true for Tokenizer
		this.nextParts = true;
		// return unchanged argument
		return regexMatch;
	};
	// } );


	/**
	 * workout for seperator ","
	 */
	// Tokenizer[ 'SEPERATOR' ] = simplify( function( regexMatch ) {
	Tokenizer[ 'SEPERATOR' ] = function( regexMatch ) {
		// set nextGroup as true for Tokenizer
		this.nextGroup = true;
		// return unchanged argument
		return regexMatch;
	};
	// } );


