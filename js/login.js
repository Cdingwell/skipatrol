var login = trick({
	events: {
		'click #loginButton': 'loginAttempt', // try logging in when login button is pressed
		'keypress input': 'loginAttemptFromKeyPress' // if user hit enter we will want to attempt a login
	},
	defaults: {
		loading: false
	}
});

login.prototype.init = function() {

	// logout
	api().logout();
	$('body').trigger('permChange');

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

login.prototype.loginAttemptFromKeyPress = function(e, target) {
	if(e.keyCode == 13)
		this.loginAttempt(e, target);
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
			$('body').trigger('permChange');
		}else{
			alert( lang('You have entered incorrect login information.') );
		}
	}.bind(this));
}