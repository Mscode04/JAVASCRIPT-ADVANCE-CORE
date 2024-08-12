// Call  Stack

var x=1;
// console.log(x)
// fun1();
// fun2();
// function fun1(){
//     x=10
//     console.log(x)
// }
// function fun2(){
//     x=100
//     console.log(x)
// }

// Another Case
var x=1;
fun1();
fun2();
console.log(x); //Hera the x is Replaced with 100
function fun1(){
    x=10
    console.log(x);
}
function fun2(){
    x=100
    console.log(x);
}