/**
 * @project : modula.js
 * @package :
 * @internal : Defaults.RegularExpressions.UrlObject.url
 * @type : Regular Expression
 * @dependencies :	Defaults._define
 * 					Defaults.Defaults
 * 					Defaults.RegularExpressions._define
 * 					Defaults.RegularExpressions.UrlObject._define
 * 					Regex._define
 * 					Regex.Selector._define
 */


		/**
		 * define regular expression for URL building
		 */
		// alternative line:20 'Regex[ 'UrlObject' ].url = new RegExp('
		// alternative line:37 ');'
		Defaults( true , [ 'UrlObject' , 'url' ] , new RegExp(
			/**
			 * http://name:password@example.org:80/demo/example.php?key1=value1&key2=value2#anchor
			 * |      |    |        |           | |                 |                      |
			 * |      |    |        hostname    | |                 search                 hash
			 * |      |    password             | pathname
			 * |      username                  port
			 * protocol
			 */
			/* 1   :protocol */ "^(?:([\\w.+-]+:\\/\\/))?" +
			/* 2+3 :username */ "(?:(([^\\/\\?#]*):)" +
			/* 4+5 :password */ "(([^\\/?#]*)@))?" +
			/* 6   :hostname */ "((?:(?:[^\\/\\.\\?#:]*\\.)+(?:[^\\/\\?#:]*))|(?:localhost))?" +
			/* 7+8 :port     */ "(?:(:([\\d]+)))?" +
			/* 9   :pathname */ "((?:\\/[^\\/\\?#]+)*(?:\\/)?)?" +
			/* 10  :search   */ "(?:(\\?[^#]+))?" +
			/* 11  :hash     */ "(?:(#.*))?$"
		) );


