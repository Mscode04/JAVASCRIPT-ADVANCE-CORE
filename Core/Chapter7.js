// Temporal Dead Zone (TDZ)


// The Temporal Dead Zone (TDZ) in JavaScript refers to the state
//  where variables are declared with let or const before they are initialized, 
// but they cannot be accessed (i.e., they are in a "dead zone") until after their declaration.

console.log(myVar); // ReferenceError: Cannot access 'myVar' before initialization
let myVar = 10;

// Same as const


// When Variable in this TD zone we cant acces them
// aslo this not attached window object or that is not stoterd in global execution phase