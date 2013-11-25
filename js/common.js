
/* Case insensitive contains functionality for jQuery */

jQuery.expr[':'].Contains = function(a,i,m) {
     return jQuery(a).text().toUpperCase().indexOf(m[3].toUpperCase())>=0;
};

/* format a date for handlebars */

function formatDate(stamp) {
	return moment(stamp).startOf('hour').fromNow();
}

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