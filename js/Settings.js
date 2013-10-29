var Settings = trick({

	events: {
		'change #language': 'setLanguage',
		'keyup .updatePassword input': 'triggerChangePasswordByInput',
		'click .updatePassword button': 'triggerChangePasswordByButton',
	}

});

Settings.prototype.init = function() {

	this.$el.addClass('Settings');

	this.render();

}

Settings.prototype.render = function() {

	this.el.innerHTML = Handlebars.templates.settings({ isFrench: storage.get('activeLang') == 'french', loggedIn: api().isLoggedIn() });

	this.$el.find('select').toggleSwitch();

}

/* responsible for changing the language of the app */

Settings.prototype.setLanguage = function(e, target) {
	storage.set('activeLang', target.value);
	window.location.reload();
}

/* responsible for changing user password */

Settings.prototype.triggerChangePasswordByInput = function(e, target) {
	if(e.keyCode == 13)
		this.triggerChangePasswordByButton(e, this.el.querySelector('.updatePassword button'));
}

Settings.prototype.triggerChangePasswordByButton = function(e, target) {

	// abort if password change is in progress
	if(target.innerHTML.indexOf(lang('Submit')) == -1)
		return;

	// get the 2 inputs
	var inputs = this.el.querySelectorAll('.updatePassword input');

	// make button load
	target.innerHTML = '<i class="icon-spinner icon-spin"></i>';

	// do not allow if passwords 
	if(inputs[0].value != inputs[1].value) {
		alert( lang('Both passwords must match.') );
		target.innerHTML = '<i class="icon-lock"></i>' + lang('Submit');
		return;
	}

	// do not allow short passwords
	if(inputs[0].value.length < 6) {
		alert( lang('Password must be longer or equal to 6 characters in length.') );
		target.innerHTML = '<i class="icon-lock"></i>' + lang('Submit');
		return;
	}

	// change passwords
	api().editPatroller({ id: 'self', password: inputs[0].value }, function(){
		target.innerHTML = '<span style="font-weight: bold; color: green"><i class="icon-ok"></i>' + lang('Password Changed!') + '</span>';
		setTimeout(function() {
			target.innerHTML = '<i class="icon-lock"></i>' + lang('Submit');
		}, 3000);
	});

}