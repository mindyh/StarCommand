<?php
	//Connect To Database
	$hostname='localhost';
	$username='evansfo1_strcmdr';
	$password='ballasgottaball!';
	$dbname='evansfo1_starcommand';
	
	//Connects to mySQL table. If it fails then you DIE.
	$con = mysql_connect($hostname,$username, $password) OR DIE ('Unable to connect to database! Please try again later.');

	mysql_select_db($dbname, $con);
	
	if(! $con )
	{
		die('Could not connect: ' . mysql_error());
	}
	echo 'Connected successfully';
?>