var should = require('should');
var RomanNumerals = require(__dirname + '/../src/romannumerals');

describe('RomanNumerals', function() {

  
  it('1 should be I', function() {
    var RomanNumerals = global.theApp.RomanNumerals();
    var romannumeral = new RomanNumerals();
    var numeral = romannumeral.convert(1);
    
    numeral.should.equal("I");
  });

  it('2 should be II', function() {
    var RomanNumerals = global.theApp.RomanNumerals();
    var romannumeral = new RomanNumerals();

    var numeral = romannumeral.convert(2);
    
    numeral.should.equal("II");
  });
});
