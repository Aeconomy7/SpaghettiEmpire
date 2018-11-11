<?php
  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json; charset=UTF-8");

  $conn = new mysqli("localhost", "root", "F00L\$MUD!", "spaghetti");

  if($conn->connect_errno){
    echo 'Failed to connect to MySQL: (' . $conn->connect_errno . ') ' . $conn->connect_error;
  }

  $data = json_decode(file_get_contents('php://input'));
  $name = $data->name;
  $description = $data->description;
  $pt_cost = $data->pt_cost;
  $type = $data->type;
  $discount_amt = $data->discount_amt;

  $result = $conn->query('INSERT INTO discount (name, description, pt_cost, type, discount_amt) VALUES (\'' . $name . '\',\'' . $description . '\',\'' . $pt_cost . '\',\'' . $type . '\',\'' . $discount_amt . '\')');

  echo($result);
?>
