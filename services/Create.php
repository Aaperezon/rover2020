<?php
require "Connection.php";
$bindings = [];
$result=null;
if($pdo!=null){
    error_log("Connection is not null");
    $parameters = ['temperature', 'humidity', 'flex','vibration_fl','vibration_fr','vibration_rl','vibration_rr', 'gyro_pitch','gyro_roll','gyro_yaw','bpm_1','bpm_2','rpm', 'battery', 'gps_latitude', 'gps_longitude', 'gps_altitude', 'steer'];
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
        $sql = 'INSERT INTO reading( time, temperature, humidity, flex, vibration_fl, vibration_fr, vibration_rl, vibration_rr, gyro_pitch, gyro_roll, gyro_yaw, bpm_1, bpm_2, rpm, battery, gps_latitude, gps_longitude, gps_altitude, steer)
        VALUES (CURRENT_TIMESTAMP,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
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