// Map
//  For Transform A array
//  we want double this array
// Normaly
var array=[1,3,5,7,8];
// function dub(){
//     x=[]
//     for (let i=0;i<array.length;i++){
//         x[i]=array[i]*2

//     }
//     return x;
// }
// console.log(dub(array));


// Insted we can us emap funtions
function dub(number){
    return number*2;
}
var x=array.map(dub);
console.log(x);
