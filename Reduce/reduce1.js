// Take each elemnets in an array

// Normal way to find sum
 var arr=[1,2,3,4,5,6];
// var sum=0;
// for (var i=0;i<arr.length;i++){
//     sum =sum +arr[i];
// }
// console.log(sum);

// use reduce
// two argumnet
// 1 funtion 
    //  take two parameter inside a function
    // accumilator : itrating variable sum in this case
    // current  : the each lement value 
// 2 Initial Vaalue of accumilator

// Syntax
// var variable = array.reduce(function (accumilator,current){
    // statement
// }, starting value of accumilator)



// Sum of the array
var x=arr.reduce(function(acc,cur){
    acc=acc+cur;
    return acc;

},0)
console.log(x);