<?php
  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json; charset=UTF-8");

  $conn = new mysqli("localhost", "root", "F00L\$MUD!", "spaghetti");

  if($conn->connect_errno){
    echo 'Failed to connect to MySQL: (' . $conn->connect_errno . ') ' . $conn->connect_error;
  }

  echo file_get_contents('php://input');

  $result = $conn->query('INSERT INTO ordered_items (phone_no, sid, item_name, price, active) VALUES (\'' . $phone_no . '\',\'' . $sid . '\',\'' . $item_name . '\',\'' . $price . '\',\'' . $active . '\')');

  echo($result);
  }
?>
