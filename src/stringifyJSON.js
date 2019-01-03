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
    var keys = Object.keys(obj)
    for(var i = 0; i < keys.length; i++){
     stringifyJSON(keys[i]);
     }
    if (keys.length === 0) {
      return '{}';
    } 
    for (var key in obj){
      if(typeof key === 'function'){
        return '{}';
      }
    }
    var start = '{';
    for (var key in obj){
     start += '"' + key + '":' + stringifyJSON(obj[key]) + "," 
    }
    start = start.slice(0, start.length - 1) + "}"
    return start; 
  }

};

