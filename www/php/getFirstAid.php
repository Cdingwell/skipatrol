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

	// do a perm check
	$perms = new permissions();
	$perms->requirePerms($userid, $perms->perms['admin'] | $perms->perms['instructor'] | $perms->perms['zone_education_leader'] | $perms->perms['divisional_education_leader'] | $perms->perms['national_education_leader']);

	// only admins have god node
	$godMode = $perms->checkPerms($userid, $perms->perms['admin']);

	// show patrollers
	if($_GET['action'] == 'get') { // SELECT FirstAid.*, Patroller.Name FROM `FirstAid` INNER JOIN Patroller ON FirstAid.SID = Patroller.id
		$con=mysqli_connect(DBHOST, DBUSER, DBPASS, DB);
		// base query
		$query = 'SELECT FirstAid.*, Patroller.Name, p2.Name AS studentName FROM `FirstAid` INNER JOIN Patroller ON FirstAid.IID = Patroller.id INNER JOIN Patroller AS p2 ON FirstAid.SID = p2.id';
		// dont allow non admins to see everything
		if(!$godMode)
			$query .= ' WHERE FirstAid.IID = \'' . $userid . '\'';
		// limit by key
		if(!empty($_POST['id']) && is_numeric($_POST['id'])) {
			if($godMode)
				$query .= ' WHERE';
			else
				$query .= ' AND';
			$query .= " `FAID` = '{$_POST['id']}'";
		}
		// order by timestamp
		$query .= ' ORDER BY Timestamp DESC';
		// pagenation
		if(!empty($_POST['page']) && is_numeric($_POST['page'])) {
			$query .= ' LIMIT ' . (($_POST['page'] - 1) * 50) . ',50';
		}
        $result = mysqli_query($con,$query);
        $data = array();
        while ($row = mysqli_fetch_array($result, MYSQL_ASSOC))
        	$data[] = $row;
		exitWithJSON($data);

	// SQL Dump of accidents
	} else if($_GET['action'] == 'dump') {
		$con=mysqli_connect(DBHOST, DBUSER, DBPASS, DB);
		// base query
		$query = 'select * FROM FirstAid';
		// limit by key
		if(!empty($_GET['start']) && is_numeric($_GET['start']) && is_numeric($_GET['stop']))
			$query .= " WHERE UNIX_TIMESTAMP(`Timestamp`) > {$_GET['start']} && UNIX_TIMESTAMP(`Timestamp`) < {$_GET['stop']}";
		if(!$godMode) {
			if(!strstr($query, ' WHERE '))
				$query .= ' WHERE';
			else
				$query .= ' AND';
			$query .= ' FirstAid.IID = \'' . $userid . '\'';
		}
		// order by timestamp
		$query .= ' ORDER BY Timestamp DESC';
        $result = mysqli_query($con,$query);
		//get column names
		$query = 'SHOW COLUMNS FROM FirstAid';
		$result2 = mysqli_query($con, $query);

        $data = array();
		$data2 = array();
		
		//get the column names only from the array and throw them into data2
		while ($row = mysqli_fetch_array($result2, MYSQL_ASSOC))
			$data2[] = $row['Field'];

        while ($row = mysqli_fetch_array($result, MYSQL_ASSOC))
        	$data[] = $row;
			
		//make a name for the file with the table name and a datestamp
		$name = 'FirstAidTable'. date('Y-m-d') . '.csv';
		
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
	} else if($_GET['action'] == 'add') {
		// add patroller
		$con = new mysqli(DBHOST, DBUSER, DBPASS, DB);
		$sql = $con->prepare("INSERT INTO `FirstAid` (`Timestamp`, `IID`, `SID`, `FAID`, `prioritySurvey`, `secondarySurvey`, `vitalSigns`, `cervicalCollar`, `spinal`, `pelvis`, `femur`, `clavicle`, `scapula`, `lowerArm`, `humerus`, `bentKnee`, `lowerLeg`, `shoulderDislocation`, `smallArmSling`, `largeArmSling`, `bodySling`, `head`, `shoulder`, `chestBack`, `elbow`, `openHandFoot`, `pressureHand`, `eyeCheekEar`, `pressure`, `openFracture`, `stirrup`, `modifiedStirrup`, `knee`) VALUES (CURRENT_TIMESTAMP, ?, ?, '', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
		$sql->bind_param('iisssssssssssssssssssssssssssss', $userid, $_POST['SID'], $_POST['prioritySurvey'], $_POST['secondarySurvey'], $_POST['vitalSigns'], $_POST['cervicalCollar'], $_POST['spinal'], $_POST['pelvis'], $_POST['femur'], $_POST['clavicle'], $_POST['scapula'], $_POST['lowerArm'], $_POST['humerus'], $_POST['bentKnee'], $_POST['lowerLeg'], $_POST['shoulderDislocation'], $_POST['smallArmSling'], $_POST['largeArmSling'], $_POST['bodySling'], $_POST['head'], $_POST['shoulder'], $_POST['chestBack'], $_POST['elbow'], $_POST['openHandFoot'], $_POST['pressureHand'], $_POST['eyeCheekEar'], $_POST['pressure'], $_POST['openFracture'], $_POST['stirrup'], $_POST['modifiedStirrup'], $_POST['knee']);
		$sql->execute();
		$sql->close();
		// find patroller's id for output
		$sql = $con->prepare("SELECT FirstAid.FAID, FirstAid.Timestamp,  Patroller.Name AS Name, p2.Name AS studentName FROM `FirstAid` INNER JOIN Patroller ON FirstAid.IID = Patroller.id INNER JOIN Patroller AS p2 ON FirstAid.SID = p2.id ORDER BY FAID DESC LIMIT 1");
		$sql->execute();
		$sql->bind_result($result, $timestamp, $Name, $studentName);
		$sql->fetch();
		$sql->close();

		// print success
		exitWithJSON( array( 'success' => true, 'FAID' => $result, 'timestamp' => $timestamp, 'Name' => $Name, 'studentName' => $studentName ) );

	// delete a patroller
	}else if($_GET['action'] == 'delete') {
		$con=mysqli_connect(DBHOST, DBUSER, DBPASS, DB);
		$query = 'DELETE FROM `FirstAid` WHERE FAID = ' . intval($_POST['id']);
		if(!$godMode)
			$query .= ' AND FirstAid.IID = \'' . $userid . '\'';
        mysqli_query($con,$query);
        exitWithJSON( array( 'success' => true ) );

	// edit a patroller
	}else if($_GET['action'] == 'edit' && !empty($_POST['id'])) {
		$con = new mysqli(DBHOST, DBUSER, DBPASS, DB);
		$changes = array( 'prioritySurvey' => @$_POST['prioritySurvey'], 'SID' => @$_POST['SID'], 'secondarySurvey' => @$_POST['secondarySurvey'], 'vitalSigns' => @$_POST['vitalSigns'], 'cervicalCollar' => @$_POST['cervicalCollar'], 'spinal' => @$_POST['spinal'], 'pelvis' => @$_POST['pelvis'], 'femur' => @$_POST['femur'], 'clavicle' => @$_POST['clavicle'], 'scapula' => @$_POST['scapula'], 'lowerArm' => @$_POST['lowerArm'], 'humerus' => @$_POST['humerus'], 'bentKnee' => @$_POST['bentKnee'], 'lowerLeg' => @$_POST['lowerLeg'], 'shoulderDislocation' => @$_POST['shoulderDislocation'], 'smallArmSling' => @$_POST['smallArmSling'], 'largeArmSling' => @$_POST['largeArmSling'], 'bodySling' => @$_POST['bodySling'], 'head' => @$_POST['head'], 'shoulder' => @$_POST['shoulder'], 'chestBack' => @$_POST['chestBack'], 'elbow' => @$_POST['elbow'], 'openHandFoot' => @$_POST['openHandFoot'], 'pressureHand' => @$_POST['pressureHand'], 'eyeCheekEar' => @$_POST['eyeCheekEar'], 'pressure' => @$_POST['pressure'], 'openFracture' => @$_POST['openFracture'], 'stirrup' => @$_POST['stirrup'], 'modifiedStirrup' => @$_POST['modifiedStirrup'], 'knee' => @$_POST['knee'] );
		// change stuff
		foreach($changes as $key => $value) {
			if( !empty($value) ) {
				$query = 'UPDATE `FirstAid` SET ' . preg_replace("/[^A-Za-z0-9_ ]/", '', $key) . ' = "' . preg_replace("/[^A-Za-z0-9 ;:\-_ \n\t]/", '', $value) . '" WHERE `FAID` = ?';
				if(!$godMode)
					$query .= ' AND IID = \'' . $userid . '\'';
				$sql = $con->prepare($query);
				$sql->bind_param('i', $_POST['id']);
				$sql->execute();
				$sql->close();
			}
		}

		exitWithJSON( array( 'success' => true ) );
	}

?>