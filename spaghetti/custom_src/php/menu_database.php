<?php
  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json; charset=UTF-8");

  global $conn = new mysqli("localhost", "sc00by", "", "spaghetti");

  if($conn->connect_errno){
    echo 'Failed to connect to MySQL: (' . $conn->connect_errno . ') ' . $conn->connect_error;
  }
  echo $conn->host_info . "\n";

  function select_menu_item($type)
  {
    $result = $conn->query('SELECT * FROM menu_items WHERE type = \'' . $type . '\'');

    $outp = '';
    while($rs = $result->fetch_array(MYSQL_ASSOC)){
      if($outp != ""){ $outp .= ","; }
      $outp .= '{"item_name":"' . $rs["item_name"] . '",';
      $outp .= '"price":"' . $rs["price"] . '",';
      $outp .= '"description":"' . $rs["description"] . '",';
      $outp .= '"ingredients":"' . $rs["ingredients"] . '",';
      $outp .= '"img_path":"' . $rs["img_path"] . '"}';
    }

    $outp = '{"records":['.$outp.']}';

    echo($outp);
  }
?>
