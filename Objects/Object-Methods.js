// Object Methods
// Object methods are actions that can be performed on objects.
// A method is a function definition stored as a property value.

const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };

// In the example above, this refers to the person object:
// this.firstName means the firstName property of person.
// this.lastName means the lastName property of person.

// Accessing Object Methods
// objectName.methodName()
// name = person.fullName();


// If you access the fullName property without (), it will return the function definition:
// name = person.fullName;


// Adding a Method to an Object
// person.name = function () {
//     return this.firstName + " " + this.lastName;
//   };


// Display JavaScript Objects?
// Create an Object
// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
//   };
  
//   document.getElementById("demo").innerHTML = person;



// Object Properties
// Display Properties
document.getElementById("demo").innerHTML =
person.name + "," + person.age + "," + person.city;



// Build a Text
let text = "";
for (let x in person) {
  text += person[x] + " ";
};



// Using Object.values()
// Object.values() creates an array from the property values:
// Create an Array
// const myArray = Object.values(person);



// Using Object.entries()
// Object.entries() makes it simple to use objects in loops:
// let text = "";
for (let [fruit, value] of Object.entries(fruits)) {
  text += fruit + ": " + value + "<br>";
}


// Using JSON.stringify()
// JavaScript objects can be converted to a string with JSON method JSON.stringify().
// JSON.stringify() is included in JavaScript and supported in all major browsers.


// Note:
// The result will be a string written in JSON notation:
// {"name":"John","age":50,"city":"New York"}


// Stringify Object
// let myString = JSON.stringify(person);