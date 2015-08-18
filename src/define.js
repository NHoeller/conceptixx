/**
 * @project : modula.js
 * @package : 
 * @internal : define
 * @type : declaration
 * @dependencies :	none
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
	// define unique identifier for this modula
	uid = 'modula ' + Date.now();
	// define the GlobalUniqueIDentifier
	_GUID = Math.floor(Math.random() * 1274);


