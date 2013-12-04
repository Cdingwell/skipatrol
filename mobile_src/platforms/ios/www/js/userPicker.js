var userPicker = trick({
	events: {
		'click .close': 'destroy',
		'click .list .node': 'chooseName',
		'change .top #filter': 'changeSort'
	},
	defaults: {
		sortBy: 'all'
	}
});

userPicker.prototype.init = function() {

	// cause date picker to be inserted into the document
	document.body.appendChild(this.el);
	document.getElementById('globalContainer').style.display = 'none';
	this.el.style.zIndex = Date.now();
	this.el.className = 'userPicker';

	// when sort type changes, re-render
	this.on('change:sortBy', this.render.bind(this));

	// time to render
	this.render();
}

userPicker.prototype.destroy = function() {
	document.body.removeChild(this.el);
	document.getElementById('globalContainer').style.display = 'block';
}

userPicker.prototype.render = function() {
	// base template need be inserted
	this.el.innerHTML = Handlebars.templates['userPicker.base']();
	this.el.querySelector('#filter').value = this.sortBy;
	// fetch users from db
	api().listPatrollers(this.sortBy, function(data) {
		this.$el.find('.list').html( Handlebars.templates['userPicker.list'](data) );
	}.bind(this));
}

userPicker.prototype.chooseName = function(e, target) {
	// invoke callback
	if(this.callback)
		this.callback(target.getAttribute('data-id'));
	// close popup
	this.destroy();
}

userPicker.prototype.changeSort = function(e, target) {
	this.set('sortBy', target.value);
}