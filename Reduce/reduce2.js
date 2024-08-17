// print Maximmum value of an array
var arr=[1,2,3,4,5,6];

// Normaly

// function max(arr){
//     let value=0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>value){
//             value=arr[i]
//         } 
//     }
//     return value
// }
// console.log(max(arr))



// Using Reduce Function
var x=arr.reduce(function (i,j){
    if(j>i){
        i=j
    }
    return i
},0)
console.log(x)