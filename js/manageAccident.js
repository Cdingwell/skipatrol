var manageAccident = trick({
	events: {
		'click .icon-remove': 'removeRecord', // remove a form
		'click .icon-pencil': 'editRecord', // open form up in edit mode
		'click .download': 'showDownload',
		'click .downloadPicker button': 'doDownload',
		'click .row:not(.head)': (window.isMobile ? 'mobileShowOptions' : 'editRecord'), // open form up in edit mode
		'keyup .filter': 'filterItems', // filter the forms in the table
		'click .addNew': 'addRecord', // open up a form to fill out
		'click .row .submit:not(.loading)': 'submitToServer', // fire off singal to submit a report to the server
		'click .loadMore:not(.loading)': function() { this.set('page', this.get('page')+1) }, // change the page when the change page button is pressed
	},
	defaults: {
		page: 1
	}
});

Handlebars.registerHelper('accidentRecordSubmitted', function(timestamp, options) {
	return timestamp ? options.fn(this) : options.inverse(this);
});

manageAccident.prototype.init = function() {

	// slap some identifiers on the view
	this.$el.addClass('manageAccident').addClass('standardListView');

	// page changes should trigger loading more content in
	this.on('change:page', function(page) {
		var button = this.$el.find('.loadMore').html('<i class="icon-spinner icon-spin"></i>').addClass('loading');
		api().getAccident({ page: page }, function(data) {
			this.$el.find('.table').append( Handlebars.templates['manageAccident.list'](data) );
			button.removeClass('loading').html(lang('Show More'));
			if(data.length < 25)
				button.remove();
		}.bind(this));
	}.bind(this));

	// render the view
	this.render();
}

manageAccident.prototype.showDownload = function() {
	var dp = this.$el.find('.downloadPicker');
	dp.show();
	var monthAgo = new Date(Date.now() - (86400000*31));
	dp.find('#start').val(monthAgo.yyyymmdd());
	var now = new Date();
	dp.find('#stop').val(now.yyyymmdd());
}

manageAccident.prototype.doDownload = function() {
	var start = this.$el.find('.downloadPicker #start').val();
	start = (new Date(start)).getTime() / 1000;
	var stop = this.$el.find('.downloadPicker #stop').val();
	stop = (new Date(stop)).getTime() / 1000;
	window.location.href = api().base + 'php/getAccident.php?action=dump&sessionid=' + api().sessionid + '&start=' + start + '&stop=' + stop;
}

manageAccident.prototype.localStoragePrefix = 'manageAccident_';

manageAccident.prototype.render = function() {

	// create page layout
	this.el.innerHTML = Handlebars.templates['manageAccident']({ table: '<div class="tableLoadingIcon"><div class="icon-spin icon-spinner"></div></div>' });

	var localRecords = storage.get(this.localStoragePrefix + 'records');
	if(localRecords)
		this.$el.find('.table').append( Handlebars.templates['manageAccident.list']($.map(localRecords, function(value, key){ return value })) );

	// fetch list of all patrollers
	api().getAccident({ page: 1 }, function(data) {

		// if the API rejected our request if not logged in, show an errr instead
		if(data.error && data.type == 'invalid_session') {
			this.el.innerHTML = Handlebars.templates.manageAccident( Handlebars.templates.error(data) );
			return;
		}

		// turn the list of records into html for the table
		var buffer = Handlebars.templates['manageAccident.list'](data);

		// insert the buffer
		this.$el.find('.table').append(buffer);
		this.$el.find('.tableLoadingIcon').remove();


	}.bind(this));

}

// take a record and attempt to submit it to the server

manageAccident.prototype.submitToServer = function(e, target) {
	e.preventDefault();
	e.stopPropagation();
	// pull data to send to server
	target = $(target);
	var node = target.parent().parent();
	var id = node.attr('data-id');
	var data = storage.get(this.localStoragePrefix + 'records');
	// update DOM to show we are submitting
	target.addClass('loading');
	target.html('<i class="icon-spin icon-spinner"></i>');
	// submit data to server
	api().addAccident(data[id], function(server) {
		// handle errors
		if(!server || !server.success) {
			target.html( lang('Try Again') );
			target.addClass('red').removeClass('loading');
			return;
		}
		// update dom indicating that it worked!
		node.attr('data-id', server.id);
		target.replaceWith(formatDate(server.timestamp));
		delete data[id];
		storage.set(this.localStoragePrefix + 'records', data);

	}.bind(this));

}

// handles removing a record

manageAccident.prototype.removeRecord = function(e, target) {
	e.preventDefault();
	e.stopPropagation();
	target = $(target);
	target = target.hasClass('row') ? target : target.parent().parent();
	var id = target.attr('data-id');
	var status = confirm(lang("Are you sure you want to delete this record?"));
	if(status) {
		// just remove locally
		if(target.find('.submit').length > 0) {
			var data = storage.get(this.localStoragePrefix + 'records');
			delete data[id];
			storage.set(this.localStoragePrefix + 'records', data);
		}else
			api().deleteAccident(id);
		target.remove();
	}
}

// create a new record

manageAccident.prototype.addRecord = function(e, target) {
	e.preventDefault();
	e.stopPropagation();
	// make editing container
	var editContainer = this.showForm();
	// save the edit
	editContainer.on('click','.saveChanges', function() {
		editContainer.addClass('loading');
		var data = {};
		editContainer.find('input, textarea, select').each(function() {
		     if(this.getAttribute('type') == 'checkbox')
		          data[this.name] = this.checked ? 1 : 0;
		     else
		          data[this.name] = this.value;
		});
		// cheat abit and override instid
		data.instID = api().userid;
		// store this record in the user's local Storage
		var records = storage.get(this.localStoragePrefix + 'records') || {};
		data.id = Date.now();
		records[data.id] = data;
		storage.set(this.localStoragePrefix + 'records', records);
		// keep ui consistent
		editContainer.remove();
		$('#globalContainer').show(); $('body').scrollTop(window.oldScrollY);
		var row = Handlebars.templates['manageAccident.list']([data]);
		$(row).insertAfter(this.$el.find('.head'));
	}.bind(this));
}

// handles editing a record

manageAccident.prototype.editRecord = function(e, target, edit) {

	e.preventDefault();
		e.stopPropagation();

	var records, editContainer, submittedData;

	// grab this record from the db
	target = $(target);
	var id = (target.hasClass('row') ? target : target.parent().parent()).attr('data-id');

	// this method runs once the user is done saving
	var finishedSaving = function() {
		editContainer.remove();
		$('#globalContainer').show(); $('body').scrollTop(window.oldScrollY);
		var container = this.$el.find('[data-id="' + id + '"]');
		for(var key in submittedData) {
			container.find('.item.' + key).html(submittedData[key]);
		}
	}.bind(this);

	// this method draws the editor
	var showEditor = function(data, locallySaved) {
		editContainer = this.showForm(data);
		// handle saving
		editContainer.on('click','.saveChanges', function() {
			editContainer.addClass('loading');
			// scrape the data into a structure
			submittedData = {};
			editContainer.find('input, textarea, select').each(function() {
			     if(this.getAttribute('type') == 'checkbox')
			          submittedData[this.name] = this.checked ? 1 : 0;
			     else
			          submittedData[this.name] = this.value;
			});
			// save this structure locally
			if(locallySaved) {
				submittedData.snowID = id;
				records[id] = submittedData;
				storage.set(this.localStoragePrefix + 'records', records);
				finishedSaving();
			// save this structure remotely
			}else{
				submittedData.id = id;
				api().editAccident(submittedData, finishedSaving);
			}
		}.bind(this));
	}.bind(this);

	// fetch data for editing from either the server or locally
	records = storage.get(this.localStoragePrefix + 'records') || {};
	if(records[id])
		showEditor(records[id], true);
	else
		api().getAccidentRecord(id, showEditor);

}

// filter things

manageAccident.prototype.filterItems = function(e, target) {
	var items = this.$el.find('.row:not(.head)');
	if(target.value == '') {
		items.show();
		return;
	}else
		items.hide();
	items.filter(':Contains("' + target.value + '")').show();
}

// generate an html form based off a javascript data structure

manageAccident.prototype.showForm = function(defaultValues) {
	this.$el.find('.overlay').remove();
	window.oldScrollY = $('body').scrollTop(); $('#globalContainer').hide();
	var overlay = $('<div class="overlay">' + formManager.objectToHtml({ form: accidentForm, name: 'accident', defaults: defaultValues }) + ' <div class="bottomBar"><div class="node cancel"><button class="cancel"><i class="icon-remove-sign"></i> Cancel</button> </div> <div class="node save"><button class="saveChanges"><i class="icon-check-sign"></i> Save</button> </div> <div style="clear:both"></div> </div> </div>').appendTo('body');
	// cancel the edit
	overlay.on('click', '.cancel', function(e) {
		overlay.remove();
		$('#globalContainer').show(); $('body').scrollTop(window.oldScrollY);
	});
	overlay.on('keypress', 'input', function(e) {
		if(e.keyCode == 13)
				overlay.find('.saveChanges').click();
	});
	overlay.find('select').each(function() {
		if($(this).find('option').length <= 4)
			$(this).toggleSwitch();
	});
	return overlay;
}

manageAccident.prototype.mobileShowOptions = function(e, target) {

	// do nothing if not in mobile mode
	if(!window.isMobile)
		return;

	// dropdown options
	var options = [ { action: 'delete', name: lang('Delete'), icon: 'icon-remove' }, 
					{ action: 'edit', name: lang('Edit'), icon: 'icon-pencil' } ];

	// create and insert the options selector
	var menu = new bottomOptions({ options: options });
	document.body.appendChild(menu.el);

	// wait for delete
	menu.on('delete', function() {
			this.removeRecord(e, target);
			menu.close();
	}.bind(this));

	// wait for edit
	menu.on('edit', function() {
			this.editRecord(e, target);
			menu.close();
	}.bind(this));
}