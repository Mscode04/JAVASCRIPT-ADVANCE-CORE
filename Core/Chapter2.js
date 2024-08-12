// Hoisting:

// Variable and function declarations are moved to the top of their containing scope during the creation phase.
// Variables are initialized to undefined, while functions are fully hoisted.
getName();
console.log(x);
console.log(getName);
// console.log(y);
var x=10;
function getName(){
//   code
}
let y=()=>{  
    // code
}