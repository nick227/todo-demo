<?php
require_once('../db/db.php');
$json = file_get_contents('php://input');
$data = json_decode($json);
if(isset($data->text)){
	$date = date("Y-m-d H:i:s", strtotime($data->target_completion_date));
	$text = htmlspecialchars($data->text);
	$sql = "INSERT INTO task (text, severity_id, target_completion_date, user_id) VALUE ('{$text}', {$data->severity}, '{$date}', '{$data->user_id}')";

$insert = $db->query($sql);
$res = $insert->affectedRows();}

?>

