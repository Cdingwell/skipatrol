/*
 * This object allows for converting a javaScript object representing a form into an HTML structure for that form
 */

var formManager = {

     /* take a javascript datastructure (will provide example later)
      * and return an html form cooresponding to the elements of the form */

     objectToHtml: function(data) {

          // pull out settings from what was given to us
          var form = data.form;
          var formName = data.formName;
          var defaults = data.defaults || {};

          // this is where the html elements of the form will be stored
          var buffer = [formName ? '<form name="' + formName + '">' : ''];

          // we must parse every different category of the form
          for(var i = 0; i < form.length; i++) {

               // grab a pointer to the category we are parsing
               var category = form[i];

               // add opening container for this category
               var style = category.style ? 'style="' + category.style + '"' : '';
               buffer.push('<div ' + style + ' class="category"><div class="title">' + category.name + '</div>');

               // point to the fields in this category
               var fields = category.fields;

               // insert each field of the category into the form
               for(var j = 0; j < fields.length; j++) {

                    // create a container for this field
                    buffer.push('<div class="node">');

                    // get a pointer to the current field we are iterating over
                    var input = fields[j];

                    // determine the default value
                    var value = defaults[input.sqlName];

                    // parse an input field
                    if(input.type == 'input')
                         buffer.push('<input name="' + input.sqlName + '" id="' + input.sqlName + '" placeholder="' + input.name + '" value="' + (typeof value != 'undefined' ? value : '') + '">');

                    // parse a checkbox
                    else if(input.type == 'checkbox')
                         buffer.push('<input type="checkbox" name="' + input.sqlName + '" id="' + input.sqlName + '" ' + (value && value != '0' ? 'checked' : '') + '><label for="' + input.sqlName + '">' + input.name + '</label>');

                    // parse using a textarea
                    else if(input.type == 'textarea')
                         buffer.push('<textarea placeholder="' + input.name + '" name="' + input.sqlName + '" id="' + input.sqlName + '">' + (typeof value != 'undefined' ? value : '') + '</textarea>');
                    
                    // parse a dropdown
                    else if(input.type == 'dropdown')
                         buffer.push('<div class="selectDesc">' + input.name + '</div><select name="' + input.sqlName + '" id="' + input.sqlName + '"><option>N/A</option>' + input.options.map(function(d){ return '<option' + (d==value?' selected':'') + '>' + d + '</option>' }) + '</select>');
                    
                    // close the container for the field
                    buffer.push('</div>');
               }

               // close the container for the category
               buffer.push('</div>');
          }

          // close the form
          buffer.push(formName ? '</form>' : '');

          // join each buffer element and return the buffer
          return buffer.join('');

     }

}