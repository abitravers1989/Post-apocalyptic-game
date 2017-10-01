
var canvas = document.querySelector('#myCanvas');
var context = canvas.getContext('2d');

function drawCoin (){
  context.beginPath(0, 400);
  context.fillStyle = ("white");
  context.beginPath();
  context.arc(coin.xcoinpos,coin.ycoinpos,20,0,2*Math.PI);
  context.fillStyle = "white";
  context.stroke();
  context.closePath();
  context.fill();
};

function drawCoin2 (){
  context.beginPath(0, 400);
  context.fillStyle = ("white");
  context.beginPath();
  context.arc(300,200,20,0,2*Math.PI);
  context.fillStyle = "white";
  context.stroke();
  context.closePath();
  context.fill();
};

function drawCharacter(){
  context.beginPath(0, 400);
  context.fillStyle = ("black");
  context.beginPath();
  context.arc(mario.xPos, mario.yPos,20,0,2*Math.PI);
  context.fillStyle = "black";
  context.stroke();
  context.closePath();
  context.fill();
};

function line (){
  context.beginPath();
  context.moveTo(0, 400);
  context.lineTo(900, 400);
  context.stroke();
};

function moveandrender (){
  canvas.width=canvas.width;
  line();
  if (coin) {drawCoin();}
  drawCharacter();
  document.getElementById("score").innerHTML = mario.score
};

function printendpage (){
  canvas.width=canvas.width
  context.fillStyle='white';
  context.fillRect(0,0,canvas.width,canvas.height);
  context.fillStyle = "blue";
  context.font = "bold 44px Arial";
  context.fillText("Wooooo! Game is OVER - " + mario.score + " points", 100, (canvas.height / 2) + 8);
  document.getElementById("score").innerHTML = ""
};
