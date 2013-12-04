<?php

	class permissions {

		// determine what the permissions do
		public $perms = array(  'guest' => 1, 
								'admin' => 2, 
								'student' => 4, 
								'instructor' => 8, 
								'zone_education_leader' => 16, 
								'divisional_education_leader' => 32, 
								'national_education_leader' => 64  );

		// this method returns a mysqli object

		function connectDB() {
			include('../config.php');
			if(empty($this->con))
				$this->con = new mysqli(DBHOST, DBUSER, DBPASS, DB);
			return $this->con;
		}

		// check if user has permission to do something
		// $id = userid
		// $p = permissions to do something

		function checkPerms($id, $p) {
			$con = $this->connectDB();
			$sql = $con->prepare("SELECT login FROM Patroller WHERE id=?");
			$sql->bind_param("i", $id);
			$sql->execute();
			$sql->bind_result($result);
			$sql->fetch();
			$sql->close();
			return $result & $p;
		}

		function requirePerms($id, $p) {
			if(!$this->checkPerms($id, $p))
				exitWithJSON( array( 'error' => true, 'type' => 'invalid_perms', 'message' => 'You must be an admin to use this feature.' ) );
		}

	}

?>