<?php
  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "rover2020";

  // Create connection
  $conexion = new mysqli($servername, $username, $password, $dbname);
?>
<!DOCTYPE html>
<html>
    <head>
        <title>Read</title>

    <body>
        <br><br>
        <table>
            <tr>    
                <td>Time</td>
                <td>  </td>
                <td>Temperature</td>
                <td>  </td>
                <td>Humidity</td>
                <td>  </td>
                <td>Flex_fr</td>
                <td>  </td>
                <td>Flex_fl</td>
                <td>  </td>
                <td>Flex_rr</td>
                <td>  </td>
                <td>Flex_rl</td>
                <td>  </td>
                <td>Gyro_x</td>
                <td>  </td>
                <td>Gyro_y</td>
                <td>  </td>
                <td>Gyro_z</td>
                <td>  </td>
                <td>Light</td>
                <td>  </td>

            </tr>
            <?php
            $sql = "SELECT * FROM reading ORDER BY id DESC LIMIT 1";
            $result=mysqli_query($conexion,$sql);
            while($mostrar = mysqli_fetch_array($result)){
            ?>
                <?php $timeVar = $mostrar['time'] ?>
                <?php $temperatureVar = $mostrar['temperature'] ?>
                <?php $humidityVar = $mostrar['humidity'] ?>
                <?php $flex_frVar = $mostrar['flex_fr'] ?>
                <?php $flex_flVar = $mostrar['flex_fl'] ?>
                <?php $flex_rrVar = $mostrar['flex_rr'] ?>
                <?php $flex_rlVar = $mostrar['flex_rl'] ?>
                <?php $gyro_xVar = $mostrar['gyro_x'] ?>
                <?php $gyro_yVar = $mostrar['gyro_y'] ?>
                <?php $gyro_zVar = $mostrar['gyro_z'] ?>
                <?php $lightVar = $mostrar['light'] ?>
                <tr>
                    <td><?php echo $timeVar?></td>
                    <td>  </td>
                    <td><?php echo $temperatureVar?></td>
                    <td>  </td>
                    <td><?php echo $humidityVar?></td>
                    <td>  </td>
                    <td><?php echo $flex_frVar?></td>
                    <td>  </td>
                    <td><?php echo $flex_flVar?></td>
                    <td>  </td>
                    <td><?php echo $flex_rrVar?></td>
                    <td>  </td>
                    <td><?php echo $flex_rlVar?></td>
                    <td>  </td>
                    <td><?php echo $gyro_xVar?></td>
                    <td>  </td>
                    <td><?php echo $gyro_yVar?></td>
                    <td>  </td>
                    <td><?php echo $gyro_zVar?></td>
                    <td>  </td>
                    <td><?php echo $lightVar?></td>
                    <td>  </td>
                </tr>
            <?php
            }
            ?>


           
        </table>
        


    </body>

</html>
<?php
    function GetTemperature(){
        return $temperatureVar;
    }
    function GetHumidity(){
        return $humidityVar;
    }
    function GetFlex_fr(){
        return $flex_frVar;
    }
    function GetFlex_fl(){
        return $flex_flVar;
    }
    function GetFlex_rr(){
        return $flex_rrVar;
    }
    function GetFlex_rl(){
        return $flex_rlVar;
    }
    function GetGyro_x(){
        return $gyro_xVar;
    }
    function GetGyro_y(){
        return $gyro_yVar;
    }
    function GetGyro_z(){
        return $gyro_zVar;
    }
    function GetLight(){
        return $lightVar;
    }
    
?>