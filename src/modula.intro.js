/**
 * modula intro
 */
( function( context , undefined ) {

  /**
   * define some variables
   */
  var
  modulaCore,


  /**
   * define Array functions
   *
   * @dependency : simplify
   */
   var
   // Arr = [],
   push = simplify( Array.prototype.push ), // same as Arr.push
   slice = simplify( Array.prototype.slice ), // same as Arr.slice
   concat = simplify( Array.prototype.concat ); // same as Arr.concat
   
   
   /**
    * define some Object functions
    *
    * @dependency : simplify
    */
    var
    // Obj = {},
    toString = simplify( Object.prototype.toString ), // same as Obj.toString
    hasOwnProperty = simplify( Object.prototype.hasOwnProperty ); // same as Obj.hasOwnProperty
    
    
// --> insert src files here
