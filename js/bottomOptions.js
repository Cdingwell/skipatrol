var bottomOptions = trick({
	events: {
		'click a': 'clickButton'
	}
});

bottomOptions.prototype.init = function() {

	this.$el.addClass('bottomOptions');

	// add close button
	this.options.push({ action: 'close', name: lang('Close'), icon: 'icon-angle-down' });

	this.render();

}

bottomOptions.prototype.render = function() {

	this.el.innerHTML = Handlebars.templates.bottomOptions(this.options);
	setTimeout(function(){ this.$el.addClass('show') }.bind(this), 0);

}

// this closes the menu

bottomOptions.prototype.close = function() {
	this.$el.removeClass('show');
	setTimeout(function(){ this.$el.remove() }.bind(this), 1000);
}

// this processes a button being clicked

bottomOptions.prototype.clickButton = function(e, target) {

	var action = target.getAttribute('data-action');

	if(action == 'close') {
		this.close();
		return;
	}

	this.trigger(action, this);

}