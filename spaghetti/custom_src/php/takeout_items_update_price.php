<?php
  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json; charset=UTF-8");

  $conn = new mysqli("localhost", "******", "******", "******");

  if($conn->connect_errno){
    echo 'Failed to connect to MySQL: (' . $conn->connect_errno . ') ' . $conn->connect_error;
  }

  $data = json_decode(file_get_contents('php://input'));
  $name = $data->name;
  $phone_no = $data->phone_no;
  $price = $data->price;

  $result = $conn->query('UPDATE takeout_items SET price=' . $price . ' WHERE item_name="' . $name . '" AND phone_no="' . $phone_no . '" AND active="1" LIMIT 1');

  echo($result);
?>
