// The forEach method in JavaScript is used to execute a provided function once for each element in an array. 
// It is a convenient way to iterate over array elements without needing to manage the loop index manually.

// array.forEach(callback(currentValue, index, array), thisArg);


const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
  console.log(number);
});

const fruits = ['apple', 'banana', 'cherry'];

fruits.forEach(fruit => {
  console.log(fruit);
});


