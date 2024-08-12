// Closures
// The inner Function remember the environment  even after the execution
// Closures are the functions that retain the acces to its lexical scope even the function is executed outside that scope 
function x(){
    var a=10;
    return function y(){
        console.log(a);
    }
}

var z=x();
console.log(z)
//  more codes
z();

// Uses
// Module Design Pattern 
// Currying 
// Function like once
// Memozie
// maintaining state  in async world
// SetTimeOut
