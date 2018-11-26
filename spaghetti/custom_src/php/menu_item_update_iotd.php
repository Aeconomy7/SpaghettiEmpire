<?php
  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json; charset=UTF-8");

  $conn = new mysqli("localhost", "root", "F00L\$MUD!", "spaghetti");

  if($conn->connect_errno){
    echo 'Failed to connect to MySQL: (' . $conn->connect_errno . ') ' . $conn->connect_error;
  }

  $result = $conn->query('UPDATE menu_items SET iotd="0" WHERE 1');
  $result = $conn->query('UPDATE menu_items SET iotd="1" WHERE type="dessert" OR type="entree" ORDER BY RAND() LIMIT 1');

  echo($result);
?>
