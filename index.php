<!DOCTYPE html>
<html>

    <head>
        <title>Telemetry 2020</title>
        <script src="./libs/js/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"> </script>
        <link rel="stylesheet" href="./libs/css/style.css" >
        <link rel="stylesheet" href="./libs/css/ol.css" >
        <link rel="stylesheet" href="./libs/css/ol.css.map" >
        
        <link rel="stylesheet" href="./libs/bootstrap-4.3.1-dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <script src="./libs/bootstrap-4.3.1-dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

        <script src="./libs/js/Chart.js"> </script>
        <script src="./libs/js/jQueryRotate.js"> </script>
        <script src="./libs/js/highcharts.js"> </script>
        <script src="./libs/js/ol.js"> </script>
        <script src="./libs/js/ol.js.map"> </script>
        <script src="./libs/js/arcgis.js"> </script>
        <!-- 
            <meta http-equiv="refresh" content=".1">  
        -->

    
    </head> 

    <body style="background-color:#000000;">

    <canvas id="interface" width="0" height="0"></canvas>

    <div class = "container-fluid" >
            <div class="row" >
                <div class="col-4">
                    <canvas id="TemperatureGraph"  width="700" height="150"></canvas>
                </div>
                <div class="col-1">
                    <canvas id="TemperatureData"  width="700" height="150"></canvas>
                </div>
                <div class="col-2">
                    Battery life
                </div>
                <div class="col-4">
                    <canvas id="HR1" width="700" height="150"></canvas>
                </div>
                <div class="col-1">
                    <canvas id="HR1Data"></canvas>
                </div>
            </div>
            <div class="row">
                <div class="col-4">
                    <canvas id="HumidityGraph" width="700" height="150"></canvas>
                </div>
                <div class="col-1">
                    <canvas id="HumidityData" width="700" height="150"></canvas>
                </div>
                <div class="col-2">
                    Steering Wheel
                </div>
                <div class="col-4">
                    <canvas id="HR2" width="700" height="150"></canvas>
                </div>
                <div class="col-1">
                    <canvas id="HR2Data"></canvas>
                </div>
            </div>
            <div class="row">
                <div class="col-4">
                    <img class = "PitchBackContainer" src="./images/IMUBackgroundPitch" alt="Pitch">
                    <img class = "RollBackContainer" src="./images/IMUBackgroundRoll" alt="Roll">
                    <img class = "YawBackContainer" src="./images/IMUBackgroundYaw" alt="Yaw">
                    <img class = "PitchContainer" id = "Pitch"  src="./images/pitch" alt="Pitch">
                    <img class = "RollContainer" id = "Roll"  src="./images/roll" alt="Roll">
                    <img class = "YawContainer" id = "Yaw"  src="./images/yaw" alt="Yaw">
                    <br><br><br><br><br><br>
                    <canvas id="IMUGraph" width="500" height="150"></canvas>

                </div>
                <div class="col-3">
                    Suspension animation
                </div>
                <div class="col-5">
                    GPS
                    <div class = "gpsContainer"id="GPS"></div>
                </div>
            </div>
           
            <div class="row">
                <div class="col-3">
                    <img class = "nasaLogoContainer" src="./images/nasaLogo" alt="">
                
                    <canvas id="DateTime"></canvas>

                </div>
                <div class="col-4">
                    <canvas id="RPM" width="500" height="150"></canvas>
                </div>
                <div class="col-1">
                <canvas id="RPMData" width="500" height="150"></canvas>

                </div>
                <div class="col-4">
                <canvas id="PROTOCOLS"></canvas>
                    <img class = "logoContainer" src="./images/logo" alt="logo">
                </div>
            </div>











        </div>
    
        <script src="interface.js" ></script>
        
        <!--
        <?php
            //require './services/read.php';
            //require './services/insert.php';
            //require './services/deleteRow.php';
        ?> 
        -->

        <!--
        localhost/rover/services/Create.php/?temperature=30&humidity=30&flex=30&vibration_fl=30&vibration_fr=30&vibration_rl=30&vibration_rr=30&gyro_pitch=30&gyro_roll=30&gyro_yaw=30&bpm_1=30&bpm_2=30&rpm=30&battery=30&gps_latitude=30&gps_longitude=30&gps_altitude=30&steer=30

        
        localhost/rover/?id=8
        -->


    </body>

</html>