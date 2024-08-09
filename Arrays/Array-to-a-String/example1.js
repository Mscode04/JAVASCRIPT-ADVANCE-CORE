const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());


// In JavaScript, arrays use numbered indexes.  

// In JavaScript, objects use named indexes.


// const person = [];
// person["firstName"] = "John";
// person["lastName"] = "Doe";
// person["age"] = 46;
// person.length;     // Will return 0
// person[0];         // Will return undefined



// When to Use Arrays. When to use Objects.
// JavaScript does not support associative arrays.
// You should use objects when you want the element names to be strings (text).
// You should use arrays when you want the element names to be numbers.



// JavaScript new Array()
// JavaScript has a built-in array constructor new Array().
// But you can safely use [] instead.


// Create an array with one element ???
// const points = new Array(40); 
// console.log(points)   




// Basic Array Methods

// Array length
// Array toString()
// Array at()    //The at() method returns an indexed element from an array.
// Array join()
// Array pop()
// Array push()
// See Also:
// Search Methods
// Sort Methods
// Iteration Methods
// Array shift()   //The shift() method removes the first array element and "shifts" all other elements to a lower index.
// Array unshift()   //The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
// Array delete()   //Using delete() leaves undefined holes in the array.
// Array concat()8    //The concat() method creates a new array by merging (concatenating) existing arrays:
// Array copyWithin()
    // Note
    // The copyWithin() method overwrites the existing values.
    // The copyWithin() method does not add items to the array.
    // The copyWithin() method does not change the length of the array.
// Array flat()   //The flat() method creates a new array with sub-array elements concatenated to a specified depth.
    // The flatMap() method first maps all elements of an 
    // array and then creates a new array by flattening the array.
// Array splice()
    // The splice() method can be used to add new items to an array:
    // const fruits = ["Banana", "Orange", "Apple", "Mango"];
    // console.log( fruits);    // Banana,Orange,Apple,Mango
    // fruits.splice(2, 0, "Lemon", "Kiwi");
    // console.log( fruits);    //Banana,Orange,Lemon,Kiwi,Apple,Mango


    // uses two
    // With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:
    // const fruits = ["Banana", "Orange", "Apple", "Mango"];
    // fruits.splice(0, 1);


    // // Array toSpliced()
    // The difference between the new toSpliced() method and the old splice() method is that 
    // the new method creates a new array, 
    // keeping the original array unchanged,
    //  while the old method altered the original array.



// Array slice()
    // The slice() method can take two arguments like slice(1, 3).
    // The method then selects elements from the start argument, and up to (but not including) the end argument.