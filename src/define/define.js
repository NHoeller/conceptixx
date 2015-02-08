/**
 * @project : modula.js
 * @package : core
 * @internal : define.define
 * @type : definition
 * @dependencies :	functions.simplify
 *
 * @description :
 * define some variables and function
 */


	/**
	 * define some variables
	 */
	var
	win = context && context.window && context.window === window ? context : window,
	doc = win.document && win.document.nodeType === 9 && win.document || window.document,
	root = doc.documentElement;


	/**
	 * define modula properties
	 */
	var
	// define version number of this modula
	version = '1.01.001 prototype',
	// defines the modula core object
	self,
	// define unique identifier for this modula
	uid = "modula " + Date.now();


