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


