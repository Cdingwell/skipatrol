$('document').ready(function() {

	// this is where we will store le content
	var content = $('#content');

	// slap in the navigation
	var nav = new navigation();
	$('#header').append(nav.el);

	// detect and pursue page changes
	function followHashPage() {
		var page = window.location.hash.replace('#/','');
		var pageObj = new window[page]();
		content.html(pageObj.el);
	}
	window.addEventListener("hashchange", followHashPage, false);

	// send user to login screen by default
	if(window.location.hash == '')
		window.location.hash = '#/login';
	else
		followHashPage();

});