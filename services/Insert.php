<?php
require "connection.php";
$bindings = [];
$result=null;
if($pdo!=null){
    error_log("Connection is not null");
    $parameters = ['temperature', 'humidity', 'flex_fr', 'flex_fl','flex_rr','flex_rl','gyro_x','gyro_y','gyro_z', 'light'];
    for($i = 0; $i < sizeof($parameters); $i++){
        if(!isset($_GET[$parameters[$i]])){
            $result = "Parameter ".$parameters[$i]." missing";
            break;
        }
        else{
            $bindings[] = $_GET[$parameters[$i]];
        }
    }
    if($result==null){
        $sql = 'INSERT INTO reading( 
            time, 
            temperature, 
            humidity,
            flex_fr, 
            flex_fl, 
            flex_rr, 
            flex_rl, 
            gyro_x, 
            gyro_y, 
            gyro_z,
            light)
        VALUES (CURRENT_TIMESTAMP,?,?,?,?,?,?,?,?,?,?)';

        $stmt = $pdo->prepare($sql);
        if($stmt->execute($bindings)){
            $result = "Insertion Success";
        }
        else{
            $result = "Insertion Error";

        }
    }
}
else{
    $result = "Connection Error";
}
echo json_encode($result);
?>