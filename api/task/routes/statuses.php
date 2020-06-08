<?php

require_once('../db/db.php');
$res = $db->query('SELECT * FROM status_type')->fetchAll();

?>