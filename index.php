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
        <!--<script src="./libs/js/google_maps.js?callback=initMap"></script> -->
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDAbsKOXBsE4l2oSxbqT5U_0nxQSlxtaWY&callback=initMap"></script>

        <!-- 
            <meta http-equiv="refresh" content=".1">  
        -->

    
    </head> 

    <body style="background-color:#000000;">


    <div class = "container-fluid" >
            <div class="row" >
                <div class="col-4" style="border-color:#FFFFFF; border-style:solid; border-width:1px;">
                    <canvas id="TemperatureGraph"  width="700" height="150"></canvas>
                </div>
                <div class="col-1" style="border-color:#FFFFFF; border-style:solid; border-width:1px;">
                    <canvas id="TemperatureData"  width="700" height="150"></canvas>
                </div>
                <div class="col-2" style="border-color:#FFFFFF; border-style:solid; border-width:1px;">
                    <canvas class = "BatteryContainer" id="Battery" ></canvas>

                </div>
                <div class="col-4" style="border-color:#FFFFFF; border-style:solid; border-width:1px;">
                    <canvas id="HR1" width="700" height="150"></canvas>
                </div>
                <div class="col-1" style="border-color:#FFFFFF; border-style:solid; border-width:1px;">
                    <canvas id="HR1Data"></canvas>
                </div>
            </div>
            <div class="row">
                <div class="col-4" style="border-color:#FFFFFF; border-style:solid; border-width:1px;">
                    <canvas id="HumidityGraph" width="700" height="150"></canvas>
                </div>
                <div class="col-1" style="border-color:#FFFFFF; border-style:solid; border-width:1px;">
                    <canvas id="HumidityData" width="700" height="150"></canvas>
                </div>
                <div class="col-2" style="border-color:#FFFFFF; border-style:solid; border-width:1px;">
                    <img class = "SteeringWheelContainer" id="SteeringWheel" src="./images/steeringWheel" alt="steeringWheel">
                </div>
                <div class="col-4" style="border-color:#FFFFFF; border-style:solid; border-width:1px;">
                    <canvas id="HR2" width="700" height="150"></canvas>
                </div>
                <div class="col-1" style="border-color:#FFFFFF; border-style:solid; border-width:1px;">
                    <canvas id="HR2Data"></canvas>
                </div>
            </div>
            <div class="row">
                <div class="col-4" style="border-color:#FFFFFF; border-style:solid; border-width:1px;">
                    <canvas class = "GravityContainer" id="IMUGravity"></canvas>
                    <img class = "GravityContainerImg"  src="./images/gravity" alt="gravityImage">

                    <img class = "PitchBackContainer" src="./images/IMUBackgroundPitch" alt="Pitch">
                    <img class = "RollBackContainer" src="./images/IMUBackgroundRoll" alt="Roll">
                    <img class = "PitchContainer" id = "Pitch"  src="./images/pitch" alt="Pitch">
                    <img class = "RollContainer" id = "Roll"  src="./images/roll" alt="Roll">

                    <br><br><br><br><br><br>
                    <canvas id="IMUGraph" width="500" height="150"></canvas>

                </div>
                <div class="col-3" style="border-color:#FFFFFF; border-style:solid; border-width:1px;">
                    <img class = "RoverContainer"  src="./images/auto" alt="Rover">
                    <img class = "RoverFL" id="FL"  src="./images/ouch" alt="Rover">
                    <img class = "RoverFR" id="FR" src="./images/ouch" alt="Rover">
                    <img class = "RoverRL" id="RL" src="./images/ouch" alt="Rover">
                    <img class = "RoverRR" id="RR" src="./images/ouch" alt="Rover">
                </div>
                <div class="col-5" style="border-color:#FFFFFF; border-style:solid; border-width:1px;">
                    <div class = "gpsContainer"id="GPS"></div>
                </div>
            </div>
           
            <div class="row">
                <div class="col-2" >
                    <img class = "nasaLogoContainer" src="./images/nasaLogo" alt="">
                
                </div>
                <div class="col-4" style="border-color:#FFFFFF; border-style:solid; border-width:1px;">
                    <canvas id="RPM" width="500" height="150"></canvas>
                </div>
                <div class="col-1" style="border-color:#FFFFFF; border-style:solid; border-width:1px;">
                    <canvas id="RPMData" width="500" height="150"></canvas>

                </div>
                <div class="col-3" >
                    <canvas class="protocolContainer" id="Protocols"></canvas>
                </div>
                <div class="col-2" >
                    <img class = "logoContainer" src="./images/logo" alt="logo">
                </div>
            </div>


            <div class="row">
                <div class="col-4" >
                </div>
                <div class="col-2" >
                    <canvas class="dateContainer"id="Date"></canvas>
                </div>
                <div class="col-2" >
                    <canvas class="timeContainer"id="Time"></canvas>
                </div>
                <div class="col-4" >
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
        localhost/rover/services/Create.php/?temperature=30&humidity=30&flex=30&vibration_fl=30&vibration_fr=30&vibration_rl=30&vibration_rr=30&gyro_pitch=30&gyro_roll=30&gravity=30&bpm_1=30&bpm_2=30&rpm=30&battery=30&gps_latitude=30&gps_longitude=30&gps_altitude=30&steer=30&gasOH=30&gasCO=30&gasOHAlert=1&gasCOAlert=0&task1=0&task2=0&task3=0&task4=1&task5=1&NHP=1&CEP=0&BCP=0&APP=0&LCP=0
        http://localhost/rover/services/Create.php/?temperature=30&humidity=30&flex=1&vibration_fl=0&vibration_fr=0&vibration_rl=1&vibration_rr=0&gyro_pitch=30&gyro_roll=30&gravity=30&bpm_1=30&bpm_2=30&rpm=30&battery=30&gps_latitude=30&gps_longitude=30&gps_altitude=30&steer=30&gasOH=30&gasCO=30&gasOHAlert=1&gasCOAlert=0&task1=0&task2=0&task3=0&task4=1&task5=1&NHP=1&CEP=0&BCP=0&APP=0&LCP=0
        
        localhost/rover/?id=8
        -->


    </body>

</html>

