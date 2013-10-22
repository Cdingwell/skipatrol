<?php
    session_start();

    //Make sure the loggedin variable is set and equals true, and that the previous page was the login page
    if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true) {    

    } 
    else {
        //header("location:../login.html");
    }

    $con=mysqli_connect("localhost","superjh2_tyler","grantt","superjh2_appdev");

    $tableQuery = "select * from Accident ";
 
   //Refreshed for table
    $count = 0;
    if (isset($_GET['rn'])) $count++;
    if (isset($_GET['cn'])) $count++;
    if (isset($_GET['an'])) $count++;
    if (isset($_GET['c'])) $count++;
    if (isset($_GET['g'])) $count++;

    if ($count > 0)  
        $tableQuery .= "where ";
 
    if (isset($_GET['rn'])){
        $tableQuery .= "reportNum=".$_GET['rn']." ";
        $count--;
        if ($count > 0){
            $tableQuery .= "and ";
        }
    }
   
    if (isset($_GET['cn'])){
        $tableQuery .= "CSPSNum1=".$_GET['cn']." or CSPSNum2=".$_GET['cn']." or CSPSNum3=".$_GET['cn']." ";
        $count--;
        if ($count > 0){
            $tableQuery .= "and ";
        }
    }

    if (isset($_GET['an'])){
        $tableQuery .= "age=".$_GET['an']." ";
        $count--;
        if ($count > 0){
            $tableQuery .= "and ";
        }
    }

    if (isset($_GET['c'])){
        $tableQuery .= "complaints like '".$_GET['c']."' ";
        $count--;
        if ($count > 0){
            $tableQuery .= "and ";
        }
    }

    if (isset($_GET['g'])){
        $tableQuery .= "gender='".$_GET['g']."' ";
        $count--;
    }

    //Refreshed for form
    if (isset($_POST['Edit'])){
         $formID = $_POST['Edit'];
         $formQuery = mysqli_query($con, "select * from Accident where id='$formID'");
         $row = mysqli_fetch_array($formQuery);
    }

?>

<html xmlns="http://www.w3.org/1999/xhtml" lang="pl" xml:lang="pl">
<head>
<meta http-equiv="content-type" content="text/html; charset=utf-8" />

<title>Superior Zone Administration Home</title>
<link rel="stylesheet" type="text/css" href="../css/style.css" media="screen" />
<link rel="stylesheet" type="text/css" href="../css/navi.css" media="screen" />
<script type="text/javascript" src="../js/jquery-1.7.2.min.js"></script>

<script type="text/javascript">

$(function(){
	$(".box .h_title").not(this).next("ul").hide("normal");
	$(".box .h_title").not(this).next("#home").show("normal");
	$(".box").children(".h_title").click( function() { $(this).next("ul").slideToggle(); });
});


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
	
        //Redirect to same page with GET parameters
	window.location.href = "http://0407stats.com/php/form.php"+query;
}

function json(){
    var jsonObj = {
        "id" : '<?php echo $row[0]; ?>',
        "date" : '<?php echo $row[1]; ?>',
        "reportNum" : '<?php echo $row[2]; ?>',
        "cNum1" : '<?php echo $row[3]; ?>',
        "cNum2" : '<?php echo $row[4]; ?>',
        "cNum3" : '<?php echo $row[5]; ?>',
        "dob" : '<?php echo $row[6]; ?>',
        "age" : '<?php echo $row[7]; ?>',
        "gender" : '<?php echo $row[8]; ?>',
        "complaints" : '<?php echo $row[9]; ?>',
        "treatment" : '<?php echo $row[10]; ?>',
        "location" : '<?php echo $row[11]; ?>',
        "class" : '<?php echo $row[12]; ?>',
        "activity" : '<?php echo $row[13]; ?>',
        "involvement" : '<?php echo $row[14]; ?>',
        "weather" : '<?php echo $row[15]; ?>',
        "light" : '<?php echo $row[16]; ?>',
        "temp" : '<?php echo $row[17]; ?>',
        "snow" : '<?php echo $row[18]; ?>',
        "surface" : '<?php echo $row[19]; ?>',
        "equipment" : '<?php echo $row[20]; ?>',
        "helmet" : '<?php echo $row[21]; ?>',
        "ability" : '<?php echo $row[22]; ?>',
        "firstAid" : '<?php echo $row[23]; ?>',
        "fromBase" : '<?php echo $row[24]; ?>',
        "collision" : '<?php echo $row[25]; ?>',
        "nonCollision" : '<?php echo $row[23]; ?>'
    }
    return jsonObj;
}


function fill(){
    var f = json();
    //Report Number
    document.getElementById("Report").value = f["reportNum"];

    //Date of Birth
    document.getElementById("Date-Birth").value = f["dob"];

    //Age
    document.getElementById("Age").value = f["age"];

    //Gender
    document.getElementById("gender-"+f["gender"]).checked = true;

    //Treatment Protocol
    document.getElementById("Treatment-"+f["treatment"]).checked = true;

    //Complaints (only does 1 atm)
    document.getElementById("Injury-"+f["complaints"]).checked = true;

    //Class
    document.getElementsByName("Classification")[f["class"]].checked = true;

    //Incident Location
    document.getElementsByName("Location")[f["location"]].checked = true;

    //Activity
    document.getElementsByName("Activity")[f["activity"]].checked = true;

    //Involvement
    document.getElementsByName("Involvement")[f["involvement"]].checked = true;

    //Weather
    document.getElementsByName("Weather")[f["weather"]].checked = true;

    //Light
    document.getElementsByName("Light")[f["light"]].checked = true;

    //Temp
    document.getElementsByName("Temp")[f["temp"]].checked = true;
    
    //Snow
    document.getElementsByName("Snow")[f["snow"]].checked = true;

    //Surface
    document.getElementsByName("Surface")[f["surface"]].checked = true;

    //Equipment
    document.getElementsByName("Equipment")[f["equipment"]].checked = true;

    //Helmet
    document.getElementsByName("Helmet")[f["helmet"]].checked = true;

    //Ability
    document.getElementsByName("Ability")[f["ability"]].checked = true;

    //Collide
    document.getElementsByName("Collide")[f["collision"]].checked = true;

    //NonCollision
    document.getElementsByName("NonCollision")[f["nonCollision"]].checked = true;

    //First Aid
    document.getElementsByName("FirstAid")[f["firstAid"]].checked = true;

    //From Base
    document.getElementsByName("FromBase")[f["fromBase"]].checked = true;

    //Was 911 Called?
    //document.getElementsByName("EmergeCall")[f[""]].checked = true;

    //CSPS numbers
    document.getElementById("Pat-CSPS1").value = f["cNum1"];
    document.getElementById("Pat-CSPS2").value = f["cNum2"];
    document.getElementById("Pat-CSPS3").value = f["cNum3"];

}

</script>
</head>
<body onload="fill();">
<div class="wrap">
	<div id="header">
		<div id="top">
			<div class="left">
				<p>Welcome, <strong><?php echo $_SESSION['username']; ?></strong> [ <a href="logout.php">logout</a> ]</p>
			</div>
			<div class="right">
				<div class="align-right">
					<p>Ski Patrol</p>
				</div>
			</div>
		</div>
		<div id="nav">
			<ul>
			        <li class="upp"><a href="index.php">Main</a></li>
				<li class="upp"><a href="patrollers.php">Patrollers</a></li>
				<li class="upp"><a href="form.php">Forms</a></li>
			</ul>
		</div>
	</div>
	
	<div id="content">
		<div id="main">	
			<div class="full_w">
				<div class="h_title">Choose a form</div>
				<h2>View, Edit, and Delete Forms here</h2>
				<p>Lorem ipsum dolor sit amet, </p>
				
				<div class="entry">
                                    <div class="sep"></div>
				</div>
                                
                                <p>
                                    Report Number:<input type="text" id="reportNum">
                                    
                                    CSPS Number:<input type="text" id="cspsNum">

                                    Age:<input type="text" id="ageNum">

                                   <div class="entry">
                                       <div class="sep"></div>
				    </div>
                                </p>
                                <p>
                                    Complaint:
                                    <select id="complaint">
                                        <option value="N/A">N/A</option>
                                        <option value="%Foot%">Foot</option>
                                        <option value="%Ankle%">Ankle</option>
                                        <option value="%Lower Leg%">Lower-Leg</option>
                                        <option value="%Knee%">Knee</option>
                                        <option value="%Thigh%">Thigh</option>
                                        <option value="%Hip%">Hip</option>
                                        <option value="%Lower Ab%">Lower Ab</option>
                                        <option value="%Upper Ab%">Upper Ab</option>
                                        <option value="%Chest%">Chest</option>
                                        <option value="%Neck%">Neck</option>
                                        <option value="%Clavicle%">Clavicle</option>
                                        <option value="%Shoulder%">Shoulder</option>
                                        <option value="%Upper Arm%">Upper Arm</option>
                                        <option value="%Elbow%">Elbow</option>
                                        <option value="%Lower Arm%">Lower Arm</option>
                                        <option value="%Wrist%">Wrist</option>
                                        <option value="%Hand%">Hand</option>
                                        <option value="%Thumb%">Thumb</option>
                                        <option value="%Finger%">Finger</option>
                                        <option value="%Upper Back%">Upper Back</option>
                                        <option value="%Lower Back%">Lower Back</option>
                                        <option value="%Tailbone%">Tailbone</option>
                                        <option value="%Head%">Head</option>
                                        <option value="%Face%">Face</option>
                                        <option value="%Medical%">Medical</option>
                                        <option value="%No Injury%">No Injury</option>
                                    </select>
                                    
                                    Gender
                                    <select id="gender">
                                        <option value="N/A">N/A</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                    
                                    <button type="button" onclick="display();">Display</button>
                                </p>
                                
                                <div class="entry">
                                    <div class="sep"></div>
				</div>
                                
				<table>
					<thead>
						<tr>
							<th scope="col">Report Number</th>
							<th scope="col">CSPSNum1</th>
							<th scope="col">CSPSNum2</th>
                                                        <th scope="col">CSPSNum3</th>
							<th scope="col">Complaints</th>
                                                        <th scope="col">Age</th>
                                                        <th scope="col">Gender</th>
                                                        <th scope="col">Modify</th>
						</tr>
					</thead>
						
					<tbody>
						<tr class="align-center">
							
							<?php
				
                                $result = mysqli_query($con,$tableQuery);
                                echo "<form method='post' action=''>";
                                while ($row = mysqli_fetch_array($result))
                                {
                                echo "<tr><td>".$row['reportNum']."</td>";
				echo "<td >".$row['CSPSNum1']."</td>";
				echo "<td>".$row['CSPSNum2']."</td>";
				echo "<td>".$row['CSPSNum3']."</td>";
				echo "<td>".$row['complaints']."</td>";
				echo "<td>".$row['age']."</td>";
				echo "<td>".$row['gender']."</td>";
                                echo "<td><button name='Edit' value='" . $row['id'] . "'>Edit</button><button name='Delete' value='" . $row['id'] . "'>Delete</button></td></tr>";
                                }
                                echo "</table>";
                                echo "</form>";

                              
				?>
						
					</tbody>
				</table>
			</div>
                        <div class="full_w">
                            <div class="h_title">Selected Form</div>
                            <form>
                                
                                <div class="h_title">Form Number</div>
                                <!-- Form Number -->
                                <div class="cell">
                                    <div class="cell-half">
                                        Report Number: <input type="text" id="Report" name="Report"></input>
                                    </div>
                                    <div class="clear"></div>
                                </div>
                                
                                <!-- Patient Stuff -->
                                <div class="h_title">Patient Info</div>
                                <div class="cell">
                                    <div class="cell-third">
                                        Date of Birth:<input type="text" id="Date-Birth" name="Date-Birth"></input>
                                    </div>
                                    <div class="cell-third">
                                        Age:<input type="number" id="Age" name="Age"></input>
                                    </div>
                                    <div class="cell-quarter">
                                        Gender:
                                        <label class="block"><input type="radio" name="sex" id="gender-Male"  value="Male">Male</input></label>
                                        <label class="block"><input type="radio" name="sex" id="gender-Female" value="Female">Female</input></label>
                                        <label class="block"><input type="radio" name="sex" id="gender-N/A" value="NA">N/A</input></label>
                                    </div>
                                    <div class="clear"></div>
                                </div>  
                                
                                <!-- Complaint -->
                                <div class="h_title">Complaint</div>
                                <div class="cell">
                                    <div class="cell-third">
                                        Treatment Protocol:
                                        <label class="block"><input type="checkbox" id="Treatment-Fracture" name="Treament[]" value="Fracture" >Fracture</input></label>
                                        <label class="block"><input type="checkbox" id="Treatment-Sprain" name="Treament[]" value="Sprain">Sprain</input></label>
                                        <label class="block"><input type="checkbox" id="Treatment-Strain"name="Treament[]" value="Strain">Strain</input></label>
	                                <label class="block"><input type="checkbox" id="Treatment-Bruise" name="Treament[]" value="Bruise">Bruise</input></label>
	                                <label class="block"><input type="checkbox" id="Treatment-Laceration" name="Treament[]" value="Laceration">Laceration</input></label>
	                                <label class="block"><input type="checkbox" id="Treatment-Dislocation" name="Treament[]" value="Dislocation">Dislocation</input></label>
	                                <label class="block"><input type="checkbox" id="Treatment-Cardiac" name="Treament[]" value="Cardiac">Cardiac</input></label>
	                                <label class="block"><input type="checkbox" id="Treatment-Stroke" name="Treament[]" value="Stroke">Stroke</input></label>
	                                <label class="block"><input type="checkbox" id="Treatment-Concussion" name="Treament[]" value="Concussion">Concussion</input></label>
	                                <label class="block"><input type="checkbox" id="Treatment-Hypothermia" name="Treament[]" value="Hypothermia">Hypothermia</input></label>
	                                <label class="block"><input type="checkbox" id="Treatment-Frostbite"name="Treament[]" value="Frostbite">Frostbite</input></label>
	                                <label class="block"><input type="checkbox" id="Treatment-Internal" name="Treament[]" value="Internal">Internal</input></label>
	                                <label class="block"><input type="checkbox" id="Treatment-Illness" name="Treament[]" value="Illness">Illness</input></label>
	                                <label class="block"><input type="checkbox" id="Treatment-Deceased" name="Treament[]" value="Deceased">Deceased</input></label>
	                                <label class="block"><input type="checkbox" id="Treatment-Unknown" name="Treament[]" value="Unknown">Unknown</input></label>
	                                <label class="block"><input type="checkbox" id="Treatment-N/A" name="Treament[]" value="NA">N/A</input></label>
	                                <label class="block"><input id="OtherTreatment" type="checkbox" name="Treament[]" onchange="Select('Treatment-OtherTreatment');" value="OtherTreatment">Other treatment</input></label>
	                                <label class="block"><input id="Text-Treatment-OtherTreatment" type="text" style="visibility:hidden"></input></label>
                                    </div>
                                    <div class="cell-third">
                                        Circle or mark L for Left, R for Right and B for Both, mark all that apply:
                                        <label class="block"><input type="checkbox" id="Injury-Foot" name="Injury[]" onchange="Check('Injury-Foot')" value="Foot">Foot</input></label>
                                        <input id="Injury-Foot-L" type="radio" name="Injury-Foot" style="visibility:hidden"> <span id="Injury-Foot-L-Text" style="visibility:hidden">L</span>
                                        <input id="Injury-Foot-R" type="radio" name="Injury-Foot" style="visibility:hidden"> <span id="Injury-Foot-R-Text" style="visibility:hidden">R</span>
                                        <input id="Injury-Foot-B" type="radio" name="Injury-Foot" style="visibility:hidden"> <span id="Injury-Foot-B-Text" style="visibility:hidden">B</span>
                                        <label class="block"><input type="checkbox" id="Injury-Ankle" name="Injury[]" onchange="Check('Injury-Ankle')" value="Ankle">Ankle</input></label>
                                        <input id="Injury-Ankle-L" type="radio" name="Injury-Ankle" style="visibility:hidden"> <span id="Injury-Ankle-L-Text" style="visibility:hidden">L</span>
                                        <input id="Injury-Ankle-R" type="radio" name="Injury-Ankle" style="visibility:hidden"> <span id="Injury-Ankle-R-Text" style="visibility:hidden">R</span>
                                        <input id="Injury-Ankle-B" type="radio" name="Injury-Ankle" style="visibility:hidden"> <span id="Injury-Ankle-B-Text" style="visibility:hidden">B</span>
                                        <label class="block"><input type="checkbox" id="Injury-LowerLeg" name="Injury[]" onchange="Check('Injury-LowerLeg')" value="LowerLeg">Lower Leg</input></label>
                                        <input id="Injury-LowerLeg-L" type="radio" name="Injury-LowerLeg" style="visibility:hidden"> <span id="Injury-LowerLeg-L-Text" style="visibility:hidden">L</span>
                                        <input id="Injury-LowerLeg-R" type="radio" name="Injury-LowerLeg" style="visibility:hidden"> <span id="Injury-LowerLeg-R-Text" style="visibility:hidden">R</span>
                                        <input id="Injury-LowerLeg-B" type="radio" name="Injury-LowerLeg" style="visibility:hidden"> <span id="Injury-LowerLeg-B-Text" style="visibility:hidden">B</span>
                                        <label class="block"><input type="checkbox" id="Injury-Knee" name="Injury[]" onchange="Check('Injury-Knee')" value="Knee">Knee</input></label>
                                        <input id="Injury-Knee-L" type="radio" name="Injury-Knee" style="visibility:hidden"> <span id="Injury-Knee-L-Text" style="visibility:hidden">L</span>
                                        <input id="Injury-Knee-R" type="radio" name="Injury-Knee" style="visibility:hidden"> <span id="Injury-Knee-R-Text" style="visibility:hidden">R</span>
                                        <input id="Injury-Knee-B" type="radio" name="Injury-Knee" style="visibility:hidden"> <span id="Injury-Knee-B-Text" style="visibility:hidden">B</span>
                                        <label class="block"><input type="checkbox" id="Injury-Thigh" name="Injury[]" onchange="Check('Injury-Thigh')" value="Thigh">Thigh</input></label>
                                        <input id="Injury-Thigh-L" type="radio" name="Injury-Thigh" style="visibility:hidden"> <span id="Injury-Thigh-L-Text" style="visibility:hidden">L</span>
                                        <input id="Injury-Thigh-R" type="radio" name="Injury-Thigh" style="visibility:hidden"> <span id="Injury-Thigh-R-Text" style="visibility:hidden">R</span>
                                        <input id="Injury-Thigh-B" type="radio" name="Injury-Thigh" style="visibility:hidden"> <span id="Injury-Thigh-B-Text" style="visibility:hidden">B</span>
                                        <label class="block"><input type="checkbox" id="Injury-Hip" name="Injury[]" onchange="Check('Injury-Hip')" value="Hip">Hip</input></label>
                                        <input id="Injury-Hip-L" type="radio" name="Injury-Hip" style="visibility:hidden"> <span id="Injury-Hip-L-Text" style="visibility:hidden">L</span>
                                        <input id="Injury-Hip-R" type="radio" name="Injury-Hip" style="visibility:hidden"> <span id="Injury-Hip-R-Text" style="visibility:hidden">R</span>
                                        <input id="Injury-Hip-B" type="radio" name="Injury-Hip" style="visibility:hidden"> <span id="Injury-Hip-B-Text" style="visibility:hidden">B</span>
                                        <label class="block"><input type="checkbox" id="Injury-LowerAb" name="Injury[]" onchange="Check('Injury-LowerAb')" value="LowerAb">Lower Ab</input></label>
                                        <input id="Injury-LowerAb-L" type="radio" name="Injury-LowerAb" style="visibility:hidden"> <span id="Injury-LowerAb-L-Text" style="visibility:hidden">L</span>
                                        <input id="Injury-LowerAb-R" type="radio" name="Injury-LowerAb" style="visibility:hidden"> <span id="Injury-LowerAb-R-Text" style="visibility:hidden">R</span>
                                        <input id="Injury-LowerAb-B" type="radio" name="Injury-LowerAb" style="visibility:hidden"> <span id="Injury-LowerAb-B-Text" style="visibility:hidden">B</span>
                                        <label class="block"><input type="checkbox" id="Injury-UpperAb" name="Injury[]" onchange="Check('Injury-UpperAb')" value="UpperAb">Upper Ab</input></label>
                                        <input id="Injury-UpperAb-L" type="radio" name="Injury-UpperAb" style="visibility:hidden"> <span id="Injury-UpperAb-L-Text" style="visibility:hidden">L</span>
                                        <input id="Injury-UpperAb-R" type="radio" name="Injury-UpperAb" style="visibility:hidden"> <span id="Injury-UpperAb-R-Text" style="visibility:hidden">R</span>
                                        <input id="Injury-UpperAb-B" type="radio" name="Injury-UpperAb" style="visibility:hidden"> <span id="Injury-UpperAb-B-Text" style="visibility:hidden">B</span>
                                        <label class="block"><input type="checkbox" id="Injury-Chest" name="Injury[]" onchange="Check('Injury-Chest')" value="Chest">Chest</input></label>
                                        <input id="Injury-Chest-L" type="radio" name="Injury-Chest" style="visibility:hidden"> <span id="Injury-Chest-L-Text" style="visibility:hidden">L</span>
                                        <input id="Injury-Chest-R" type="radio" name="Injury-Chest" style="visibility:hidden"> <span id="Injury-Chest-R-Text" style="visibility:hidden">R</span>
                                        <input id="Injury-Chest-B" type="radio" name="Injury-Chest" style="visibility:hidden"> <span id="Injury-Chest-B-Text" style="visibility:hidden">B</span>
                                        <label class="block"><input type="checkbox" id="Injury-Neck" name="Injury[]" onchange="Check('Injury-Neck')" value="Neck">Neck</input></label>
                                        <input id="Injury-Neck-L" type="radio" name="Injury-Neck" style="visibility:hidden"> <span id="Injury-Neck-L-Text" style="visibility:hidden">L</span>
                                        <input id="Injury-Neck-R" type="radio" name="Injury-Neck" style="visibility:hidden"> <span id="Injury-Neck-R-Text" style="visibility:hidden">R</span>
                                        <input id="Injury-Neck-B" type="radio" name="Injury-Neck" style="visibility:hidden"> <span id="Injury-Neck-B-Text" style="visibility:hidden">B</span>
                                        <label class="block"><input type="checkbox" id="Injury-Clavicle" name="Injury[]" onchange="Check('Injury-Clavicle')" value="Clavicle">Clavicle</input></label>
                                        <input id="Injury-Clavicle-L" type="radio" name="Injury-Clavicle" style="visibility:hidden"> <span id="Injury-Clavicle-L-Text" style="visibility:hidden">L</span>
                                        <input id="Injury-Clavicle-R" type="radio" name="Injury-Clavicle" style="visibility:hidden"> <span id="Injury-Clavicle-R-Text" style="visibility:hidden">R</span>
                                        <input id="Injury-Clavicle-B" type="radio" name="Injury-Clavicle" style="visibility:hidden"> <span id="Injury-Clavicle-B-Text" style="visibility:hidden">B</span>
                                        <label class="block"><input type="checkbox" id="Injury-Shoulder" name="Injury[]" onchange="Check('Injury-Shoulder')" value="Shoulder">Shoulder</input></label>
                                        <input id="Injury-Shoulder-L" type="radio" name="Injury-Shoulder" style="visibility:hidden"> <span id="Injury-Shoulder-L-Text" style="visibility:hidden">L</span>
                                        <input id="Injury-Shoulder-R" type="radio" name="Injury-Shoulder" style="visibility:hidden"> <span id="Injury-Shoulder-R-Text" style="visibility:hidden">R</span>
                                        <input id="Injury-Shoulder-B" type="radio" name="Injury-Shoulder" style="visibility:hidden"> <span id="Injury-Shoulder-B-Text" style="visibility:hidden">B</span>
                                        <label class="block"><input type="checkbox" id="Injury-UpperArm" name="Injury[]" onchange="Check('Injury-UpperArm')" value="UpperArm">Upper Arm</input></label>
                                        <input id="Injury-UpperArm-L" type="radio" name="Injury-UpperArm" style="visibility:hidden"> <span id="Injury-UpperArm-L-Text" style="visibility:hidden">L</span>
                                        <input id="Injury-UpperArm-R" type="radio" name="Injury-UpperArm" style="visibility:hidden"> <span id="Injury-UpperArm-R-Text" style="visibility:hidden">R</span>
                                        <input id="Injury-UpperArm-B" type="radio" name="Injury-UpperArm" style="visibility:hidden"> <span id="Injury-UpperArm-B-Text" style="visibility:hidden">B</span>
                                        
                                            
                                    </div>
                                    <div class="cell-third">
                                        Circle or mark L for Left, R for Right and B for Both, mark all that apply:
                                        <label class="block"><input type="checkbox" id="Injury-Elbow" name="Injury[]" onchange="Check('Injury-Elbow')"  value="Elbow">Elbow</input></label>
                                        <input id="Injury-Elbow-L" type="radio" name="Injury-Elbow" style="visibility:hidden"> <span id="Injury-Elbow-L-Text" style="visibility:hidden">L</span>
                                        <input id="Injury-Elbow-R" type="radio" name="Injury-Elbow" style="visibility:hidden"> <span id="Injury-Elbow-R-Text" style="visibility:hidden">R</span>
                                        <input id="Injury-Elbow-B" type="radio" name="Injury-Elbow" style="visibility:hidden"> <span id="Injury-Elbow-B-Text" style="visibility:hidden">B</span>
                                        <label class="block"><input type="checkbox" id="Injury-LowerArm" name="Injury[]" onchange="Check('Injury-LowerArm')" value="LowerArm">Lower Arm</input></label>
                                        <input id="Injury-LowerArm-L" type="radio" name="Injury-LowerArm" style="visibility:hidden"> <span id="Injury-LowerArm-L-Text" style="visibility:hidden">L</span>
                                        <input id="Injury-LowerArm-R" type="radio" name="Injury-LowerArm" style="visibility:hidden"> <span id="Injury-LowerArm-R-Text" style="visibility:hidden">R</span>
                                        <input id="Injury-LowerArm-B" type="radio" name="Injury-LowerArm" style="visibility:hidden"> <span id="Injury-LowerArm-B-Text" style="visibility:hidden">B</span>
                                        <label class="block"><input type="checkbox" id="Injury-Wrist" name="Injury[]" onchange="Check('Injury-Wrist')" value="Wrist">Wrist</input></label>
                                        <input id="Injury-Wrist-L" type="radio" name="Injury-Wrist" style="visibility:hidden"> <span id="Injury-Wrist-L-Text" style="visibility:hidden">L</span>
                                        <input id="Injury-Wrist-R" type="radio" name="Injury-Wrist" style="visibility:hidden"> <span id="Injury-Wrist-R-Text" style="visibility:hidden">R</span>
                                        <input id="Injury-Wrist-B" type="radio" name="Injury-Wrist" style="visibility:hidden"> <span id="Injury-Wrist-B-Text" style="visibility:hidden">B</span>
                                        <label class="block"><input type="checkbox" id="Injury-Hand" name="Injury[]" onchange="Check('Injury-Hand')" value="Hand">Hand</input></label>
                                        <input id="Injury-Hand-L" type="radio" name="Injury-Hand" style="visibility:hidden"> <span id="Injury-Hand-L-Text" style="visibility:hidden">L</span>
                                        <input id="Injury-Hand-R" type="radio" name="Injury-Hand" style="visibility:hidden"> <span id="Injury-Hand-R-Text" style="visibility:hidden">R</span>
                                        <input id="Injury-Hand-B" type="radio" name="Injury-Hand" style="visibility:hidden"> <span id="Injury-Hand-B-Text" style="visibility:hidden">B</span>
                                        <label class="block"><input type="checkbox" id="Injury-Thumb" name="Injury[]" onchange="Check('Injury-Thumb')" value="Thumb">Thumb</input></label>
                                        <input id="Injury-Thumb-L" type="radio" name="Injury-Thumb" style="visibility:hidden"> <span id="Injury-Thumb-L-Text" style="visibility:hidden">L</span>
                                        <input id="Injury-Thumb-R" type="radio" name="Injury-Thumb" style="visibility:hidden"> <span id="Injury-Thumb-R-Text" style="visibility:hidden">R</span>
                                        <input id="Injury-Thumb-B" type="radio" name="Injury-Thumb" style="visibility:hidden"> <span id="Injury-Thumb-B-Text" style="visibility:hidden">B</span>
                                        <label class="block"><input type="checkbox" id="Injury-Finger" name="Injury[]" onchange="Check('Injury-Finger')" value="Finger">Finger</input></label>
                                        <input id="Injury-Finger-L" type="radio" name="Injury-Finger" style="visibility:hidden"> <span id="Injury-Finger-L-Text" style="visibility:hidden">L</span>
                                        <input id="Injury-Finger-R" type="radio" name="Injury-Finger" style="visibility:hidden"> <span id="Injury-Finger-R-Text" style="visibility:hidden">R</span>
                                        <input id="Injury-Finger-B" type="radio" name="Injury-Finger" style="visibility:hidden"> <span id="Injury-Finger-B-Text" style="visibility:hidden">B</span>	
                                        <label class="block"><input type="checkbox" id="Injury-UpperBack" name="Injury[]" value="UpperBack">Upper Back</input></label>
                                        <label class="block"><input type="checkbox" id="Injury-LowerBack" name="Injury[]" value="LowerBack">Lower Back</input></label>
                                        <label class="block"><input type="checkbox" id="Injury-Tailbone" name="Injury[]" value="Tailbone">Tailbone</input></label>
                                        <label class="block"><input type="checkbox" id="Injury-Head" name="Injury[]" value="Head">Head</input></label>
                                        <label class="block"><input type="checkbox" id="Injury-Face" name="Injury[]" value="Face">Face</input></label>
                                        <label class="block"><input type="checkbox" id="Injury-Medical" name="Injury[]" value="Medical">Medical</input></label>
                                        <label class="block"><input type="checkbox" id="Injury-NoInjury" name="Injury[]" value="NoInjury">No injury</input></label>
                                        <label class="block"><input id="Injury-OtherInjury" type="checkbox" name="Injury[]" onchange="Select('Injury-OtherInjury')" value="OtherInjury">Other injury
                                        <label class="block"><input id="Text-Injury-OtherInjury" type="text" style="visibility:hidden"></input></label>
                                        If multiple, note primary injury: <input type="text" id="Injury-PrimaryInjury" name="Injury[]" ></input></label>
                                        
                                    </div>

                                    <div class="clear"></div>
                                </div>
                                
                                <!-- Location -->
                                <div class="h_title">Location</div>
                                <div class="cell">
                                    <div class="cell-quarter">
                                        Run Classification
                                        <label class="block"><input type="radio" id="Class-Easiest" name="Classification" value="Easiest">Easiest</input></label>
                                        <label class="block"><input type="radio" id="Class-MoreDifficult" name="Classification" value="MoreDifficult">More Difficult</input></label>
                                        <label class="block"><input type="radio" id="Class-MostDifficult" name="Classification" value="MostDifficult">Most Difficult</input></label>
                                        <label class="block"><input type="radio" id="Class-Extreme" name="Classification" value="Extreme">Extreme</input></label>
                                        <label class="block"><input type="radio" id="Class-N/A" name="Classification" value="NA">N/A</input></label>
                                    </div>
                                    
                                    <div class="cell-quarter">
                                        Incident Location
                                        <label class="block"><input type="radio" id="Location-MarkedRun" name="Location" value="MarkedRun">Marked Run</input></label>
                                        <label class="block"><input type="radio" id="Location-FreestyleTerrain" name="Location" value="FreestyleTerrain">Freestyle Terrain</input></label>
                                        <label class="block"><input type="radio" id="Location-Terrain-RailPark" name="Location" value="Terrain-RailPark">Terrain/Rail Park</input></label>
                                        <label class="block"><input type="radio" id="Location-CompetitionTerrain" name="Location" value="CompetitionTerrain">Competition Terrain</input></label>
                                        <label class="block"><input type="radio" id="Location-HalfPipe" name="Location" value="HalfPipe">Half Pipe</input></label>
                                        <label class="block"><input type="radio" id="Location-OutOfBounds" name="Location" value="OutOfBounds">Out of Bounds</input></label>
                                        <label class="block"><input type="radio" id="Location-ClosedInbounds" name="Location" value="ClosedInbounds">Closed Inbounds</input></label>
                                        <label class="block"><input type="radio" id="Location-OffTrail" name="Location" value="OffTrail">Off Trail</input></label>
                                        <label class="block"><input type="radio" id="Location-LiftIncident" name="Location" value="LiftIncident">Lift Incident</input></label>
                                        <label class="block"><input type="radio" id="Location-Premises" name="Location" value="Premises">Premises</input></label>
                                        <label class="block"><input type="radio" id="Location-Unknown" name="Location" value="Unknown">Unknown</input></label>
                                        <label class="block"><input type="radio" id="Location-NA" name="Location" value="NA">N/A</input></label>
                                        Park Feature/Hit:<input type="text" id="Location-ParkFeature-Hit" name="Park Feature/Hit">
                                    </div>
                                    
                                    <div class="cell-quarter">
                                        Activity
                                        <label class="block"><input type="radio" id="Activity-Alpine" name="Activity" onchange="Select('Activity-Other')" value="Alpine">Alpine</input></label>
                                        <label class="block"><input type="radio" id="Activity-Snowboard" name="Activity" onchange="Select('Activity-Other')" value="Snowboard">Snowboard</input></label>
                                        <label class="block"><input type="radio" id="Activity-Telemark" name="Activity" onchange="Select('Activity-Other')" value="Telemark">Telemark</input></label>
                                        <label class="block"><input type="radio" id="Activity-Nordic" name="Activity" onchange="Select('Activity-Other')" value="Nordic">Nordic</input></label>
                                        <label class="block"><input type="radio" id="Activity-Touring" name="Activity" onchange="Select('Activity-Other')" value="Touring">Touring</input></label>
                                        <label class="block"><input type="radio" id="Activity-Tubing" name="Activity" onchange="Select('Activity-Other')" value="Tubing">Tubing</input></label>
                                        <label class="block"><input type="radio" id="Activity-NonSkiing" name="Activity" onchange="Select('Activity-Other')" value="NonSkiing">Non-skiing</input></label>
                                        <label class="block"><input id="Activity-Other" type="radio" name="Activity" onchange="Select('Activity-Other')" value="Other">Other</input></label>
                                        <label class="block"><input id="Text-Activity-Other" type="Text" style="visibility:hidden"></input></label>
                                        <label class="block"><input type="radio" id="Activity-NA" name="Activity" onchange="Select('Activity-Other')" value="NA">N/A</input></label>
                                    </div>
                                        
                                    <div class="cell-quarter">
                                        Involvement
                                        <label class="block"><input type="radio" id="Involvment-RecreationSkiing-Riding" name="Involvement" onchange="Select('Involvement-Other')" value="RecreationSkiing-Riding">Recreation skiiing/riding</input></label>
                                        <label class="block"><input type="radio" id="Involvment-RecreationJumping"name="Involvement" onchange="Select('Involvement-Other')" value="RecreationJumping">Recreation jumping</input></label>
                                        <label class="block"><input type="radio" id="Involvment-Competition" name="Involvement" onchange="Select('Involvement-Other')" value="Competition">Competition</input></label>
                                        <label class="block"><input type="radio" id="Involvment-Training" name="Involvement" onchange="Select('Involvement-Other')" value="Training">Training</input></label>
                                        <label class="block"><input type="radio" id="Involvment-InLessonSkiing" name="Involvement" onchange="Select('Involvement-Other')" value="InLessonSkiing">In lesson skiing</input></label>
                                        <label class="block"><input type="radio" id="Involvment-InLessonSnowboarding" name="Involvement" onchange="Select('Involvement-Other')" value="InLessonSnowboarding">In lesson snowboard</input></label>
                                        <label class="block"><input type="radio" id="Involvment-TubeSlide" name="Involvement" onchange="Select('Involvement-Other')" value="TubeSlide">Tube slide</input></label>
                                        <label class="block"><input type="radio" id="Involvment-Unknown" name="Involvement" onchange="Select('Involvement-Other')" value="Unknown">Unknown</input></label>
                                        <label class="block"><input id="Involvement-Other" type="radio" name="Involvement" onchange="Select('Involvement-Other')" value="Other">Other</input></label>
                                        <label class="block"><input id="Text-Involvement-Other" type="Text" style="visibility:hidden"></input></label>
                                        <label class="block"><input type="radio" id="Involvment-NA" name="Involvement" onchange="Select('Involvement-Other')" value="NA">N/A</input></label>
                                    </div>
                                    <div class="clear"></div>    
                                </div>
                                
                                <!-- Conditions -->
                                <div class="h_title">Conditions</div>
                                <div class="cell">
                                    <div class="cell-quarter">
                                        Weather
                                        <label class="block"><input type="radio" id="Weather-Clear" name="Weather" value="Clear">Clear</input></label>
                                        <label class="block"><input type="radio" id="Weather-Overcast" name="Weather" value="Overcast">Overcast</input></label>
                                        <label class="block"><input type="radio" id="Weather-Snowing" name="Weather" value="Snowing">Snowing</input></label>
                                        <label class="block"><input type="radio" id="Weather-Raining" name="Weather" value="Raining">Raining</input></label>
                                        <label class="block"><input type="radio" id="Weather-Fog" name="Weather" value="Fog">Fog</input></label>
                                        <label class="block"><input type="radio" id="Weather-Unknown" name="Weather" value="Unknown">Unknown</input></label>
                                        <label class="block"><input type="radio" id="Weather-NA" name="Weather" value="NA">N/A</input></label>
                                    </div>
                                    <div class="cell-quarter">
                                    	Light
                                        <label class="block"><input type="radio" id="Light-Sharp" name="Light" value="Sharp">Sharp</input></label>
	                                <label class="block"><input type="radio" id="Light-Flat" name="Light" value="Flat">Flat</input></label>
	                                <label class="block"><input type="radio" id="Light-Whiteout" name="Light" value="Whiteout">Whiteout</input></label>
	                                <label class="block"><input type="radio" id="Light-Lights" name="Light" value="Lights">Lights</input></label>
	                                <label class="block"><input type="radio" id="Light-Dark" name="Light" value="Dark">Dark</input></label>
	                                <label class="block"><input type="radio" id="Light-Unknown" name="Light" value="Unknown">Unknown</input></label>
	                                <label class="block"><input type="radio" id="Light-NA" name="Light" value="NA">N/A</input></label>
                                    </div>
                                    <div class="cell-quarter">
                                        Temp (C)
                                        <label class="block"><input type="radio" id="Temp-Above10" name="Temp" value="Above10">Above 10</input></label>
	                                <label class="block"><input type="radio" id="Temp-0to10" name="Temp" value="0to10">0 to 10</input></label>
	                                <label class="block"><input type="radio" id="Temp-10to0" name="Temp" value="10to0">-10 to 0</input></label>
	                                <label class="block"><input type="radio" id="Temp-20to11" name="Temp" value="20to11">-20 to -11</input></label>
	                                <label class="block"><input type="radio" id="Temp-Below20" name="Temp" value="Below20">Below 20</input></label>
	                                <label class="block"><input type="radio" id="Temp-Unknown" name="Temp" value="Unknown">Unknown</input></label>
	                                <label class="block"><input type="radio" id="Temp-NA" name="Temp" value="NA">N/A</input></label>
                                    </div>
                                    <div class="cell-quarter">
                                        Snow (cm)
                                        <label class="block"><input type="radio" id="Snow-NoNew" name="Snow" value="NoNew">No new</input></label>
	                                <label class="block"><input type="radio" id="Snow-0to5" name="Snow" value="0to5">0 to 5</input></label>
	                                <label class="block"><input type="radio" id="Snow-5to10" name="Snow" value="5to10">5 to 10</input></label>
	                                <label class="block"><input type="radio" id="Snow-10to15" name="Snow" value="10to15">10 to 15</input></label>
	                                <label class="block"><input type="radio" id="Snow-Over15" name="Snow" value="Over15">Over 15</input></label>
	                                <label class="block"><input type="radio" id="Snow-Unknown" name="Snow" value="Unknown">Unknown</input></label>
	                                <label class="block"><input type="radio" id="Snow-NA" name="Snow" value="NA">N/A</input></label>
                                    </div>
                                    <div class="clear"></div>
                                </div>
                                <div class="sep"></div>
                                <div class="cell">
                                    <div class="cell-fifth">
                                        Surface
                                        <label class="block"><input type="radio" id="Surface-Groomed" name="Surface" value="Groomed">Groomed</input></label>
	                                <label class="block"><input type="radio" id="Surface-Moguls" name="Surface" value="Moguls">Moguls</input></label>
	                                <label class="block"><input type="radio" id="Surface-Powder" name="Surface" value="Powder">Powder</input></label>
	                                <label class="block"><input type="radio" id="Surface-Variable" name="Surface" value="Variable">Variable</input></label>
	                                <label class="block"><input type="radio" id="Surface-Granular" name="Surface" value="Granular">Granular</input></label>
	                                <label class="block"><input type="radio" id="Surface-Hard" name="Surface" value="Hard">Hard</input></label>
	                                <label class="block"><input type="radio" id="Surface-Unknown" name="Surface" value="Unknown">Unknown</input></label>
	                                <label class="block"><input type="radio" id="Surface-NA" name="Surface" value="NA">N/A</input></label>
                                    </div>
                                    <div class="cell-fifth">
                                        Equipment
                                        <label class="block"><input type="radio" id="Equipment-Owned" name="Equipment" value="Owned">Owned</input></label>
	                                <label class="block"><input type="radio" id="Equipment-AreaRental" name="Equipment" value="Area rental">Area rental</input></label>
	                                <label class="block"><input type="radio" id="Equipment-OtherRental" name="Equipment" value="Other rental">Other rental</input></label>
	                                <label class="block"><input type="radio" id="Equipment-AreaDemos" name="Equipment" value="Area demos">Area demos</input></label>
	                                <label class="block"><input type="radio" id="Equipment-OtherDemos" name="Equipment" value="Other demos">Other demos</input></label>
	                                <label class="block"><input type="radio" id="Equipment-Unknown" name="Equipment" value="Unknown">Unknown</input></label>
	                                <label class="block"><input type="radio" id="Equipment-NA" name="Equipment" value="NA">N/A</input></label>
                                        
                                    </div>
                                    <div class="cell-fifth">
                                        Helmet
                                        <label class="block"><input type="radio" id="Helmet-Owned" name="Helmet" value="Owned">Owned</input></label>
                                        <label class="block"><input type="radio" id="Helmet-Rental" name="Helmet" value="Rental">Rental</input></label>
                                        <label class="block"><input type="radio" id="Helmet-None" name="Helmet" value="None">None</input></label>
                                    </div>
                                    <div class="cell-fifth">
                                        Ability
                                        <label class="block"><input type="radio" id="Ability-Beginner" name="Ability" value="Beginner">Beginner</input></label>
	                                <label class="block"><input type="radio" id="Ability-Novice" name="Ability" value="Novice">Novice</input></label>
	                                <label class="block"><input type="radio" id="Ability-Intermediate" name="Ability" value="Intermediate">Intermediate</input></label>
	                                <label class="block"><input type="radio" id="Ability-Advanced" name="Ability" value="Advanced">Advanced</input></label>
	                                <label class="block"><input type="radio" id="Ability-Expert" name="Ability" value="Expert">Expert</input></label>
	                                <label class="block"><input type="radio" id="Ability-Unknown" name="Ability" value="Unknown">Unknown</input></label>
	                                <label class="block"><input type="radio" id="Ability-NA" name="Ability" value="NA">N/A</input></label>
                                    </div>
                                    <div class="cell-fifth">
                                        Did the patient collide with a person or object?
                                        <label class="block"><input type="radio" id="Collide-Yes" name="Collide" onchange="Showing('Collide-Yes')" value="Yes">Yes</input></label>
	                                <label class="block"><input type="radio" id="Collide-No" name="Collide" onchange="Showing('Collide-Yes')" value="No">No</input></label>
	                                <label class="block"><input type="radio" id="Collide-NA" name="Collide" onchange="Showing('Collide-Yes')" value="NA">N/A</input></label>
                                        <span id="Text-Collide-Yes" style="visibility:hidden"> If yes, describe </span> <input id="Textbox-Collide-Yes" type="text" style="visibility:hidden"></input>
                                    </div>
                                    <div class="clear"></div>
                                    
                                </div>
                                <div class="sep"></div>
                                <div class="cell">
                                    <h4>If not a collision, what was the primary cause of the incident?</h4>
                                    <div class="cell-third">
                                        Non-collision:
                                        <label class="block"><input type="radio" id="NonCollision-Fall-SkierLostControl" name="NonCollision" onchange="Select('NonCollision-NearCollisionWith')" value="Fall-SkierLostControl">Fall - skier lost control</input></label>
                                        <label class="block"><input type="radio" id="NonCollision-Fall-CaughtAnEdge" name="NonCollision" onchange="Select('NonCollision-NearCollisionWith')" value="Fall-CaughtAnEdge">Fall - caught an edge</input></label>
                                        <label class="block"><input type="radio" id="NonCollision-Fall-StruckByOwnEquipment" name="NonCollision" onchange="Select('NonCollision-NearCollisionWith')" value="Fall-StruckByOwnEquipment">Fall & struck by own equipment</input></label>
                                        <label class="block"><input type="radio" id="NonCollision-Fall-Jumping" name="NonCollision" onchange="Select('NonCollision-NearCollisionWith')" value="Fall-Jumping">Fall - jumping</input></label>
                                        <label class="block"><input type="radio" id="NonCollision-Fall-ChangeOfConditions" name="NonCollision" onchange="Select('NonCollision-NearCollisionWith')" value="Fall-ChangeOfConditions">Fall - change of conditions</input></label>
                                        <label class="block"><input type="radio" id="NonCollision-Fall-ChangeOfTerrian" name="NonCollision" onchange="Select('NonCollision-NearCollisionWith')" value="Fall-ChangeOfTerrian">Fall - change of terrain</input></label>
                                        <label class="block"><input id="NonCollision-NearCollisionWith" type="radio" name="NonCollision" onchange="Select('NonCollision-NearCollisionWith')" value="NearCollisionWith">Near collision with</input></label>
                                        <label class="block"><input id="Text-NonCollision-NearCollisionWith" type="Text" style="visibility:hidden"></input></label>
                                        <label class="block"><input type="radio" id="NonCollision-PriorMedicalCondition" name="NonCollision" onchange="Select('NonCollision-NearCollisionWith')" value="PriorMedicalCondition">Prior medical condition</input></label>
                                        <label class="block"><input type="radio" id="NonCollision-SkiedOffTrail" name="NonCollision" onchange="Select('NonCollision-NearCollisionWith')" value="SkiedOffTrail">Skied off trail</input></label>
                                        <label class="block"><input type="radio" id="NonCollision-EquipmentFailure" name="NonCollision" onchange="Select('NonCollision-NearCollisionWith')" value="EquipmentFailure">Equipment failure (not binding)</input></label>
                                        <label class="block"><input type="radio" id="NonCollision-BindingPreReleased" name="NonCollision" onchange="Select('NonCollision-NearCollisionWith')" value="BindingPreReleased">Binding pre-released</input></label>
                                        <label class="block"><input type="radio" id="NonCollision-HitByOthersEquipment" name="NonCollision" onchange="Select('NonCollision-NearCollisionWith')" value="HitByOthersEquipment">Hit by other's equipment</input></label>
                                        <label class="block"><input type="radio" id="NonCollision-NA" name="NonCollision" onchange="Select('NonCollision-NearCollisionWith')" value="NA">N/A</input></label>
                                    </div>
                                    <div class="cell-third">
                                        Lift related:
                                        <label class="block"><input type="radio" id="LiftRelated-ClothingCaughtOnLift" name="NonCollision" value="ClothingCaughtOnLift">Clothing caught on lift</input></label>
                                        <label class="block"><input type="radio" id="LiftRelated-FallWhileLoading" name="NonCollision" value="FallWhileLoading">Fall while loading</input></label>
                                        <label class="block"><input type="radio" id="LiftRelated-FallAfterUnload" name="NonCollision" value="FallAfterUnload">Fall after unload</input></label>
                                        <label class="block"><input type="radio" id="LiftRelated-FallFromLift" name="NonCollision" value="FallFromLift">Fall from lift</input></label>
                                        <label class="block"><input type="radio" id="LiftRelated-JumpChairLift" name="NonCollision" value="JumpChairLift">Jump chair lift</input></label>
                                        <label class="block"><input type="radio" id="LiftRelated-InjuredByRestrainingBar" name="NonCollision" value="InjuredByRestrainingBar">Injured by restraining bar</input></label>
                                        <label class="block"><input type="radio" id="LiftRelated-StruckByChair" name="NonCollision" value="StruckByChair">Struck by chair</input></label>
                                        <label class="block"><input type="radio" id="LiftRelated-NA" name="NonCollision" value="NA">N/A</input></label>
                                    </div>
                                    <div class="cell-third">
                                        Non-skiing related:
                                        <label class="block"><input type="radio" id="NonSkiingRelated-SlipAndFall" name="NonCollision" onchange="Select('NonSkiingRelated-Other')" value="SlipAndFall">Slip & fall (non skiing)</input></label>
	                                <label class="block"><input type="radio" id="NonSkiingRelated-ColdWeatherRelated" name="NonCollision" onchange="Select('NonSkiingRelated-Other')" value="ColdWeatherRelated">Cold/weather related</input></label>
	                                <label class="block"><input type="radio" id="NonSkiingRelated-NotOtherwiseClassified" name="NonCollision" onchange="Select('NonSkiingRelated-Other')" value="NotOtherwiseClassified">Not otherwise classified</input></label>
	                                <label class="block"><input id="NonSkiingRelated-Other" type="radio" name="NonCollision" onchange="Select('NonSkiingRelated-Other')" value="Other">Other</input></label>
	                                <label class="block"><input id="Text-NonSkiingRelated-Other" type="Text" style="visibility:hidden"></input></label>
	                                <label class="block"><input type="radio" id="NonSkiingRelated-NA" name="NonCollision" onchange="Select('NonSkiingRelated-Other')" value="NA">N/A</input></label>
                                    </div>
                                    <div class="clear"></div>
                                </div>
                                <div class="h_title">Transport</div>
                                <div class="cell">
                                    <div class="cell-third">
                                        To First Aid
                                        <label class="block"><input id="FirstAid-WalkSki" type="radio" name="FirstAid" value="WalkSki">Walk/Ski</input></label>
	                                <label class="block"><input id="FirstAid-Toboggan" type="radio" name="FirstAid" value="Toboggan">Toboggan</input></label>
	                                <label class="block"><input id="FirstAid-Snowmobile" type="radio" name="FirstAid" value="Snowmobile">Snowmobile</input></label>
	                                <label class="block"><input id="FirstAid-Helicopter" type="radio" name="FirstAid" value="Helicopter">Helicopter</input></label>
	                                <label class="block"><input id="FirstAid-Download" type="radio" name="FirstAid" value="Download">Download</input></label>
	                                <label class="block"><input id="FirstAid-OnHill" type="radio" name="FirstAid" value="OnHill">On-hill</input></label>
	                                <label class="block"><input id="FirstAid-Other" type="radio" name="FirstAid" value="Other">Other</input></label>
	                                <label class="block"><input id="FirstAid-Unknown" type="radio" name="FirstAid" value="Unknown">Unknown</input></label>
	                                <label class="block"><input id="FirstAid-NA" type="radio" name="FirstAid" value="NA">N/A</input></label>
                                    </div>
                                    <div class="cell-third">
                                        From Base
                                        <label class="block"><input id="FromBase-PrivateCar" type="radio" name="FromBase" onchange="Select('FromBase-Ambulance')" value="PrivateCar">Private Car</input></label>
	                                <label class="block"><input id="FromBase-Taxi" type="radio" name="FromBase" onchange="Select('FromBase-Ambulance')" value="Taxi">Taxi</input></label>
	                                <label class="block"><input id="FromBase-Company" type="radio" name="FromBase" onchange="Select('FromBase-Ambulance')" value="Company">Company</input></label>	
	                                <label class="block"><input id="FromBase-Ambulance" type="radio" name="FromBase" onchange="Select('FromBase-Ambulance')" value="Ambulance">Ambulance</input></label>
	                                <label class="block"><input id="Text-FromBase-Ambulance" type="Text" style="visibility:hidden"></input></label>
	                                <label class="block"><input id="FromBase-Bus" type="radio" name="FromBase" onchange="Select('FromBase-Ambulance')" value="Bus">Bus</input></label>
	                                <label class="block"><input id="FromBase-Helicopter" type="radio" name="FromBase" onchange="Select('FromBase-Ambulance')" value="Helicopter">Helicopter</input></label>
	                                <label class="block"><input id="FromBase-WalkSki" type="radio" name="FromBase" onchange="Select('FromBase-Ambulance')" value="WalkSki">Walk/Ski</input></label>
	                                <label class="block"><input id="FromBase-Other" type="radio" name="FromBase" onchange="Select('FromBase-Ambulance')" value="Other">Other</input></label>
	                                <label class="block"><input id="FromBase-Unknown" type="radio" name="FromBase" onchange="Select('FromBase-Ambulance')" value="Unknown">Unknown</input></label>
	                                <label class="block"><input id="FromBase-NA" type="radio" name="FromBase" onchange="Select('FromBase-Ambulance')" value="NA">N/A</input></label>
                                    </div>
                                    <div class="cell-third">
                                        Was 911 called?
                                        <label class="block"><input id="EmergCall-Yes" type="radio" name="EmergCall" value="Yes">Yes</input></label>
                                        <label class="block"><input id="EmergCall-No" type="radio" name="EmergCall" value="No">No</input></label>
                                    </div>
                                    <div class="clear"></div>
                                </div><div class="h_title">Patroller Names and CSPS Numbers</div>
                                <div class="cell">
                                    <div class="cell-third">
                                        Patroller 1
                                        <label class="block">Number</label><input id="Pat-CSPS1" type="text" name="CSPS1"></input>
                                    </div>
                                    <div class="cell-third">
                                        Patroller 2
                                        <label class="block">Number</label><input id="Pat-CSPS2" type="text" name="CSPS2"></input>
                                    </div>
                                    <div class="cell-third">
                                        Patroller 3
                                        <label class="block">Number</label><input id="Pat-CSPS3" type="text" name="CSPS3"></input>
                                    </div>
                                
                                    <div class="clear"></div> 
                                </div>
                                
                            </form>
                            <div class="cell">
                            </div>
                        </div>
                        
                    
                 </div>
	</div>
</div>

</body>
</html>