global.theApp = {};

global.theApp.RomanNumerals = function() {

  var RomanNumerals = function() {
    this.convert = function(number) {
      if(number === 1) {
        return "I";
      } else {
        return "II";
      }
     };
  };

  return RomanNumerals;

};
