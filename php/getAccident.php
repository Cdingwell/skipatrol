<?php

	include('../config.php');
	include('functions.php');
	include('session.class.php');

	// validate user
	$session = new sessionManager();
	$_POST['sessionid'] = empty($_POST['sessionid']) ? $_GET['sessionid'] : $_POST['sessionid'];
	if( empty($_POST['sessionid']) || !$session->validateSession($_POST['sessionid'], $userid) ) {
		exitWithJSON( array( 'error' => true, 'type' => 'invalid_session', 'message' => 'You must login to use this feature.' ) );
	}

	// show patrollers
	if($_GET['action'] == 'get') {
		$con=mysqli_connect(DBHOST, DBUSER, DBPASS, DB);
		// base query
		$query = 'select * FROM Accident';
		// limit by key
		if(!empty($_POST['id']) && is_numeric($_POST['id']))
			$query .= " WHERE `id` = '{$_POST['id']}'";
		// order by timestamp
		$query .= ' ORDER BY id DESC';
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
		$query = 'select * FROM Accident';
		// limit by key
		if(!empty($_GET['id']) && is_numeric($_GET['id']))
			$query .= " WHERE `id` = '{$_GET['id']}'";
		// order by timestamp
		$query .= ' ORDER BY id DESC';
        $result = mysqli_query($con,$query);
		
		//get column names
		$query = 'SHOW COLUMNS FROM accident';
		$result2 = mysqli_query($con, $query);
		//print_r($result2);
		//exit();
        $data = array();
		$data2 = array();
		
		//get the just the column names from each row
		while ($row = mysqli_fetch_array($result2, MYSQL_ASSOC))
			$data2[] = $row['Field'];

        while ($row = mysqli_fetch_array($result, MYSQL_ASSOC))
        	$data[] = $row;
			
		//create a name with the table name and a datestamp	
		$name = 'AccidentTable'. date('Y-m-d') . '.csv';
		
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
		$sql = $con->prepare("INSERT INTO `Accident` (`id`, `Timestamp`, `reportNum`, `CSPSNum1`, `CSPSNum2`, `CSPSNum3`, `DOB`, `age`, `gender`, `foot`, `ankle`, `lowerLeg`, `knee`, `thigh`, `hip`, `lowerAb`, `upperAb`, `chest`, `clavicle`, `shoulder`, `upperArm`, `elbow`, `lowerArm`, `wrist`, `hand`, `thumb`, `finger`, `upperBack`, `lowerBack`, `tailbone`, `head`, `face`, `medical`, `noInjury`, `fracture`, `sprain`, `strain`, `bruise`, `laceration`, `dislocation`, `cardiac`, `stroke`, `concussion`, `hypothermia`, `frostbite`, `internal`, `illness`, `deceased`, `unknown`, `incidentLocation`, `runClassification`, `activity`, `involvement`, `weather`, `light`, `temp`, `snow`, `surface`, `equipment`, `helmet`, `ability`, `firstAid`, `fromBase`, `collision`, `nonCollision`, `liftRelated`, `nonSkiingRelated`) VALUES ('', CURRENT_TIMESTAMP, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
		$sql->bind_param("sssssissssssssssssssssssssssssssiiiiiiiiiiiiiiissssssssssssssssss", $_POST['reportNum'], $_POST['CSPSNum1'], $_POST['CSPSNum2'], $_POST['CSPSNum3'], $_POST['DOB'], $_POST['age'], $_POST['gender'], $_POST['foot'], $_POST['ankle'], $_POST['lowerLeg'], $_POST['knee'], $_POST['thigh'], $_POST['hip'], $_POST['lowerAb'], $_POST['upperAb'], $_POST['chest'], $_POST['clavicle'], $_POST['shoulder'], $_POST['upperArm'], $_POST['elbow'], $_POST['lowerArm'], $_POST['wrist'], $_POST['hand'], $_POST['thumb'], $_POST['finger'], $_POST['upperBack'], $_POST['lowerBack'], $_POST['tailbone'], $_POST['head'], $_POST['face'], $_POST['medical'], $_POST['noInjury'], $_POST['fracture'], $_POST['sprain'], $_POST['strain'], $_POST['bruise'], $_POST['laceration'], $_POST['dislocation'], $_POST['cardiac'], $_POST['stroke'], $_POST['concussion'], $_POST['hypothermia'], $_POST['frostbite'], $_POST['internal'], $_POST['illness'], $_POST['deceased'], $_POST['unknown'], $_POST['incidentLocation'], $_POST['runClassification'], $_POST['activity'], $_POST['involvement'], $_POST['weather'], $_POST['light'], $_POST['temp'], $_POST['snow'], $_POST['surface'], $_POST['equipment'], $_POST['helmet'], $_POST['ability'], $_POST['firstAid'], $_POST['fromBase'], $_POST['collision'], $_POST['nonCollision'], $_POST['liftRelated'], $_POST['nonSkiingRelated']);
		$sql->execute();
		$sql->close();
		// find patroller's id for output
		$sql = $con->prepare("SELECT id, Timestamp FROM Accident ORDER BY id DESC LIMIT 1");
		$sql->execute();
		$sql->bind_result($result, $timestamp);
		$sql->fetch();
		$sql->close();

		// print success
		exitWithJSON( array( 'success' => true, 'id' => $result, 'timestamp' => $timestamp ) );

	// delete a patroller
	}else if($_GET['action'] == 'delete') {
		$con=mysqli_connect(DBHOST, DBUSER, DBPASS, DB);
		$query = 'DELETE FROM `Accident` WHERE id = ' . intval($_POST['id']);
        mysqli_query($con,$query);
        exitWithJSON( array( 'success' => true ) );

	// edit a patroller
	}else if($_GET['action'] == 'edit' && !empty($_POST['id'])) {
		$con = new mysqli(DBHOST, DBUSER, DBPASS, DB);
		$changes = array( 'id' => @$_POST['id'], 'Timestamp' => @$_POST['Timestamp'], 'reportNum' => @$_POST['reportNum'], 'CSPSNum1' => @$_POST['CSPSNum1'], 'CSPSNum2' => @$_POST['CSPSNum2'], 'CSPSNum3' => @$_POST['CSPSNum3'], 'DOB' => @$_POST['DOB'], 'age' => @$_POST['age'], 'gender' => @$_POST['gender'], 'foot' => @$_POST['foot'], 'ankle' => @$_POST['ankle'], 'lowerLeg' => @$_POST['lowerLeg'], 'knee' => @$_POST['knee'], 'thigh' => @$_POST['thigh'], 'hip' => @$_POST['hip'], 'lowerAb' => @$_POST['lowerAb'], 'upperAb' => @$_POST['upperAb'], 'chest' => @$_POST['chest'], 'clavicle' => @$_POST['clavicle'], 'shoulder' => @$_POST['shoulder'], 'upperArm' => @$_POST['upperArm'], 'elbow' => @$_POST['elbow'], 'lowerArm' => @$_POST['lowerArm'], 'wrist' => @$_POST['wrist'], 'hand' => @$_POST['hand'], 'thumb' => @$_POST['thumb'], 'finger' => @$_POST['finger'], 'upperBack' => @$_POST['upperBack'], 'lowerBack' => @$_POST['lowerBack'], 'tailbone' => @$_POST['tailbone'], 'head' => @$_POST['head'], 'face' => @$_POST['face'], 'medical' => @$_POST['medical'], 'noInjury' => @$_POST['noInjury'], 'fracture' => @$_POST['fracture'], 'sprain' => @$_POST['sprain'], 'strain' => @$_POST['strain'], 'bruise' => @$_POST['bruise'], 'laceration' => @$_POST['laceration'], 'dislocation' => @$_POST['dislocation'], 'cardiac' => @$_POST['cardiac'], 'stroke' => @$_POST['stroke'], 'concussion' => @$_POST['concussion'], 'hypothermia' => @$_POST['hypothermia'], 'frostbite' => @$_POST['frostbite'], 'internal' => @$_POST['internal'], 'illness' => @$_POST['illness'], 'deceased' => @$_POST['deceased'], 'unknown' => @$_POST['unknown'], 'incidentLocation' => @$_POST['incidentLocation'], 'runClassification' => @$_POST['runClassification'], 'activity' => @$_POST['activity'], 'involvement' => @$_POST['involvement'], 'weather' => @$_POST['weather'], 'light' => @$_POST['light'], 'temp' => @$_POST['temp'], 'snow' => @$_POST['snow'], 'surface' => @$_POST['surface'], 'equipment' => @$_POST['equipment'], 'helmet' => @$_POST['helmet'], 'ability' => @$_POST['ability'], 'firstAid' => @$_POST['firstAid'], 'fromBase' => @$_POST['fromBase'], 'collision' => @$_POST['collision'], 'nonCollision' => @$_POST['nonCollision'], 'liftRelated' => @$_POST['liftRelated'], 'nonSkiingRelated' => @$_POST['nonSkiingRelated'] );
		// change stuff
		foreach($changes as $key => $value) {
			if( !empty($value) ) {
				$sql = $con->prepare('UPDATE `Accident` SET ' . preg_replace("/[^A-Za-z0-9_ ]/", '', $key) . ' = "' . preg_replace("/[^A-Za-z0-9 ;:\-_ \n\t]/", '', $value) . '" WHERE `id` = ?'); if(!$sql) echo $con->error;
				$sql->bind_param('i', $_POST['id']);
				$sql->execute();
				$sql->close();
			}
		}

		exitWithJSON( array( 'success' => true ) );
	}

?>