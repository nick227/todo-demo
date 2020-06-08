<?php

require_once('../db/db.php');
$res = $db->query('SELECT t.id as id, text, target_completion_date, final_completion_date, create_date, t.severity_id, t.status_id, st.type AS severity, stt.title AS status 
					FROM task t 
					LEFT JOIN severity_type st ON t.severity_id = st.id 
					LEFT JOIN status_type stt ON t.status_id = stt.id 
					WHERE user_id = "' . $_GET['id'] . '" 
					ORDER BY create_date ASC')->fetchAll();

?>