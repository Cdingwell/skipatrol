var managePatrollers = trick({
	events: {
		'click .icon-remove': 'removePatroller', // trigger removal of a patroller
		'click .icon-pencil': 'editPatroller', // open edit menu for a patroller
		'click .icon-time': 'patrollerHistory', // browse the history of a patroller
		'keyup .filter': 'filterItems', // begin filtering patrollers
		'click .addNew': 'addPatroller', // open menu for creating a patroller,
		'click .row:not(.head)': 'mobileShowOptions' // display mobile options for this row
	}
});

managePatrollers.prototype.init = function() {
	this.$el.addClass('managePatrollers').addClass('standardListView');
	this.render();
}

managePatrollers.prototype.render = function() {

	this.el.innerHTML = Handlebars.templates['managePatrollers']({ table: '<div class="tableLoadingIcon"><div class="icon-spin icon-spinner"></div></div>' });

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
	target = $(target);
	target = target.hasClass('row') ? target : target.parent().parent();
	var id = target.attr('data-id');
	var status = confirm(lang('Are you sure you want to delete this record?'));
	if(status) {
		api().deletePatroller(id);
		target.remove();
	}
}

// display patroller history

managePatrollers.prototype.patrollerHistory = function(e, target) {
	target = $(target);
	target = target.hasClass('row') ? target : target.parent().parent();
	var id = target.attr('data-id');
	api().getPatrollerHistory(id, function(data) {
		window.oldScrollY = $('body').scrollTop(); $('#globalContainer').hide();
		var container = $( Handlebars.templates['managePatrollers.history'](data) ).appendTo('body');
		container.on('click', '.close', function() {
			container.remove();
			$('#globalContainer').show(); $('body').scrollTop(window.oldScrollY);
		});
	});
}

// create a new patroller

managePatrollers.prototype.addPatroller = function(e, target) {
	// make editing container
	window.oldScrollY = $('body').scrollTop(); $('#globalContainer').hide();
	var editContainer = $( Handlebars.templates['managePatrollers.edit']({"Name":"","InstID":"","Email":"","PhoneNum":"","CSPSNum":"","password":"","login":"4","perms":api().perms} ) ).appendTo('body');
	// cancel the edit
	editContainer.on('click', '.cancel', function(e) {
		editContainer.remove();
		$('#globalContainer').show(); $('body').scrollTop(window.oldScrollY);
	});
	editContainer.on('keypress', 'input', function(e) {
		if(e.keyCode == 13)
			editContainer.find('.save').click();
	});
	// save the edit
	editContainer.on('click', '.save', function(e) {
		var perms = 0;
		editContainer.find('.permissions input').each(function(){ if(this.checked) perms |= this.name });
		editContainer.find('.permissions').remove();
		// build prefs
		var prefs = { login: perms };
		$('.overlay input').each(function(key, value){ prefs[value.getAttribute('class')] = value.value });
		// do save and close
		api().addPatroller(prefs, function(data) {
			// update list
			prefs.id = data.id;
			var row = Handlebars.templates['managePatrollers.list']([prefs]);
			$(row).insertAfter(this.$el.find('.table .head'));
		}.bind(this));
		editContainer.remove();
		$('#globalContainer').show(); $('body').scrollTop(window.oldScrollY);
	}.bind(this));
}

// handles editing a patroller

managePatrollers.prototype.editPatroller = function(e, target) {
	target = $(target);
	target = target.hasClass('row') ? target : target.parent().parent();
	var id = target.attr('data-id');
	api().getPatroller(id, function(data) {
		// make editing container
		window.oldScrollY = $('body').scrollTop(); $('#globalContainer').hide();
		data.perms = api().perms;
		var editContainer = $( Handlebars.templates['managePatrollers.edit'](data) ).appendTo('body');
		// cancel the edit
		editContainer.on('click', '.cancel', function(e) {
			editContainer.remove();
			$('#globalContainer').show(); $('body').scrollTop(window.oldScrollY);
		});
		editContainer.on('keypress', 'input', function(e) {
			if(e.keyCode == 13)
				editContainer.find('.save').click();
		});
		// save the edit
		editContainer.on('click', '.save', function(e) {
			// fix permissions
			var perms = 0;
			editContainer.find('.permissions input').each(function(){ if(this.checked) perms |= this.name });
			editContainer.find('.permissions').remove();
			// build prefs
			var prefs = { login: perms };
			editContainer.find(' input').each(function(key, value){ prefs[value.getAttribute('class')] = value.value });
			if(prefs.password == '')
				delete prefs.password;
			prefs.id = data.id;
			// do save and close
			api().editPatroller(prefs);
			editContainer.remove();
			$('#globalContainer').show(); $('body').scrollTop(window.oldScrollY);
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

// display options for this item

managePatrollers.prototype.mobileShowOptions = function(e, target) {

	// do nothing if not in mobile mode
	if(!window.isMobile)
		return;

	// dropdown options
	var options = [ { action: 'delete', name: lang('Delete'), icon: 'icon-remove' }, 
					{ action: 'edit', name: lang('Edit'), icon: 'icon-pencil' },
					{ action: 'history', name: lang('History'), icon: 'icon-time' } ];

	// create and insert the options selector
	var menu = new bottomOptions({ options: options });
	document.body.appendChild(menu.el);

	// wait for delete
	menu.on('delete', function() {
			this.removePatroller(e, target);
			menu.close();
	}.bind(this));

	// wait for edit
	menu.on('edit', function() {
			this.editPatroller(e, target);
			menu.close();
	}.bind(this));

	// wait for history
	menu.on('history', function() {
			this.patrollerHistory(e, target);
			menu.close();
	}.bind(this));
}