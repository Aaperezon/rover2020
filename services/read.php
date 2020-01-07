<?php
require "Connection.php";
$data = [];
if($pdo!=null){
    error_log("Connection is not null");
    $sql = "SELECT * FROM reading ORDER BY id DESC LIMIT 50";
	$stmt = $pdo->prepare($sql);
	$stmt->execute();
	while($row = $stmt->fetch(PDO::FETCH_NUM))
        $data[] = $row;
}else{
    $data = "Connection error";
}
echo json_encode($data);
?>