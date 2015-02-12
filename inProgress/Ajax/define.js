/**
 * @project : modula.js
 * @package : core
 * @internal : Ajax.define
 * @type : constructor / function
 * @dependencies : none
 *
 * @description :
 * enter description here ...
 * 
 * @example :
 * 
 * @notice :
 * 
 */


		/**
		 * define MimeTypes
		 */
		var
		MimeTypes = {
			'html' : 'text/html',
			'json' : 'application/json, text/javascript',
			'text' : 'text/plain',
			'xml' : 'application/xml, text/xml',
		};


		/**
		 * define ContentTypes as regular expressions
		 */
		var
		ContentTypes = {
			html : /html/,
			json : /json/,
			text : /text\/plain/,
			xml : /xml/,
		};


		/**
		 * define ResponseFields
		 */
		var
		ResponseFields = {
			html: "responseText",
			json: "responseJSON",
			text: "responseText",
			xml: "responseXML",
		};


		/**
		 * define Defaults
		 */
		var
		Defaults = {
			method : 'GET',
			protocol : window.location.protocol === 'https:' ? 'https' : 'http:',
			cached : false,
			async : true,
			mimeType : MimeTypes.html,
			responseType : 'html',
			responseField: ResponseFields.html,
			header : {
				'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
			},
			timeout : 0,
			override : 'text/html',
			user : '',
			password : '',
			multipart : false,
		};


