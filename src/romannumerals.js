var Definitions = require(__dirname + '/../src/romannumeraldefs.js');


global.theApp.RomanNumerals = function() {

  var Definitions = global.theApp.Consts.Definitions;
  var defs = new Definitions();

  var RomanNumerals = function() {
    this.convert = function(number) {
    
      var positionHash = {
        1: defs.ones,
        2: defs.tens,
        3: defs.hundreds,
        4: defs.thousands
      };

      var response = "";
      var i = 1;
      while(number !== 0) {
        var digit = Math.floor(number % 10);
        response = positionHash[i][digit] + response;
        
        number = Math.floor(number / 10);
        (i === 4) ? i =  2 : i++;
      };

      return response;
    };

};
  return RomanNumerals;

};
