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
	$godMode = $perms->checkPerms($userid, $perms->perms['admin']);

	// show patrollers
	if($_GET['action'] == 'get') {
		$con=mysqli_connect(DBHOST, DBUSER, DBPASS, DB);
		// base query
		$query = 'SELECT OnSnow.*, Patroller.Name, p2.Name AS studentName FROM OnSnow INNER JOIN Patroller ON OnSnow.instID = Patroller.id INNER JOIN Patroller AS p2 ON OnSnow.SID = p2.id';
		//if(!$godMode)
		//	$query .= ' WHERE OnSnow.InstID = \'' . $userid . '\'';
		// limit by key
		if(!empty($_POST['id']) && is_numeric($_POST['id'])) {
			//if($godMode)
				$query .= ' WHERE';
			//else
			//	$query .= ' AND';
			$query .= " `snowID` = '{$_POST['id']}'";
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
		$query = 'select * FROM OnSnow';
		// limit by key
		if(!empty($_GET['id']) && is_numeric($_GET['id']))
			$query .= " WHERE `snowID` = '{$_GET['id']}'";
		if(!$godMode) {
			if(!strstr($query, ' WHERE '))
				$query .= ' WHERE';
			else
				$query .= ' AND';
			$query .= ' InstID = \'' . $userid . '\'';
		}
		// order by timestamp
		$query .= ' ORDER BY Timestamp DESC';
        $result = mysqli_query($con,$query);
		//get column names
		$query = 'SHOW COLUMNS FROM OnSnow';
		$result2 = mysqli_query($con, $query);

        $data = array();
		$data2 = array();
		
		//get the column names only from the array and throw them into data2
		while ($row = mysqli_fetch_array($result2, MYSQL_ASSOC))
			$data2[] = $row['Field'];

        while ($row = mysqli_fetch_array($result, MYSQL_ASSOC))
        	$data[] = $row;
			
		//make a name for the file with the table name and a datestamp
		$name = 'OnSnowTable'. date('Y-m-d') . '.csv';
		
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
		$sql = $con->prepare("INSERT INTO `OnSnow` (`Timestamp`, `SID`, `snowID`, `instID`, `crticalSection`, `travelTurnClimbStop`, `stableBalancedPosition`, `controlSpeedDirection`, `sideslipFallingLeaf`, `traversing`, `edgingPivotPressure`, `rhythmCoordination`, `46TurnsModerateTerrain`, `46TurnsDifficultTerrain`, `carryingEquipment`, `fitnessFlexibilityStrength`, `appliesResponsibilityCode`, `safeInControl`, `fullRun`, `tobogganCheck`, `packCheckUniformCheck`, `tobogganSetUpOp`, `tombogganTransportLifts`, `considerApproach`, `Communication_Incid`, `TeamRoleCompSafety`, `MarkIncident`, `locationkeyEquip`, `secureTobbgEquip`, `LocatDirMed`, `followupSiteClean`, `TansportBackEquip`, `LoadPatient`, `patientUpbase`, `communicationWhistle_Empty`, `checkTraffic_Empty`, `routeFinding_Empty`, `positionHandles_Empty`, `stableBalanced_Empty`, `useBrakeRunners_Empty`, `sideslipFalllingLeaf_Empty`, `snowplow_Empty`, `traversing_Empty`, `directionChange_Empty`, `controlledSmoothSafeDecent_Empty`, `shortRadiusTurn_Empty`, `useFallLine_Empty`, `compensating_Empty`, `stoppingUpOutAccident_Empty`, `comm2patien1_Loaded`, `comm2patien2_Loaded`, `traffic1_Loaded`, `traffic2_Loaded`, `position1_Loaded`, `position2_Loaded`, `routefind1_Loaded`, `routefind2_Loaded`, `stableBalance1_Loaded`, `stableBalance2_Loaded`, `sideSlip_fallLeaf1_Loaded`, `sideSlip_fallLeaf2_Loaded`, `snowplow1_Loaded`, `snowplow2_Loaded`, `brakeRunners1_Loaded`, `brakeRunners2_Loaded`, `fallLine1_Loaded`, `fallLine2_Loaded`, `Transitions1_Loaded`, `Transitions2_Loaded`, `controlSmoothDecent1_Loaded`, `controlSmoothDecent2_Loaded`, `Direction1_Loaded`, `Direction2_Loaded`, `compensating1_Loaded`, `compensating2_Loaded`, `ropeSecured2_Loaded`, `changeEfficientSafe2_Loaded`, `commWithPatroller2_Loaded`, `dragBrakePosition2_Loaded`, `FrontCharge2_Loaded`, `notes`) VALUES (CURRENT_TIMESTAMP, ?, '', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
		$sql->bind_param("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiis", $_POST['SID'], $userid, $_POST['crticalSection'], $_POST['travelTurnClimbStop'], $_POST['stableBalancedPosition'], $_POST['controlSpeedDirection'], $_POST['sideslipFallingLeaf'], $_POST['traversing'], $_POST['edgingPivotPressure'], $_POST['rhythmCoordination'], $_POST['46TurnsModerateTerrain'], $_POST['46TurnsDifficultTerrain'], $_POST['carryingEquipment'], $_POST['fitnessFlexibilityStrength'], $_POST['appliesResponsibilityCode'], $_POST['safeInControl'], $_POST['fullRun'], $_POST['tobogganCheck'], $_POST['packCheckUniformCheck'], $_POST['tobogganSetUpOp'], $_POST['tombogganTransportLifts'], $_POST['considerApproach'], $_POST['Communication_Incid'], $_POST['TeamRoleCompSafety'], $_POST['MarkIncident'], $_POST['locationkeyEquip'], $_POST['secureTobbgEquip'], $_POST['LocatDirMed'], $_POST['followupSiteClean'], $_POST['TansportBackEquip'], $_POST['LoadPatient'], $_POST['patientUpbase'], $_POST['communicationWhistle_Empty'], $_POST['checkTraffic_Empty'], $_POST['routeFinding_Empty'], $_POST['positionHandles_Empty'], $_POST['stableBalanced_Empty'], $_POST['useBrakeRunners_Empty'], $_POST['sideslipFalllingLeaf_Empty'], $_POST['snowplow_Empty'], $_POST['traversing_Empty'], $_POST['directionChange_Empty'], $_POST['controlledSmoothSafeDecent_Empty'], $_POST['shortRadiusTurn_Empty'], $_POST['useFallLine_Empty'], $_POST['compensating_Empty'], $_POST['stoppingUpOutAccident_Empty'], $_POST['comm2patien1_Loaded'], $_POST['comm2patien2_Loaded'], $_POST['traffic1_Loaded'], $_POST['traffic2_Loaded'], $_POST['position1_Loaded'], $_POST['position2_Loaded'], $_POST['routefind1_Loaded'], $_POST['routefind2_Loaded'], $_POST['stableBalance1_Loaded'], $_POST['stableBalance2_Loaded'], $_POST['sideSlip_fallLeaf1_Loaded'], $_POST['sideSlip_fallLeaf2_Loaded'], $_POST['snowplow1_Loaded'], $_POST['snowplow2_Loaded'], $_POST['brakeRunners1_Loaded'], $_POST['brakeRunners2_Loaded'], $_POST['fallLine1_Loaded'], $_POST['fallLine2_Loaded'], $_POST['Transitions1_Loaded'], $_POST['Transitions2_Loaded'], $_POST['controlSmoothDecent1_Loaded'], $_POST['controlSmoothDecent2_Loaded'], $_POST['Direction1_Loaded'], $_POST['Direction2_Loaded'], $_POST['compensating1_Loaded'], $_POST['compensating2_Loaded'], $_POST['ropeSecured2_Loaded'], $_POST['changeEfficientSafe2_Loaded'], $_POST['commWithPatroller2_Loaded'], $_POST['dragBrakePosition2_Loaded'], $_POST['FrontCharge2_Loaded'], $_POST['notes']);
		$sql->execute();
		$sql->close();
		// find patroller's id for output
		$sql = $con->prepare("SELECT snowID, Timestamp, Patroller.Name AS Name, p2.Name AS studentName FROM OnSnow INNER JOIN Patroller ON OnSnow.instID = Patroller.id INNER JOIN Patroller AS p2 ON OnSnow.SID = p2.id ORDER BY snowID DESC LIMIT 1");
		$sql->execute();
		$sql->bind_result($result, $timestamp, $Name, $studentName);
		$sql->fetch();
		$sql->close();

		// print success
		exitWithJSON( array( 'success' => true, 'id' => $result, 'timestamp' => $timestamp, 'Name' => $Name, 'studentName' => $studentName ) );

	// delete a patroller
	}else if($_GET['action'] == 'delete') {
		$con=mysqli_connect(DBHOST, DBUSER, DBPASS, DB);
		$query = 'DELETE FROM `OnSnow` WHERE snowID = ' . intval($_POST['id']);
		if(!$godMode)
			$query .= ' AND InstID = \'' . $userid . '\'';
        mysqli_query($con,$query);
        exitWithJSON( array( 'success' => true ) );

	// edit a patroller
	}else if($_GET['action'] == 'edit' && !empty($_POST['id'])) {
		$con = new mysqli(DBHOST, DBUSER, DBPASS, DB);
		$changes = array( 'Timestamp' => @$_POST['Timestamp'], 'SID' => @$_POST['SID'], 'crticalSection' => @$_POST['crticalSection'], 'travelTurnClimbStop' => @$_POST['travelTurnClimbStop'], 'stableBalancedPosition' => @$_POST['stableBalancedPosition'], 'controlSpeedDirection' => @$_POST['controlSpeedDirection'], 'sideslipFallingLeaf' => @$_POST['sideslipFallingLeaf'], 'traversing' => @$_POST['traversing'], 'edgingPivotPressure' => @$_POST['edgingPivotPressure'], 'rhythmCoordination' => @$_POST['rhythmCoordination'], '46TurnsModerateTerrain' => @$_POST['46TurnsModerateTerrain'], '46TurnsDifficultTerrain' => @$_POST['46TurnsDifficultTerrain'], 'carryingEquipment' => @$_POST['carryingEquipment'], 'fitnessFlexibilityStrength' => @$_POST['fitnessFlexibilityStrength'], 'appliesResponsibilityCode' => @$_POST['appliesResponsibilityCode'], 'safeInControl' => @$_POST['safeInControl'], 'fullRun' => @$_POST['fullRun'], 'tobogganCheck' => @$_POST['tobogganCheck'], 'packCheckUniformCheck' => @$_POST['packCheckUniformCheck'], 'tobogganSetUpOp' => @$_POST['tobogganSetUpOp'], 'tombogganTransportLifts' => @$_POST['tombogganTransportLifts'], 'considerApproach' => @$_POST['considerApproach'], 'Communication_Incid' => @$_POST['Communication_Incid'], 'TeamRoleCompSafety' => @$_POST['TeamRoleCompSafety'], 'MarkIncident' => @$_POST['MarkIncident'], 'locationkeyEquip' => @$_POST['locationkeyEquip'], 'secureTobbgEquip' => @$_POST['secureTobbgEquip'], 'LocatDirMed' => @$_POST['LocatDirMed'], 'followupSiteClean' => @$_POST['followupSiteClean'], 'TansportBackEquip' => @$_POST['TansportBackEquip'], 'LoadPatient' => @$_POST['LoadPatient'], 'patientUpbase' => @$_POST['patientUpbase'], 'communicationWhistle_Empty' => @$_POST['communicationWhistle_Empty'], 'checkTraffic_Empty' => @$_POST['checkTraffic_Empty'], 'routeFinding_Empty' => @$_POST['routeFinding_Empty'], 'positionHandles_Empty' => @$_POST['positionHandles_Empty'], 'stableBalanced_Empty' => @$_POST['stableBalanced_Empty'], 'useBrakeRunners_Empty' => @$_POST['useBrakeRunners_Empty'], 'sideslipFalllingLeaf_Empty' => @$_POST['sideslipFalllingLeaf_Empty'], 'snowplow_Empty' => @$_POST['snowplow_Empty'], 'traversing_Empty' => @$_POST['traversing_Empty'], 'directionChange_Empty' => @$_POST['directionChange_Empty'], 'controlledSmoothSafeDecent_Empty' => @$_POST['controlledSmoothSafeDecent_Empty'], 'shortRadiusTurn_Empty' => @$_POST['shortRadiusTurn_Empty'], 'useFallLine_Empty' => @$_POST['useFallLine_Empty'], 'compensating_Empty' => @$_POST['compensating_Empty'], 'stoppingUpOutAccident_Empty' => @$_POST['stoppingUpOutAccident_Empty'], 'comm2patien1_Loaded' => @$_POST['comm2patien1_Loaded'], 'comm2patien2_Loaded' => @$_POST['comm2patien2_Loaded'], 'traffic1_Loaded' => @$_POST['traffic1_Loaded'], 'traffic2_Loaded' => @$_POST['traffic2_Loaded'], 'position1_Loaded' => @$_POST['position1_Loaded'], 'position2_Loaded' => @$_POST['position2_Loaded'], 'routefind1_Loaded' => @$_POST['routefind1_Loaded'], 'routefind2_Loaded' => @$_POST['routefind2_Loaded'], 'stableBalance1_Loaded' => @$_POST['stableBalance1_Loaded'], 'stableBalance2_Loaded' => @$_POST['stableBalance2_Loaded'], 'sideSlip_fallLeaf1_Loaded' => @$_POST['sideSlip_fallLeaf1_Loaded'], 'sideSlip_fallLeaf2_Loaded' => @$_POST['sideSlip_fallLeaf2_Loaded'], 'snowplow1_Loaded' => @$_POST['snowplow1_Loaded'], 'snowplow2_Loaded' => @$_POST['snowplow2_Loaded'], 'brakeRunners1_Loaded' => @$_POST['brakeRunners1_Loaded'], 'brakeRunners2_Loaded' => @$_POST['brakeRunners2_Loaded'], 'fallLine1_Loaded' => @$_POST['fallLine1_Loaded'], 'fallLine2_Loaded' => @$_POST['fallLine2_Loaded'], 'Transitions1_Loaded' => @$_POST['Transitions1_Loaded'], 'Transitions2_Loaded' => @$_POST['Transitions2_Loaded'], 'controlSmoothDecent1_Loaded' => @$_POST['controlSmoothDecent1_Loaded'], 'controlSmoothDecent2_Loaded' => @$_POST['controlSmoothDecent2_Loaded'], 'Direction1_Loaded' => @$_POST['Direction1_Loaded'], 'Direction2_Loaded' => @$_POST['Direction2_Loaded'], 'compensating1_Loaded' => @$_POST['compensating1_Loaded'], 'compensating2_Loaded' => @$_POST['compensating2_Loaded'], 'ropeSecured2_Loaded' => @$_POST['ropeSecured2_Loaded'], 'changeEfficientSafe2_Loaded' => @$_POST['changeEfficientSafe2_Loaded'], 'commWithPatroller2_Loaded' => @$_POST['commWithPatroller2_Loaded'], 'dragBrakePosition2_Loaded' => @$_POST['dragBrakePosition2_Loaded'], 'FrontCharge2_Loaded' => @$_POST['FrontCharge2_Loaded'], 'notes' => @$_POST['notes'] );
		// change stuff
		foreach($changes as $key => $value) {
			if( !empty($value) ) {
				$query = 'UPDATE `OnSnow` SET ' . preg_replace("/[^A-Za-z0-9_ ]/", '', $key) . ' = "' . preg_replace("/[^A-Za-z0-9 ;:\-_ \n\t]/", '', $value) . '" WHERE `snowID` = ?';
				if(!$godMode)
					$query .= ' AND InstID = \'' . $userid . '\'';
				$sql = $con->prepare($query);
				$sql->bind_param('i', $_POST['id']);
				$sql->execute();
				$sql->close();
			}
		}

		exitWithJSON( array( 'success' => true ) );
	}

?>