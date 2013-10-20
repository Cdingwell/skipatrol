<?php

session_start();
include('../config.php');
include('functions.php');
include('session.class.php');

// connect to database
$con = new mysqli(DBHOST, DBUSER, DBPASS, DB);

// do a login attempt
$sql = $con->prepare("SELECT id from Patroller where Name=? AND password=?");
$sql->bind_param("ss", $_POST['username'], $_POST['password']);
$sql->execute();
$sql->bind_result($result);
$sql->fetch();
$sql->close();

// indicate login failure
if(empty($result))
	exitWithJSON(array( 'success' => 'false' ));

// if login worked make a session
$session = new sessionManager();
$sessionid = $session->createSessionForUserid($result);
exitWithJSON(array( 'success' => 'true', 'sessionid' => $sessionid ));

?>