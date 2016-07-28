<?php
	include("config.php");
	
	$query = sprintf("SELECT states FROM sensors WHERE name='%s' ORDER BY RAND() LIMIT 1", mysql_real_escape_string($sensor));
	
	$result = mysql_query($query)or die(mysql_exception); 
	$row = mysql_fetch_assoc($result);
	echo $row['states']; 
	
	mysql_free_result($result);
?>