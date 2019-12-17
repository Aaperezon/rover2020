var canvas = document.getElementById('interface');

var intX = 1800;
var intY = 850;
var screen;
if (canvas.getContext){
  alert("Hello! I am an alert box!!");

 // dibuja con tú código aquí
  screen = canvas.getContext('2d');
  screen.fillStyle = "#4E597B";
  screen.fillRect(0,0,intX,intY);
  screen.alert("Hola");
  Thermometer(25,0);
  IMUPitch(1700,200);
  IMUYaw(1700,320);
  IMURoll(1700,440);

} else {
 alert("Su navegador no soporta canvas :O");
}



function Thermometer(posX, posY){

  var thermometer = new Image;
  var measure = 40;
  thermometer.src = 'thermometer.jpg';
  thermometer.onload = function(){
    screen.drawImage(thermometer, posX, posY, 80, 350);
  }

  screen.lineWidth = "1";
  screen.strokeStyle = "red";
  screen.rect(posX-25,posY+measure+62,140,0);
  screen.stroke();

}

function IMUPitch(posX, posY){
  var pitch = new Image;
  // var measure = 40;
  pitch.src = 'pitch.jpg';
  pitch.onload = function(){
    screen.drawImage(pitch, posX, posY, 80, 350);
  }
}
function IMUYaw(posX, posY){
  var yaw = new Image;
  // var measure = 40;
  yaw.src = 'yaw.jpg';
  yaw.onload = function(){
    screen.drawImage(yaw, posX, posY, 80, 350);
  }
}
function IMURoll(posX, posY){
  var roll = new Image;
  // var measure = 40;
  roll.src = 'roll.jpg';
  roll.onload = function(){
    screen.drawImage(roll, posX, posY, 80, 350);
  }
}