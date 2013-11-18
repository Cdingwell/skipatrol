<?php

	include('../config.php');
	include('functions.php');
	include('session.class.php');
	include('permissions.class.php');

	// validate user
	$session = new sessionManager();
	$_POST['sessionid'] = empty($_POST['sessionid']) ? $_GET['sessionid'] : $_POST['sessionid'];
	if( empty($_POST['sessionid']) || !$session->validateSession($_POST['sessionid'], $userid) ) {
		exitWithJSON( array( 'error' => true, 'type' => 'invalid_session', 'message' => 'You must login to use this feature.' ) );
	}

	// make sure user has permisison
	$perms = new permissions();

	// show patrollers
	if($_GET['action'] == 'getPatrollers') {
		$perms->requirePerms($userid, $perms->perms['admin']);
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
		
	// SQL Dump of accidents
	} else if($_GET['action'] == 'dump') { 
		$perms->requirePerms($userid, $perms->perms['admin']);
		$con=mysqli_connect(DBHOST, DBUSER, DBPASS, DB);
		// base query
		$query = 'select * FROM Patroller';
		// limit by key
		if(!empty($_GET['id']) && is_numeric($_GET['id']))
			$query .= " WHERE `id` = '{$_GET['id']}'";
			
        $result = mysqli_query($con,$query);
		
		//get column names
		$query = 'SHOW COLUMNS FROM Patroller'; 
		$result2 = mysqli_query($con, $query);

        $data = array();
		$data2 = array();
		
		//get the column names only from the array and throw them into data2
		while ($row = mysqli_fetch_array($result2, MYSQL_ASSOC))
			$data2[] = $row['Field'];

        while ($row = mysqli_fetch_array($result, MYSQL_ASSOC))
        	$data[] = $row;
			
		//make a name for the file with the table name and a datestamp	
		$name = 'PatrollerTable'. date('Y-m-d') . '.csv'; 
		
		header('Content-Type: text/csv');
    	header('Content-Disposition: attachment; filename=' . $name);
    	header('Pragma: no-cache');
    	header("Expires: 0");
			
		$fp = fopen("php://output", "w");
		
		//put the column names first
		fputcsv($fp, $data2);
		
		//for each row, fputcsv. 
		foreach ($data as $fields)
		{
    		fputcsv($fp, $fields);
		}

		fclose($fp);
		
		exit();

	// add a patroller
	}else if($_GET['action'] == 'addPatroller') {
		$perms->requirePerms($userid, $perms->perms['admin']);
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
		if(!$perms->checkPerms($userid, $perms->perms['admin']))
			$_POST['id'] = $userid;
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
		$perms->requirePerms($userid, $perms->perms['admin']);
		$con=mysqli_connect(DBHOST, DBUSER, DBPASS, DB);
		$query = 'DELETE FROM `Patroller` WHERE id = ' . intval($_POST['id']);
        mysqli_query($con,$query);
        exitWithJSON( array( 'success' => true ) );

	// edit a patroller
	}else if($_GET['action'] == 'editPatroller' && !empty($_POST['id'])) {
		$perms->requirePerms($userid, $perms->perms['admin']);
		// if updating own password use our own id
		if($_POST['id'] == 'self')
			$_POST['id'] = $userid;
		$con = new mysqli(DBHOST, DBUSER, DBPASS, DB);

		// determine what items are allowed to be changed and what they map out to
		$changes = array( 'Name' => array( @$_POST['Name'], 's' ), 
						  'InstID' => array( @$_POST['InstID'], 's' ), 
						  'Email' => array( @$_POST['Email'], 's' ), 
						  'PhoneNum' => array( @$_POST['PhoneNum'], 's' ), 
						  'CSPSNum' => array( @$_POST['CSPSNum'], 's' ), 
						  'login' => array( @$_POST['login'], 'i' ) );

		// encrypt the password
		if(!empty($_POST['password']) && !empty($_POST['password']))
			$changes['password'] = array( encryptPassword($_POST['password']), 's' );

		// change stuff
		foreach($changes as $key => $value) {
			if( !empty($value) ) {
				$sql = $con->prepare('UPDATE `Patroller` SET ' . preg_replace("/[^A-Za-z0-9 ]/", '', $key) . ' = ? WHERE `id` = ?');
				$sql->bind_param($value[1] . 'i', $value[0], $_POST['id']);
				$sql->execute();
				$sql->close();
			}
		}

		exitWithJSON( array( 'success' => true ) );
	}

?>