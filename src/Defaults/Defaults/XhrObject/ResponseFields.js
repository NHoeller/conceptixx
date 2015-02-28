/**
 * @project : modula.js
 * @package : 
 * @internal : Defaults.Defaults.XhrObject.
 * @type : Defaults
 * @dependencies :	Defaults.Defaults
 */


		/**
		 * define ResponseFields in Defaults
		 */
		_(
			true,
			[ 'Defaults' , 'XhrObject' , 'ResponseFields' ] ,
			{
				html: "responseText",
				json: "responseJSON",
				text: "responseText",
				xml: "responseXML",
			}
		);


