/**
 * @project : modula.js
 * @package : Quick
 * @internal : Quick.Quick
 * @type : function (object)
 * @dependencies :	functions.Propertizer
 * 					Strings.bools
 * 					functions.indexOf
 * 				(	filter.filter	) if available
 * 				(	finder.finder	) if available
 *
 * @description :
 * the 'Regex' contains regular expressions for the modula.js
 */


	/**
	 * the quick object is an extendable object for the quick detection
	 */
	var
	Quick = Propertizer( "Quick" , ( function() {
			

		/**
		 * define quick function 
		 * the Quick function gets a specific node or nodeList that can
		 * be identified by a single (native) request
		 */
		var
		Quick = function( selector ) {
			// define some variables
			var match, result;
			/*
			 * if match is positive get the matching position and execute
			 * the specific function to return its result
			 */
			return ( match = Quick.regex.match( selector ) ) ? 
				Quick.finder[ indexOf( ( result = match.slice( 1 ) ) ,
				( match = result.join( "" ) ) ) ]( match ) :
				[]
			;
		};


		/**
		 * define Quick.prototype
		 */
		Quick.prototype = {


			/**
			 * define regex
			 */
			regex : /(?:)/,


			/**
			 * define expressions
			 * expressions adds a regular expression to its properties and build a
			 * combined expression for the Quick() function
			 */
			expressions : function qExpressions( expression ) {
				// add expression to next numeric index that is defined by count
				qExpressions[ ( qExpressions.count = qExpressions.count >>> 0 ) ] = expression;
				// increase count for next turn
				qExpressions.count++;
				// create new regex by building it from combined expressions
				Quick.regex = new RegExp( "^(?:" + 
					( qExpressions.expression = qExpressions.expression ?
					qExpressions.expression + "|" + expression : expression ) + ")$" );
			},


			/**
			 * define finder's
			 * finder adds functions to Quick.finder object so Quick() can use it 
			 */
			finder : function qFind( fn ) {
				// add function with next numeric index named count to finder
				qFind[ ( qFind.count = qFind.count >>> 0 ) ] = fn;
				// increase count for next turn
				qFind.count++;
			},


			/**
			 * define filter's
			 * filter adds filters to Quick.filter object so Quick() can use it
			 */
			filter : function qFilter( fn ) {
				// add function with next numeric index named count to filter
				qFilter[ ( qFilter.count = qFilter.count >>> 0 ) ] = fn;
				// increase count for next turn
				qFilter.count++;
			},


			/**
			 * add an expression and it's filter and finder if exists
			 * 
			 * @example:
			 * Quick.add( "#([\\w-]+)" , "ID" , "ID" )	// adds the finder and filter for ID from the modula objects
			 * Quick.add( ".([\\w-]+)" , "CLASS" )		// adds the CLASS filter from the modula objects
			 * Quick.add( "([\\w-]+)" , function(){} )	// adds an individual TAG filter function
			 * Quick.add( "#([\\w-]+)" , "ID" , function(){} )	// adds the filter for ID from the modula objects
			 * 													// and an individual finder function
			 */
			add : function( regex , qFilter , qFinder ) {
				// add qFilter to modula
				Quick.filter( filter[ qFilter ] || ( isFunction( qFilter ) && qFilter ) );
				// add qFinder to modula if exists
				if( qFinder !== undefined ) {
					Quick.finder( finder[ qFinder ] || ( isFunction( qfinder ) && qFinder ) );
				};
				// add expression to modula
				Quick.expressions( regex );
			},

				
		};


		/**
		 * return Quick 
		 */
		return Quick;


	} )() );


