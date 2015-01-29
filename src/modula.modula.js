  /**
   * modula function
   *
   * @dependency : modulaCore , modula.core.init , modula.extended.init
   */
  var
  modula = function( selector , context ) {
    // check for empty selector (null, false, undefined and '')
    if( !selector ) {
      // return core object (basic functions)
      return modulaCore || new modula.core.init();
    }
    // if we have a selector return extended object
    return new modula.extended.init( selector , context );
  };
