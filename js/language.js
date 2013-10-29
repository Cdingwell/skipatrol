
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
	'Username': 'Username',
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
	'Settings': 'Settings',
	'Logout of all %@ Sessions': 'Logout of all %@ Sessions',
	'Please Login': 'Please Login',

	// phrases
	'Are you sure you want to delete this record?': 'Are you sure you want to delete this record?',
	'Welcome': 'Welcome',
	'You have entered incorrect login information.': 'You have entered incorrect login information.',
	'WelcomeMessage': 'Hello <strong>%@</strong>. You last logged in at <strong>%@</strong> from <strong>%@</strong>.'

};

var french = {

	"Home": "Maison",
	"Patrollers": "Les patrouilleurs",
	"On Snow": "Sur neige",
	"Logout": "Déconnexion",
	"Login": "Connexion",
	"Time": "Heure",
	"InstID": "InstID",
	"SID": "SID",
	"Notes": "Remarques",
	"CSP #": "CSP #",
	"Name": "Nom",
	"E-mail": "E-mail",
	"Phone": "Téléphone",
	"Instructor ID": "ID de l'instructeur",
	"Password": "Mot de passe",
	"Last Active": "Dernière activité",
	"IP": "IP",
	"Logged In At": "Connecté à",
	"Add Record": "Ajouter un enregistrement",
	"Add Patroller": "Ajouter Patroller",
	"Start typing to filter": "Commencez à taper pour filtrer",
	"Submit": "Soumettre",
	'Username': "Nom d'utilisateur",
	'Please Login': "Connexion S'il vous plaît",
	'Logout of all %@ Sessions': 'Déconnexion de toutes %@ sessions',
	"Cancel": "Résilier",
	"Close": "Fermer",
	"Show More": "Voir plus",
	"Delete": "Supprimer",
	"Edit": "Modifier",
	"History": "Histoire",
	"Settings": "Paramètres",
	"Are you sure you want to delete this record?": "Etes-vous sûr d'effacer cette entrée?",
	"Welcome": "Bonjour",
	'You have entered incorrect login information.': 'Vous avez entré les informations de connexion incorrects.',
	'WelcomeMessage': 'Salut <strong>%@</strong>. Vous connectez via <strong>%@</strong> sur <strong>%@</strong>.'

};

/* Do not change anything below - this is for detecting the currently set language and for fetching phrases */

var language = window.navigator.userLanguage || window.navigator.language;
var activeLanguage = storage.get('activeLang') ? window[storage.get('activeLang')] : (language.indexOf('fr') > -1 ? french : english);

function lang(key) {
	// pull the correct string
	var translation = activeLanguage[key] ? activeLanguage[key] : english[key];
	// parse wildcards
	if(arguments.length > 1)
		for(var i = 1; i < arguments.length; i++) {
			translation = translation.replace('%@', arguments[i]);
		}
	// return translation
	return translation;
}

Handlebars.registerHelper('lang', function(key, options) {
	return lang.apply(this, arguments);
});