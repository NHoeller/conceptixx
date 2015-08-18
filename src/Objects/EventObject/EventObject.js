/**
 * @project : modula.js
 * @package : 
 * @internal : EventObject.EventObject
 * @type : object
 * @dependencies :	Defaults.Defaults
 */


		/**
		 * define EventObject
		 */
		var
		EventsObject = _(
			true ,
			[ 'Objects' , 'Events' ] ,
			new (
				function() {
					// define Events (as empty object)
					var Events = {};
					// define EventCheck as function
					Events.check = function ( eventType , eventNode ){
						// define variables
						var eventTags = _( [ 'Defaults' , 'Events' , 'EventTags' ] );
						// clean up the eventType (without on at the beginning)
						eventType = eventType.replace(/^on/, '');
						// create testElement
						var eventTest = document.createElement( eventTags[ eventType ] || 'div' );
						// switch some specials
						switch ( eventType ) {
							// catch domready - never supported for events
							case 'DOMContentLoaded' :
								// return false
								return false;
								break;
							// catch 'window' only events
							case 'unload' :
							case 'resize' :
								// return false if window is not asigned as eventNode
								if( window !== eventNode ) { return false };
								eventTest = window;
							default :
								// redefine eventType
								eventType = 'on' + eventType;
								// if we have the Property of event set we are done
								if( eventType in eventNode || eventType in eventTest ) {
									return true
								};
								// so we have to do the extended testing
								eventNode.setAttribute( eventType, noOperation );
								return typeof eventNode[ eventType ] === 'function';
							// end switch
						};
					};
					// create a EventStack
					_( true , [ 'EventStack' ] , { length : 0 } );
					// check for 'addEventListener' (modern browser)
					if( window.addEventListener ) {
						// so define the eventHandler
						Events.attach = function( eventNode, eventType , eventFunc , eventCapture , eventTrust ) {
							// clean up the eventType (without on at the beginning)
							eventType = eventType.replace(/^on/, '');
							// check for event
							if( !this.check( eventType , eventNode ) ) {
								throw new Error( 'Events needs a valid eventType for eventNode' );
							};
							// get next Stack id
							var eventId = _( [ 'EventStack' ] ).length++;
							// store type, function and element to Stack
							_( [ 'EventStack' ] )[ eventId ] = [ eventNode, eventType , eventFunc , eventCapture , eventTrust , _GUID ];
							// attach _GUID to function's __modula property
							_( eventFunc , true , [ '__modula' , 'events' , eventId ] , _GUID++ )
							// attach listener to element
							eventNode.addEventListener( eventType , eventFunc , eventCapture , eventTrust );
							// return the eventId
							return eventId;
						};
						Events.detach = function( eventNode , eventType , eventFuncOrId , eventCapture , eventTrust ) {
							// define variables
							var EventStack = _( [ 'EventStack' ] );
							// clean up the eventType (without on at the beginning)
							eventType = eventType.replace(/^on/, '');
							// quick check eventId
							if( EventStack[ eventFuncOrId ] && 
								eventNode === EventStack[ eventFuncOrId ][ 0 ] &&
								eventType === EventStack[ eventFuncOrId ][ 1 ] ) {
								// remove event from node element
								eventNode.removeEventListener( eventType , EventStack[ eventFuncOrId ][ 2 ] ,
										EventStack[ eventFuncOrId ][ 3 ] , EventStack[ eventFuncOrId ][ 4 ] );
								// delete event from EventStack
								return delete EventStack[ eventFuncOrId ];
							// check if eventFunction is submitted
							} else if( isFunction( eventFuncOrId ) && eventFuncOrId[ '__modula' ] ) {
								// define variables
								var events = eventFuncOrId[ '__modula' ][ 'events' ] , eventId;
								// loop the __modula of the function
								for( eventId in events ) {
									if( eventNode === EventStack[ eventId ][ 0 ] &&
										eventType === EventStack[ eventId ][ 1 ] &&
										eventCapture === EventStack[ eventId ][ 3 ] &&
										eventTrust === EventStack[ eventId ][ 4 ] ) {
										// remove event from node element
										eventNode.removeEventListener( eventType , eventFuncOrId ,
												eventCapture , eventTrust );
										// delete event from EventStack
										return delete EventStack[ eventId ];
									};
								};
							};
							return false;
						};
						
					}
					// so we have no addEventListener
					else {
						// so we need another cache for the events
						_( true , [ 'EventCache' ] , { length : 0 } );
						// so define the eventHandler
						Events.attach = function( eventNode, eventType , eventFunc , eventCapture , eventTrust ) {
							// clean up the eventType (without on at the beginning)
							eventType = eventType.replace(/^on/, '');
							// check for event
							if( !this.check( eventType , eventNode ) ) {
								throw new Error( 'Events needs a valid eventType for eventNode' );
							};
							// get next Stack id
							var eventId = _( [ 'EventStack' ] ).length++;
							// store type, function and element to Stack
							_( [ 'EventStack' ] )[ eventId ] = [ eventNode, eventType , eventFunc , eventCapture , eventTrust , _GUID , handleEvent ];
							// so we add a listener depending on microsofts attachEvent
							if( eventNode.attachEvent ) {
								//
							}
							// attach _GUID to function's __modula property
							_( eventFunc , true , [ '__modula' , 'events' , eventId ] , _GUID );
							// attach event's identifier to eventNode
							_( eventNode , true , [ '__modula' , 'events' , eventType , _GUID ] , eventId );
							// attach event's data to EventCache
							_( true , [ 'EventCache' , eventType , _GUID++ , eventId ] , eventNode );
						};
					};
					// return the Events
					return Events;
				}
			)()
		);


