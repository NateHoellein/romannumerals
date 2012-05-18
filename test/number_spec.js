var should = require('should');
var NumberParser = require(__dirname + '/../src/numbers');

describe('Number parsing', function() {

  it('should turn 111 into an array', function() {
    var NumberParser = global.MyNumbers.NumberParser(); 
    var parser = new NumberParser();

    var actual = parser.parse(123);

    actual.length.should.equal(3);
    actual[0].should.equal(3);
    actual[1].should.equal(2);
    actual[2].should.equal(1);

  });

  it('should handle zeros', function() {
    var NumberParser = global.MyNumbers.NumberParser(); 
    var parser = new NumberParser();

    var actual = parser.parse(330678);
    actual.length.should.equal(6);
    
    
  });

  it('should handle 1 digit', function() {
    var NumberParser = global.MyNumbers.NumberParser(); 
    var parser = new NumberParser();

    var actual = parser.parse(8);
    actual.length.should.equal(1);
    actual[0].should.equal(8);
  });

});
