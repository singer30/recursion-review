// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var objArray = [];
  
  
  
  if(arguments.length === 1){
    var node = document.body;
    if (node.classList.contains(className)){
      objArray.push(node)
    }
    var children = node.childNodes
    if (children.length > 0){
      for(var i = 0; i < children.length; i++){
        objArray.concat(getElementsByClassName(className, children[i]))
      }
    }
  } else {
    var node = arguments[1];
    if (node.classList.contains(className)){
      objArray.push(node)
    }
    var children = node.childNodes
    if (children.length > 0){
      for(var i = 0; i < children.length; i++){
        objArray.concat(getElementsByClassName(className, children[i]))
      }
    }
  }
  return objArray;
};
