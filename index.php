<!DOCTYPE html>
<html>

    <head>
        <title>Telemetry 2020</title>
        <h1>Telemetry 2020 - by Aaron Perez Ontiveros</h1>     </head>

    <body>

        <script
        src="https://code.jquery.com/jquery-3.4.1.min.js"
        integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
        crossorigin="anonymous"></script>
        
        <canvas id="interface" width="1800" height="850"></canvas>
        <script src="interface.js" ></script>
        <?php
            require './services/read.php';
            require './services/insert.php';
            require './services/deleteRow.php';
        ?> 


        <!--
        localhost/rover/?temperature=20&humidity=30&flex_fr=30&flex_fl=30&flex_rr=30&flex_rl=30&gyro_x=30&gyro_y=30&gyro_z=30&light=40
        
        localhost/rover/?id=8
        
        -->


    </body>

</html>