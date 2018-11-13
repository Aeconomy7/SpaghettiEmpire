<?php
  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json; charset=UTF-8");

  $conn = new mysqli("localhost", "root", "F00L\$MUD!", "spaghetti");

  if($conn->connect_errno){
    echo 'Failed to connect to MySQL: (' . $conn->connect_errno . ') ' . $conn->connect_error;
  }

  $data = json_decode(file_get_contents('php://input'));
  $original_phone_no = $data->original_phone_no;
  $new_phone_no = $data->new_phone_no;
  $sid = $data->sid;

  $result = $conn->query('UPDATE ordered_items SET phone_no=\'' . $new_phone_no . '\' WHERE phone_no=\'' . $original_phone_no . '\' AND sid=' . $sid . ' AND active is true');

  echo($result);
?>
