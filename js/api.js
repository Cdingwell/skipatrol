// this is for singleton, instance this class without the new keyword!

function api() {
	if(this instanceof api)
		return api.prototype.sharedInstance = this;
	if(!api.prototype.sharedInstance)
		return api.prototype.sharedInstance = new api();
	else
		return api.prototype.sharedInstance;
}

// path to root of the project

api.prototype.base = '';

api.prototype.sessionid = localStorage.skiSessionID ? localStorage.skiSessionID : false;

// attempt a login

api.prototype.login = function(username, password, callback) {
	$.post(this.base + 'php/checklogin.php', { username: username, password: password }, function(data) {
		if(data.success)
			this.sessionid = localStorage.skiSessionID = data.sessionid;
		callback(data.success == "true");
	}.bind(this));

}

api.prototype.deletePatroller = function(id, callback) {
	$.post(this.base + 'php/getPatrollers.php?action=deletePatroller', { sessionid: this.sessionid, id: id }, function(d) {
		if(typeof callback == 'function')
			callback(d);
	});
}

// add a new patroller

api.prototype.addPatroller = function(data, callback) {
	data.sessionid = this.sessionid;
	$.post(this.base + 'php/getPatrollers.php?action=addPatroller', data, callback);
}

// get patrollers

api.prototype.getPatrollers = function(callback) {
	$.post(this.base + 'php/getPatrollers.php?action=getPatrollers', { sessionid: this.sessionid }, callback);
}

// get single patroller when given the patroller's id

api.prototype.getPatroller = function(id, callback) {
	$.post(this.base + 'php/getPatrollers.php?action=getPatrollers', { sessionid: this.sessionid, id: id }, function(data) {
		if(data.length == 1)
			callback(data[0]);
	});
}

// get single patroller history

api.prototype.getPatrollerHistory = function(id, callback) {
	$.post(this.base + 'php/getPatrollers.php?action=getPatrollerHistory', { sessionid: this.sessionid, id: id }, callback);
}

// edit patroller, MUST pass POST variable with id

api.prototype.editPatroller = function(data, callback) {
	data.sessionid = this.sessionid;
	$.post(this.base + 'php/getPatrollers.php?action=editPatroller', data, function(d) {
		if(typeof callback == 'function')
			callback(d);
	});
}