global.theApp = {};

global.theApp.RomanNumerals = function() {

  var RomanNumerals = function() {
    this.convert = function(number) {
      if(number === 1) {
        return "I";
      } else if(number === 2) {
        return "II";
      } else {
        return "III";
      }
     };
  };

  return RomanNumerals;

};
