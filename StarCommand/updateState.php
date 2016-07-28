<?
include 'config.php';

/* pot : value */

//$json = $_POST['value'];

$post = $_POST['json'];
$json = json_decode("'" . $post . "'");

$name = $json['name'];
$state = $json['state'];

error_log("post type: ". gettype($post));
error_log("post: " . $post);
error_log("json type: ". gettype($json));
error_log("json: " . $json);
error_log("name: " . $name);

/*$request=sprintf("UPDATE currSensors SET state='%s' WHERE name='%s'", mysql_real_escape_string($state), mysql_real_escape_string($name));

if (!mysql_query($request))
{ die('Error: ' . mysql_error()); }*/


?>