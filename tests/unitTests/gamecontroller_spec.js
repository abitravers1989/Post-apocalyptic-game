var assert = chai.assert
var expect = chai.expect


describe('GameController', function(){

  describe('#checkCollision', function() {

    beforeEach(function(){
      var canvas = document.querySelector('#myCanvas');
      var context = canvas.getContext('2d');
      var character =  new Character;
      var coin = new Coin;
    });

    it('changes the score & destroys the coin, if the collision happens', function(){
      character.xPos = 250
      coin.xcoinpos = 250
      character.yPos = 200
      coin.ycoinpos = 200
      asert.equal(character.score, 1)
      asert.equal(coin, null)
      // assert.equal(character.xPos, 30);
    });


    // it('changes the score if the collision happens', function(){
    //   var character =  new Character;
    // });

    //
    // it('renders the end page if the score is one', function(){)
    //
    // });

    });
  });
