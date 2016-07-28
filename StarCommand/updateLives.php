<?
	include 'config.php';
	
	$numLives = $_POST['lives'];

	$request=sprintf("UPDATE game SET value='%s' WHERE name='lives'", mysql_real_escape_string($numLives));
	
	echo $numLives;

	mysql_query($request);
?>