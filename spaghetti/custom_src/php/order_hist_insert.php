<?php
  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json; charset=UTF-8");

  $conn = new mysqli("localhost", "******", "******", "******");

  if($conn->connect_errno){
    echo 'Failed to connect to MySQL: (' . $conn->connect_errno . ') ' . $conn->connect_error;
  }

  $data = json_decode(file_get_contents('php://input'));
  $phone_no = $data->phone_no;
  $amt = $data->amt;

  $result = $conn->query('INSERT INTO order_hist (phone_no, amt) VALUES (\'' . $phone_no . '\',' . $amt . ')');

  echo($result);

?>
