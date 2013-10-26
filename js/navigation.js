var navigation = trick({
	events: {
		'click .openSidebar': 'toggleSidebar'
	}
});

Handlebars.registerHelper('checkPerms', function(perms, options) {
	return api().checkPerms(perms) ? options.fn(this) : options.inverse(this);
});

navigation.prototype.init = function() {

	// add something to define this class
	this.$el.addClass('nav');

	// ask view for a render
	this.render();

	// when the user's permissions change, re-render the nav
	$('body').off('.nav').on('permChange.nav', function() {
		this.render();
	}.bind(this));
}

navigation.prototype.render = function() {

	// pointer to permissions
	var perms = api().perms;

	// structure representing pages
	var pages = [ { name: 'Login', href: '#/login', perms: perms.guest, icon: 'icon-lock' },
				  { name: 'Home', href: '#/Welcome', perms: perms.admin, icon: 'icon-home' },
				  { name: 'Patrollers', href: '#/managePatrollers', perms: perms.admin, icon: 'icon-suitcase' },
				  { name: 'On Snow', href: '#/manageOnSnow', perms: perms.admin, icon: 'icon-suitcase' },
				  { name: 'Logout', href: '#/login', perms: perms.admin, icon: 'icon-signout' } ];

	// handle render for mobile
	if(window.isMobile) {

		// create sidebar if it's needed
		if(!this.sidebar) {
			this.sidebar = new sidebar({ pages: pages });
			document.body.appendChild(this.sidebar.el);
		// simply set the new pages attribute
		}else
			this.sidebar.set('pages', pages);

		// make the navigation a toggle button for the sidebar
		this.el.innerHTML = '<div class="icon-reorder openSidebar"></div>';

	// otherwise we're not mobile so render the nav normally
	}else
		this.el.innerHTML = Handlebars.templates['navigation'](pages);

}

navigation.prototype.toggleSidebar = function() {
	// this can only run if there's a sidebar to run on
	if(!this.sidebar)
		return;
	// toggle the setting
	this.sidebar.set('open', !this.sidebar.open);
}