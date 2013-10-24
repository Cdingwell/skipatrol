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

// table of permissions for bitperms

api.prototype.perms = {
	'guest': 1,
	'admin': 2,
	'student': 4,
	'instructor': 8,
	'zone_education_leader': 16,
	'divisional_education_leader': 32,
	'national_education_leader': 64
};

// checks to see if user has given permissions
api.prototype.checkPerms = function(perms) {
	return perms & this.userPermissions;
}

// store which permissions the user has here

api.prototype.userPermissions = localStorage.userPermissions ? localStorage.userPermissions : api.prototype.perms.guest;

// attempt a login

api.prototype.login = function(username, password, callback) {
	$.post(this.base + 'php/checklogin.php', { username: username, password: password }, function(data) {
		if(data.success)
			this.sessionid = localStorage.skiSessionID = data.sessionid;
			this.userPermissions = localStorage.userPermissions = data.login;
		callback(data.success == "true");
	}.bind(this));

}

// mechanism to logout

api.prototype.logout = function() {
	this.sessionid = false;
	this.userPermissions = this.perms.guest;
	delete localStorage.userPermissions;
	delete localStorage.skiSessionID;
}

// do a logout

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