var Welcome = trick({
	events: {
		'click #logoutEverywhere': 'logoutEverywhere'
	}
});

Welcome.prototype.init = function() {

	// add an identifier
	this.$el.addClass('Welcome');

	// render the welcome screen
	this.render();

}

Welcome.prototype.render = function() {

	startLoading();

	api().getPatrollerHistory(api().userid, function(data) {
		stopLoading();
     	this.el.innerHTML = Handlebars.templates.Welcome({ session: data.length > 1 ? data[1] : data[0], session_count: data.length });
	}.bind(this));

}

Welcome.prototype.logoutEverywhere = function() {
	api().removeAllSessions(api().skiSessionID, function() {
		window.location.href = '#/login';
	});
}