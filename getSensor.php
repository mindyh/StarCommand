<?php
	include("config.php");
	
	$query = "SELECT name FROM sensors ORDER BY RAND() LIMIT 1";
	$result = mysql_query($query)or die(mysql_exception); 
	$row = mysql_fetch_assoc($result);
	echo $row['name'];
	
	mysql_free_result($result);
?>