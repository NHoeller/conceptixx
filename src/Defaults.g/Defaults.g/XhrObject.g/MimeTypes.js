/**
 * @project : modula.js
 * @package : 
 * @internal : Defaults.Defaults.XhrObject.
 * @type : Defaults
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 * 					Defaults.Defaults._define
 * 					Defaults.Defaults.XhrObject._define
 */


		/**
		 * define MimeTypes in Defaults
		 */
		// alternative 'Defaults.Defaults.XhrObject.MimeTypes = {'
		// alternative '};'
		Defaults(
			true ,
			[ 'Defaults' , 'XhrObject' , 'MimeTypes' ] ,
			{
				'html' : 'text/html',
				'json' : 'application/json, text/javascript',
				'text' : 'text/plain',
				'xml' : 'application/xml, text/xml',
			}
		);


