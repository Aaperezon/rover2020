setInterval(function(){
  //location = ''
  Call();
  RefreshWindow()
},1000)

/*#######################
Save data from server.
#########################*/
//$parameters = ['temperature', 'humidity', 'flex', 'gyro_pitch','gyro_roll','gyro_yaw','bpm_1','bpm_2','rpm', 'battery', 'gps_latitude', 'gps_longitude', 'gps_altitude', 'steer'];

var e =0;
var id = [], time= [], temperature= [], humidity= [], flex= [], vibration_fl= [], vibration_fr= [], vibration_rl= [], vibration_rr= [], gyro_pitch= [], gyro_roll= [], gyro_yaw= [], bpm_1= [], bpm_2= [], rpm= [], battery= [], gps_latitude= [], gps_longitude= [], gps_altitude= [], steer= [];
function Call(){
  id = [], time= [], temperature= [], humidity= [], flex= [], vibration_fl= [], vibration_fr= [], vibration_rl= [], vibration_rr= [], gyro_pitch= [], gyro_roll= [], gyro_yaw= [], bpm_1= [], bpm_2= [], rpm= [], battery= [], gps_latitude= [], gps_longitude= [], gps_altitude= [], steer= [];

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
    flex.push(parseInt(splitData[j++],base));
    vibration_fl.push(parseInt(splitData[j++],base));
    vibration_fr.push(parseInt(splitData[j++],base));
    vibration_rl.push(parseInt(splitData[j++],base));
    vibration_rr.push(parseInt(splitData[j++],base));
    gyro_pitch.push(parseInt(splitData[j++],base));
    gyro_roll.push(parseInt(splitData[j++],base));
    gyro_yaw.push(parseInt(splitData[j++],base));
    bpm_1.push(parseInt(splitData[j++],base));
    bpm_2.push(parseInt(splitData[j++],base));
    rpm.push(parseInt(splitData[j++],base));
    battery.push(parseInt(splitData[j++],base));
    gps_latitude.push(parseInt(splitData[j++],base));
    gps_longitude.push(parseInt(splitData[j++],base));
    gps_altitude.push(parseInt(splitData[j++],base));
    steer.push(parseInt(splitData[j++],base));
  }
  id.reverse();
  time.reverse();
  temperature.reverse();
  humidity.reverse();
  flex.reverse();
  vibration_fl.reverse();
  vibration_fr.reverse();
  vibration_rl.reverse();
  vibration_rr.reverse();
  gyro_pitch.reverse();
  gyro_roll.reverse();
  gyro_yaw.reverse();
  bpm_1.reverse();
  bpm_2.reverse();
  rpm.reverse();
  battery.reverse();
  gps_latitude.reverse();
  gps_longitude.reverse();
  gps_altitude.reverse();
  steer.reverse();
}
/*#######################
Canvas.
#########################*/
var canvas = document.getElementById('interface');

function RefreshWindow(){
  if (canvas.getContext){
    Flex();
    TemperatureData();
    HumidityData();
    THSensor();
    IMU();
    DateTime();
    HR1();
    HR1Data();
    HR2Data();
    HR2();
    RPM();
    RPMData();
    Protocols();
    GPS();
    console.log(id[49]);
  
  } else {
   alert("Your browser doesn't support canvas.");
  }
  
}
function Flex(){
  //BackgroundSensors(posX,posY,770,320);
}

function TemperatureData(){
  var temperatureData = document.getElementById('TemperatureData');

  if (temperatureData.getContext){
    var screen = temperatureData.getContext('2d');
    screen.fillStyle = "#000";
    screen.font = "40px Georgia";
    screen.fillText(String(temperature[49])+" °C",0,90);
  } else {
   alert("Your browser doesn't support canvas.");
  }
}

function HumidityData(){
  var humidityData = document.getElementById('HumidityData');

  if (humidityData.getContext){
    var screen = humidityData.getContext('2d');
    screen.fillStyle = "#000";
    screen.font = "40px Georgia";
    screen.fillText(String(humidity[49])+" %",0,90);
  } else {
   alert("Your browser doesn't support canvas.");
  }
}
function RPMData(){
  var RPMData = document.getElementById('RPMData');

  if (RPMData.getContext){
    var screen = RPMData.getContext('2d');
    screen.fillStyle = "#000";
    screen.font = "40px Georgia";
    screen.fillText(String(rpm[49])+" Km/h",0,90);
  } else {
   alert("Your browser doesn't support canvas.");
  }
}
function HR1Data(){
  var HR1Data = document.getElementById('HR1Data');

  if (HR1Data.getContext){
    var screen = HR1Data.getContext('2d');
    screen.fillStyle = "#000";
    screen.font = "40px Georgia";
    screen.fillText(String(bpm_1[49])+" BPM",0,90);
  } else {
   alert("Your browser doesn't support canvas.");
  }
}
function HR2Data(){
  var HR2Data = document.getElementById('HR2Data');

  if (HR2Data.getContext){
    var screen = HR2Data.getContext('2d');
    screen.fillStyle = "#000";
    screen.font = "40px Georgia";
    screen.fillText(String(bpm_2[49])+" BPM",0,90);
  } else {
   alert("Your browser doesn't support canvas.");
  }
}




function THSensor(){
  ///BackgroundSensors(posX,posY,770,280);
  var temperatureGraph = document.getElementById('TemperatureGraph');
  if (temperatureGraph.getContext){
    var screen = temperatureGraph.getContext('2d');
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
          fontColor: 'black'
        }
      }
    };
    var lineChart = new Chart(temperatureGraph, {
      type: 'line',
      data: constant,
      options: chartOptions
      
    });
  }
  else{
    console.log("TemperatureGraph couldn't appear.");
  }

  var humidityGraph = document.getElementById('HumidityGraph');
  if (humidityGraph.getContext){
    var screen = humidityGraph.getContext('2d');
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
          fontColor: 'black'
        }
      }
    };
    var lineChart = new Chart(humidityGraph, {
      type: 'line',
      data: constant,
      options: chartOptions
    });
  }
  else{
    console.log("Humidity couldn't appear.");
  }

 
}
xAxis = new Array(50);
for(var i = 0; i<50;i++){
  xAxis[i]=i+1;
}
function IMU(){
 
  var IMUGraph = document.getElementById('IMUGraph');

  if (IMUGraph.getContext){
    screen = IMUGraph.getContext('2d');
    Chart.defaults.global.defaultFontFamily = "Lato";
    Chart.defaults.global.defaultFontSize = 18;
    var roll = {
        label: "Roll",
        data: gyro_roll,
        lineTension: 0,
        fill: false,
        borderColor: 'red'
      };
    var pitch = {
      label: "Pitch",
      data: gyro_pitch,
      lineTension: 0,
      fill: false,
      borderColor: 'green'
    };
    var yaw = {
      label: "Yaw",
      data: gyro_yaw,
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
          fontColor: 'black'
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



  IMUPitch(gyro_pitch[49]);
  IMURoll(gyro_roll[49]);
  IMUYaw(gyro_yaw[49]);

}


function HR1(){
  var HR1 = document.getElementById('HR1');
  if (HR1.getContext){
    screen = HR1.getContext('2d');
    Chart.defaults.global.defaultFontFamily = "Lato";
    Chart.defaults.global.defaultFontSize = 18;
    var hr = {
        label: "Heart Rate Pilot#1",
        data: bpm_1,
        lineTension: 0,
        fill: false,
        borderColor: 'red'
      };
    var constant = {
      labels: xAxis,
      datasets: [hr]
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
          fontColor: 'black'
        }
      }
    };
    var lineChart = new Chart(HR1, {
      type: 'line',
      data: constant,
      options: chartOptions
    });
  }
  else{
    console.log("HR1 couldn't appear.");
  }
}

function HR2(){
  var HR2 = document.getElementById('HR2');
  if (HR2.getContext){
    screen = HR2.getContext('2d');
    Chart.defaults.global.defaultFontFamily = "Lato";
    Chart.defaults.global.defaultFontSize = 18;
    var hr = {
        label: "Heart Rate Pilot#2",
        data: bpm_2,
        lineTension: 0,
        fill: false,
        borderColor: 'red'
      };
    var constant = {
      labels: xAxis,
      datasets: [hr]
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
          fontColor: 'black'
        }
      }
    };
    var lineChart = new Chart(HR2, {
      type: 'line',
      data: constant,
      options: chartOptions
    });
  }
  else{
    console.log("HR2 couldn't appear.");
  }
}


function RPM(){
  var RPM = document.getElementById('RPM');
  if (RPM.getContext){
    screen = RPM.getContext('2d');
    Chart.defaults.global.defaultFontFamily = "Lato";
    Chart.defaults.global.defaultFontSize = 18;
    var hr = {
        label: "Km/h",
        data: rpm,
        lineTension: 0,
        fill: false,
        borderColor: 'red'
      };
    var constant = {
      labels: xAxis,
      datasets: [hr]
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
          fontColor: 'black'
        }
      }
    };
    var lineChart = new Chart(RPM, {
      type: 'line',
      data: constant,
      options: chartOptions
    });
  }
  else{
    console.log("HR2 couldn't appear.");
  }
}



function DateTime(){
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth()).padStart(2, '0'); //January is 0!
  var yyyy = String(today.getFullYear())
  var hour = String(today.getHours())
  var minutes = String(today.getMinutes())
  var seconds = String(today.getSeconds())
  var dateTime = document.getElementById('DateTime');
  if (dateTime.getContext){
    var screen = dateTime.getContext('2d');
    screen.rect(0,0,500,500);
    screen.fillStyle = "white";
    screen.fill();

    screen.fillStyle = "#000";
    screen.font = "30px Georgia";
    screen.fillText(dd+"/"+mm+"/"+yyyy,100,90);
    screen.fillText(hour+":"+minutes+":"+seconds,100,120);
  } else {
   alert("Your browser doesn't support canvas.");
  }
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

function Protocols(){
  var c = document.getElementById('PROTOCOLS');
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.lineWidth = "10";
  ctx.strokeStyle = "blue";
  ctx.rect(50, 50, 150, 80);
  ctx.stroke();
}
var i = 0;
function GPS(){
  i+=.0000003;
  var map = new ol.Map({
    target: 'GPS',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([-99.22314949999999+i, 18.804766+i]),
      zoom: 16
    })
  });
}




