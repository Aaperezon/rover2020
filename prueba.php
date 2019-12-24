<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "rover2020";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } 
    $sql = "SELECT  * FROM reading WHERE id=6";
    $result = $conn->query($sql);
    echo json_encode($result);
?>