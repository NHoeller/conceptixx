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
 * @status : uncomplete
 */
var BUILDER =
	[
		"../src/modula.intro.js",
		"../src/modula.simplify.js",
		"../src/modula.define.js",
		"../src/modula.Cache.js",
		"../src/modula.Propertizer.js",

		"../src/modula.combine.js",
		"../src/modula.containsAll.js",
		"../src/modula.Support.js",

		"../src/modula.indexOf.js",
		"../src/modula.isArray.js",
		"../src/modula.isArraylike.js",
		"../src/modula.isBool.js",
		"../src/modula.isCollection.js",
		"../src/modula.isEqual.js",
		"../src/modula.isInstance.js",
		"../src/modula.isNative.js",
		"../src/modula.isNode.js",
		"../src/modula.isPlainObject.js",
		"../src/modula.isScion.js",
		"../src/modula.isSibling.js",
		"../src/modula.isWindow.js",

		"../src/modula.extend.js",

		"../src/modula/modula.modula.js",
		"../src/modula/modula.modula.core.js",
		"../src/modula/modula.modula.extended.js",

		"../src/select/modula.select.Strings.js",
		"../src/select/modula.select.Regex.js",
		"../src/select/modula.select.Tokenizer.js",

		"../inProgress/taskManager/modula.taskManager.intro.js",
		"../inProgress/taskManager/ready/modula.taskManager.ready.intro.js",
		"../inProgress/taskManager/ready/modula.taskManager.ready.ready.js",

		"../inProgress/taskManager/ready/modula.taskManager.ready.outro.js",
		"../inProgress/taskManager/modula.taskManager.outro.js",

		"../src/modula.outro.js"
	];




/**
 * buildhandler
 */
var buildhandler = function() {
	// check if buildhandler is completed
	if( buildhandler[ BUILDER.length - 1 ] !== undefined ) {
		console.log( Array.prototype.slice.call( buildhandler ) );
		return;
	};
	window.setTimeout( buildhandler );
};


/**
 * build function that takes the onload events
 */
var build = function( builder , buildtext ) {
//console.log( builder , buildtext);
	// if we have entries from builder
	var nextElem = builder.shift();
	// if we have an element
	if( nextElem ) {
		// create new request
		var xhr = new XMLHttpRequest();
		// set file
		xhr.open( "GET" , nextElem , true );
		// set timeout
		xhr.onload = function() {
			var newbuilder = builder;
			var newbuildtext = buildtext;
			if (xhr.readyState == 4) { 
				if (xhr.status == 200) {
					newbuildtext += xhr.responseText;
					build( newbuilder , newbuildtext );
				} else {
					console.error(xhr.statusText);
				};
			};
		};
		// send request
		xhr.send( null );
	} else {
		// create html element
		var header = document.createElement( "script" );
		header.type = "text/javascript";
		header.id = "modula";
		header.text = buildtext;
		document.getElementsByTagName( "head" )[ 0 ].appendChild( header );
	}
		
};
build( BUILDER , "" );