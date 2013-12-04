/*

DAVID ZORYCHTA
MACMEE AT GMAIL DOT com

*/

(function( $ ){

	$.fn.toggleSwitch = function() {
	
		//hide dropdown
		this.hide();
	
		//for each dropdown
		this.each(function() {
		
			//pointer
			var dropdown = $(this);
		
			//start buffer
			var buffer = '<span class="buttongroup toggleSwitch">';
			var currentval = dropdown.val();
			var defaultvalassigned = false;
			var highlightedval = '';
			var btn_location = '';
			
			//add each option to the buffer
			var amount = dropdown.find('option').size();
			var i = 0;
			dropdown.find('option').each(function(){
	
				//option pointer
				var option = $(this);
	
				//is this the selected option? If so give it selected class
				if(defaultvalassigned == false && currentval == option.val())
				{
					defaultvalassigned = true;
					highlightedval = ' btn_selected';
				}else
					highlightedval = '';
			
				//building bufferÃ¢â‚¬Â¦
				i++;
				if(amount == i)
					btn_location = 'last';
				else if(i == 1)
					btn_location = 'first';
				else
					btn_location = 'middle';
				buffer = buffer + '<button class="toggleButton ' + btn_location + highlightedval + '" value="' + option.val() + '" data-message="' + option.attr('data-message') + '">' + option.html() + '</button>';
			});
			
			//close buffer and append
			buffer = buffer + '</span>';
			dropdown.wrap('<span>').after(buffer);
			
		});
		
		//toggle status upon a button being clicked
		this.parent().find('.toggleSwitch .toggleButton').click(function(e){
	
			var self = $(this);
	
			//prevent default
			e.preventDefault();
			
			//remove selected status from other buttons
			self.parent().find('.toggleButton').removeClass('btn_selected');
			
			//add selected status to this button
			self.addClass('btn_selected');
			
			//change input value to match that of this buttons value and trigger change event
			self.parent().parent().find('select').val( self.attr('value') ).change();
		
		});
		
		return this;
	}

})( jQuery );