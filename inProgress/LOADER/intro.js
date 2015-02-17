/**
 * @project : modula.js
 * @package : core
 * @internal : define.intro
 * @type : constructor
 * @dependencies :	functions.isString
 * 					define.object
 *
 * @description :
 * the main part of the modula is a self extending loader object
 */


	/**
	 * init modula by an anonymous function
	 */
	( function( context , undefined ) {


		/**
		 * define use strict
		 */
		"use strict";


		/**
		 * define container for modula constructors
		 */
		var
		Constructors = {};


		/**
		 * define Container for Defaults
		 */
		var
		Defaults = Propertizer( "Defaults" , {} );


		/**
		 * define container for modula prototypes
		 */
		var
		Prototypes = {};


		/**
		 * define Container for regular expressions
		 */
		var
		RegularExpressions = Propertizer( "RegularExpressions" , {} );

