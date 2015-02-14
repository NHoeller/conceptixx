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
		 * define XHRDefaults
		 */
		Defaults.XHR = {
			// url : (must be defined by function)
			method : 'POST',
			protocol : window.location.protocol === 'https:' ? 'https' : 'http:',
			cache : false,
			async : true,
			responseType : 'html',
			requestHeader : {
				'Accept' : 'text/xml',
				'Accept-Charset' : 'UTF-8',
				'Content-Type' : 'application/x-www-form-urlencoded',
				
			},
			timeout : 0,
			override : 'text/xml',
			user : '',
			password : '',
			multipart : false,
			sendData : null,
		};


