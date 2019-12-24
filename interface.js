$.ajax({
  url : 'serv.php', // my php file
  type : 'GET', // type of the HTTP request
  success : function(result){ 
     var obj = jQuery.parseJSON(result);
     console.log(obj);
  }
});

var canvas = document.getElementById('interface');

var intX = 1800;
var intY = 850;
var screen;
if (canvas.getContext){

 // dibuja con tú código aquí
  screen = canvas.getContext('2d');
  screen.fillStyle = "#FFDA73";
  screen.fillRect(0,0,intX,intY);
  Thermometer(30,600);
  IMUPitch(800,600);
  IMUYaw(1100,600);
  IMURoll(1400,600);
 
  

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
