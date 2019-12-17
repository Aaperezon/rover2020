var canvas = document.getElementById('interface');

var intX = 1800;
var intY = 850;
var screen;
if (canvas.getContext){
 // dibuja con tú código aquí
  screen = canvas.getContext('2d');
  screen.fillStyle = "#4E597B";
  screen.fillRect(0,0,intX,intY);


  Thermometer(25,0);

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