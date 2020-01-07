<!DOCTYPE html>
<html>

    <head>
        <title>Telemetry 2020</title>
        <script src="./libs/js/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"> </script>
        <link rel="stylesheet" href="./libs/css/style.css" >
        
        <link rel="stylesheet" href="./libs/bootstrap-4.3.1-dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <script src="./libs/bootstrap-4.3.1-dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

        <script src="./libs/js/Chart.js"> </script>
        <script src="./libs/js/jQueryRotate.js"> </script>
        <script src="./libs/js/highcharts.js"> </script>
        <!-- 
            <meta http-equiv="refresh" content=".1">  
        -->

    
    </head> 

    <body>

        <div class = "MainContainer" style>
            <canvas id="interface" width="1900" height="910"></canvas>
        </div>
        <div class="IMUGraphContainer">
            <canvas id="IMUGraph" width="1010" height="320"></canvas>
        </div>
        <div class = "TemperatureGraphContainer">
            <canvas id="TemperatureGraph" width="700" height="150"></canvas>
        </div>
        <div class = "HumidityGraphContainer">
            <canvas id="HumidityGraph" width="700" height="150"></canvas>
        </div>



        <script src="interface.js" ></script>
        <img class = "PitchBackContainer" src="./images/IMUBackgroundPitch" alt="Pitch">
        <img class = "RollBackContainer" src="./images/IMUBackgroundRoll" alt="Roll">
        <img class = "YawBackContainer" src="./images/IMUBackgroundYaw" alt="Yaw">
        <img class = "PitchContainer" id = "Pitch"  src="./images/pitch" alt="Pitch">
        <img class = "RollContainer" id = "Roll"  src="./images/roll" alt="Roll">
        <img class = "YawContainer" id = "Yaw"  src="./images/yaw" alt="Yaw">
        <?php
            //require './services/read.php';
            //require './services/insert.php';
            //require './services/deleteRow.php';
        ?> 


        <!--
        localhost/rover/?temperature=20&humidity=30&flex_fr=30&flex_fl=30&flex_rr=30&flex_rl=30&gyro_x=30&gyro_y=30&gyro_z=30&light=40
        
        localhost/rover/?id=8
        -->


    </body>

</html>