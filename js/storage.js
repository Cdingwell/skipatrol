/* Used to enable storing complex data structures in localStorage */

window.storage = {

	// fetch and return something in localStorage, or undefined if there is nothing to return

	get: function(key) {
		var data = localStorage.getItem(key);
		if(!data)
			return undefined;
		else
			return JSON.parse(data);
	},

	// set something in localStorage

	set: function(key, value) {
		localStorage.setItem(key, JSON.stringify(value) );
		return this;
	},

	// remove something from localStorage

	remove: function(key) {
		localStorage.removeItem(key);
		return this;
	}

};