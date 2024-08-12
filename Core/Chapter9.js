// block var will shadow the global var variable
var a=365;
{
    a=366;
    console.log(a) //print 366
}
console.log(a) //print 366  //the block a will shadow vara=365


// let not shadow let in block
// const not shadow const in block

// BUT 
// let shadow var
var x=1000;
{
    let x=500;
    console.log(x);
}
//  var not shadow let
let x=1000;
{
    var x=500;
    console.log(x); //SyntaxError: Identifier 'x' has already been declared
}

