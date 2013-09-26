<?php
session_start();
$con=mysqli_connect("box914.bluehost.com","superjh2_mo","tawakol99","superjh2_appdev")
or die("Unable to Connect");


$query1=mysqli_query($con,"SELECT count(*) from Patroller;") or die("ERROR");
$count = mysqli_fetch_array($query1);
echo $count[0];

?>