setInterval(function(){
  //location = ''
  Call();
  RefreshWindow()
},1000)

/*#######################
Save data from server.
#########################*/

var e =0;
var id = [], time= [], temperature= [], humidity= [], flex= [], vibration_fl= [], vibration_fr= [], vibration_rl= [], vibration_rr= [], gyro_pitch= [], gyro_roll= [], gravity= [], bpm_1= [], bpm_2= [], rpm= [], battery= [], gps_latitude= [], gps_longitude= [], steer= [], gasOH = [], gasCO = [], gasOHAlert = [], gasCOAlert = [], task1 = [], task2 = [], task3 = [], task4 = [], task5 = [], NHP = [], CEP = [], BCP = [], APP = [], LCP = [];
function Call(){
  id = [], time= [], temperature= [], humidity= [], flex= [], vibration_fl= [], vibration_fr= [], vibration_rl= [], vibration_rr= [], gyro_pitch= [], gyro_roll= [], gravity= [], bpm_1= [], bpm_2= [], rpm= [], battery= [], gps_latitude= [], gps_longitude= [], steer= [], gasOH = [], gasCO = [], gasOHAlert = [], gasCOAlert = [], task1 = [], task2 = [], task3 = [], task4 = [], task5 = [], NHP = [], CEP = [], BCP = [], APP = [], LCP = [];

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
    gravity.push(parseFloat(splitData[j++],base));
    bpm_1.push(parseInt(splitData[j++],base));
    bpm_2.push(parseInt(splitData[j++],base));
    rpm.push(parseInt(splitData[j++],base));
    battery.push(parseInt(splitData[j++],base));
    gps_latitude.push(parseInt(splitData[j++],base));
    gps_longitude.push(parseInt(splitData[j++],base));
    steer.push(parseInt(splitData[j++],base));
    gasOH.push(parseInt(splitData[j++],base));
    gasCO.push(parseInt(splitData[j++],base));
    gasOHAlert.push(parseInt(splitData[j++],base));
    gasCOAlert.push(parseInt(splitData[j++],base));
    task1.push(parseInt(splitData[j++],base));
    task2.push(parseInt(splitData[j++],base));
    task3.push(parseInt(splitData[j++],base));
    task4.push(parseInt(splitData[j++],base));
    task5.push(parseInt(splitData[j++],base));
    NHP.push(parseInt(splitData[j++],base));
    CEP.push(parseInt(splitData[j++],base));
    BCP.push(parseInt(splitData[j++],base));
    APP.push(parseInt(splitData[j++],base));
    LCP.push(parseInt(splitData[j++],base));

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
  gravity.reverse();
  bpm_1.reverse();
  bpm_2.reverse();
  rpm.reverse();
  battery.reverse();
  gps_latitude.reverse();
  gps_longitude.reverse();
  steer.reverse();
  gasOH.reverse();
  gasCO.reverse();
  gasOHAlert.reverse(); 
  gasCOAlert.reverse();
  task1.reverse();
  task2.reverse();
  task3.reverse(); 
  task4.reverse(); 
  task5.reverse(); 
  NHP.reverse();
  CEP.reverse();
  BCP.reverse(); 
  APP.reverse();
  LCP.reverse();
}
/*#######################
Canvas.
#########################*/



var canvas = document.getElementById('interface');
function RefreshWindow(){

    Flex();
    TemperatureData();
    HumidityData();
    THSensor();
    IMU();
    DateToday();
    Time();
    HR1();
    HR1Data();
    HR2Data();
    HR2();
    RPM();
    RPMData();
    Tasks();
    Protocols();
    GPS();
    BatteryLife();
    SteeringWheel(steer[49]);
    Alerts();
    Rover();

  
}
function Flex(){
  //BackgroundSensors(posX,posY,770,320);
}

function BatteryLife(){
  var batteryData = document.getElementById('Battery');

  if (batteryData.getContext){
    var screen = batteryData.getContext('2d');
    screen.clearRect (0,20 , 200, 200);

    screen.fillStyle = "#FFF";
    screen.font = "30px Georgia";
    screen.fillText("Battery: "+String(battery[49])+" %",0,90);
  } else {
   alert("Your browser doesn't support canvas.");
  }
}
function TemperatureData(){
  var temperatureData = document.getElementById('TemperatureData');

  if (temperatureData.getContext){
    var screen = temperatureData.getContext('2d');
    screen.clearRect (0,20 , 200, 200);

    screen.fillStyle = "#FFF";
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
    screen.clearRect (0,20 , 200, 200);
    screen.fillStyle = "#FFF";
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
    screen.clearRect (0,20 , 200, 200);
    screen.fillStyle = "#FFF";
    screen.font = "30px Georgia";
    screen.fillText(String(rpm[49])+" Km/h",0,90);
  } else {
   alert("Your browser doesn't support canvas.");
  }
}
function HR1Data(){
  var HR1Data = document.getElementById('HR1Data');

  if (HR1Data.getContext){
    var screen = HR1Data.getContext('2d');
    screen.clearRect (0,20 , 200, 200);
    screen.fillStyle = "#FFF";
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
    screen.clearRect (0,20 , 200, 200);
    screen.fillStyle = "#FFF";
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
    Chart.defaults.global.defaultFontSize = 20;

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
      animation: false,
      position: "left",
      scales: {
        yAxes: [{
            ticks: {
                suggestedMin: 0,
                suggestedMax: 50,
                fontColor: "#FFF"
            },
            display: true,
                gridLines: {
                    display: true,
                    color: "white"
                },
        }],
        xAxes: [{
          ticks: {
              fontColor: "#FFF"
          },
          display: true,
          gridLines: {
              display: true,
              color: "white"

          },
      }]
      },
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
    Chart.defaults.global.defaultFontSize = 20;
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
      animation: false,
      scales: {
        yAxes: [{
            ticks: {
                suggestedMin: 0,
                suggestedMax: 50,
                fontColor: "#FFF"
            },
            display: true,
                gridLines: {
                    display: true,
                    color: "white"
                },
        }],
        xAxes: [{
          ticks: {
              fontColor: "#FFF"
          },
          display: true,
          gridLines: {
              display: true,
              color: "white"

          },
      }]
      },
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
    Chart.defaults.global.defaultFontSize = 20;
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
    var gravityGraph = {
      label: "gravity",
      data: gravity,
      lineTension: 0,
      fill: false,
      borderColor: 'blue'
    };
    var constant = {
      labels: xAxis,
      datasets: [roll,pitch,gravityGraph]
    };
    var chartOptions = {
      animation: false,
      scales: {
        yAxes: [{
            ticks: {
                suggestedMin: 0,
                suggestedMax: 50,
                fontColor: "#FFF"
            },
            display: true,
                gridLines: {
                    display: true,
                    color: "white"
                },
        }],
        xAxes: [{
          ticks: {
              fontColor: "#FFF"
          },
          display: true,
          gridLines: {
              display: true,
              color: "white"

          },
      }]
      },
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



  IMUPitch(gyro_pitch[49]);
  IMURoll(gyro_roll[49]);
  IMUGravity(gravity[49]);

}


function HR1(){
  var HR1 = document.getElementById('HR1');
  if (HR1.getContext){
    screen = HR1.getContext('2d');
    Chart.defaults.global.defaultFontFamily = "Lato";
    Chart.defaults.global.defaultFontSize = 20;
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
      animation: false,
      scales: {
        yAxes: [{
            ticks: {
                suggestedMin: 0,
                suggestedMax: 50,
                fontColor: "#FFF"
            },
            display: true,
                gridLines: {
                    display: true,
                    color: "white"
                },
        }],
        xAxes: [{
          ticks: {
              fontColor: "#FFF"
          },
          display: true,
          gridLines: {
              display: true,
              color: "white"

          },
      }]
      },
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
    Chart.defaults.global.defaultFontSize = 20;
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
      animation: false,
      scales: {
        yAxes: [{
            ticks: {
                suggestedMin: 0,
                suggestedMax: 50,
                fontColor: "#FFF"
            },
            display: true,
                gridLines: {
                    display: true,
                    color: "white"
                },
        }],
        xAxes: [{
          ticks: {
              fontColor: "#FFF"
          },
          display: true,
          gridLines: {
              display: true,
              color: "white"

          },
      }]
      },
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
    Chart.defaults.global.defaultFontSize = 20;
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
      animation: false,
      scales: {
        yAxes: [{
            ticks: {
                suggestedMin: 0,
                suggestedMax: 50,
                fontColor: "#FFF"
            },
            display: true,
                gridLines: {
                    display: true,
                    color: "white"
                },
        }],
        xAxes: [{
          ticks: {
              fontColor: "#FFF"
          },
          display: true,
          gridLines: {
              display: true,
              color: "white"

          },
      }]
      },
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


function DateToday(){
  var today = new Date();

  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth()).padStart(2, '0'); //January is 0!
  var yyyy = String(today.getFullYear())
  var dateTime = document.getElementById('Date');
  if (dateTime.getContext){
    var screen = dateTime.getContext('2d');
    screen.clearRect ( 0 , 0 , 500 , 500 );
    screen.fillStyle = "#FFF";
    screen.font = "30px Georgia";
    screen.fillText(dd+"/"+mm+"/"+yyyy,0,50);

  } else {
   alert("Your browser doesn't support canvas.");
  }
}
function Time(){
  var today = new Date();

  var hour = String(today.getHours())
  var minutes = String(today.getMinutes())
  var seconds = String(today.getSeconds())
  var dateTime = document.getElementById('Time');
  if (dateTime.getContext){
    var screen = dateTime.getContext('2d');
    
    screen.clearRect ( 0 , 0 , 500 , 500 );
    screen.fillStyle = "#FFF";
    screen.font = "30px Georgia";
    screen.fillText(hour+":"+minutes+":"+seconds,0,50);

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
function SteeringWheel(angle){
  $(document).ready(function(){
    $("#SteeringWheel").rotate(angle)
  });
}
function Rover(){
  if(vibration_fl[49] == 1){
    document.getElementById("FL").style.visibility = "visible";
  }else{
    document.getElementById("FL").style.visibility = "hidden";
  }
  if(vibration_fr[49] == 1){
    document.getElementById("FR").style.visibility = "visible";
  }else{
    document.getElementById("FR").style.visibility = "hidden";
  }
  if(vibration_rl[49]== 1){
    document.getElementById("RL").style.visibility = "visible";
  }else{
    document.getElementById("RL").style.visibility = "hidden";
  }
  if(vibration_rr[49] == 1){
    document.getElementById("RR").style.visibility = "visible";
  }else{
    document.getElementById("RR").style.visibility = "hidden";
  }

}

function IMUGravity(value){
  var gravityData = document.getElementById('IMUGravity');

  if (gravityData.getContext){
    var screen = gravityData.getContext('2d');
    screen.clearRect (0,20 , 200, 200);

    screen.fillStyle = "#FFF";
    screen.font = "30px Georgia";
    screen.fillText(String(value),0,90);
  } else {
    alert("Your browser doesn't support canvas. by IMUGravity");
  }

}

var space_center = {lat: 18.804766, lng: -99.22314949999999};
var map = new google.maps.Map(
    document.getElementById('GPS'), {zoom: 16, center: space_center}
);
var marker = new google.maps.Marker({position: space_center, map: map});
var i=0;
function GPS(){
    i+=.0001

    var space_center = {lat: 18.804766+i, lng: -99.22314949999999};

    marker.setPosition(space_center);
    marker.setMap(map);
    map.setZoom(16);
    map.setCenter(space_center);
  

}
class CheckBox{
  constructor(x,y,name){
    this.x = x;
    this.y = y;
    this.name = name;
  }

  Put(value){
    var protocols = document.getElementById('Protocols');
    if (protocols.getContext){
      var screen = protocols.getContext('2d');
      screen.beginPath();
      
      if(value == 1)
      {
        screen.fillStyle = "green";
      }else{
        screen.fillStyle = "red";
      }
      screen.strokeStyle="black";
      screen.arc(this.x+10, this.y+35, 10, 0, 2 * Math.PI, false);
      screen.fill();
      screen.stroke();
      screen.closePath();
      
      screen.clearRect ( this.x+25, this.y+20 , 100, 100);
      screen.fillStyle = "#FFF";
      screen.font = "20px Georgia";
      screen.fillText(String(this.name),this.x+25,this.y+40);

      
    } else {
     alert("Your browser doesn't support canvas. by Checkbox");
    }
   
  }
}
var xTask = 0;
t1 = new CheckBox(xTask,0,'Task 1');
t2 = new CheckBox(xTask,25,'Task 2');
t3 = new CheckBox(xTask,50,'Task 3');
t4 = new CheckBox(xTask,75,'Task 4');
t5 = new CheckBox(xTask,100,'Task 5');
function Tasks(){
  t1.Put(task1[49]);
  t2.Put(task2[49]);
  t3.Put(task3[49]);
  t4.Put(task4[49]);
  t5.Put(task5[49]);
 
}
var xProtocol=100;
p1 = new CheckBox(xProtocol,0,'NHP');
p2 = new CheckBox(xProtocol,25,'CEP');
p3 = new CheckBox(xProtocol,50,'BCP');
p4 = new CheckBox(xProtocol,75,'APP');
p5 = new CheckBox(xProtocol,100,'LCP');
function Protocols(){
  p1.Put(NHP[49]);
  p2.Put(CEP[49]);
  p3.Put(BCP[49]);
  p4.Put(APP[49]);
  p5.Put(LCP[49]);

}

var xAlert=180;
a1 = new CheckBox(xAlert,0,'OH Alert');
a2 = new CheckBox(xAlert,25,'CO Alert');
function Alerts(){
  a1.Put(gasOHAlert[49]);
  a2.Put(gasCOAlert[49]);
}





