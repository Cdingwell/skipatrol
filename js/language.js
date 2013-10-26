
/* This is the English object. For constructing other objects, copy it, and change the words on the ***** RIGHT ***** hand side */

var english = {

	// general navigation

	'Home': 'Home',
	'Patrollers': 'Patrollers',
	'On Snow': 'On Snow',
	'Logout': 'Logout',
	'Login': 'Login',

	// keys of tables

	'Time': 'Time',
	'InstID': 'InstID',
	'SID': 'SID',
	'Notes': 'Notes',
	'CSP #': 'CSP #',
	'Name': 'Name',
	'E-mail': 'E-mail',
	'Phone': 'Phone',
	'Instructor ID': 'Instructor ID',
	'Password': 'Password',
	'Last Active': 'Last Active',
	'IP': 'IP',
	'Logged In At': 'Logged In At',

	// actions

	'Add Record': 'Add Record',
	'Add Patroller': 'Add Patroller',
	'Start typing to filter': 'Start typing to filter',
	'Submit': 'Submit',
	'Cancel': 'Cancel',
	'Close': 'Close',
	'Show More': 'Show More',
	'Delete': 'Delete',
	'Edit': 'Edit',
	'History': 'History',

	// phrases
	'Are you sure you want to delete this record?': 'Are you sure you want to delete this record?'

};

/* Do not change anything below - this is for detecting the currently set language and for fetching phrases */

var activeLanguage = localStorage.activeLanguage ? localStorage.activeLanguage : english;

function lang(key) {
	return activeLanguage[key] ? activeLanguage[key] : english[key];
}

Handlebars.registerHelper('lang', function(key, options) {
	return lang(key);
});