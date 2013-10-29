var Settings = trick({

	events: {
		'change #language': 'setLanguage'
	}

});

Settings.prototype.init = function() {

	this.$el.addClass('Settings');

	this.render();

}

Settings.prototype.render = function() {

	this.el.innerHTML = Handlebars.templates.settings({ isFrench: storage.get('activeLang') == 'french' });

	this.$el.find('select').toggleSwitch();

}

Settings.prototype.setLanguage = function(e, target) {
	storage.set('activeLang', target.value);
	window.location.reload();
}