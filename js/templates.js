(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['error'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"errorMessage\">\n	";
  if (stack1 = helpers.message) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.message; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n</div>";
  return buffer;
  });
templates['login'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"main\" class=\"loginContainer\"> \n    <div class=\"full_w\">\n        <div class=\"h_title\"></div>\n        <div class=\"h_content\">\n\n            <div id=\"form\">\n                <div class=\"inContainer\">\n                    <label for=\"login\">Username</label>\n                    <input id=\"login\" name=\"login\" class=\"text\" />\n                </div>\n                <div class=\"inContainer\">\n                    <label for=\"pass\">Password</label>\n                    <input id=\"pass\" name=\"pass\" type=\"password\" class=\"text\" />\n                </div>\n                <div class=\"buttonContainer\">\n                    <button type=\"submit\" class=\"ok\" id=\"loginButton\">Login</button>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>";
  });
templates['managePatrollers'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function";


  buffer += "<div id=\"main\" class=\"loginContainer\"> \n    <div class=\"full_w\">\n        <div class=\"h_title\">Manage Patrollers</div>\n        <div class=\"h_content\">\n\n            <div class=\"table\">\n                <div class=\"row head\">\n                    <div class=\"item\"></div>\n                    <div class=\"item\">CSP #</div>\n                    <div class=\"item\">InstID</div>\n                    <div class=\"item\">Name</div>\n                    <div class=\"item\">E-mail</div>\n                    <div class=\"item\">Phone</div>\n                </div>\n                ";
  if (stack1 = helpers.table) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.table; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </div>\n\n        </div>\n    </div>\n</div>";
  return buffer;
  });
templates['managePatrollers.list'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n\n	<div class=\"row\" data-id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n		<div class=\"item\"> <i class=\"icon-remove\"></i> </div>\n		<div class=\"item\">";
  if (stack1 = helpers.CSPSNum) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.CSPSNum; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n		<div class=\"item\">";
  if (stack1 = helpers.Email) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.Email; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n		<div class=\"item\">";
  if (stack1 = helpers.InstID) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.InstID; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n		<div class=\"item\">";
  if (stack1 = helpers.Name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.Name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n		<div class=\"item\">";
  if (stack1 = helpers.PhoneNum) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.PhoneNum; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n	</div>\n\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });
})();