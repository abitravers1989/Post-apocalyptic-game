

var mario = new Character
var coin = new Coin

// console.log(mario.score, "snakes")
setInterval(function(){
  if (mario.score < 1){moveandrender();}
  else { printendpage();}
}, 30)
// Move called on key to start game
document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        mario.jump()
    }
    else if (e.keyCode == '40') {
        mario.moveDown()
    }
    else if (e.keyCode == '37') {
       mario.moveLeft()
    }
    else if (e.keyCode == '39') {
      mario.moveRight()
    }

}
