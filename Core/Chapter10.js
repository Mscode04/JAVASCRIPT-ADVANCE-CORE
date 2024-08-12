// Closure

// A closure is a function that remembers the environment in which it was created.
//  This means that a closure has access to variables from its containing (enclosing) function even after that function has finished executing.


// A closure is a function that retains access to its lexical scope even when the function is executed outside that scope. 
// In other words, a closure gives you access to an outer function’s scope from an inner function.


// "Closures are created whenever a function is defined inside another function, allowing the inner function to access the variables of the outer function. 
// This means the inner function 'remembers' the environment in which it was created."

function outerFunction() {
    let outerVariable = "I'm outside!";
  
    function innerFunction() {
      console.log(outerVariable); // The inner function has access to outerVariable
    }
  
    return innerFunction;
  }
  
  const myClosure = outerFunction();
  myClosure(); // Logs: "I'm outside!"
  

// outerFunction creates a local variable outerVariable and a function innerFunction that accesses outerVariable.
// innerFunction is returned from outerFunction and assigned to myClosure.
// When myClosure is called, it still has access to outerVariable even though outerFunction has finished executing.