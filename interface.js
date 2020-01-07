setInterval(function(){
  //location = ''
  Call();
  RefreshWindow()
},1000)

/*#######################
Save data from server.
#########################*/
//console.log(id + " " + time + " "  + temperature + " " + humidity + " " + flex_fr + " " + flex_fl + " " + flex_rr + " " + flex_rl + " " + gyro_x + " " + gyro_y + " " + gyro_z + " " + light);
var e =0;
var id = [], time= [], temperature= [], humidity= [], flex_fr= [], flex_fl= [], flex_rr= [], flex_rl= [], gyro_x= [], gyro_y= [], gyro_z= [], light= [];
function Call(){
  id = [], time= [], temperature= [], humidity= [], flex_fr= [], flex_fl= [], flex_rr= [], flex_rl= [], gyro_x= [], gyro_y= [], gyro_z= [], light= [];
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
}
function SaveResponse(splitData){
  var j=0;
  var base = 10;
  for(var i = 0;i<50;i++){
    id.push(parseInt(splitData[j++],base));
    time.push(parseInt(splitData[j++],base));
    temperature.push(parseInt(splitData[j++],base));
    humidity.push(parseInt(splitData[j++],base));
    flex_fr.push(parseInt(splitData[j++],base));
    flex_fl.push(parseInt(splitData[j++],base));
    flex_rr.push(parseInt(splitData[j++],base));
    flex_rl.push(parseInt(splitData[j++],base));
    gyro_x.push(parseInt(splitData[j++],base));
    gyro_y.push(parseInt(splitData[j++],base));
    gyro_z.push(parseInt(splitData[j++],base));
    light.push(parseInt(splitData[j++],base));

  }
  id.reverse();
  time.reverse();
  temperature.reverse();
  humidity.reverse();
  flex_fr.reverse();
  flex_fl.reverse();
  flex_rr.reverse();
  flex_rl.reverse();
  gyro_x.reverse();
  gyro_y.reverse();
  gyro_z.reverse();
  light.reverse();

}
/*#######################
Canvas.
#########################*/
var canvas = document.getElementById('interface');
var intX = 1900;
var intY = 910;
var screen;

function RefreshWindow(){
  if (canvas.getContext){
    screen = canvas.getContext('2d');
    Background();
    Title();
  
    Flex(0,60);
    THSensor(0,380);
    Light(0,660);
    IMU(770,60);
    DateTime(770,880);
    console.log(id[0]);
  
  } else {
   alert("Your browser doesn't support canvas.");
  }
  
}

function Title(){
  screen.fillStyle = "#000";
  screen.font = "50px Georgia";
  screen.fillText("Telemetry2020 - by Aaron Perez Ontiveros",450,50);
}
function Background(){
  screen.fillStyle = "#141414";
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
function THSensor(posX, posY){
  BackgroundSensors(posX,posY,770,280);
  screen.fillStyle = "#FFF";
  screen.font = "40px Arial";
  screen.fillText(temperature[49]+"°C",posX+650,posY+80);
  screen.fillText(humidity[49]+"%",posX+650,posY+200);

  var TemperatureGraph = document.getElementById('TemperatureGraph');
  if (TemperatureGraph.getContext){
    screen = canvas.getContext('2d');
    Chart.defaults.global.defaultFontFamily = "Lato";
    Chart.defaults.global.defaultFontSize = 18;
    var termo = {
        label: "Temperature",
        data: temperature,
        lineTension: 0,
        fill: false,
        borderColor: 'red'
      };
    var constant = {
      labels: temperature,
      datasets: [termo]
    };
    var chartOptions = {
      animation: { duration: 0 },
      position: "left",

      maintainAspectRation: false,
      legend: {
        display: true,
        responsive: true,
        position: 'top',
        labels: {
          boxWidth: 2,
          fontColor: 'white'
        }
      }
    };
    var lineChart = new Chart(TemperatureGraph, {
      type: 'line',
      data: constant,
      options: chartOptions
      
    });
  }
  else{

    console.log("TemperatureGraph couldn't appear.");
  }

  var HumidityGraph = document.getElementById('HumidityGraph');
  if (HumidityGraph.getContext){
    screen = canvas.getContext('2d');
    Chart.defaults.global.defaultFontFamily = "Lato";
    Chart.defaults.global.defaultFontSize = 18;
    var temp = {
        label: "Humidity",
        data: humidity,
        lineTension: 0,
        fill: false,
        borderColor: 'red'
      };
    var constant = {
      labels: humidity,
      datasets: [temp]
    };
    var chartOptions = {
      animation: { duration: 0 },

      maintainAspectRation: false,
      legend: {
        display: true,
        responsive: true,
        position: 'top',
        labels: {
          boxWidth: 2,
          fontColor: 'white'
        }
      }
    };
    var lineChart = new Chart(HumidityGraph, {
      type: 'line',
      data: constant,
      options: chartOptions
    });
  }
  else{
    console.log("Humidity couldn't appear.");
  }

 
}
function Light(posX,posY){
  BackgroundSensors(posX,posY,240,249);

}
xAxis = new Array(50);
for(var i = 0; i<50;i++){
  xAxis[i]=i+1;
}
function IMU(posX,posY){
  BackgroundSensors(posX,posY,1130,320);
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth()).padStart(2, '0'); //January is 0!
  var yyyy = String(today.getFullYear())
  var hour = String(today.getHours())
  var minutes = String(today.getMinutes())
  var seconds = String(today.getSeconds())

  var IMUGraph = document.getElementById('IMUGraph');

  if (IMUGraph.getContext){
    screen = canvas.getContext('2d');
    Chart.defaults.global.defaultFontFamily = "Lato";
    Chart.defaults.global.defaultFontSize = 18;
    var roll = {
        label: "Roll",
        data: gyro_x,
        lineTension: 0,
        fill: false,
        borderColor: 'red'
      };
    var pitch = {
      label: "Pitch",
      data: gyro_y,
      lineTension: 0,
      fill: false,
      borderColor: 'green'
    };
    var yaw = {
      label: "Yaw",
      data: gyro_z,
      lineTension: 0,
      fill: false,
      borderColor: 'blue'
    };
    var constant = {
      labels: xAxis,
      datasets: [roll,pitch,yaw]
    };
    var chartOptions = {
      animation: { duration: 0 },
      maintainAspectRation: false,
      legend: {
        display: true,
        responsive: true,
        position: 'top',
        labels: {
          boxWidth: 2,
          fontColor: 'white'
        }
      }
    };
    var lineChart = new Chart(IMUGraph, {
      type: 'line',
      data: constant,
      options: chartOptions
    });
  }
  else{
    console.log("Humidity couldn't appear.");
  }



  IMUPitch(gyro_x[49]);
  IMURoll(gyro_y[49]);
  IMUYaw(gyro_z[49]);

}
function DateTime(posX,posY){
  BackgroundSensors(posX,posY,1130,30);
  screen.fillStyle = "#000";
  screen.font = "25px Arial";
  screen.fillText(time,posX+450,posY+25);
}
function IMURoll(angle){
  $(document).ready(function(){
    $("#Roll").rotate(angle)
  });
}
function IMUPitch(angle){
  $(document).ready(function(){
    $("#Pitch").rotate(angle)
  });
}
function IMUYaw(angle){
  $(document).ready(function(){
    $("#Yaw").rotate(angle)
  });

}



