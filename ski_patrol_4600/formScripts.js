// JavaScript Document
//Put function here for app data validation and submition



function newForm(){
	
	//Saves the (potentionally incomplete) current form
	
	var random, date;
	
	date = new Date(milliseconds);
	
	random = Math.floor((Math.random()*9000)+2000);
	
	var title = "AccidentForm-"+date+"-"+random;
	//Read through all of the form elements
	//var form = document.getElementById("trill").elements;
	
	//Create new JSON Object to represent the form
	var json = {};
	
	//Get all of the values
	//Selects & textfields (they both go by id)
	var ids = ["rep-number", "pat-age", "pat-gender", "inc-location", "inc-classification", "inc-activity", "inc-involvement", "inc-weather", "inc-light", "inc-temp", "inc-snow", "inc-surface", "inc-equiptment", "inc-helmet", "inc-ability", "inc-non-collision", "inc-lift-related", "inc-non-skiing", "inc-to-aid", "inc-from-base", "patroller-1", "patroller-2", "patroller-3"];
	for (var i = 0; i < ids.length; i++){
		var id = ids[i];
		var val = [document.getElementById(id).value];
		json[id] = val;
	}
	
	//Loop through the checkboxes
	var names = ["injuries[]", "treatments[]", "collision[]"];
	for (var i = 0; i < names.length; i++){
		var name = names[i];
		var group = document.getElementsByName(name);
		
		//New array that will hold the ids of all of the checkboxes that are selected
		var selections = new Array();
		
		for (var t = 0; t < group.length; t++){
			if (group[t].checked){
				selections.push(group[t].id);
			}
		}
		json[name] = selections;
	}
	
	//Put into local storage
	localStorage[title] = JSON.stringify(json);
}
			
			
function validateForm(title)		
//Validates one form
function validateForm(name){
	//Get JSON from local storage
	var json = JSON.parse(localStorage[name]);
	
	//Check to see that each value of the json object has a value
	for (var key in json) {
		if (json.hasOwnProperty(key)) {
			console.log(json[key]);
			if (json[key].length < 1 || json[key][0]===""){
				//Return false if there was an 
				return false;
			}
		}
	}
	//If we've gotten here, the form is valid
	return true;
}
			
			
			
			
//Syncs one form
function sync(name){
	var json = localStorage[name];
	console.log(json);
	$.post("http://0407stats.com/php/insertIntoDB.php", 
			{data: json}, 
			function(data){
				console.log(data);
				if(data.response){
					console.log(name+" was sucesfully sent to DB, removing it from local storage.");
					//localStorage.removeItem(name);
			}
			else{
				console.log(name+" was not submitted to the DB.");
			}
	});
}
			
			
function syncAll(){
	//Loop through all keys and try to validate the corresponding json object and sync it
	var localStorageKeys = Object.keys(localStorage);
	for (var i = 0; i < localStorageKeys.length; i++){
		if (validateForm(localStorageKeys[i])){
			sync(localStorageKeys[i]);
		}
		else{
			console.log(localStorageKeys[i]+" didn't validate.");
		}
	}
}
	
function updateForm(title){
	
	//Saves the (potentionally incomplete) current form
	
	
	//Read through all of the form elements
	//var form = document.getElementById("trill").elements;
	
	//Create new JSON Object to represent the form
	var json = {};
	
	//Get all of the values
	//Selects & textfields (they both go by id)
	var ids = ["rep-number", "pat-age", "pat-gender", "inc-location", "inc-classification", "inc-activity", "inc-involvement", "inc-weather", "inc-light", "inc-temp", "inc-snow", "inc-surface", "inc-equiptment", "inc-helmet", "inc-ability", "inc-non-collision", "inc-lift-related", "inc-non-skiing", "inc-to-aid", "inc-from-base", "patroller-1", "patroller-2", "patroller-3"];
	for (var i = 0; i < ids.length; i++){
		var id = ids[i];
		var val = [document.getElementById(id).value];
		json[id] = val;
	}
	
	//Loop through the checkboxes
	var names = ["injuries[]", "treatments[]", "collision[]"];
	for (var i = 0; i < names.length; i++){
		var name = names[i];
		var group = document.getElementsByName(name);
		
		//New array that will hold the ids of all of the checkboxes that are selected
		var selections = new Array();
		
		for (var t = 0; t < group.length; t++){
			if (group[t].checked){
				selections.push(group[t].id);
			}
		}
		json[name] = selections;
	}
	
	//Put into local storage
	localStorage[title] = JSON.stringify(json);
}	
	



function loadFrorm(formIDs) {
	
	
	
	
	
}

