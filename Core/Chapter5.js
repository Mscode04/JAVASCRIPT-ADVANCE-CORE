// Lexical Environment
// Parent of Lexical Environment

var x=500;
function fun1(){
    // x=1000;
    fun2();
    function fun2(){
        // x=1500;
        console.log(x);
    }
}
// console.log(x);
fun1();