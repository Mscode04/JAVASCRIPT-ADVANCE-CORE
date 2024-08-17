
// A JavaScript Set is a collection of unique values.
// Each value can only occur once in a Set.

// Pass an array to the new Set() constructor:
const letters = new Set(["a","b","c"]);
// letters.add("c");
console.log(letters.size)
typeof letters;      // Returns object
letters instanceof Set;  // Returns true