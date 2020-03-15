<?php
require "Connection.php";
$result=null;
$bindings = [];
$existingParameters = [];
$idBind = null;
if($pdo!=null){
    error_log("Connection is not null");

    $parameters = ['temperature', 'humidity', 'flex','vibration_fl','vibration_fr','vibration_rl','vibration_rr', 'gyro_pitch','gyro_roll','gravity','bpm_1','bpm_2','rpm', 'battery', 'gps_latitude', 'gps_longitude', 'steer', 'gasOH', 'gasCO', 'gasOHAlert', 'gasCOAlert', 'task1', 'task2', 'task3', 'task4', 'task5', 'NHP', 'CEP', 'BCP', 'APP', 'LCP'];
    for($i = 0; $i < sizeof($parameters); $i++){
        if(isset($_GET[$parameters[$i]])){
            if($i == 0 && $parameters[0] = "id"){
                $idBind = $_GET[$parameters[$i]];
            }else{
                $existingParameters[] = $parameters[$i] . ' = ?';
                $bindings[] = $_GET[$parameters[$i]];

            }
        }
    }
    if($result==null && $idBind!=null){
            $existingParameters = implode(", ",$existingParameters);
            $sql = "UPDATE reading SET $existingParameters WHERE id = '$idBind'";
            $stmt = $pdo->prepare($sql);
            if($stmt->execute($bindings)){
                $result = "Update Success";
            }
            else{
                $result = "Update Error";
            }
    }
}else{
    $data = "Connection error";
}
echo json_encode($result);
?>