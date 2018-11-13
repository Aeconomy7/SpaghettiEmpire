<?php
  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json; charset=UTF-8");

  $conn = new mysqli("localhost", "root", "F00L\$MUD!", "spaghetti");

  if($conn->connect_errno){
    echo 'Failed to connect to MySQL: (' . $conn->connect_errno . ') ' . $conn->connect_error;
  }

  $data = json_decode(file_get_contents('php://input'));
  $date = $data->date;
  $sid = $data->sid;
  $comment = $data->comment;
  $manageronly = $data->manageronly;

  $result = $conn->query('INSERT INTO feedback (date, sid, comment, manageronly) VALUES (\'' . $date . '\',' . $sid . ',\'' . $comment . '\',\'' . $manageronly . '\')');

  echo($result);

?>
