/**
 * @project : modula.js
 * @package : Select
 * @internal : Select.Tokenizer.not
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


