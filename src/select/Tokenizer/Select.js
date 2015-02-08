/**
 * @project : modula.js
 * @package : Select
 * @internal : Select.Tokenizer.Select
 * @type : function
 * @dependencies :	functions.Cache
 * 					functions.Cache ( ElementsCache )
 * 					functions.Cache ( SelectorCache )
 * 					functions.Cache ( TokenizeCache )
 * 					Regex.filter
 * 				(	functions.simplify	)
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


