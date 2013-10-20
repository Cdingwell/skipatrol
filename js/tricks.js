var speedUpTricks = false;
function trick(trickProps) {
	return function(params) {
		// make sure we have tricks in the prototype
		if(!this.setupTrick) {
			if(!speedUpTricks) {
				speedUpTricks = true;
				console.log('TRICKS: Consider speeding up tricks by running yourClass.prototype = new tricks() on your trick classes'); 
			}
			tricks.call(this);
		}
		// call the setupTrick method
		this.setupTrick(params, trickProps);
		// invoke constructor
		var args = t.parseArray(arguments);
		args.shift();
		this.init.apply(this, args);
	}
}

function tricks(props) {

	var self = this;

	/* TAKE AN OBJECT AND FLATTEN IT TO THIS OBJECT */

	this.setupTrick = function(params, trickProps) {

		// create objects if none were given
		if(!params)
			params = {};

		// do actions only relavent if tricks was inherited with the dom property enabled
		if(!props || props.domless) {

			/* create or locate the view for this trick */

			// if the user gave us a selector use that one
			if(params.el) {
				// user given selector is jQuery selector
				if(params.el instanceof window.jQuery) {
					params.$el = params.el;
					params.el = params.el[0];
				// user given selector is not jquery
				}else if(wiundow.jQuery) {
					params.$el = $(params.el);
				}
			// user gave us no selector so make one
			}else{
				params.el = document.createElement('div');
				if(window.jQuery)
					params.$el = $(params.el);
			}
		}

		/* handle events for the trick */

		if(trickProps && trickProps.events) {
			// determine method of adding the events
			var el = params.el;
			var $el = params.$el;
			// fix for webkitMatchesSelector
			if(!$el) {
				var matchesSelector = false;
				if(document.body.webkitMatchesSelector)
					var matchesSelector = 'webkitMatchesSelector';
				else if(document.body.mozMatchesSelector)
					var matchesSelector = 'mozMatchesSelector';
				else
					var matchesSelector = false;
			}
			// add eventts
			var events = trickProps.events;
			for(var e in events) {
				// this preserves variables
				(function(){
					// grab a direct pointer to the callback we will invoke for this event
					var callback = events[e];
					if(typeof callback == 'string') {
						var callback_checking = self[callback];
						if(!callback_checking) {
							console.log('TRICKS: the event method "' + callback + '" was not found on the trick', self);
							return;
						}else{
							callback = callback_checking;
						}
					}
					// get the event name and selector from the prop we were given
					var space = e.indexOf(' ');
					var eventName = e.substr(0, space);
					var eventSelector = e.substr(space + 1);
					// bind the event with jQuery if its available
					if($el) {
						$el.on(eventName, eventSelector, function(e) {
							callback.call(self, e, this);
						});
					// no jquery access, will have to do this old school
					}else{
						el.addEventListener(eventName, function(e) {
							// abort if we have no way to check matches on something
							if(!matchesSelector)
								return;
							// only allow 50 iterations incase something wacky happens
							var node = e.target;
							for(var i = 0; i < 50; i++) {
								if(!node) {
									break;
								}else if(node[matchesSelector](eventSelector)) {
									e.currentTarget = node; 
									callback.call(self, e, node);
									break;
								}else{
									node = node.parentNode;
									if(node === el)
										break;
								}
							}
						});
					}
				})();
			}
		}

		/* flatten the objects list into the trick */

		var defaults = !trickProps || !trickProps.defaults ? {} : trickProps.defaults;
		if(typeof params == 'object')
			for(var prop in params) {
				var value = params[prop];
				if(typeof value != 'undefined') {
					self[prop] = value;
					delete defaults[prop];
				}
			}
		for(var prop in defaults) {
			self[prop] = defaults[prop];
		}
	}

	/* PROPERTY MUTATION */

	this.get = function(key) {
		return self[key];
	}

	this.set = function(key, value) {
		self[key] = value;
		this.trigger('change:' + key, value);
	}

	/* EVENT MANAGEMENT */

	var propChangeCallbacks = {};

	this.trigger = function(name, value) {
		var callbacks = propChangeCallbacks[name];
		if(callbacks)
			for(var i in callbacks)
				callbacks[i].call(self, value);
	}

	this.on = function(key, callback) {
		if(!propChangeCallbacks[key])
			propChangeCallbacks[key] = [ callback ];
		else
			propChangeCallbacks[key].push(callback);
	}

}

/* --- some general functions --- */

window.t = {

	// take an object with props or a length and spit out an array
	parseArray: function(object) {
		var returnArray = [];
		if(object.length) {
			for(var i = 0; i < object.length; i++)
				returnArray.push(object[i]);
		}else if(!object.length && typeof object == 'object') {
			for(var prop in object)
				returnArray.push(object[prop]);
		}
		return returnArray;
	}

}

/* --- extend functions to have a bind method --- */

Function.prototype.bind = function(obj) {
     var fn = this;
     return function() {
          return fn.apply(obj, arguments);
     }
}