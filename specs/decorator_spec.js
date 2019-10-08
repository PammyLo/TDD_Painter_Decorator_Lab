const assert = require('assert');
const Decorator = require('../decorator.js');
const Room = require('../room.js');
const Paint = require('../paint.js');

describe('Painter Decorator Job and Stock Management', function(){
  let room;

  beforeEach(function (){
    room = new Room('dining room','15');
    paint = new Paint(50);
  });

    describe('room', function() {
      it('should have an area in square meters', function(){
        const actual = room.area;
        assert.strictEqual(actual, '15');
      });

      it('should start not painted', function(){
        const actual = room.painted;
        assert.strictEqual(actual, false);
      });

      it('should be able to be painted', function(){
        room.paint();
        const actual = room.painted;
        assert.strictEqual(actual, true);
      });
    });

    describe('paint', function(){
      it('should have a number of litres of paint', function(){
        const actual = paint.litres;
        assert.strictEqual(actual, 50);
      });

      it('should be able to check if it is empty', function(){
        const actual = paint.litres;
        assert.equal(actual, 0);
      });

    });



});
