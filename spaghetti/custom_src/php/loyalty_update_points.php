<?php
  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json; charset=UTF-8");

  $conn = new mysqli("localhost", "******", "******", "******");

  if($conn->connect_errno){
    echo 'Failed to connect to MySQL: (' . $conn->connect_errno . ') ' . $conn->connect_error;
  }

  $data = json_decode(file_get_contents('php://input'));
  $phone_no = $data->phone_no;
  $pts = $data->pts;

  $result = $conn->query('UPDATE loyalty SET pts=' . $pts . ' WHERE phone_no=\'' . $phone_no . '\'');

  echo($result);
?>
