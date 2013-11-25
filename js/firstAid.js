var firstAidForm = [

	{
		name: 'Enter EITHER ID, leave blank for now if ID is not known',
		fields: [
			{ name: 'Student ID', type: 'input', sqlName: 'SID'},
			]
	},

	{
		name: 'Assesment',
		fields: [
			{ name: 'Priority Survey', type: 'dropdown', sqlName: 'prioritySurvey', options: ['First Initial','Second Initial','Third Initial'] },
			{ name: 'Secondary Survey', type: 'dropdown', sqlName: 'secondarySurvey', options: ['First Initial','Second Initial','Third Initial'] },
			{ name: 'Vital Signs Evaluation Registration', type: 'dropdown', sqlName: 'vitalSigns', options: ['First Initial','Second Initial','Third Initial'] }
			]
	},
	
	{
		name: 'Spinal Injuries',
		fields: [
			{ name: 'Cervical', type: 'dropdown', sqlName: 'cervicalCollar', options: ['First Initial','Second Initial','Third Initial'] },
			{ name: 'Spinal', type: 'dropdown', sqlName: 'spinal', options: ['First Initial','Second Initial','Third Initial'] },
			{ name: 'Pelvis', type: 'dropdown', sqlName: 'pelvis', options: ['First Initial','Second Initial','Third Initial'] },
			{ name: 'Femur /Sager Splint', type: 'dropdown', sqlName: 'femur', options: ['First Initial','Second Initial','Third Initial'] }
		]
	},

	{
		name: 'Fractures',
		fields: [
			{ name: 'Clavicle', type: 'dropdown', sqlName: 'clavicle', options: ['First Initial','Second Initial','Third Initial'] },
			{ name: 'Scapula', type: 'dropdown', sqlName: 'scapula', options: ['First Initial','Second Initial','Third Initial'] },
			{ name: 'Lower Arm', type: 'dropdown', sqlName: 'lowerArm', options: ['First Initial','Second Initial','Third Initial'] },
			{ name: 'Humerus', type: 'dropdown', sqlName: 'humerus', options: ['First Initial','Second Initial','Third Initial'] },
			{ name: 'Bent Knee', type: 'dropdown', sqlName: 'bentKnee', options: ['First Initial','Second Initial','Third Initial'] },
			{ name: 'Lower Leg', type: 'dropdown', sqlName: 'lowerLeg', options: ['First Initial','Second Initial','Third Initial'] },
			{ name: 'Shoulder Dislocation', type: 'dropdown', sqlName: 'shoulderDislocation', options: ['First Initial','Second Initial','Third Initial'] }
		]
	},
	

	{
		name: 'Slings',
		fields: [
			{ name: 'Small Arm Sling', type: 'dropdown', sqlName: 'smallArmSling', options: ['First Initial','Second Initial','Third Initial'] },
			{ name: 'Large Arm Sling', type: 'dropdown', sqlName: 'largeArmSling', options: ['First Initial','Second Initial','Third Initial'] },
			{ name: 'Body Sling', type: 'dropdown', sqlName: 'bodySling', options: ['First Initial','Second Initial','Third Initial'] }
			]
	},

	{
		name: 'Bandgaes',
		fields: [
			{ name: 'Head', type: 'dropdown', sqlName: 'head', options: ['First Initial','Second Initial','Third Initial'] },
			{ name: 'Shoulder', type: 'dropdown', sqlName: 'shoulder', options: ['First Initial','Second Initial','Third Initial'] },
			{ name: 'Chest/Back', type: 'dropdown', sqlName: 'chestBack', options: ['First Initial','Second Initial','Third Initial'] },
			{ name: 'Elbow', type: 'dropdown', sqlName: 'elbow', options: ['First Initial','Second Initial','Third Initial'] },
			{ name: 'Open Hand / Foot', type: 'dropdown', sqlName: 'openHandFoot', options: ['First Initial','Second Initial','Third Initial'] },
			{ name: 'Pressure Hand', type: 'dropdown', sqlName: 'pressureHand', options: ['First Initial','Second Initial','Third Initial'] },
			{ name: 'Eye / Check Ear', type: 'dropdown', sqlName: 'eyeCheekEar', options: ['First Initial','Second Initial','Third Initial'] },
			{ name: 'Pressure', type: 'dropdown', sqlName: 'pressure', options: ['First Initial','Second Initial','Third Initial'] },
			{ name: 'Open Fracture', type: 'dropdown', sqlName: 'openFracture', options: ['First Initial','Second Initial','Third Initial'] },
			{ name: 'Stirrup', type: 'dropdown', sqlName: 'stirrup', options: ['First Initial','Second Initial','Third Initial'] },
			{ name: 'Modified Stirrup', type: 'dropdown', sqlName: 'modifiedStirrup', options: ['First Initial','Second Initial','Third Initial'] },
			{ name: 'Knee', type: 'dropdown', sqlName: 'knee', options: ['First Initial','Second Initial','Third Initial'] }
			
		]
	}
	
	
];












var manageFirstAid = trick({
	events: {
		'click .icon-remove': 'removeRecord', // remove a form
		'click .icon-pencil': 'editRecord', // open form up in edit mode
		'click .row': (window.isMobile ? 'mobileShowOptions' : 'editRecord'), // open form up in edit mode
		'keyup .filter': 'filterItems', // filter the forms in the table
		'click .addNew': 'addRecord', // open up a form to fill out
		'click .row .submit:not(.loading)': 'submitToServer', // fire off singal to submit a report to the server
		'click .loadMore:not(.loading)': function() { this.set('page', this.get('page')+1) }, // change the page when the change page button is pressed
	},
	defaults: {
		page: 1
	}
});

Handlebars.registerHelper('firstAidRecordSubmitted', function(timestamp, options) {
	return timestamp ? options.fn(this) : options.inverse(this);
});

manageFirstAid.prototype.init = function() {

	// slap some identifiers on the view
	this.$el.addClass('manageFirstAid').addClass('standardListView');

	// page changes should trigger loading more content in
	this.on('change:page', function(page) {
		var button = this.$el.find('.loadMore').html('<i class="icon-spinner icon-spin"></i>').addClass('loading');
		api().getFirstAid({ page: page }, function(data) {
			this.$el.find('.table').append( Handlebars.templates['manageFirstAid.list'](data) );
			button.removeClass('loading').html(lang('Show More'));
			if(data.length < 25)
				button.remove();
		}.bind(this));
	}.bind(this));

	// render the view
	this.render();
}

manageFirstAid.prototype.localStoragePrefix = 'manageFirstAid_';

manageFirstAid.prototype.render = function() {

	// create page layout
	this.el.innerHTML = Handlebars.templates['manageFirstAid']({ table: '' });

	var localRecords = storage.get(this.localStoragePrefix + 'records');
	if(localRecords)
		this.$el.find('.table').append( Handlebars.templates['manageFirstAid.list']($.map(localRecords, function(value, key){ return value })) );

	// fetch list of all patrollers
	api().getFirstAid({ page: 1 }, function(data) {

		// if the API rejected our request if not logged in, show an errr instead
		if(data.error && data.type == 'invalid_session') {
			this.el.innerHTML = Handlebars.templates.manageFirstAid( Handlebars.templates.error(data) );
			return;
		}

		// turn the list of records into html for the table
		var buffer = Handlebars.templates['manageFirstAid.list'](data);

		// insert the buffer
		this.$el.find('.table').append(buffer);

	}.bind(this));

}

// take a record and attempt to submit it to the server

manageFirstAid.prototype.submitToServer = function(e, target) {
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
	var next = function() {
		api().addFirstAid(data[id], function(server) {
			// handle errors
			if(!server || !server.success) {
				target.html( lang('Try Again') );
				target.addClass('red').removeClass('loading');
				return;
			}
			// update dom indicating that it worked!
			node.attr('data-id', server.FAID);
			node.find('.studentName').html(server.studentName);
			node.find('.Name').html(server.Name);
			target.replaceWith(formatDate(server.timestamp));
			delete data[id];
			storage.set(this.localStoragePrefix + 'records', data);

		}.bind(this));
	}.bind(this);
	// woah, we will need an SID first
	if(!data[id].SID || data[id].SID == '') {
		new userPicker({ callback: function(d){ data[id].SID = d; next() } })
	}else
		next();

}

// handles removing a record

manageFirstAid.prototype.removeRecord = function(e, target) {
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
			api().deleteFirstAid(id);
		target.remove();
	}
}

// create a new record

manageFirstAid.prototype.addRecord = function(e, target) {
	e.preventDefault();
	e.stopPropagation();
	// make editing container
	var editContainer = this.showForm();
	// save the edit
	editContainer.on('click','.saveChanges', function() {
		editContainer.addClass('loading');
		var data = {};
		editContainer.find('input, select, textarea').each(function() {
		     if(this.getAttribute('type') == 'checkbox')
		          data[this.name] = this.checked ? 1 : 0;
		     else
		          data[this.name] = this.value;
		});
		data.studentName = 'ID: ' + data.SID;
		data.Name = lang('Me (unsubmitted)');
		// cheat abit and override instid
		data.instID = api().userid;
		// store this record in the user's local Storage
		var records = storage.get(this.localStoragePrefix + 'records') || {};
		data.FAID = Date.now();
		records[data.FAID] = data;
		storage.set(this.localStoragePrefix + 'records', records);
		// keep ui consistent
		editContainer.remove();
		$('#globalContainer').show(); $('body').scrollTop(window.oldScrollY);
		var row = Handlebars.templates['manageFirstAid.list']([data]);
		$(row).insertAfter(this.$el.find('.head'));
	}.bind(this));
}

// handles editing a record

manageFirstAid.prototype.editRecord = function(e, target, edit) {

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
			editContainer.find('input, select, textarea').each(function() {
			     if(this.getAttribute('type') == 'checkbox')
			          submittedData[this.name] = this.checked ? 1 : 0;
			     else
			          submittedData[this.name] = this.value;
			});
			// save this structure locally
			if(locallySaved) {
				submittedData.FAID = id;
				records[id] = submittedData;
				storage.set(this.localStoragePrefix + 'records', records);
				finishedSaving();
			// save this structure remotely
			}else{
				submittedData.id = id;
				api().editFirstAid(submittedData, finishedSaving);
			}
		}.bind(this));
	}.bind(this);

	// fetch data for editing from either the server or locally
	records = storage.get(this.localStoragePrefix + 'records') || {};
	if(records[id])
		showEditor(records[id], true);
	else
		api().getFirstAidRecord(id, showEditor);

}

// filter things

manageFirstAid.prototype.filterItems = function(e, target) {
	var items = this.$el.find('.row:not(.head)');
	if(target.value == '') {
		items.show();
		return;
	}else
		items.hide();
	items.filter(':Contains("' + target.value + '")').show();
}

// generate an html form based off a javascript data structure

manageFirstAid.prototype.showForm = function(defaultValues) {
	this.$el.find('.overlay').remove();
	window.oldScrollY = $('body').scrollTop(); $('#globalContainer').hide();
	var overlay = $('<div class="overlay">' + formManager.objectToHtml({ form: firstAidForm, name: 'firstAid', defaults: defaultValues }) + ' <div class="bottomBar"><div class="node cancel"><button class="cancel"><i class="icon-remove-sign"></i> Cancel</button> </div> <div class="node save"><button class="saveChanges"><i class="icon-check-sign"></i> Save</button> </div> <div style="clear:both"></div> </div> </div>').appendTo('body');
	// cancel the edit
	overlay.on('click', '.cancel', function(e) {
		overlay.remove();
		$('#globalContainer').show(); $('body').scrollTop(window.oldScrollY);
	});
	overlay.on('keypress', 'input', function(e) {
		if(e.keyCode == 13)
				overlay.find('.saveChanges').click();
	});
	return overlay;
}

manageFirstAid.prototype.mobileShowOptions = function(e, target) {

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
