/**
 * @project : modula.js
 * @package : core
 * @internal : 
 * @type : 
 * @dependencies : simplify
 *
 * @description :
 * define some variables and function
 */
// <-- insert source files here


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
	version = '1.01.001 prototype',
	self, // defines the modula core object
	readyList = {}; // container for ready tasks


	/**
	 * define Array functions
	 *
	 * @dependency : simplify
	 */
	var
	Arr = [], // nearly the same as Array.prototype, but Arr otherwise simplify works in window scope
	push = simplify( Arr.push ),
	slice = simplify( Arr.slice ),
	concat = simplify( Arr.concat );


	/**
	 * define some Object functions
	 *
	 * @dependency : simplify
	 */
	var
	Obj = {}, // nearly the same as Object.prototype, but Obj otherwise simplify works in window scope
	toString = simplify( Obj.toString ),
	hasOwnProperty = simplify( Obj );


// --> insert src files here


