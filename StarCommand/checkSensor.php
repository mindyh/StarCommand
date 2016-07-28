<?php
	include("config.php");

	$sensor = $_POST['sensor'];
	$expected_state = $_POST['state'];
	
	$query = sprintf("SELECT * FROM currSensors WHERE name = '%s'", mysql_real_escape_string($sensor));
	$result = mysql_query($query)or die(mysql_exception); 
	$row = mysql_fetch_assoc($result);
	$actual_state = $row['state'];
	
	if ($actual_state == $expected_state) echo 'true';
	else echo 'false';
	
	mysql_free_result($result);
?>