<?php
  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json; charset=UTF-8");

  $conn = new mysqli("localhost", "******", "******", "******");

  if($conn->connect_errno){
    echo 'Failed to connect to MySQL: (' . $conn->connect_errno . ') ' . $conn->connect_error;
  }

  $data = json_decode(file_get_contents('php://input'));
  $phone_no = $data->phone_no;
  $sid = $data->sid;
  $item_name = $data->item_name;
  $price = $data->price;
  $type = $data->type;
  $active = $data->active;

  $result = $conn->query('INSERT INTO ordered_items (phone_no, sid, item_name, price, type, active) VALUES (\'' . $phone_no . '\',\'' . $sid . '\',\'' . $item_name . '\',\'' . $price . '\',\'' . $type . '\',\'' . $active . '\')');

  echo($result);

?>
