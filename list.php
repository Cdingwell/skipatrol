<html>
<br><h1><center>List of Records</center></h1>
<body>
<center>
<?php
session_start();
$con=mysqli_connect("localhost","superjh2_emily","grantt","superjh2_appdev")
or die("Unable to Connect");

$query1=mysqli_query($con,"select * from Patroller;");


echo "<table border='1'><tr><td><b>Name</b></td><td><b>InstID</b></td><td><b>Email</b></td><td><b>PhoneNum</b></td><td><b>CSPSNum</b></td><td><b>password</b></td></tr>";
while($query2=mysqli_fetch_array($query1))
{
echo "<tr><td>".$query2['Name']."</td>";
echo "<td>".$query2['InstID']."</td>";
echo "<td>".$query2['Email']."</td>";
echo "<td>".$query2['PhoneNum']."</td>";
echo "<td>".$query2['CSPSNum']."</td>";
echo "<td>".$query2['password']."</td></tr>";
}
?></center>
</table>


<br><a href="default.html">Home</a><br>


</body>
</html>