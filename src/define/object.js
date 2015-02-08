/**
 * @project : modula.js
 * @package : core
 * @internal : define.object
 * @type : definition
 * @dependencies :	functions.simplify
 *
 * @description :
 * define some variables and function
 */


	/**
	 * define some Object functions
	 *
	 * @dependency : simplify
	 */
	var
	Obj = {}, // nearly the same as Object.prototype, but Obj otherwise simplify works in window scope
	toString = simplify( Obj.toString ),
	hasOwnProperty = simplify( Obj );


