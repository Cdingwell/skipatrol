var manageOnSnow = trick();

manageOnSnow.prototype.init = function() {
	this.addNewPatroller();
}

manageOnSnow.prototype.showForm = function() {
	this.$el.find('.overlay').remove();
	var overlay = $('<div class="overlay">' + formManager.objectToHtml(form, 'onSnow') + ' <div class="node save"><button class="saveChanges"><i class="icon-check-sign"></i> Save</button> </div> </div>').appendTo('body');
	return overlay;
}

manageOnSnow.prototype.addNewPatroller = function() {
	var overlay = this.showForm();
	overlay.on('click','.saveChanges', function() {
		var data = {};
		overlay.find('input, textarea').each(function(){
		     if(this.getAttribute('type') == 'checkbox')
		          data[this.name] = this.checked ? 1 : 0;
		     else
		          data[this.name] = this.value;
		});
		api().addOnSnow(data, function(d){ console.log(d) });
	}.bind(this));
}