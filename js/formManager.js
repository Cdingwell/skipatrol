/*
 * This object allows for converting a javaScript object representing a form into an HTML structure for that form
 */

var formManager = {

     /* take a javascript datastructure (will provide example later)
      * and return an html form cooresponding to the elements of the form */

     objectToHtml: function(form, formName) {

          // this is where the html elements of the form will be stored
          var buffer = [formName ? '<form name="' + formName + '">' : ''];

          // we must parse every different category of the form
          for(var i = 0; i < form.length; i++) {

               // add opening container for this category
               buffer.push('<div class="category"><div class="title">' + form[i].name + '</div>');

               // point to the fields in this category
               var fields = form[i].fields;

               // insert each field of the category into the form
               for(var j = 0; j < fields.length; j++) {

                    // create a container for this field
                    buffer.push('<div class="node">');

                    // get a pointer to the current field we are iterating over
                    var input = fields[j];

                    // parse an input field
                    if(input.type == 'input')
                         buffer.push('<input name="' + input.sqlName + '" placeholder="' + input.name + '">');

                    // parse a checkbox
                    else if(input.type == 'checkbox')
                         buffer.push('<input type="checkbox" name="' + input.sqlName + '" id="' + input.sqlName + '"><label for="' + input.sqlName + '">' + input.name + '</label>');
                    
                    // parse a dropdown
                    else if(input.type == 'dropdown')
                         buffer.push('<div class="selectDesc">' + input.name + '</div><select name="' + input.sqlName + '"><option>N/A</option><option>' + input.options.join('</option><option>') + '</option></select>');
                    
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