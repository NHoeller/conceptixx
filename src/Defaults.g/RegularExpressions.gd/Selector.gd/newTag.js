/**
 * @project : modula.js
 * @package : RegularExpressions , Defaults , Selector
 * @internal : Defaults.RegularExpressions.Selector.newTag
 * @type : Regular Expression
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 * 					Defaults.RegularExpressions._define
 * 					Defaults.RegularExpressions.Selector._define
 * 					Regex._define
 * 					Regex.Selector._define
 */


		/**
		 * newTag matches new html/xml tags and their attributes
		 */
		// alternative line:20 'Regex[ 'Selector' ].newTag = '
		// alternative line:21 'new RegExp( "^\\<([\\w-]+)(?:\\s*)((?:[^\\>]|[\\/](?!\\>$))*)(?:\\/)?\\>$" );'
		Defaults( true , [ 'RegularExpressions' , 'Selector' , 'newTag' ] , 
			new RegExp( "^\\<([\\w-]+)(?:\\s*)((?:[^\\>]|[\\/](?!\\>$))*)(?:\\/)?\\>$" ) );


