var array=[1,3,5,7,8];
function dub(number){
    return number*2;
}
function tri(number){
    return number*3;
}

var x=array.map(dub);
console.log(x);
var x=array.map(tri);
console.log(x);

// also we can put that funtion in map funtion
var x=array.map(function binary(number){
    return number.toString(2);
});
console.log(x);


// also we can put that funtion in map funtion likje arrow function
var x=array.map((number)=> number.toString(2));
console.log(x); 


// to simlyfy
console.log(array.map((x)=> x.toString(2))); 