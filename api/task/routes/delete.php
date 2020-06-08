<?php

require_once('../db/db.php');
$sql = "DELETE FROM task WHERE id = " . $_GET['id'];
$deleted = $db->query($sql);
$res = $deleted->affectedRows();

?>