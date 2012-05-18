global.theApp = {};

global.theApp.RomanNumerals = function() {

  var RomanNumerals = function() {
    this.convert = function(number) {
      
      
      var singleDigitHash = {
        0: "",
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
        0: "",
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

      var hundredsHash = {
        1: "C",
        2: "CC",
        3: "CCC",
        4: "CD",
        5: "D",
        6: "DC",
        7: "DCC",
        8: "DCCC",
        9: "CM"
      };

      var thousandsHash = [];

      var positionHash = {
        1: singleDigitHash,
        2: tensHash,
        3: hundredsHash,
        4: thousandsHash
      };

      var response = "";
      var i = 1;
      while(number !== 0) {
        var digit = Math.floor(number % 10);
        response = positionHash[i][digit] + response;
        
        //response = getNumeral(i, digit);
        //response = Math.floor(number % 10);
        number = Math.floor(number / 10);
        i++;
      };

      return response;
    };

    function getNumeral(position,number) {
      return positionHash[position][number]; 
    };

};
  return RomanNumerals;

};
