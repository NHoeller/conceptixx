/**
 * @project : modula.js
 * @package : 
 * @internal : Defaults.RegularExpressions.Selector.newTag
 * @type : Regular Expression
 * @dependencies :	Defaults.Defaults
 */


		/**
		 * newTag matches new html/xml tags and their attributes
		 */
		_( true , [ 'RegularExpressions' , 'Selector' , 'newTag' ] , 
			new RegExp( "^\\<([\\w-]+)(?:\\s*)((?:[^\\>]|[\\/](?!\\>$))*)(?:\\/)?\\>$" ) );


