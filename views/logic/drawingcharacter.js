
var drawcircle = function (xCoord){
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.fillStyle = ("black");
ctx.beginPath();
ctx.arc(xCoord,370,20,0,2*Math.PI);
ctx.closePath();
ctx.fill();
};
// )};

var xCoordinate = 60

drawcircle(xCoordinate)

drawcircle.Prototype.moveXright = function () {
  xCoordinate += 10;
}
