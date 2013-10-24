var manageOnSnow = trick();

manageOnSnow.prototype.init = function() {
	this.showForm();
}

manageOnSnow.prototype.showForm = function() {
	var overlay = $('<div class="overlay">' + formManager.objectToHtml(form, 'onSnow') + '</div>').appendTo('body');
}