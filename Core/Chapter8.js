// Differance Between let ,var and const

// var
// Function-scoped or globally scoped when declared outside a function.
// Variables declared with var are hoisted to the top of their scope and initialized with undefined. 
// This means you can use the variable before it's declared.
// It allows redeclaration and reassignment.


var x = 10;
console.log(x); // 10


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let
// Block-scoped (scoped to the nearest curly braces {}).
// Variables declared with let are hoisted to the top of their block scope, but not initialized.
//  Accessing the variable before its declaration results in a ReferenceError due to the Temporal Dead Zone.
// It does not allow redeclaration within the same scope, but it allows reassignment.

let y = 20;
console.log(y); // 20


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const
// Block-scoped like let.
// Variables declared with const must be initialized during declaration and cannot be reassigned to a different value.
//  However, if the variable is an object or array, its properties or elements can be modified.
// Like let, const variables are also hoisted to the top of their block scope and are not initialized.
// It does not allow redeclaration or reassignment.

const z = 30;
console.log(z); // 30



// Scope: var is function-scoped (or globally scoped if outside a function), while let and const are block-scoped.
// Hoisting: var is hoisted and initialized with undefined; let and const are hoisted but not initialized (resulting in a Temporal Dead Zone).
// Reassignment: var and let allow reassignment, but const does not (though properties of const objects or elements of const arrays can be modified).

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Choosing Between let and const:

// Use let when you expect the variable's value to change over time.
// Use const when the variable represents a constant value that should not be reassignable.
// Both let and const provide block-scoping be