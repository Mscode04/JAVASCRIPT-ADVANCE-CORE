// Math.random() used with Math.floor() can be used to return random integers.
// As you can see from the examples above, 
// it might be a good idea to create a proper random function to use for all random integer purposes.


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}