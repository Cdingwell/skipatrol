
/* Case insensitive contains functionality for jQuery */

jQuery.expr[':'].Contains = function(a,i,m){
     return jQuery(a).text().toUpperCase().indexOf(m[3].toUpperCase())>=0;
};

/* format a date for handlebars */

function formatDate(stamp) {
	return moment(stamp).startOf('hour').fromNow();
}

Handlebars.registerHelper('formatDate', function(stamp, options) {
	return formatDate(stamp);
});