/**
 * modula is currently not using grunt or something else to
 * automatically build a development file so in here will be
 * listed all files that have to be combined to get the
 * modula.js file
 * 
 * i will try to add a self executing function that adds the 
 * complete modula to a script tag with id "modula".
 * the dataset "flag" will be used in later progress of the project
 * 
 * @example :
 * ---- html code
<script type="text/javascript" id="modula" data-flag=""></script>
 * ---- html code
 *
 * @status : uncomplete
 */
var BUILDER =
	[
		"src/modula.intro.js",
		"src/modula.simplify.js",

		"inProgress/modula.combine.js",
		"inProgress/modula.containsAll.js",

		"src/modula.indexOf.js",
		"src/modula.isArray.js",
		"src/modula.isArraylike.js",
		"src/modula.isBool.js",
		"src/modula.isCollection.js",
		"src/modula.isEqual.js",
		"src/modula.isInstance.js",
		"src/modula.isNative.js",
		"src/modula.isNode.js",
		"src/modula.isPlainObject.js",
		"src/modula.isScion.js",
		"src/modula.isSibling.js",
		"src/modula.isWindow.js",
		"src/modula.Support.js",
		"src/modula.modula.js",
		"src/modula.modula.core.js",
		"src/modula.modula.extended.js",

		"inProgress/modula.Cache.js",

		"inProgress/modula.select.Regex.js",
		"inProgress/modula.select.Strings.js",
		"inProgress/modula.select.Tokenizer.js",

		"inProgress/modula.taskManager.js",

		"src/modula.outro.js"
	];


/**
 *
 */
(function( builder ) {
	// create some variables
	var header = document.getElementById( "modula" );
	// create ajax request loop for builder elements
	for( var i in builder ) {
		console.log( i );
	}
} )( BUILDER );