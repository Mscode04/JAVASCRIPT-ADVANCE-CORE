// How to Define a JavaScript Object
// Using an Object Literal
// Using the new Keyword
// Using an Object Constructor

// Create an Object
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};


// Create an Object
// const person = {};

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";





// Using the new Keyword


// This example create a new JavaScript object using new Object(), and then adds 4 properties:
Example
// Create an Object
const person = new Object();

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";



// Accessing Object Properties
// You can access object properties in two ways:

objectName.propertyName
objectName["propertyName"]



// In JavaScript, Objects are King.
// If you Understand Objects, you Understand JavaScript.
// Objects are containers for Properties and Methods.
// Properties are named Values.
// Methods are Functions stored as Properties.
// Properties can be primitive values, functions, or even other objects.


// JavaScript Objects are Mutable


// Objects are mutable: They are addressed by reference, not by value.

// The object x is not a copy of person. The object x is person.

// The object x and the object person share the same memory address.

// Any changes to x will also change person:

// Create a copy
const x = person;

// Change Age in both
x.age = 10;