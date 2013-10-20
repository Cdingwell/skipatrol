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

api.prototype.addPatroller.deletePatroller = function(id, callback) {
	$.post(this.base + 'php/getPatrollers.php?action=deletePatroller', { sessionid: this.sessionid, id: id }, function(d) {
		if(typeof callback == 'function')
			callback(d);
	});
}

// add a new patroller

api.prototype.addPatroller = function(name, instid, email, phonenumb, cspnum, password, callback) {
	$.post(this.base + 'php/getPatrollers.php?action=addPatroller', { sessionid: this.sessionid, name: name, instid: instid, email: email, phonenumb: phonenumb, cspnum: cspnum, password: password }, callback);
}

// get patrollers

api.prototype.getPatrollers = function(callback) {
	$.post(this.base + 'php/getPatrollers.php?action=getPatrollers', { sessionid: this.sessionid }, callback);
}

// edit patroller, MUST pass POST variable with id

api.prototype.editPatroller = function(data, callback) {
	data.sessionid = this.sessionid;
	$.post(this.base + 'php/getPatrollers.php?action=editPatroller', data, function(d) {
		if(typeof callback == 'function')
			callback(d);
	});
}