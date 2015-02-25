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
		 * define ResponseFields in Defaults
		 */
		// alternative 'Defaults.Defaults.XhrObject.ResponseFields = {'
		// alternative '};'
		Defaults(
			true,
			[ 'Defaults' , 'XhrObject' , 'ResponseFields' ] ,
			{
				html: "responseText",
				json: "responseJSON",
				text: "responseText",
				xml: "responseXML",
			}
		);


