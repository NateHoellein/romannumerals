global.theApp = {};

global.theApp.RomanNumerals = function() {

  var RomanNumerals = function() {
    this.convert = function(number) {

      var singleDigitHash = {
        1: "I",
        2: "II",
        3: "III",
        4: "IV",
        5: "V",
        6: "VI",
        7: "VII",
        8: "VIII",
        9: "IX",
        10: "X"
      };
    
      var tensHash = {
        1: "X",
        2: "XX",
        3: "XXX",
        4: "XL",
        5: "L",
        6: "LX",
        7: "LXX",
        8: "LXXX",
        9: "XC"
      };

      if(number > 10) {
        var tens = Math.floor(number / 10);
        var ones = number % 10;
        return tensHash[tens] + singleDigitHash[ones];
      } else {
        return singleDigitHash[number];
      }
      
     };
  };

  return RomanNumerals;

};
