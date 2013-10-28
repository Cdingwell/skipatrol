<?php

	include('../config.php');

	function exitWithJSON($data) {
		header('Content-Type: application/json');
		$callbackStart = '';
		$callbackStop = '';
		if(!empty($_GET['callback'])) {
			$callbackStart = $_GET['callback'] . '(';
			$callbackStop = ');';
		}
		exit( $callbackStart . json_encode($data) . $callbackStop );
	}

	function encryptPassword($password) {
		return md5( SALT . md5( $password ) );
	}

?>