$.get("./services/read.php",function(response){ 
    //console.log(response);
    response = JSON.parse(response);
    response  = String(response);
    var splitData = response.split(',');
    id = splitData[0];
    time = splitData[1], 
    temperature = splitData[2], 
    humidity = splitData[3], 
    flex_fr = splitData[4], 
    flex_fl = splitData[5], 
    flex_rr = splitData[6], 
    flex_rl = splitData[7],
    gyro_x = splitData[8], 
    gyro_y = splitData[9], 
    gyro_z = splitData[10], 
    light = splitData[11];
    console.log(typeof(id) + " " + time + " "  + temperature + " " + humidity + " " + flex_fr + " " + flex_fl + " " + flex_rr + " " + flex_rl + " " + gyro_x + " " + gyro_y + " " + gyro_z + " " + light);
    
  })
  console.log(id+ "Hola" + time + temperature + humidity + flex_fr + flex_fl + flex_rr + flex_rl + gyro_x + gyro_y + gyro_z + light);
  
  