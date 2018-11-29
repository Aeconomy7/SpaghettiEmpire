<?php
  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json; charset=UTF-8");

  $conn = new mysqli("localhost", "******", "******", "******");

  if($conn->connect_errno){
    echo 'Failed to connect to MySQL: (' . $conn->connect_errno . ') ' . $conn->connect_error;
  }

  $data = json_decode(file_get_contents('php://input'));
  $phone_no = $data->phone_no;

  $result = $conn->query('SELECT * FROM loyalty WHERE phone_no=\'' . $phone_no . '\'');

  $outp = '';
  while($rs = $result->fetch_array()){
    if($outp != ""){ $outp .= ","; }
    $outp .= '{"phone_no":"' . $rs["phone_no"] . '",';
    $outp .= '"pts":"' . $rs["pts"] . '"}';
  }

  $outp = '{"records":['.$outp.']}';

  echo($outp);
?>
