// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if(typeof obj === 'number' || typeof obj === 'boolean') {
    return String(obj);
  }
  if ( obj === null || typeof obj === 'undefined') {
    return "null"; 
  }
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  if (Array.isArray(obj)) {
    var start = '[';
    if (obj.length === 0) {
      return "[]";
    }
    for (var i = 0; i < obj.length; i++) {
      start += stringifyJSON(obj[i]) + ','; 
    }
    start = start.slice(0, start.length - 1) + ']'
    return start; 
  }    
  if (typeof obj === 'object') {
    var keyStr;
    var keyVal;
    if (obj.length === undefined) {
      return '{}';
    }
  }
};

/*
input: element
output: element with added quotes
if typeof obj === 'string'
return " + obj
else return back into strin



//     if (i === obj.length - 1){
  //       if (typeof obj[i] === 'string') {
  //         start += '"' + obj[i] + '"';
  //       } else {
  //         start += obj[i];
  //       }    
  //     } else {
  //       if (typeof obj[i] === 'string') {
  //         start += '"' + obj[i] + '"' + ',';
  //       } else {
  //         start += obj[i] + ',';
  //       }
  //     }
  //   }
  // }
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
*/ 