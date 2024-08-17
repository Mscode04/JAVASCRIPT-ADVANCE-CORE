// occurence of age

const users = [
    { firstName: "akshay", lastName: "saini", age: 26},   
    { firstName: "donald", lastName: "trump", age: 75},    
    { firstName: "elon", lastName: "musk", age: 50},
    { firstName: "deepika", lastName: "padukone", age: 26}]
     
const output =users.reduce(function (acc, curr) {
    if (acc [curr.age]) {
        acc [curr.age] = ++acc [curr.age];
    } 
    else {
        acc [curr.age] = 1;
    }
    return acc;
    
}, {});
    
console.log(output);






