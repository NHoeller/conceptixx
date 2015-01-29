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
							}
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