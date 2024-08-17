
// function fabi(n) {  
//     let a = 0, b = 1, c; 
//         let arr = [];    
//     for (let i = 0; i < n; i++) {       
//         c = a + b;
//         a = b;
//         b = c;
//         arr.push(a);
//     }
//     return arr;
// }
// console.log(fabi(5));


var a = 0, b = 1, c; 
var arr = []; 
function fabi(n) {  
    if(n>=0){
        c = a + b;
        a = b;
        b = c;
        
    arr.push(a);


    return fabi(n-1);
    }
    return 1;
}
    

fabi(5);
console.log(arr);





