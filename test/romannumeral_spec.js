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

  it('should verify 3 digit numbers', function() {
    verify(100, "C");
    verify(105, "CV");
    verify(115, "CXV");
    verify(225, "CCXXV");
    verify(357, "CCCLVII");
  });

  it('should verify 4 digit numbers', function() {
    verify(1000, "M");
    verify(1001, "MI");
    verify(1974, "MCMLXXIV");
  });

  it('shouldd verify 5 digit numbers', function() {
    verify(23456,"XXMMMCDLVI");
  });

  it('should verify 6 digit numbers', function() {
    verify(723987, "DCCXXMMMCMLXXXVII");
  });

  function verify(number, expected) {
    var RomanNumerals = global.theApp.RomanNumerals();
    var romannumeral = new RomanNumerals();

    var numeral = romannumeral.convert(number);
    numeral.should.equal(expected, "Actual: " + numeral + " Expected: " + expected);
  };
});
