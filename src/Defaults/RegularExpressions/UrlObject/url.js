/**
 * @project : modula.js
 * @package :
 * @internal : Defaults.RegularExpressions.UrlObject.url
 * @type : Regular Expression
 * @dependencies :	Defaults.Defaults
 */


		/**
		 * define regular expression for URL building
		 */
		_( true , [ 'RegularExpressions' , 'UrlObject' , 'url' ] , new RegExp(
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


