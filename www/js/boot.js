window.isMobile = navigator.userAgent.match(/Android|iOS|iphone|ipad/i) || window.location.href.indexOf('?mobile') > -1;

$('document').ready(function() {

	// slap in the mobile stylesheet
	if(window.isMobile)
		$('head').append('<link rel="stylesheet" type="text/css" href="css/mobile.css"/>');

	// attempt to hide top bar in iOS
	try{
		window.scrollTo(0, 1);
	}catch(e){

	}

	// this is where we will store le content
	var content = $('#content');

	// slap in the navigation
	var nav = new navigation();
	$('#header').append(nav.el);

	// detect and pursue page changes
	function followHashPage() {
		stopLoading();
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