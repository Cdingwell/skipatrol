var navigation = trick();

navigation.prototype.init = function() {
	this.el.classList.add('nav');
	this.render();
	$('body').on('permChange', function() {
		this.render();
	}.bind(this));
}

navigation.prototype.render = function() {

	var pages = [];

	if(api().checkPerms( api().perms.guest ))
		pages.push({ name: 'Login', 'href': '#/login' });

	if(api().checkPerms( api().perms.admin ))
		pages.push({ name: 'Home', 'href': '#/Welcome' });

	if(api().checkPerms( api().perms.admin ))
		pages.push({ name: 'Patrollers', 'href': '#/managePatrollers' });

	if(api().checkPerms( api().perms.admin ))
		pages.push({ name: 'On Snow', 'href': '#/manageOnSnow' });

	if(!api().checkPerms( api().perms.guest ))
		pages.push({ name: 'Logout', 'href': '#/login' });

	this.el.innerHTML = Handlebars.templates['navigation'](pages);

}