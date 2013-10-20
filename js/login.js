var login = trick({
	events: {
		'click #loginButton': 'loginAttempt'
	},
	defaults: {
		loading: false
	}
});

login.prototype.init = function() {

	// show or hide a loading class
	this.on('change:loading', function(isLoading) {
		this.$el.find('.loading').remove();
		if(isLoading)
			this.$el.find('#main').append('<div class="loading"></div>');
	}.bind(this));

	// render the view
	this.render();

}

login.prototype.render = function() {
	var buffer = Handlebars.templates['login']();
	this.el.innerHTML = buffer;
}

login.prototype.loginAttempt = function(e, target) {
	e.preventDefault();
	e.stopPropagation();
	// abort if the model is already in a loading state
	if(this.loading)
		return;
	// grab login info
	var username = this.$el.find('#login').val();
	var password = this.$el.find('#pass').val();
	// tell the model we're loading
	this.set('loading', true);
	// attempt a login
	api().login(username, password, function(status) {
		// tell model we're done loading
		this.set('loading', false);
		if(status) {
			window.location.hash = '#/Welcome';
		}else{
			alert('You have entered invalid login details.');
		}
	}.bind(this));
}