<?php
  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json; charset=UTF-8");

  $conn = new mysqli("localhost", "root", "F00L\$MUD!", "spaghetti");

  if($conn->connect_errno){
    echo 'Failed to connect to MySQL: (' . $conn->connect_errno . ') ' . $conn->connect_error;
  }

  $result = $conn->query('SELECT * FROM feedback');

  $outp = '';
  while($rs = $result->fetch_array()){
    if($outp != ""){ $outp .= ","; }
    $outp .= '{"date":"' . $rs["date"] . '",';
    $outp .= '"sid":"' . $rs["sid"] . '",';
    $outp .= '"comment":"' . $rs["comment"] . '",';
    $outp .= '"manageronly":"' . $rs["manageronly"] . '"}';
  }

  $outp = '{"records":['.$outp.']}';

  echo($outp);
?>
