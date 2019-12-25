<!DOCTYPE html>
<html>
    <head>
        <title>Insert</title>
    </head>
</html>
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "rover2020";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = "INSERT INTO reading(
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
        light
        ) 
        
    VALUES(
        CURRENT_TIMESTAMP, 	/*tiempo*/
        25,   			/*temperature*/
        8.2,			/*humidity*/
        90.3, 			/*flex_fr*/
        80.4, 			/*flex_fl*/
        10.5, 			/*flex_rr*/	
        90.7, 			/*flex_rl*/
        .1, 			/*gyro_x*/
        -.1, 			/*gyro_y*/	
        .1,			/*gyro_z*/
        52.2			/*light*/
        )";
    

    // use exec() because no results are returned
    $conn->exec($sql);
    //echo "New reading added successfully";
    }
catch(PDOException $e)
    {
    echo $sql . "<br>" . $e->getMessage();
    }

$conn = null;
?>