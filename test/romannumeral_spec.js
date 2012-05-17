var should = require('should');
var RomanNumerals = require(__dirname + '/../src/romannumerals');

describe('RomanNumerals', function() {
  
  it('should verify digits in ones column', function() {
    verify(1, "I");
    verify(2, "II");
    verify(3, "III");
    verify(4, "IV");
    verify(5, "V");
    verify(6, "VI");
    verify(7, "VII");
    verify(8, "VIII");
    verify(9, "IX");
  });

  it('should verify two digit numbers', function() {
    verify(10, "X");
    verify(11, "XI");
    verify(21, "XXI");
    verify(42, "XLII");
    verify(66, "LXVI");
    verify(59, "LIX");
    verify(78, "LXXVIII");
    verify(99, "XCIX");
  });


  function verify(number, expected) {
    var RomanNumerals = global.theApp.RomanNumerals();
    var romannumeral = new RomanNumerals();

    var numeral = romannumeral.convert(number);
    numeral.should.equal(expected);
  };
});
