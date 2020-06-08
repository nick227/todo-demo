<?php

require_once('../db/db.php');
$res = $db->query('SELECT * FROM severity_type')->fetchAll();

?>