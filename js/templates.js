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
  


  return "<div id=\"main\" class=\"loginContainer\"> \n    <div class=\"full_w\">\n        <div class=\"h_title\"><i class=\"icon-lock\"></i>Please Login</div>\n        <div class=\"h_content\">\n\n            <div id=\"form\">\n                <div class=\"inContainer\">\n                    <label for=\"login\">Username</label>\n                    <input id=\"login\" name=\"login\" class=\"text\" />\n                </div>\n                <div class=\"inContainer\">\n                    <label for=\"pass\">Password</label>\n                    <input id=\"pass\" name=\"pass\" type=\"password\" class=\"text\" />\n                </div>\n                <div class=\"buttonContainer\">\n                    <button type=\"submit\" class=\"ok\" id=\"loginButton\"><i class=\"icon-ok\"></i>Login</button>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>";
  });
templates['manageOnSnow'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";


  buffer += "<div id=\"main\" class=\"loginContainer\"> \n    <div class=\"full_w\">\n        <div class=\"h_title\"><i class=\"icon-briefcase\"></i>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, "On Snow", options) : helperMissing.call(depth0, "lang", "On Snow", options)))
    + "</div>\n        <div class=\"h_content\">\n\n            <div class=\"manage\">\n                <button class=\"addNew\"><i class=\"icon-plus-sign-alt\"></i>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, "Add Record", options) : helperMissing.call(depth0, "lang", "Add Record", options)))
    + "</button>\n                <div class=\"filterContainer\">\n                    <input class=\"filter\" placeholder=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, "Start typing to filter", options) : helperMissing.call(depth0, "lang", "Start typing to filter", options)))
    + "\">\n                </div>\n            </div>\n\n            <div class=\"table\">\n                <div class=\"row head\">\n                    <div class=\"item\"></div>\n                    <div class=\"item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, "Time", options) : helperMissing.call(depth0, "lang", "Time", options)))
    + "</div>\n                    <div class=\"item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, "InstID", options) : helperMissing.call(depth0, "lang", "InstID", options)))
    + "</div>\n                    <div class=\"item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, "SID", options) : helperMissing.call(depth0, "lang", "SID", options)))
    + "</div>\n                    <div class=\"item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, "Notes", options) : helperMissing.call(depth0, "lang", "Notes", options)))
    + "</div>\n                </div>\n                ";
  if (stack2 = helpers.table) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.table; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            </div>\n\n            <div class='loadMoreContainer'>\n                <button class=\"loadMore\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, "Show More", options) : helperMissing.call(depth0, "lang", "Show More", options)))
    + "</button>\n            </div>\n\n        </div>\n    </div>\n</div>";
  return buffer;
  });
templates['manageOnSnow.list'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n\n	<div class=\"row\" data-id=\"";
  if (stack1 = helpers.snowID) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.snowID; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n		<div class=\"item\"> <i class=\"icon-remove\"></i> <i class=\"icon-pencil\"></i></div>\n		<div class=\"item Timestamp\"> ";
  options = {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.onSnowRecordSubmitted || depth0.onSnowRecordSubmitted),stack1 ? stack1.call(depth0, depth0.Timestamp, options) : helperMissing.call(depth0, "onSnowRecordSubmitted", depth0.Timestamp, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</div>\n		<div class=\"item InstID\">";
  if (stack2 = helpers.instID) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.instID; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</div>\n		<div class=\"item SID\">";
  if (stack2 = helpers.SID) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.SID; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</div>\n		<div class=\"item Notes\">";
  if (stack2 = helpers.notes) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.notes; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</div>\n	</div>\n\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " ";
  if (stack1 = helpers.Timestamp) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.Timestamp; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "  ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += " <button class=\"submit\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, "Submit", options) : helperMissing.call(depth0, "lang", "Submit", options)))
    + "</button> ";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });
templates['managePatrollers.edit'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";


  buffer += "<div class=\"overlay\">\n\n	<div class=\"node\">\n		<div class=\"title\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, "CSP #", options) : helperMissing.call(depth0, "lang", "CSP #", options)))
    + "</div>\n		<input class=\"CSPSNum\" value=\"";
  if (stack2 = helpers.CSPSNum) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.CSPSNum; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">\n	</div>\n\n	<div class=\"node\">\n		<div class=\"title\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, "Instructor ID", options) : helperMissing.call(depth0, "lang", "Instructor ID", options)))
    + "</div>\n		<input class=\"InstID\" value=\"";
  if (stack2 = helpers.InstID) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.InstID; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">\n	</div>\n\n	<div class=\"node\">\n		<div class=\"title\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, "Name", options) : helperMissing.call(depth0, "lang", "Name", options)))
    + "</div>\n		<input class=\"Name\" value=\"";
  if (stack2 = helpers.Name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.Name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">\n	</div>\n\n	<div class=\"node\">\n		<div class=\"title\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, "E-mail", options) : helperMissing.call(depth0, "lang", "E-mail", options)))
    + "</div>\n		<input class=\"Email\" value=\"";
  if (stack2 = helpers.Email) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.Email; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">\n	</div>\n\n	<div class=\"node\">\n		<div class=\"title\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, "Phone", options) : helperMissing.call(depth0, "lang", "Phone", options)))
    + "</div>\n		<input class=\"PhoneNum\" value=\"";
  if (stack2 = helpers.PhoneNum) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.PhoneNum; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">\n	</div>\n\n	<div class=\"node\">\n		<div class=\"title\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, "Password", options) : helperMissing.call(depth0, "lang", "Password", options)))
    + "</div>\n		<input class=\"password\" type=\"password\" value=\"\">\n	</div>\n\n	<div class=\"node cancel\">\n		<button class=\"saveChanges\"><i class=\"icon-remove-sign\"></i> ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, "Cancel", options) : helperMissing.call(depth0, "lang", "Cancel", options)))
    + "</button> \n	</div>\n\n	<div class=\"node save\">\n		<button class=\"saveChanges\"><i class=\"icon-check-sign\"></i> ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, "Submit", options) : helperMissing.call(depth0, "lang", "Submit", options)))
    + "</button> \n	</div>\n\n</div>";
  return buffer;
  });
templates['managePatrollers'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";


  buffer += "<div id=\"main\" class=\"loginContainer\"> \n    <div class=\"full_w\">\n        <div class=\"h_title\"><i class=\"icon-briefcase\"></i>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, "Patrollers", options) : helperMissing.call(depth0, "lang", "Patrollers", options)))
    + "</div>\n        <div class=\"h_content\">\n\n            <div class=\"manage\">\n                <button class=\"addNew\"><i class=\"icon-plus-sign-alt\"></i>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, "Add Patroller", options) : helperMissing.call(depth0, "lang", "Add Patroller", options)))
    + "</button>\n                <div class=\"filterContainer\">\n                    <input class=\"filter\" placeholder=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, "Start typing to filter", options) : helperMissing.call(depth0, "lang", "Start typing to filter", options)))
    + "\">\n                </div>\n            </div>\n\n            <div class=\"table\">\n                <div class=\"row head\">\n                    <div class=\"item\"></div>\n                    <div class=\"item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, "CSP #", options) : helperMissing.call(depth0, "lang", "CSP #", options)))
    + "</div>\n                    <div class=\"item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, "InstID", options) : helperMissing.call(depth0, "lang", "InstID", options)))
    + "</div>\n                    <div class=\"item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, "Name", options) : helperMissing.call(depth0, "lang", "Name", options)))
    + "</div>\n                    <div class=\"item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, "E-mail", options) : helperMissing.call(depth0, "lang", "E-mail", options)))
    + "</div>\n                    <div class=\"item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, "Phone", options) : helperMissing.call(depth0, "lang", "Phone", options)))
    + "</div>\n                </div>\n                ";
  if (stack2 = helpers.table) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.table; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            </div>\n\n        </div>\n    </div>\n</div>";
  return buffer;
  });
templates['managePatrollers.history'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

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

  buffer += "<div class=\"overlay history\">\n\n	<div class=\"node cancel\">\n		<button class=\"close\"><i class=\"icon-remove-sign\"></i> ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, "Close", options) : helperMissing.call(depth0, "lang", "Close", options)))
    + "</button> \n	</div>\n\n	<div class=\"list\">\n		<div class=\"item header\">\n			<div class=\"value\">\n				";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, "Last Active", options) : helperMissing.call(depth0, "lang", "Last Active", options)))
    + "\n			</div>\n			<div class=\"value\">\n				";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, "IP", options) : helperMissing.call(depth0, "lang", "IP", options)))
    + "\n			</div>\n			<div class=\"value\">\n			";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, "Logged In At", options) : helperMissing.call(depth0, "lang", "Logged In At", options)))
    + "\n			</div>\n		</div>\n		";
  stack2 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
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
templates['navigation'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	<a href=\"";
  if (stack1 = helpers.href) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.href; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a>\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });
})();