// Print Largest abd Second Largest Number In a array
var arr=[1,2,3,4,5,6];

// Normal
// let value=0;
// let value2=0
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>value ){
//         value2=value;
//         value=arr[i];
        
//     }
//     else if(arr[i]>value2){
//         value2=arr[i];
//     }
// }
// console.log(value2)
// console.log(value)


// Largest Number
// var x=arr.reduce(function (first,number){
//     if(number>first){
//         first=number;
//     }
//     return number;
// },0)
// console.log(x)




// Largest and second Largest
function find(arr) {
    var x = { value: 0, value2: 0 };
    arr.reduce(function (first, number) {
        if (number > first.value) {
            first.value2 = first.value;
            first.value = number;
        } else if (number > first.value2) {
            first.value2 = number;
        }
        return first;
    }, x);
    return x;
}
console.log(find(arr)); 


