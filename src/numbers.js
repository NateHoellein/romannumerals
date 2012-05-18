global.MyNumbers = {};

global.MyNumbers.NumberParser = function () {
  var parse = function(n) {

    var i = 0;
    var array = [];
    while(n !== 0)
    {
       array[i] = Math.floor(n % 10);
       n = Math.floor(n / 10); 
       i++;
     };
     
    return array; 
  };

  return function() {
    this.parse = parse;
  };
};


