global.theApp = {};
global.theApp.Consts = {};
global.theApp.Consts.Definitions = (function () {

      var onesHash = {
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
        0: "",
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
      
      var thousandsHash = {
        1: "M",
        2: "MM",
        3: "MMM",
        4: "MMMM",
        5: "V",
        6: "VM",
        7: "VMM",
        8: "VMMM",
        9: "IX"
      };

      var positionHash = {
        1: onesHash,
        2: tensHash,
        3: hundredsHash,
        4: thousandsHash
      };

      return function() {
        this.positionMap = positionHash;
      };

    })();
