<?php
  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json; charset=UTF-8");

  $conn = new mysqli("localhost", "******", "******", "******");

  if($conn->connect_errno){
    echo 'Failed to connect to MySQL: (' . $conn->connect_errno . ') ' . $conn->connect_error;
  }

  $data = json_decode(file_get_contents('php://input'));
  $type = $data->type;
  $item_name = $data->item_name;
  $price = $data->price;
  $description = $data->description;
  $ingredients = $data->ingredients;
  $img_path = $data->img_path;


  $result = $conn->query('INSERT INTO menu_items (type, item_name, price, description, ingredients, img_path) VALUES (\'' . $type . '\',\'' . $item_name . '\',\'' . $price . '\',\'' . $description . '\',\'' . $ingredients . '\',\'' . $img_path .'\')');

  echo($result);

?>
