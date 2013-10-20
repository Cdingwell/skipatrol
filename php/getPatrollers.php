<?php

	session_start();
	include('../config.php');
	include('functions.php');
	include('session.class.php');

	// validate user
	$session = new sessionManager();
	if( empty($_POST['sessionid']) || !$session->validateSession($_POST['sessionid']) ) {
		exitWithJSON( array( 'error' => true, 'type' => 'invalid_session', 'message' => 'You must login to use this feature.' ) );
	}

	// show patrollers
	if($_GET['action'] == 'getPatrollers') {
		$con=mysqli_connect(DBHOST, DBUSER, DBPASS, DB);
		$query = "select * from Patroller;";
        $result = mysqli_query($con,$query);
        $data = array();
        while ($row = mysqli_fetch_array($result))
        	$data[] = $row;
		exitWithJSON($data);

	// add a patroller
	}else if($_GET['action'] == 'addPatroller') {
		$con = new mysqli(DBHOST, DBUSER, DBPASS, DB);
		$sql = $con->prepare("INSERT INTO `Patroller` (`id`, `Name`, `InstID`, `Email`, `PhoneNum`, `CSPSNum`, `password`, `login`) VALUES (NULL, ?, ?, ?, ?, ?, ?, NULL)");
		$sql->bind_param("ssssss", $_POST['name'], $_POST['instid'], $_POST['email'], $_POST['phonenumb'], $_POST['cspnum'], $_POST['password']);
		$sql->execute();
		$sql->close();

		exitWithJSON( array( 'success' => true ) );

	// delete a patroller
	}else if($_GET['action'] == 'deletePatroller') {
		$con=mysqli_connect(DBHOST, DBUSER, DBPASS, DB);
		$query = 'DELETE FROM `Patroller` WHERE id = ' . intval($_POST['id']);
        mysqli_query($con,$query);
        exitWithJSON( array( 'success' => true ) );

	// edit a patroller
	}else if($_GET['action'] == 'editPatroller' && !empty($_POST['id'])) {
		$con = new mysqli(DBHOST, DBUSER, DBPASS, DB);
		// UPDATE  `skipatrol`.`Patroller` SET  `Email` =  'emily@email3.com' WHERE  `patroller`.`id` =8 AND  `patroller`.`InstID` =  '5555';
		$changes = array( 'Name' => @$_POST['name'], 
						  'InstID' => @$_POST['instid'], 
						  'Email' => @$_POST['email'], 
						  'PhoneNum' => @$_POST['phonenumb'], 
						  'CSPSNum' => @$_POST['cspnum'], 
						  'password' => @$_POST['password'] );
		// change stuff
		foreach($changes as $key => $value) {
			if( !empty($value) ) {
				$sql = $con->prepare('UPDATE `Patroller` SET ' . preg_replace("/[^A-Za-z0-9 ]/", '', $key) . ' = ? WHERE `id` = ?');
				$sql->bind_param('si', $value, $_POST['id']);
				$sql->execute();
				$sql->close();
			}
		}

		exitWithJSON( array( 'success' => true ) );
	}

?>