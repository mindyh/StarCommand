<?php
	include("config.php");
	
	$query = sprintf("SELECT state FROM currSensors WHERE name='pot'");
	
	$result = mysql_query($query)or die(mysql_exception); 
	$row = mysql_fetch_assoc($result);
	echo $row['state']; 
	
	mysql_free_result($result);
?>