const Paint = function( litres ){
  this.litres = litres;
};

Paint.prototype.paint = function() {
  this.litres = 0;
}



module.exports = Paint;
