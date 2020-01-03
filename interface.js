/*#######################
Save data from server.
#########################*/
var id, time, temperature, humidity, flex_fr, flex_fl, flex_rr, flex_rl, gyro_x, gyro_y, gyro_z, light;
//console.log(id + " " + time + " "  + temperature + " " + humidity + " " + flex_fr + " " + flex_fl + " " + flex_rr + " " + flex_rl + " " + gyro_x + " " + gyro_y + " " + gyro_z + " " + light);
$.ajax({
  type: "GET",
  url: "./services/read.php",
  datatype: "json",
  async: false,
  success: function(responseFunction){
    responseFunction = JSON.parse(responseFunction);
    responseFunction  = String(responseFunction);
    var splitData = responseFunction.split(',');
    SaveResponse(splitData);

  }
});
function SaveResponse(splitData){
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

}
/*#######################
Canvas.
#########################*/
var canvas = document.getElementById('interface');
var intX = 1900;
var intY = 910;
var screen;

if (canvas.getContext){
  screen = canvas.getContext('2d');
  Background();
  Title();

  Flex(0,60);
  Thermometer(0,380);
  Light(0,660);
  IMU(770,60);
  DateTime(770,880);


} else {
 alert("Your browser doesn't support canvas.");
}

function Title(){
  screen.fillStyle = "#000";
  screen.font = "50px Georgia";
  screen.fillText("Telemetry2020 - by Aaron Perez Ontiveros",450,50);
}
function Background(){
  screen.fillStyle = "#3E3AFF";
  screen.fillRect(0,60,intX,intY);
  screen.strokeRect(0,0,intX,intY);
}
function BackgroundSensors(x,y,width,height){
  screen.strokeStyle = "#B6C2E3";
  //screen.fillRect(x,y,intX,intY);
  screen.strokeRect(x,y,width,height);
}
function Flex(posX,posY){
  BackgroundSensors(posX,posY,770,320);
}
function Thermometer(posX, posY){
  BackgroundSensors(posX,posY,770,280);
  screen.fillStyle = "#FFF";
  screen.font = "40px Arial";
  screen.fillText(temperature+"°C",posX+650,posY+80);
  screen.fillText(humidity+"%",posX+650,posY+200);
  var THGraph = document.getElementById('THGraph');
  
  if (THGraph.getContext){
    screen = canvas.getContext('2d');
    Chart.defaults.global.defaultFontFamily = "Lato";
    Chart.defaults.global.defaultFontSize = 18;
    var dataFirst = {
        label: "Car A - Speed (mph)",
        data: [0, 59, 75, 20, 20, 55, 40],
        lineTension: 0,
        fill: false,
        borderColor: 'red'
      };
    
    var dataSecond = {
        label: "Car B - Speed (mph)",
        data: [20, 15, 60, 60, 65, 30, 70],
        lineTension: 0,
        fill: false,
      borderColor: 'blue'
      };
    
    var speedData = {
      labels: ["0s", "10s", "20s", "30s", "40s", "50s", "60s"],
      datasets: [dataFirst, dataSecond]
    };
    var chartOptions = {
      maintainAspectRation: false,
      legend: {
        display: true,
        responsive: true,
        position: 'top',
        labels: {
          boxWidth: 2,
          fontColor: 'black'
        }
      }
    };
    var lineChart = new Chart(THGraph, {
      type: 'line',
      data: speedData,
      options: chartOptions
    });
  }
  else{

    console.log("THGraph couldn't appear.");
  }
 
}
function Light(posX,posY){
  BackgroundSensors(posX,posY,240,249);

}
function IMU(posX,posY){
  BackgroundSensors(posX,posY,1130,320);
  IMUPitch(posX,posY);
  IMURoll(posX,posY);
  IMUYaw(posX,posY);

}
function DateTime(posX,posY){
  BackgroundSensors(posX,posY,1130,30);
  screen.fillStyle = "#FFF";
  screen.font = "25px Arial";
  screen.fillText(time,posX+450,posY+25);
}
function IMURoll(posX, posY){
  var roll = new Image;
  // var measure = 40;
  roll.src = './images/roll.png';

  var back = new Image;
  back.src = './images/IMUBackground.png';
  
  roll.onload = function(){
    screen.drawImage(roll, posX+30+1000, posY+28,90,45);
    screen.drawImage(back, posX+1020, posY,110,110);
  }
}
function IMUPitch(posX, posY){
  var pitch = new Image;
  // var measure = 40;
  pitch.src = './images/pitch.png';

  var back = new Image;
  back.src = './images/IMUBackground.png';

  pitch.onload = function(){
    screen.drawImage(pitch, posX+1025, posY+85+60,98,25);
    screen.drawImage(back, posX+1020, posY+105,110,110);
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
    screen.drawImage(yaw, posX+67+986, posY+23+200,45,86);
    screen.drawImage(back, posX+1020, posY+210,110,110);

  }
}



