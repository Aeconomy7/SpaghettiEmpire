<?php
  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json; charset=UTF-8");

  $conn = new mysqli("localhost", "******", "******", "******");

  if($conn->connect_errno){
    echo 'Failed to connect to MySQL: (' . $conn->connect_errno . ') ' . $conn->connect_error;
  }

  $result = $conn->query('SELECT * FROM discount');

  $outp = '';
  while($rs = $result->fetch_array()){
    if($outp != ""){ $outp .= ","; }
    $outp .= '{"name":"' . $rs["name"] . '",';
    $outp .= '"description":"' . $rs["description"] . '",';
    $outp .= '"pt_cost":"' . $rs["pt_cost"] . '",';
    $outp .= '"type":"' . $rs["type"] . '",';
    $outp .= '"discount_amt":"' . $rs["discount_amt"] . '"}';
  }

  $outp = '{"records":['.$outp.']}';

  echo($outp);
?>
