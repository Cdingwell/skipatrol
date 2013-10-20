<html xmlns="http://www.w3.org/1999/xhtml" lang="pl" xml:lang="pl">
<head>
<meta http-equiv="content-type" content="text/html; charset=utf-8" />

<title>Superior Zone Administration Home</title>
<link rel="stylesheet" type="text/css" href="../css/style.css" media="screen" />
<link rel="stylesheet" type="text/css" href="../css/navi.css" media="screen" />
<script type="text/javascript" src="../js/jquery-1.7.2.min.js"></script>
<script type="text/javascript">
$(function(){
	$(".box .h_title").not(this).next("ul").hide("normal");
	$(".box .h_title").not(this).next("#home").show("normal");
	$(".box").children(".h_title").click( function() { $(this).next("ul").slideToggle(); });
});
</script>
</head>
<body>
<div class="wrap">
	<div id="header">
		<div id="top">
			<div class="left">
				<p>Welcome, <strong><?php echo $_SESSION['username']; ?></strong> [ <a href="logout.php">logout</a> ]</p>
			</div>
			<div class="right">
				<div class="align-right">
					<p>Ski Patrol</p>
				</div>
			</div>
		</div>
		<div id="nav">
			<ul>
				<li class="upp"><a href="index.php">Main</a></li>
				<li class="upp"><a href="patrollers.php">Patrollers</a></li>
				<li class="upp"><a href="form.php">Forms</a></li>
			</ul>
		</div>
	</div>
	
	<div id="content">
		
		<div id="main">	
			<div class="full_w">
				<div class="h_title">Downloads</div>
				<h1>Export Databases</h1>
				<p>Click link to export database as excel file.</p>
				<h2>Unordered list</h2>
				<ul>
					<li><a href="exportPatroller.php">Patroller Database</a></li>
					<p> Patroller database will appear in Downloads as PatrollerDatabaseExport.xls</p>
					<li><a href="exportAccident.php">Accident Database</a></li>
					<p>Accident database will appear in Downloads as AccidentDatabaseExport.xls</p>
				</ul><br><br>
				

			</div>
		</div>
		<div class="clear"></div>
	</div>
</div>

</body>
</html>