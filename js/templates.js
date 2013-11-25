(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['Welcome'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<div id=\"main\" class=\"loginContainer\"> \n    <div class=\"full_w\">\n        <div class=\"h_title\"><i class=\"icon-briefcase\"></i>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, "Welcome", options) : helperMissing.call(depth0, "lang", "Welcome", options)))
    + "</div>\n        <div class=\"h_content\">\n\n            <div class=\"welcome\">\n                ";
  options = {hash:{},data:data};
  stack2 = ((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, "WelcomeMessage", ((stack1 = depth0.session),stack1 == null || stack1 === false ? stack1 : stack1.name), ((stack1 = depth0.session),stack1 == null || stack1 === false ? stack1 : stack1.created), ((stack1 = depth0.session),stack1 == null || stack1 === false ? stack1 : stack1.ip), options) : helperMissing.call(depth0, "lang", "WelcomeMessage", ((stack1 = depth0.session),stack1 == null || stack1 === false ? stack1 : stack1.name), ((stack1 = depth0.session),stack1 == null || stack1 === false ? stack1 : stack1.created), ((stack1 = depth0.session),stack1 == null || stack1 === false ? stack1 : stack1.ip), options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            </div>\n\n            <div class=\"everywhereLogout\">\n                <button id='logoutEverywhere'><i class=\"icon-signout\"></i>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, "Logout of all %@ Sessions", depth0.session_count, options) : helperMissing.call(depth0, "lang", "Logout of all %@ Sessions", depth0.session_count, options)))
    + "</button>\n            </div>\n\n        </div>\n    </div>\n</div>";
  return buffer;
  });
templates['bottomOptions'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	<div class=\"buttonContainer\">\n		<a class=\"button\" data-action=\"";
  if (stack1 = helpers.action) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.action; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"> <i class='";
  if (stack1 = helpers.icon) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.icon; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "'></i> ";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " </a>\n	</div>\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });
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
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<div id=\"main\" class=\"loginContainer\"> \n    <div class=\"full_w\">\n        <div class=\"h_title\"><i class=\"icon-lock\"></i>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, "Please Login", options) : helperMissing.call(depth0, "lang", "Please Login", options)))
    + "</div>\n        <div class=\"h_content\">\n\n            <div id=\"form\">\n                <div class=\"inContainer\">\n                    <label for=\"login\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, "Username", options) : helperMissing.call(depth0, "lang", "Username", options)))
    + "</label>\n                    <input id=\"login\" name=\"login\" class=\"text\" autocapitalize=\"off\" autocorrect=\"off\" />\n                </div>\n                <div class=\"inContainer\">\n                    <label for=\"pass\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, "Password", options) : helperMissing.call(depth0, "lang", "Password", options)))
    + "</label>\n                    <input id=\"pass\" name=\"pass\" type=\"password\" class=\"text\" autocapitalize=\"off\" autocorrect=\"off\" />\n                </div>\n                <div class=\"buttonContainer\">\n                    <button type=\"submit\" class=\"ok\" id=\"loginButton\"><i class=\"icon-ok\"></i>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, "Submit", options) : helperMissing.call(depth0, "lang", "Submit", options)))
    + "</button>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>";
  return buffer;
  });
templates['manageAccident'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";


  buffer += "<div id=\"main\" class=\"loginContainer\"> \n    <div class=\"full_w\">\n        <div class=\"h_title\"><i class=\"icon-briefcase\"></i>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, "Accidents", options) : helperMissing.call(depth0, "lang", "Accidents", options)))
    + "</div>\n        <div class=\"h_content\">\n\n            <div class=\"manage\">\n                <button class=\"addNew\"><i class=\"icon-plus-sign-alt\"></i>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, "Add Record", options) : helperMissing.call(depth0, "lang", "Add Record", options)))
    + "</button>\n                <input class=\"filter\" placeholder=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, "Start typing to filter", options) : helperMissing.call(depth0, "lang", "Start typing to filter", options)))
    + "\">\n            </div>\n\n            <div class=\"table\">\n                <div class=\"row head\">\n                    <div class=\"item options\"></div>\n                    <div class=\"item Timestamp\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, "Time", options) : helperMissing.call(depth0, "lang", "Time", options)))
    + "</div>\n                    <div class=\"item id\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, "ID", options) : helperMissing.call(depth0, "lang", "ID", options)))
    + "</div>\n                    <div class=\"item gender\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, "Gender", options) : helperMissing.call(depth0, "lang", "Gender", options)))
    + "</div>\n                    <div class=\"item DOB\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, "DOB", options) : helperMissing.call(depth0, "lang", "DOB", options)))
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
templates['manageAccident.list'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n\n	<div class=\"row\" data-id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n		<div class=\"item options\"> <i class=\"icon-remove\"></i> <i class=\"icon-pencil\"></i></div>\n		<div class=\"item Timestamp\"> ";
  options = {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.accidentRecordSubmitted || depth0.accidentRecordSubmitted),stack1 ? stack1.call(depth0, depth0.Timestamp, options) : helperMissing.call(depth0, "accidentRecordSubmitted", depth0.Timestamp, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</div>\n		<div class=\"item id\">";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</div>\n		<div class=\"item gender\">";
  if (stack2 = helpers.gender) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.gender; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</div>\n		<div class=\"item DOB\">";
  if (stack2 = helpers.DOB) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.DOB; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</div>\n	</div>\n\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += " ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.formatDate || depth0.formatDate),stack1 ? stack1.call(depth0, depth0.Timestamp, options) : helperMissing.call(depth0, "formatDate", depth0.Timestamp, options)))
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
templates['manageFirstAid'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";


  buffer += "<div id=\"main\" class=\"loginContainer\"> \n    <div class=\"full_w\">\n        <div class=\"h_title\"><i class=\"icon-briefcase\"></i>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, "On Snow", options) : helperMissing.call(depth0, "lang", "On Snow", options)))
    + "</div>\n        <div class=\"h_content\">\n\n            <div class=\"manage\">\n                <button class=\"addNew\"><i class=\"icon-plus-sign-alt\"></i>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, "Add Record", options) : helperMissing.call(depth0, "lang", "Add Record", options)))
    + "</button>\n                <input class=\"filter\" placeholder=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, "Start typing to filter", options) : helperMissing.call(depth0, "lang", "Start typing to filter", options)))
    + "\">\n            </div>\n\n            <div class=\"table\">\n                <div class=\"row head\">\n                    <div class=\"item options\"></div>\n                    <div class=\"item Time\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, "Time", options) : helperMissing.call(depth0, "lang", "Time", options)))
    + "</div>\n                    <div class=\"item Name\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, "Creator", options) : helperMissing.call(depth0, "lang", "Creator", options)))
    + "</div>\n                    <div class=\"item studentName\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, "Student", options) : helperMissing.call(depth0, "lang", "Student", options)))
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
templates['manageFirstAid.list'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n\n	<div class=\"row\" data-id=\"";
  if (stack1 = helpers.FAID) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.FAID; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n		<div class=\"item options\"> <i class=\"icon-remove\"></i> <i class=\"icon-pencil\"></i></div>\n		<div class=\"item Timestamp\"> ";
  options = {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.onSnowRecordSubmitted || depth0.onSnowRecordSubmitted),stack1 ? stack1.call(depth0, depth0.Timestamp, options) : helperMissing.call(depth0, "onSnowRecordSubmitted", depth0.Timestamp, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</div>\n		<div class=\"item Name\">";
  if (stack2 = helpers.Name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.Name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</div>\n		<div class=\"item studentName\">";
  if (stack2 = helpers.studentName) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.studentName; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</div>\n	</div>\n\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += " ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.formatDate || depth0.formatDate),stack1 ? stack1.call(depth0, depth0.Timestamp, options) : helperMissing.call(depth0, "formatDate", depth0.Timestamp, options)))
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
    + "</button>\n                <input class=\"filter\" placeholder=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, "Start typing to filter", options) : helperMissing.call(depth0, "lang", "Start typing to filter", options)))
    + "\">\n            </div>\n\n            <div class=\"table\">\n                <div class=\"row head\">\n                    <div class=\"item options\"></div>\n                    <div class=\"item Time\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, "Time", options) : helperMissing.call(depth0, "lang", "Time", options)))
    + "</div>\n                    <div class=\"item Name\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, "Creator", options) : helperMissing.call(depth0, "lang", "Creator", options)))
    + "</div>\n                    <div class=\"item studentName\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, "Student", options) : helperMissing.call(depth0, "lang", "Student", options)))
    + "</div>\n                    <div class=\"item Notes\">";
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
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n\n	<div class=\"row\" data-id=\"";
  if (stack1 = helpers.snowID) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.snowID; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n		<div class=\"item options\"> <i class=\"icon-remove\"></i> <i class=\"icon-pencil\"></i></div>\n		<div class=\"item Timestamp\"> ";
  options = {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.onSnowRecordSubmitted || depth0.onSnowRecordSubmitted),stack1 ? stack1.call(depth0, depth0.Timestamp, options) : helperMissing.call(depth0, "onSnowRecordSubmitted", depth0.Timestamp, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</div>\n		<div class=\"item Name\">";
  if (stack2 = helpers.Name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.Name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</div>\n		<div class=\"item studentName\">";
  if (stack2 = helpers.studentName) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.studentName; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</div>\n		<div class=\"item Notes\">";
  if (stack2 = helpers.notes) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.notes; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</div>\n	</div>\n\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += " ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.formatDate || depth0.formatDate),stack1 ? stack1.call(depth0, depth0.Timestamp, options) : helperMissing.call(depth0, "formatDate", depth0.Timestamp, options)))
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
  var buffer = "", stack1, stack2, options, self=this, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n			<div><input ";
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.bitAND || depth1.bitAND),stack1 ? stack1.call(depth0, depth1.login, depth0, options) : helperMissing.call(depth0, "bitAND", depth1.login, depth0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " type=\"checkbox\" name=\""
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\" id=\""
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\"><label for=\""
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.key), options) : helperMissing.call(depth0, "lang", ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.key), options)))
    + "</label></div>\n		";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "checked=true";
  }

  buffer += "<div class=\"overlay\">\n\n	<div class=\"node\">\n		<div class=\"title\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, "CSP #", options) : helperMissing.call(depth0, "lang", "CSP #", options)))
    + "</div>\n		<input class=\"CSPSNum\" value=\"";
  if (stack2 = helpers.CSPSNum) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.CSPSNum; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">\n	</div>\n\n	<div class=\"node permissions\">\n		<div class=\"title\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, "Permissions", options) : helperMissing.call(depth0, "lang", "Permissions", options)))
    + "</div>\n		";
  stack2 = helpers.each.call(depth0, depth0.perms, {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n	</div>\n\n	<div class=\"node\">\n		<div class=\"title\">";
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
    + "</div>\n		<input class=\"password\" type=\"password\" value=\"\">\n	</div>\n\n	<div class=\"bottomBar\">\n\n		<div class=\"node cancel\">\n			<button class=\"saveChanges\"><i class=\"icon-remove-sign\"></i> ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, "Cancel", options) : helperMissing.call(depth0, "lang", "Cancel", options)))
    + "</button> \n		</div>\n\n		<div class=\"node save\">\n			<button class=\"saveChanges\"><i class=\"icon-check-sign\"></i> ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, "Submit", options) : helperMissing.call(depth0, "lang", "Submit", options)))
    + "</button> \n		</div>\n\n	</div>\n\n</div>";
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
    + "</button>\n                <input class=\"filter\" placeholder=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, "Start typing to filter", options) : helperMissing.call(depth0, "lang", "Start typing to filter", options)))
    + "\">\n            </div>\n\n            <div class=\"table\">\n                <div class=\"row head\">\n                    <div class=\"item options\"></div>\n                    <div class=\"item CSPSNum\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, "CSP #", options) : helperMissing.call(depth0, "lang", "CSP #", options)))
    + "</div>\n                    <div class=\"item InstID\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, "InstID", options) : helperMissing.call(depth0, "lang", "InstID", options)))
    + "</div>\n                    <div class=\"item Name\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, "Name", options) : helperMissing.call(depth0, "lang", "Name", options)))
    + "</div>\n                    <div class=\"item Email\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, "E-mail", options) : helperMissing.call(depth0, "lang", "E-mail", options)))
    + "</div>\n                    <div class=\"item PhoneNum\">";
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

  buffer += "<div class=\"overlay history\">\n\n	<div class=\"list\">\n		<div class=\"item header\">\n			<div class=\"value\">\n				";
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
  buffer += "\n	</div>\n\n	<div class=\"bottomBar\">\n		<div class=\"node cancel\">\n			<button class=\"close\"><i class=\"icon-remove-sign\"></i> ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, "Close", options) : helperMissing.call(depth0, "lang", "Close", options)))
    + "</button> \n		</div>\n	</div>\n\n</div>";
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
    + "\">\n		<div class=\"item options\"> <i class=\"icon-remove\"></i> <i class=\"icon-pencil\"></i> <i class=\"icon-time\"></i></div>\n		<div class=\"item CSPSNum\">";
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
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n	";
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.checkPerms || depth0.checkPerms),stack1 ? stack1.call(depth0, depth0.perms, options) : helperMissing.call(depth0, "checkPerms", depth0.perms, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		<a href=\"";
  if (stack1 = helpers.href) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.href; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a>\n	";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });
templates['settings'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this, functionType="function", blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  
  return " selected";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n\n        	<div class=\"option updatePassword\">\n        		<div class=\"title\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, "Change Password", options) : helperMissing.call(depth0, "lang", "Change Password", options)))
    + "</div>\n	            <input placeholder='";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, "Enter new password", options) : helperMissing.call(depth0, "lang", "Enter new password", options)))
    + "' type='password' autocapitalize=\"off\" autocorrect=\"off\" id=\"password\">\n	            <input placeholder='";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, "Confirm new password", options) : helperMissing.call(depth0, "lang", "Confirm new password", options)))
    + "' type='password' autocapitalize=\"off\" autocorrect=\"off\" id=\"confirm_password\">\n	            <button id=\"go\"><i class=\"icon-lock\"></i>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, "Submit", options) : helperMissing.call(depth0, "lang", "Submit", options)))
    + "</button>\n        	</div>\n\n        	";
  return buffer;
  }

  buffer += "<div id=\"main\" class=\"loginContainer\"> \n    <div class=\"full_w\">\n        <div class=\"h_title\"><i class=\"icon-briefcase\"></i>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, "Settings", options) : helperMissing.call(depth0, "lang", "Settings", options)))
    + "</div>\n        <div class=\"h_content\">\n\n        	<div class=\"option\">\n        		<div class=\"title\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, "Change Language", options) : helperMissing.call(depth0, "lang", "Change Language", options)))
    + "</div>\n	            <select id=\"language\">\n	                <option value=\"english\">English</option>\n	                <option value=\"french\" ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack2 = helpers.isFrench) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0.isFrench; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if (!helpers.isFrench) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += ">Français</option>\n	            </select>\n        	</div>\n\n        	";
  stack2 = helpers['if'].call(depth0, depth0.loggedIn, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n        </div>\n    </div>\n</div>";
  return buffer;
  });
templates['sidebar'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n		";
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.checkPerms || depth0.checkPerms),stack1 ? stack1.call(depth0, depth0.perms, options) : helperMissing.call(depth0, "checkPerms", depth0.perms, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n	";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n			<a href=\"";
  if (stack1 = helpers.href) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.href; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"> <i class='";
  if (stack1 = helpers.icon) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.icon; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "'></i> ";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a>\n		";
  return buffer;
  }

  buffer += "<div class='closeSidebar'></div>\n\n<div class='actualSidebar'>\n	";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>";
  return buffer;
  });
templates['userPicker.base'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class='top'>\n	<div class='close'>\n		<div class='icon-remove'></div>\n	</div>\n	<div class='title'>\n		Choose a User\n	</div>\n	<div class='filter'>\n		<select id='filter'>\n			<OPTION value='all'>A-Z</OPTION><OPTION>A</OPTION><OPTION>B</OPTION><OPTION>C</OPTION><OPTION>D</OPTION><OPTION>E</OPTION><OPTION>F</OPTION><OPTION>G</OPTION><OPTION>H</OPTION><OPTION>I</OPTION><OPTION>J</OPTION><OPTION>K</OPTION><OPTION>L</OPTION><OPTION>M</OPTION><OPTION>N</OPTION><OPTION>O</OPTION><OPTION>P</OPTION><OPTION>Q</OPTION><OPTION>R</OPTION><OPTION>S</OPTION><OPTION>T</OPTION><OPTION>U</OPTION><OPTION>V</OPTION><OPTION>W</OPTION><OPTION>X</OPTION><OPTION>Y</OPTION><OPTION>Z</OPTION>\n		</select>\n	</div>\n</div>\n<div class='list'>\n	<div class='loadingContainer'>\n		<div class='icon-spinner icon-spin'></div>\n	</div>\n</div>";
  });
templates['userPicker.list'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	<div class='node' data-id='";
  if (stack1 = helpers.Id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.Id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "'>";
  if (stack1 = helpers.Name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.Name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });
})();