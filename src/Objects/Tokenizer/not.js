/**
 * @project : modula.js
 * @package : 
 * @internal : Tokenizer.not
 * @type : function
 * @dependencies :	Defaults.Defaults
 * 					Cache.Cache
 * 					Tokenizer.Tokenizer
 * 				(	simplify.simplify	)
 */


	/**
	 * not extracts the correct advanced selectors from not statements
	 */
	_(
		_( [ 'Objects' , 'Selector' , 'Tokenizer' ] ) , 
		false , 
		[ 'NOT' ] , 
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
		false ,
		[ 'DELIMITER' ] ,
		function( regexMatch ) {
			// recreate newSelector for Tokenizer
			this.newSelector = this.newSelector.slice( regexMatch[ 0 ].length );
			// set limited as true for Tokenizer
			this.limited = true;
			// return unchanged argument
			return regexMatch;
		}
	);


