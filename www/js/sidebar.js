var sidebar = new trick({
	defaults: {
		open: false,
		pages: []
	},
	events: {
		'click .closeSidebar, a': function() { this.set('open', false) }, // sidebar should close when background is pressed
	}
});

sidebar.prototype.init = function() {

	// identify the view for the sidebar with this class
	this.$el.addClass('sidebar');

	// toggle visibility of the sidebar
	this.on('change:open', function(value) {
		if(!value) {
			this.$el.find('.actualSidebar').addClass('hidden');
			setTimeout(function(){
				this.$el.fadeOut(100);
			}.bind(this), 100);
		}else {
			this.$el.fadeIn(100, function() {
				this.$el.find('.actualSidebar').removeClass('hidden');
			}.bind(this));
		}

	}.bind(this));

	// when the pages change we need to re-render the view
	this.on('change:pages', this.render.bind(this));

	// render the sidebar now
	this.render();

}

sidebar.prototype.render = function() {
	this.el.innerHTML = Handlebars.templates.sidebar(this.pages);
	if(!this.open) {
		this.$el.hide();
		this.$el.find('.actualSidebar').addClass('hidden');
	}
}