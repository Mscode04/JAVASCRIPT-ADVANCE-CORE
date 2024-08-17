// Object Constructors
// Object Constructor Functions
// Sometimes we need to create many objects of the same type.
// To create an object type we use an object constructor function.
// It is considered good practice to name constructor functions with an upper-case first letter.


function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }


// Note
// In the constructor function, this has no value.
// The value of this will become the new object when a new object is created.  


// Now we can use new Person() to create many new Person objects:
// const myFather = new Person("John", "Doe", 50, "blue");
// const myMother = new Person("Sally", "Rally", 48, "green");
// const mySister = new Person("Anna", "Rally", 18, "green");
// const mySelf = new Person("Johnny", "Rally", 22, "green");



// Default Values
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    this.nationality = "English";
  }


//   Adding a Property to an Object
// myFather.nationality = "English";


// Adding a Property to a Constructor
// Person.nationality = "English";   IS AN ERROR
// Person.prototype.nationality = "English";  Currect Syntax Use prototype




// Constructor Function Methods
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    this.fullName = function() {
      return this.firstName + " " + this.lastName;
    };
  }


myMother.changeName = function (name) {
    this.lastName = name;
  }


//   Adding a Method to a Constructor
// Person.changeName = function (name) {
//     this.lastName = name;
//   }
//   myMother.changeName("Doe");   Error 

Person.prototype.changeName = function (name) {
    this.lastName = name;
  }
myMother.changeName("Doe");


// Built-in JavaScript Constructors
new Object()   // A new Object object
new Array()    // A new Array object
new Map()      // A new Map object
new Set()      // A new Set object
new Date()     // A new Date object
new RegExp()   // A new RegExp object
new Function() // A new Function object


// Use object literals {} instead of new Object().
// Use array literals [] instead of new Array().
// Use pattern literals /()/ instead of new RegExp().
// Use function expressions () {} instead of new Function().