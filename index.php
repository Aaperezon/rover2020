<!DOCTYPE html>
<html>

    <head>
        <title>Telemetry 2020</title>
        <link rel="stylesheet" href="./libs/bootstrap-4.3.1-dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <script src="./libs/bootstrap-4.3.1-dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        <script src="./libs/js/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"> </script>
        <script src="./libs/js/Chart.js"> </script>

        <link rel=“stylesheet” type=“text/css” href=“./libs/css/style.css” >
        <!--<h1>Telemetry 2020 - by Aaron Perez Ontiveros</h1>  -->   
    
    </head> 

    <body>

        <div class="container">
            <div class="row">
                <div class="col">
                1 of 2
                <canvas id="THGraph"></canvas>

                </div>
                <div class="col">
                2 of 2
                <canvas id="interface" width="1900" height="910"></canvas>

                </div>
            </div>
            <div class="row">
                <div class="col">
                1 of 3
                </div>
                <div class="col">
                2 of 3
                </div>
                <div class="col">
                3 of 3
                </div>
            </div>
        </div>
      



        <script src="interface.js" ></script>

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