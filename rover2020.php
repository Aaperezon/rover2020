<?php
    $conexion = mysqli_connect('localhost','root','','rover2020');
    
?>

<!DOCTYPE html>
<html>

    <head>
        <h1>ROVER 2020 - by AaronPerezOntiveros</h1>
    </head>

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
            $sql="SELECT * from reading";
            $result=mysqli_query($conexion,$sql);
            while($mostrar = mysqli_fetch_array($result)){
            ?>
                <tr>
                    <td><?php echo $mostrar['time'] ?></td>
                    <td>  </td>
                    <td><?php echo $mostrar['temperature'] ?></td>
                    <td>  </td>
                    <td><?php echo $mostrar['humidity'] ?></td>
                    <td>  </td>
                    <td><?php echo $mostrar['flex_fr'] ?></td>
                    <td>  </td>
                    <td><?php echo $mostrar['flex_fl'] ?></td>
                    <td>  </td>
                    <td><?php echo $mostrar['flex_rr'] ?></td>
                    <td>  </td>
                    <td><?php echo $mostrar['flex_rl'] ?></td>
                    <td>  </td>
                    <td><?php echo $mostrar['gyro_x'] ?></td>
                    <td>  </td>
                    <td><?php echo $mostrar['gyro_y'] ?></td>
                    <td>  </td>
                    <td><?php echo $mostrar['gyro_z'] ?></td>
                    <td>  </td>
                    <td><?php echo $mostrar['light'] ?></td>
                    <td>  </td>
                </tr>
            <?php
            }
            ?>
        </table>
    </body>

</html>