var should = require('should');
var RomanNumerals = require(__dirname + '/../src/romannumerals');

describe('RomanNumerals', function() {
  
  it('1 should be I', function() {
    verify(1, "I");
  });

  it('2 should be II', function() {
    verify(2, "II");
  });
  
  it('3 should be III', function() {
    verify(3, "III");
  });

  function verify(number, expected) {
    var RomanNumerals = global.theApp.RomanNumerals();
    var romannumeral = new RomanNumerals();

    var numeral = romannumeral.convert(number);
    numeral.should.equal(expected);
  };
});
