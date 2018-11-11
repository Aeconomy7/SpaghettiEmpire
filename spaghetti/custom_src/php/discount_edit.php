<?php
  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json; charset=UTF-8");

  $conn = new mysqli("localhost", "root", "F00L\$MUD!", "spaghetti");

  if($conn->connect_errno){
    echo 'Failed to connect to MySQL: (' . $conn->connect_errno . ') ' . $conn->connect_error;
  }

  $data = json_decode(file_get_contents('php://input'));
  $original_name = $data->original_name;
  $new_name = $data->new_name;
  $description = $data->description;
  $pt_cost = $data->pt_cost;
  $type = $data->type;
  $discount_amt = $data->discount_amt;

  $result = $conn->query('UPDATE discount SET name=\'' . $new_name . '\', description=' . $description . ', pt_cost=\'' . $pt_cost . '\', type=\'' . $type . '\', discount_amt=\'' . $discount_amt . '\' WHERE name=\'' . $original_name . '\'');

  echo($result);
?>
