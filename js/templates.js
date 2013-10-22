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
  


  return "<div id=\"main\" class=\"loginContainer\"> \n    <div class=\"full_w\">\n        <div class=\"h_title\">Please Login</div>\n        <div class=\"h_content\">\n\n            <div id=\"form\">\n                <div class=\"inContainer\">\n                    <label for=\"login\">Username</label>\n                    <input id=\"login\" name=\"login\" class=\"text\" />\n                </div>\n                <div class=\"inContainer\">\n                    <label for=\"pass\">Password</label>\n                    <input id=\"pass\" name=\"pass\" type=\"password\" class=\"text\" />\n                </div>\n                <div class=\"buttonContainer\">\n                    <button type=\"submit\" class=\"ok\" id=\"loginButton\">Login</button>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>";
  });
templates['managePatrollers.edit'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"overlay\">\n\n	<div class=\"node\">\n		<div class=\"title\">CSP #</div>\n		<input class=\"CSPSNum\" value=\"";
  if (stack1 = helpers.CSPSNum) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.CSPSNum; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n	</div>\n\n	<div class=\"node\">\n		<div class=\"title\">Instructor ID</div>\n		<input class=\"InstID\" value=\"";
  if (stack1 = helpers.InstID) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.InstID; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n	</div>\n\n	<div class=\"node\">\n		<div class=\"title\">Name</div>\n		<input class=\"Name\" value=\"";
  if (stack1 = helpers.Name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.Name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n	</div>\n\n	<div class=\"node\">\n		<div class=\"title\">Email</div>\n		<input class=\"Email\" value=\"";
  if (stack1 = helpers.Email) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.Email; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n	</div>\n\n	<div class=\"node\">\n		<div class=\"title\">PhoneNum</div>\n		<input class=\"PhoneNum\" value=\"";
  if (stack1 = helpers.PhoneNum) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.PhoneNum; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n	</div>\n\n	<div class=\"node\">\n		<div class=\"title\">Password</div>\n		<input class=\"password\" type=\"password\" value=\"\">\n	</div>\n\n	<div class=\"node cancel\">\n		<button class=\"saveChanges\"><i class=\"icon-remove-sign\"></i> Cancel</button> \n	</div>\n\n	<div class=\"node save\">\n		<button class=\"saveChanges\"><i class=\"icon-check-sign\"></i> Save</button> \n	</div>\n\n</div>";
  return buffer;
  });
templates['managePatrollers'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function";


  buffer += "<div id=\"main\" class=\"loginContainer\"> \n    <div class=\"full_w\">\n        <div class=\"h_title\">Manage Patrollers</div>\n        <div class=\"h_content\">\n\n            <div class=\"manage\">\n                <button class=\"addNew\"><i class=\"icon-plus-sign-alt\"></i>Add Patroller</button>\n                <div class=\"filterContainer\">\n                    <input class=\"filter\" placeholder=\"Start typing to ilter\">\n                </div>\n            </div>\n\n            <div class=\"table\">\n                <div class=\"row head\">\n                    <div class=\"item\"></div>\n                    <div class=\"item\">CSP #</div>\n                    <div class=\"item\">InstID</div>\n                    <div class=\"item\">Name</div>\n                    <div class=\"item\">E-mail</div>\n                    <div class=\"item\">Phone</div>\n                </div>\n                ";
  if (stack1 = helpers.table) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.table; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </div>\n\n        </div>\n    </div>\n</div>";
  return buffer;
  });
templates['managePatrollers.history'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		<div class=\"item\">\n			<div class=\"value\">\n				";
  if (stack1 = helpers.lastactive) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lastactive; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n			</div>\n			<div class=\"value\">\n				";
  if (stack1 = helpers.ip) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.ip; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " \n			</div>\n			<div class=\"value\">\n				";
  if (stack1 = helpers.created) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.created; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n			</div>\n		</div>\n		";
  return buffer;
  }

  buffer += "<div class=\"overlay history\">\n\n	<div class=\"node cancel\">\n		<button class=\"close\"><i class=\"icon-remove-sign\"></i> Close</button> \n	</div>\n\n	<div class=\"list\">\n		<div class=\"item header\">\n			<div class=\"value\">\n				Last Active\n			</div>\n			<div class=\"value\">\n				IP\n			</div>\n			<div class=\"value\">\n			Logged In At\n			</div>\n		</div>\n		";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</div>\n\n</div>";
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
    + "\">\n		<div class=\"item\"> <i class=\"icon-remove\"></i> <i class=\"icon-pencil\"></i> <i class=\"icon-time\"></i></div>\n		<div class=\"item CSPSNum\">";
  if (stack1 = helpers.CSPSNum) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.CSPSNum; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n		<div class=\"item InstID\">";
  if (stack1 = helpers.InstID) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.InstID; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n		<div class=\"item Name\">";
  if (stack1 = helpers.Name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.Name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n		<div class=\"item Email\">";
  if (stack1 = helpers.Email) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.Email; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n		<div class=\"item PhoneNum\">";
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