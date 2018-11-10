<?php
  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json; charset=UTF-8");

  $conn = new mysqli("localhost", "root", "F00L\$MUD!", "spaghetti");

  if($conn->connect_errno){
    echo 'Failed to connect to MySQL: (' . $conn->connect_errno . ') ' . $conn->connect_error;
  }

  $data = json_decode(file_get_contents('php://input'));
  $original_item_name = $data->original_item_name;
  $new_item_name = $data->new_item_name;
  $price = $data->price;
  $description = $data->description;
  $ingredients = $data->ingredients;
  $img_path = $data->img_path;

  $result = $conn->query('UPDATE menu_items SET item_name=\'' . $new_item_name . '\', price=' . $price . ', description=\'' . $description . '\', ingredients=\'' . $ingredients . '\', img_path=\'' . $img_path . '\' WHERE item_name=\'' . $original_item_name . '\'');
?>
