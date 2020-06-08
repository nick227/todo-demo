<?php

$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
  case "DELETE":
    $path = './routes/delete.php';
    require_once($path);
    header('Content-Type: application/json');
    echo json_encode($res);
    break;
  case 'PUT':
    $path = './routes/update.php';
    require_once($path);
    header('Content-Type: application/json');
    echo json_encode($res);
    break;
  case 'POST':
    $path = './routes/add.php';
    require_once($path);
    header('Content-Type: application/json');
    echo json_encode($res);
    break;
  case 'GET':
    $path = './routes/' . $_GET['get'] . '.php';
    require_once($path);
    header('Content-Type: application/json');
    echo json_encode($res);
    break;
  default:
    $res = '';
    break;
}

?>