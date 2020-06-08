<?php

require_once('../db/db.php');
parse_str(file_get_contents('php://input'), $data);
$sql = 'UPDATE task SET ';
$cols = array();
foreach ($data as $key => $val) {
	array_push($cols, $key . '=' . $val);
}
$str = implode($cols, ', ');
$sql .= $str . ' WHERE id = ' . $_REQUEST['id'];
$updated = $db->query($sql);
$res = $updated->affectedRows();

?>