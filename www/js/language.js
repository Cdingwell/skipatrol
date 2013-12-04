
/* This is the English object. For constructing other objects, copy it, and change the words on the ***** RIGHT ***** hand side */

var english = {

	// general navigation

	'Home': 'Home',
	'Patrollers': 'Patrollers',
	'On Snow': 'On Snow',
	'Logout': 'Logout',
	'Login': 'Login',
	'Settings': 'Settings',
	'Accidents': 'Accidents',
	'First Aid': 'First Aid',

	// keys of tables

	'Time': 'Date',
	'InstID': 'InstID',
	'Creator': 'Creator',
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
	'ID': 'ID',
	'Gender': 'Gender',
	'Permissions': 'Permissions',
	'DOB': 'DOB',

	// actions

	'Add Record': 'Add Record',
	'Add Patroller': 'Add Patroller',
	'Start typing to filter': 'Start typing to filter',
	'Submit': 'Submit',
	'Cancel': 'Cancel',
	'Close': 'Close',
	'Show More': 'Show More',
	'Student': 'Student',
	'Delete': 'Delete',
	'Edit': 'Edit',
	'History': 'History',
	'Logout of all %@ Sessions': 'Logout of all %@ Sessions',
	'Change Language': 'Change Language',
	'Please Login': 'Please Login',
	'Change Password': 'Change Password',
	'Enter new password': 'Enter new password',
	'Confirm new password': 'Confirm new password',

	// permissions
	'guest': 'Guest',
	'admin': 'Administrator',
	'student': 'Student',
	'instructor': 'Instructor',
	'zone_education_leader': 'Zone Education Leader',
	'divisional_education_leader': 'Divisional Education Leader',
	'national_education_leader': 'National Education Leader',

	// phrases
	'Are you sure you want to delete this record?': 'Are you sure you want to delete this record?',
	'Welcome': 'Welcome',
	'Me (unsubmitted)': 'Me (unsubmitted)',
	'You have entered incorrect login information.': 'You have entered incorrect login information.',
	'WelcomeMessage': 'Hello <strong>%@</strong>. You last logged in at <strong>%@</strong> from <strong>%@</strong>.',
	'Both passwords must match.': 'Both passwords must match.',
	'Password must be longer or equal to 6 characters in length.': 'Password must be longer or equal to 6 characters in length.',
	'Password Changed!': 'Password Changed!'

};

var french = {

	"Home": "Maison",
	"Patrollers": "Les patrouilleurs",
	"On Snow": "Sur neige",
	"Logout": "Déconnexion",
	"Login": "Connexion",
	"Creator": "Créateur",
	'Change Language': 'Changer la langue',
	"Time": "Heure",
	"InstID": "InstID",
	'Change Password': 'Modifier mot de passe',
	"SID": "SID",
	"Notes": "Remarques",
	"Student": "étudiant",
	'Enter new password': 'Entrez le nouveau mot de passe',
	'Confirm new password': 'Confirmer le nouveau mot de passe',
	"CSP #": "CSP #",
	"Name": "Nom",
	"Me (unsubmitted)": "Me (unsubmitted)",
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
	'Permissions': 'Autorisations',
	'First Aid': 'Secourisme',
	"Delete": "Supprimer",
	"Edit": "Modifier",
	"History": "Histoire",
	"Settings": "Paramètres",
	"Are you sure you want to delete this record?": "Etes-vous sûr d'effacer cette entrée?",
	"Welcome": "Bonjour",
	'You have entered incorrect login information.': 'Vous avez entré les informations de connexion incorrects.',
	'WelcomeMessage': 'Bonjour <strong>%@</strong>. Ta/Votre dernière connexion était le <strong>%@</strong> via <strong>%@</strong>..',
	'Both passwords must match.': 'Les mots de passe doivent correspondre.',
	'Password must be longer or equal to 6 characters in length.': 'Mot de passe doit être supérieur ou égal à 6 caractères de longueur.',
	'Password Changed!': 'Mot de passe changé!'

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