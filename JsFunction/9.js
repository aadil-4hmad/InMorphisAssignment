// Write a JavaScript function which accepts an argument and returns the type.
function tellsType(arg){
    return typeof arg;
}
console.log(tellsType("inmorphis"));
console.log(tellsType(46838));
console.log(tellsType(null));
console.log(tellsType([2,3,8,5]));
console.log(tellsType(true));
console.log(tellsType(tellsType));