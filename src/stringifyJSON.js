// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
var targetKeys = [];
var targetValue = [];
  if (Array.isArray(obj)){
   return "" + obj
  }
  if (typeof obj === 'string'){
    return "" + obj
  }
  if (typeof obj === 'object'){
   for(var key in obj) {
      key = "" + key
    }
     return obj
  }
};

/*
input: element
output: element with added quotes
if typeof obj === 'string'
return " + obj
else return back into strin

*/ 


