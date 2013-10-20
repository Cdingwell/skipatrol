<?php

	class sessionManager {

		// this method generates a new session and returns it

		function createSessionForUserid($userid) {
			// fetch some useful variables
			$sessionid = uniqid();
			$useragent = $_SERVER['HTTP_USER_AGENT'];
			$ip = $_SERVER['REMOTE_ADDR'];
			// do the insertion
			$con = $this->connectDB();
			$stmt = $con->prepare("INSERT INTO sessions VALUES ('', ?, ?, ?, ?, ?)");
			$stmt->bind_param('isssi', $userid, $sessionid, $useragent, $ip, time() );   // bind $sample to the parameter
			$stmt->execute();
			return $sessionid;
		}

		// this method returns a mysqli object

		function connectDB() {
			include('../config.php');
			if(empty($this->con))
				$this->con = new mysqli(DBHOST, DBUSER, DBPASS, DB);
			return $this->con;
		}

		// this method checks to see that a session is legit, returns true or false

		function validateSession($sessionid, &$userid = 0) {
			// grab more user variables
			$useragent = $_SERVER['HTTP_USER_AGENT'];
			$ip = $_SERVER['REMOTE_ADDR'];
			// do the query to pull userid from session
			$con = $this->connectDB();
			$sql = $con->prepare("SELECT userid FROM sessions WHERE session=? AND useragent=? AND ip=?");
			$sql->bind_param("sss", $sessionid, $useragent, $ip);
			$sql->execute();
			$sql->bind_result($result);
			$sql->fetch();
			$sql->close();
			// store userid
			$userid = $result;
			// return if its a legit session
			return !empty($result);
		}

	}

?>