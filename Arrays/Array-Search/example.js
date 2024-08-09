//  The indexOf() method searches an array for an element value and returns its position.
//  array.indexOf(item, start)

// Array.lastIndexOf() is the same as Array.indexOf(),
//  but returns the position of the last occurrence of the specified element.


// Array.includes() to arrays. This allows us to check if an element is present in an array (including NaN, unlike indexOf).
// array.includes(search-item)


// The find() method returns the value of the first array element that passes a test function.
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

// Note that the function takes 3 arguments:
// The item value
// The item index
// The array itself



// The findIndex() method returns the index of the first array element that passes a test function.

// const numbers = [4, 9, 16, 25, 29];
// let first = numbers.findIndex(myFunction);

// function myFunction(value, index, array) {
//   return value > 18;
// }

// findLast() method that will start from the end of an array and return the value of the first element that satisfies a condition.
const temp = [27, 28, 30, 40, 42, 35, 30];
let high = temp.findLast(x => x > 40);

// The findLastIndex() method finds the index of the last element that satisfies a condition.
