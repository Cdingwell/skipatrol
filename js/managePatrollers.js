var managePatrollers = trick({
	events: {
		'click .icon-remove': 'removePatroller',
		'click .icon-pencil': 'editPatroller',
		'click .icon-time': 'patrollerHistory',
		'keyup .filter': 'filterItems',
		'click .addNew': 'addPatroller'
	}
});

jQuery.expr[':'].Contains = function(a,i,m){
     return jQuery(a).text().toUpperCase().indexOf(m[3].toUpperCase())>=0;
};

managePatrollers.prototype.init = function() {
	this.$el.addClass('managePatrollers');
	this.render();
}

managePatrollers.prototype.render = function() {

	// fetch list of all patrollers
	api().getPatrollers(function(data) {

		// if the API rejected our request if not logged in, show an errr instead
		if(data.error && data.type == 'invalid_session') {
			this.el.innerHTML = Handlebars.templates.managePatrollers( Handlebars.templates.error(data) );
			return;
		}

		// get the HTML buffer
		var buffer = Handlebars.templates['managePatrollers.list'](data);

		// create page layout
		buffer = Handlebars.templates['managePatrollers']({ table: buffer });

		// insert the buffer
		this.el.innerHTML = buffer;

	}.bind(this));

}

// handles removing a patroller

managePatrollers.prototype.removePatroller = function(e, target) {
	var id = target.parentNode.parentNode.getAttribute('data-id');
	var status = confirm("Are you sure you want to delete this user?");
	if(status) {
		api().deletePatroller(id);
		$(target.parentNode.parentNode).remove();
	}
}

// display patroller history

managePatrollers.prototype.patrollerHistory = function(e, target) {
	var id = target.parentNode.parentNode.getAttribute('data-id');
	api().getPatrollerHistory(id, function(data) {
		var container = $( Handlebars.templates['managePatrollers.history'](data) ).appendTo('body');
		container.on('click', '.close', function() {
			container.remove();
		});
	});
}

// create a new patroller

managePatrollers.prototype.addPatroller = function(e, target) {
	// make editing container
	var editContainer = $( Handlebars.templates['managePatrollers.edit']({"Name":"","InstID":"","Email":"","PhoneNum":"","CSPSNum":"","password":""} ) ).appendTo('body');
	// cancel the edit
	editContainer.on('click', '.cancel', function(e) {
		editContainer.remove();
	});
	editContainer.on('keypress', 'input', function(e) {
		if(e.keyCode == 13)
			editContainer.find('.save').click();
	});
	// save the edit
	editContainer.on('click', '.save', function(e) {
		// build prefs
		var prefs = {};
		$('.overlay input').each(function(key, value){ prefs[value.getAttribute('class')] = value.value });
		// do save and close
		api().addPatroller(prefs, function(data) {
			// update list
			prefs.id = data.id;
			var row = Handlebars.templates['managePatrollers.list']([prefs]);
			$(row).insertAfter(this.$el.find('.table .head'));
		}.bind(this));
		editContainer.remove();
	}.bind(this));
}

// handles editing a patroller

managePatrollers.prototype.editPatroller = function(e, target) {
	var id = target.parentNode.parentNode.getAttribute('data-id');
	api().getPatroller(id, function(data) {
		// make editing container
		var editContainer = $( Handlebars.templates['managePatrollers.edit'](data) ).appendTo('body');
		// cancel the edit
		editContainer.on('click', '.cancel', function(e) {
			editContainer.remove();
		});
		editContainer.on('keypress', 'input', function(e) {
			if(e.keyCode == 13)
				editContainer.find('.save').click();
		});
		// save the edit
		editContainer.on('click', '.save', function(e) {
			// build prefs
			var prefs = {};
			$('.overlay input').each(function(key, value){ prefs[value.getAttribute('class')] = value.value });
			if(prefs.password == '')
				delete prefs.password;
			prefs.id = data.id;
			// do save and close
			api().editPatroller(prefs);
			editContainer.remove();
			// update list
			var container = this.$el.find('[data-id="' + id + '"]');
		for(var key in prefs) {
				container.find('.item.' + key).html(prefs[key]);
			}
		}.bind(this));
	}.bind(this));
}

// filter things

managePatrollers.prototype.filterItems = function(e, target) {
	var items = this.$el.find('.row:not(.head)');
	if(target.value == '') {
		items.show();
		return;
	}else
		items.hide();
	items.filter(':Contains("' + target.value + '")').show();
}