<?php

session_start();

// username and password sent from form 
$myusername=$_POST['login']; 
$mypassword=$_POST['pass']; 

$con=mysqli_connect("localhost","superjh2_tyler","grantt","superjh2_appdev")
or die("Unable to Connect");


$query1=mysqli_query($con,"SELECT * from Patroller where Name='$myusername' AND password='$mypassword';") or die("ERROR");
$rowcount=mysqli_num_rows($query1);




// If result matched $myusername and $mypassword, table row must be 1 row
if($rowcount==1){
    // set loggedin to true
    $_SESSION['loggedin'] = true;
    $_SESSION['username'] = $myusername;
    //redirect
    header("location:index.php");
}
else {
    header("location:../login.html");
}
?>