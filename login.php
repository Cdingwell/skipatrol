<?php

session_start();

// username and password sent from form 
$myusername=$_POST['login']; 
$mypassword=$_POST['pass']; 
$login=1;

$con=mysqli_connect("box914.bluehost.com","superjh2_mo","tawakol99","superjh2_appdev")
or die("Unable to Connect");


$query1=mysqli_query($con,"SELECT * from Patroller where Name='$myusername' AND password='$mypassword';") or die("ERROR");
$res = mysqli_fetch_array($query1);
$count=mysql_num_rows($res);



// If result matched $myusername and $mypassword, table row must be 1 row
if($count>0){
    // set loggedin to true
    $_SESSION['loggedin'] = true;
    $_SESSION['username'] = $myusername;
    //redirect
    header("location:index.php");
}
else {
    header("location:login.php");
}
?>