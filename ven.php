<?php 
header("Access-Control-Allow-Origin: *");
header('Content-Type: text/html; charset=utf-8');
var o = $_POST['us'];
echo json_decode(o); 
?>