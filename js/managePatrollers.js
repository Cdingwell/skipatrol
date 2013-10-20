var managePatrollers = trick({
	events: {
		'click .icon-remove': 'removePatroller'
	}
});

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

managePatrollers.prototype.removePatroller = function(e, target) {
	var id = target.parentNode.parentNode.getAttribute('data-id');
	var status = confirm("Are you sure you want to delete this user?");
	if(status) {
		api().deletePatroller(id);
		$(target.parentNode.parentNode).remove();
	}
}

