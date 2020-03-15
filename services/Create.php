<?php
require "Connection.php";
$bindings = [];
$result=null;
if($pdo!=null){
    error_log("Connection is not null");
    $parameters = ['temperature', 'humidity', 'flex','vibration_fl','vibration_fr','vibration_rl','vibration_rr', 'gyro_pitch','gyro_roll','gravity','bpm_1','bpm_2','rpm', 'battery', 'gps_latitude', 'gps_longitude', 'steer', 'gasOH', 'gasCO', 'gasOHAlert', 'gasCOAlert', 'task1', 'task2', 'task3', 'task4', 'task5', 'NHP', 'CEP', 'BCP', 'APP', 'LCP'];

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
        $sql = 'INSERT INTO reading( time, temperature, humidity, flex, vibration_fl, vibration_fr, vibration_rl, vibration_rr, gyro_pitch, gyro_roll, gravity, bpm_1, bpm_2, rpm, battery, gps_latitude, gps_longitude, steer, gasOH, gasCO, gasOHAlert, gasCOAlert, task1, task2, task3, task4, task5, NHP, CEP, BCP, APP, LCP)
        VALUES (CURRENT_TIMESTAMP,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
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