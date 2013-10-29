<?php

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
		$query = "select * from Patroller";
		if(!empty($_POST['id']) && is_numeric($_POST['id']))
			$query .= " WHERE `id` = '{$_POST['id']}'";
        $result = mysqli_query($con,$query);
        $data = array();
        while ($row = mysqli_fetch_array($result, MYSQL_ASSOC))
        	$data[] = $row;
		exitWithJSON($data);

	}else if($_GET['action'] == 'removeAllSessions') {
		$session->removeAllSessionsForSession($_POST['sessionid']);

	// add a patroller
	}else if($_GET['action'] == 'addPatroller') {
		// add patroller
		$con = new mysqli(DBHOST, DBUSER, DBPASS, DB);
		$sql = $con->prepare("INSERT INTO `Patroller` (`id`, `Name`, `InstID`, `Email`, `PhoneNum`, `CSPSNum`, `password`, `login`) VALUES (NULL, ?, ?, ?, ?, ?, ?, NULL)");
		$sql->bind_param("ssssss", $_POST['Name'], $_POST['InstID'], $_POST['Email'], $_POST['PhoneNum'], $_POST['CSPSNum'], encryptPassword($_POST['password']) );
		$sql->execute();
		$sql->close();
		// find patroller's id for output
		$sql = $con->prepare("SELECT id FROM Patroller ORDER BY id DESC LIMIT 1");
		$sql->execute();
		$sql->bind_result($result);
		$sql->fetch();
		$sql->close();
		// print success
		exitWithJSON( array( 'success' => true, 'id' => $result ) );

	// delete a patroller
	}else if($_GET['action'] == 'getPatrollerHistory') {
		$con=mysqli_connect(DBHOST, DBUSER, DBPASS, DB);
		$query = "SELECT sessions.*, Patroller.name FROM `sessions` JOIN `Patroller` ON sessions.userid = Patroller.id WHERE sessions.userid = " . intval($_POST['id']) . " ORDER BY id DESC";
        $result = mysqli_query($con,$query);
        $data = array();
        while ($row = mysqli_fetch_array($result, MYSQL_ASSOC)) {
        	$row['created'] = date("F j, Y, g:i a", $row['created']);
        	$row['lastactive'] = $row['lastactive'] == 0 ? 'Never' : date("F j, Y, g:i a", $row['lastactive']);
        	$data[] = $row;
        }
		exitWithJSON($data);

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
		$changes = array( 'Name' => @$_POST['Name'], 
						  'InstID' => @$_POST['InstID'], 
						  'Email' => @$_POST['Email'], 
						  'PhoneNum' => @$_POST['PhoneNum'], 
						  'CSPSNum' => @$_POST['CSPSNum'] );

		// encrypt the password
		if(!empty($_POST['password']))
			$changes['password'] = encryptPassword($_POST['password']);

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