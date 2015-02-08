/**
 * @project : modula.js
 * @package : core
 * @internal : define.array
 * @type : definition
 * @dependencies :	functions.simplify
 *
 * @description :
 * define some variables and function
 */


	/**
	 * define Array functions
	 *
	 * @dependency : simplify
	 */
	var
	Arr = [], // nearly the same as Array.prototype, but Arr otherwise simplify works in window scope
	concat = simplify( Arr.concat ),
	push = simplify( Arr.push ),
	shift = simplify( Arr.shift ),
	slice = simplify( Arr.slice );
	

