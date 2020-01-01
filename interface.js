var canvas = document.getElementById('interface');
var intX = 1440;
var intY = 900;
var screen;
var id, time, temperature, humidity, flex_fr, flex_fl, flex_rr, flex_rl, gyro_x, gyro_y, gyro_z, light;

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
  console.log(id + " " + time + " "  + temperature + " " + humidity + " " + flex_fr + " " + flex_fl + " " + flex_rr + " " + flex_rl + " " + gyro_x + " " + gyro_y + " " + gyro_z + " " + light);

  
})
//console.log(id + time + temperature + humidity + flex_fr + flex_fl + flex_rr + flex_rl + gyro_x + gyro_y + gyro_z + light);



if (canvas.getContext){
  screen = canvas.getContext('2d');
  screen.fillStyle = "rgba(0,255,0,0.3)";
  screen.fillRect(0,0,intX,intY);
  screen.strokeRect(0,0,intX,intY);
  Thermometer(30,600);
  IMUPitch(800,600);
  IMUYaw(1100,600);
  IMURoll(1400,600);
  screen.fillStyle = "#000";
  screen.font = "50px Georgia";
  screen.fillText("Telemetry2020 - by Aaron Perez Ontiveros",80,50);

} else {
 alert("Your browser doesn't support canvas.");
}

function Thermometer(posX, posY){
  var thermometer = new Image;
  var measure = 40;
  thermometer.src = './images/thermometer.jpg';
  thermometer.onload = function(){
    screen.drawImage(thermometer, posX, posY, 70, 340);
  }
  screen.lineWidth = "1";
  screen.strokeStyle = "red";
  screen.rect(posX-25,posY+measure+62,140,0);
  screen.stroke();
}
function IMUPitch(posX, posY){
  var pitch = new Image;
  // var measure = 40;
  pitch.src = './images/pitch.png';

  var back = new Image;
  back.src = './images/IMUBackground.png';

  pitch.onload = function(){
    screen.drawImage(pitch, posX+10, posY+85,215,55);
    screen.drawImage(back, posX, posY,240,240);
  }
 
}
function IMUYaw(posX, posY){
  var yaw = new Image;
  // var measure = 40;
  yaw.src = './images/yaw.png';

  var back = new Image;
  back.src = './images/IMUBackground.png';

  yaw.onload = function(){
    //rotate(10 * Math.PI / 180);
    screen.drawImage(yaw, posX+67, posY+23,105,190);
    screen.drawImage(back, posX, posY,240,240);

  }
}
function IMURoll(posX, posY){
  var roll = new Image;
  // var measure = 40;
  roll.src = './images/roll.png';

  var back = new Image;
  back.src = './images/IMUBackground.png';
  
  roll.onload = function(){
    screen.drawImage(roll, posX+29, posY+70,180,90);
    screen.drawImage(back, posX, posY,240,240);

  }
}





