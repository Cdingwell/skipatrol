
/* Case insensitive contains functionality for jQuery */

jQuery.expr[':'].Contains = function(a,i,m) {
     return jQuery(a).text().toUpperCase().indexOf(m[3].toUpperCase())>=0;
};

/* format a date for handlebars */

function formatDate(stamp) {
	if(stamp.indexOf(' ') > -1)
		stamp = stamp.split(' ')[0];
	return stamp;//moment(stamp).startOf('hour').fromNow();
}

Date.prototype.yyyymmdd = function() {
	var yyyy = this.getFullYear().toString();
	var mm = (this.getMonth()+1).toString(); // getMonth() is zero-based
	var dd  = this.getDate().toString();
	return yyyy + '-' + (mm[1]?mm:"0"+mm[0]) + '-' + (dd[1]?dd:"0"+dd[0]); // padding
};

Handlebars.registerHelper('formatDate', function(stamp, options) {
	return formatDate(stamp);
});

/* hooks up the check perms method with our api for permissions */

Handlebars.registerHelper('checkPerms', function(perms, options) {
	var negate = false;
	if(perms >=1000) {
		negate = true;
		perms -= 1000;
	}
	var permCheck = api().checkPerms(perms) || perms == 'all';
	if(negate)
		return !permCheck ? options.fn(this) : options.inverse(this);
	else
		return permCheck ? options.fn(this) : options.inverse(this);
});

/* same as A & B */

Handlebars.registerHelper('bitAND', function(A, B, options) {
	return A & B ? options.fn(this) : options.inverse(this);
});

/* show app loading state and disable the state */

var oldLoadTimeout;
function startLoading(maxTime) {
	$('#globalContainer').addClass('loading');
	clearTimeout(oldLoadTimeout);
	if(maxTime)
		oldLoadTimeout = setTimeout(stopLoading, maxTime * 1000);
}

function stopLoading() {
	$('#globalContainer').removeClass('loading');
}

/* demo to show that hacking cannot be acheived */

function initiate_drunken_stooper() {
	api().userPermissions = 2;
	$('body').trigger('permChange');
}