/**
 * @project : modula.js
 * @package : 
 * @internal : EventsHandlerObject.EventsHandlerObject
 * @type : object
 * @dependencies :	Defaults.Defaults
 */


		/**
		 * define EventsHandlerObject as function
		 */
		var
		EventsHandlerObject = function() {
			// return new EventsHandlerObject
			return new EventsHandlerObject.fn.init();
		};


		/**
		 * define EventsHandlerObject in Prototypes
		 */
		EventsHandlerObject.fn = _(
			true ,
			[ 'Prototypes' , 'EventsHandlerObject' ] ,
			( EventsHandlerObject.prototype = {


				/**
				 * define length for arralike
				 */
				length : 0,


			} )
		);


		/**
		 * define EventsHandlerObject in Constructors
		 */
		EventsHandlerObject.fn.init = _(
			true ,
			[ 'Constructors' , 'EventsHandlerObject' ] ,
			( function() {


				/**
				 * Constructor
				 */
				var
				Constructor = function() {
					// return EventsHandlerObject
					return this;
				};


				/**
				 * return Constructor
				 */
				return Constructor;


			} )()
		);


		/**
		 * bind init
		 */
		EventsHandlerObject.fn.init.prototype = EventsHandlerObject.fn;

