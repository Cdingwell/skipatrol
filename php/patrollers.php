<?php
    session_start();
    //Make sure the loggedin variable is set and equals true, and that the previous page was the login page
    if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true) {    
    
    } 
    else {
        header("location:../login.html");
    }
?>

<html xmlns="http://www.w3.org/1999/xhtml" lang="pl" xml:lang="pl">
<head>
<meta http-equiv="content-type" content="text/html; charset=utf-8" />

<title>Superior Zone Administration Home</title>
<link rel="stylesheet" type="text/css" href="../css/style.css" media="screen" />
<link rel="stylesheet" type="text/css" href="../css/navi.css" media="screen" />
<script type="text/javascript" src="../js/jquery-1.7.2.min.js"></script>
<script type="text/javascript" src="../js/patrollers.js"></script>
<script type="text/javascript">
$(function(){
	$(".box .h_title").not(this).next("ul").hide("normal");
	$(".box .h_title").not(this).next("#home").show("normal");
	$(".box").children(".h_title").click( function() { $(this).next("ul").slideToggle(); });
});
</script>
</head>
<body>
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
                     <table>
					<thead>
						<tr>
							<th scope="col">Name</th>
							<th scope="col">Patroller ID</th>
							<th scope="col">Email</th>
                                                        <th scope="col">PhoneNum</th>
							<th scope="col">CSPSNum</th>
                                                        <th scope="col">Password</th>
                                                        <th scope="col">Login</th>
                                                        <th scope="col">Modify</th>
						</tr>
					</thead>
						
					<tbody>
						<tr class="align-center">
                            <div class="h_title">Selected Patroller</div>
                            
                           




                               <?php
                               if (isset($_POST['Edit']))
                                {
                               $ID=$_POST['Edit'];
                                $con=mysqli_connect("localhost","superjh2_tyler","grantt","superjh2_appdev");
			        $query = "select * from Patroller WHERE id='$ID';";
                                $result = mysqli_query($con,$query);
                                
                                while ($row = mysqli_fetch_array($result))
                                {
                                echo "<form method='post' action=''>";                         
                                echo "<tr><td><input type='text' name='Name' value='$row[Name]' style='width: 70px;'/></td>";
				echo "<td><input type='text' name='InstID' value='$row[InstID]' style='width: 70px;'/></td>";
				echo "<td><input type='text' name='Email' value='$row[Email]' style='width: 70px;'/></td>";
				echo "<td><input type='text' name='PhoneNum' value='$row[PhoneNum]' style='width: 70px;'/></td>";
				echo "<td><input type='text' name='CSPSNum' value='$row[CSPSNum]' style='width: 70px;'/></td>";
				echo "<td><input type='password' name='password' value='$row[password]' style='width: 70px;'/></td>";
				echo "<td><input type='text' name='login' value='$row[login]' style='width: 70px;'/></td>";
                                echo "<td><button name='Save' value='" . $row['id'] . "'>Update</button></td></tr>";
                                echo "</table>";
                                echo "</form>";
                                }
                                mysqli_close;
                                }
                                
                                if (isset($_POST['Save']))
                                {
                                $ID=$_POST['Save'];
                                $con=mysqli_connect("localhost","superjh2_tyler","grantt","superjh2_appdev") or DIE("Unable to Connect -Save");
                                $Name=$_POST[Name];
                                $InstID=$_POST[InstID];
                                $Email=$_POST[Email];
                                $PhoneNum=$_POST[PhoneNum];
                                $CSPSNum=$_POST[CSPSNum];
                                $password=$_POST[password];
                                $login=$_POST[login];

			        $saveQuery = "Update Patroller SET Name='$Name', InstID='$InstID', Email='$Email', PhoneNum='$PhoneNum', CSPSNum='$CSPSNum', password='$password',login='$login' WHERE id='$ID';";
                                $resultSave = mysqli_query($con,$saveQuery) or DIE("Error");
                                mysqli_close;
                               }

                               if (isset($_POST['Delete']))
                                {
                                $ID=$_POST['Delete'];
                                $con=mysqli_connect("localhost","superjh2_tyler","grantt","superjh2_appdev") or DIE("Unable to Connect -Save");
                            
			        $deleteQuery = "Delete from Patroller WHERE id='$ID';";
                                $resultDelete = mysqli_query($con,$deleteQuery) or DIE("Error");
                               mysqli_close;
                               }
                             ?>
                        <div class="full_w">
                     
                            <div class="h_title">Add Patroller</div>
                            


                              

                             <?php 
                             if (isset($_GET['addPatroller'])) addPatroller();
                            
                            
                            
                            
                            function addPatroller(){
                            
                               echo "<form method='post' action=''>";
                                echo "<table>";                         
                                echo "<tr><td><input type='text' name='Name' value='' style='width: 85px;'/></td>";
				echo "<td><input type='text' name='InstID' value='' style='width: 85px;'/></td>";
				echo "<td><input type='text' name='Email' value='' style='width: 85px;'/></td>";
				echo "<td><input type='text' name='PhoneNum' value='' style='width: 85px;'/></td>";
				echo "<td><input type='text' name='CSPSNum' value='' style='width: 85px;'/></td>";
				echo "<td><input type='password' name='password' value='' style='width: 85px;'/></td>";
				echo "<td><input type='text' name='login' value='' style='width: 85px;'/></td>";
                                echo "<td><button name='Add' value=''>Add Patroller</button></td></tr>";
                                echo "</table>";
                                echo "</form>";
                                if (isset($_POST['Add']))
                                {
                                $con=mysqli_connect("localhost","superjh2_tyler","grantt","superjh2_appdev") or DIE("Unable to Connect -Add");
                                $Name=$_POST[Name];
                                $InstID=$_POST[InstID];
                                $Email=$_POST[Email];
                                $PhoneNum=$_POST[PhoneNum];
                                $CSPSNum=$_POST[CSPSNum];
                                $password=$_POST[password];
                                $login=$_POST[login];

			        $addQuery = "Insert into Patroller values (NULL,'$Name','$InstID','$Email','$PhoneNum','$CSPSNum','$password','$login');";
                                $resultAdd = mysqli_query($con,$addQuery) or DIE("Error");
                               mysqli_close;
                               header("location:/php/patrollers.php");
                               } 
                                }  
                        ?>
                        
			<div class="full_w">
				<div class="h_title">Manage Patrollers</div>
				<h2>View, Edit, and Delete Patrollers here</h2>
				<p>Click the Edit button to update the Patroller fields, or the Delete button to remove the record.</p>
				
				

                                 <table>
					<thead>
						<tr>
							<th scope="col">Name</th>
							<th scope="col">InstID</th>
							<th scope="col">Email</th>
                                                        <th scope="col">PhoneNum</th>
							<th scope="col">CSPSNum</th>
                                                        <th scope="col">Password</th>
                                                        <th scope="col">Login</th>
                                                        <th scope="col">Modify</th>
						</tr>
					</thead>
						
					<tbody>
						<tr class="align-center">

                                <?php
				$con=mysqli_connect("localhost","superjh2_tyler","grantt","superjh2_appdev");
				$query = "select * from Patroller;";
                                $result = mysqli_query($con,$query);
                                echo "<form method='post' action=''>";
                                
                                while ($row = mysqli_fetch_array($result))
                                {
                                echo "<tr><td>".$row['Name']."</td>";
				echo "<td>".$row['InstID']."</td>";
				echo "<td>".$row['Email']."</td>";
				echo "<td>".$row['PhoneNum']."</td>";
				echo "<td>".$row['CSPSNum']."</td>";
				echo "<td>".$row['password']."</td>";
				echo "<td>".$row['login']."</td>";
                                echo "<td><button name='Edit' value='" . $row['id'] . "'>Edit</button><button name='Delete' value='" . $row['id'] . "'>Delete</button></td></tr>";
                                }
                                echo "</table>";
                                echo "</form>";

                              
				?>
				
				<div class="entry">
                                    <div class="sep"></div>		
                                    <a href="?addPatroller">Add new Patroller</a>
				</div>
		                <div class="clear"></div>
			</div>
		</div>
		<div class="clear"></div>
	</div>
</div>

</body>
</html>