<?php
	include("config.php");
	
	$query = sprintf("SELECT value FROM game WHERE name = 'lives'");
	
	$result = mysql_query($query)or die(mysql_exception); 
	$row = mysql_fetch_assoc($result);
	echo $row['value']; 
	
	mysql_free_result($result);
?>