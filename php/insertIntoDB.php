<?php 
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Allow-Methods, Status, WeFindErrorCode, WeFindErrorDesc");
header("Access-Control-Allow-Methods: OPTIONS, POST, GET, UPDATE, DELETE");

/ *print_r($_POST); */

$con=mysqli_connect("localhost","superjh2_tyler","grantt","superjh2_appdev");

/* Get all of the post variables */
$v01 = $_POST['v01']; /* Timestamp */
$v02 = $_POST['rep-number']; /* reportNum */
$v03 = $_POST['patroller-1']; /* CSPSNum1 */
$v04 = $_POST['patroller-2']; /* CSPSNum2 */
$v05 = $_POST['patroller-3']; /* CSPSNum3 */
$v06 = $_POST['v06']; /* DOB */
$v07 = $_POST['pat-age']; /* age */
$v08 = $_POST['pat-gender']; /* gender */ 
$v09 = $_POST['injuries[]']; /* complaints */
$v10 = $_POST['treatments[]']; /* treatmentProtocol */
$v11 = $_POST['inc-location']; /* incidentLocation */
$v12 = $_POST['inc-classification']; /* runClassification */
$v13 = $_POST['inc-activity']; /* activity */
$v14 = $_POST['inc-involvement']; /* involvement */ 
$v15 = $_POST['inc-weather']; /* weather */
$v16 = $_POST['inc-light']; /* light */
$v17 = $_POST['inc-temp']; /* temp */
$v18 = $_POST['inc-snow']; /* snow */ 
$v19 = $_POST['inc-surface']; /* surface */
$v20 = $_POST['inc-equiptment']; /* equipment */
$v21 = $_POST['inc-helmet']; /* helmet */
$v22 = $_POST['inc-ability']; /* ability */
$v23 = $_POST['inc-to-aid']; /* firstAid */
$v24 = $_POST['inc-from-base']; /* fromBase */
$v25 = $_POST['collision[]']; /* collision */
$v26 = $_POST['inc-non-collision']; /* nonCollision */

/*
$return = mysqli_query($con,"INSERT INTO Accident (Timestamp, reportNum, CSPSNum1, CSPSNum2, CSPSNum3, DOB, age, gender, complaints, treatmentProtocol, incidentLocation, runClassification, activity, involvement, weather, light, temp, snow, surface, equipment, helmet, ability, firstAid, fromBase, collision, nonCollision) VALUES ($v01, $v02, $v03, $v04, $v05, $v06, $v07, $v08, $v09, $v10, $v11, $v12, $v13, $v14, $v15, $v16, $v17, $v18, $v19, $v20, $v21, $v22, $v23, $v24, $v25, $v26)");


echo $return;
*/


?> 