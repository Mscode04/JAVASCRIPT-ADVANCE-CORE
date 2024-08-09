
let ar1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; 
let ar2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; 
function sum(x1,x2){
  let r1=0,r2=0;
  for (let i=0;i<x1.length;i++){
    r1 += x1[i];
  }
  for (let j=0;j<x2.length;j++){
    r2 += x2[j];
  }
  console.log("The Sum of TWo Arrys is : "+ (r1+r2))
}
sum(ar1,ar2);