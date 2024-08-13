//  To filter the elements in array

// TO remove the elements in Even In a array
// Normaly

var array=[1,3,4,2,6,7,9,5]
// function even(array){
//     x=[]
// for(let i=0;i<array.length;i++){
//     if(array[i]%2==0){
//         x.push(i)
//     }
// }
// console.log(x)
// }

// even(array);

// In Case of filter Function 
function even(number){
    return number%2==0;
}
var x=array.filter(even)
console.log(x)

// simplify
console.log(array.filter((number)=> number%2==0))