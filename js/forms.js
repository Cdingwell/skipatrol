function display(){
    	
    	var reportNum = document.getElementById("reportNum").value;
	var cspsNum = document.getElementById("cspsNum").value;
	var ageNum = document.getElementById("ageNum").value;
	var complaint = document.getElementById("complaint").value;
	var gender = document.getElementById("gender").value;
	
	var query = "?";
	
	if (reportNum) 
	    query += "rn="+reportNum+"&";
	if (cspsNum) 
	    query += "cn="+cspsNum+"&";
	if (ageNum) 
	    query += "an="+ageNum+"&";
	if (complaint !== "N/A")
	    query += "c="+complaint+"&";
	if (gender !== "N/A")
	    query += "g="+gender;
	
	window.location.href = "http://0407stats.com/php/form.php"+query;
}

console.log(localStorage["f_id"]);


/* Jennifer's stuff */
function Check(which){
    if (document.getElementById(which+"-L").style.visibility=="visible"){
        document.getElementById(which+"-L").style.visibility="hidden";
	document.getElementById(which+"-R").style.visibility="hidden";
	document.getElementById(which+"-B").style.visibility="hidden";
	document.getElementById(which+"-L-Text").style.visibility="hidden";
	document.getElementById(which+"-R-Text").style.visibility="hidden";
	document.getElementById(which+"-B-Text").style.visibility="hidden";
    }
    else{
        document.getElementById(which+"-L").style.visibility="visible";
	document.getElementById(which+"-R").style.visibility="visible";
        document.getElementById(which+"-B").style.visibility="visible";
	document.getElementById(which+"-L-Text").style.visibility="visible";
	document.getElementById(which+"-R-Text").style.visibility="visible";
	document.getElementById(which+"-B-Text").style.visibility="visible";
    }
}

function Select(temp){
    if(document.getElementById(""+temp).checked){
        document.getElementById("Text-"+temp).style.visibility="visible";
    }
    else{
        document.getElementById("Text-"+temp).style.visibility="hidden";
    }
}

function Showing(temporary){
    if(!document.getElementById(""+temporary).checked){
        document.getElementById("Text-"+temporary).style.visibility="hidden";
	document.getElementById("Textbox-"+temporary).style.visibility="hidden";
    }
    else{
        document.getElementById("Text-"+temporary).style.visibility="visible";
	document.getElementById("Textbox-"+temporary).style.visibility="visible";
    }
}