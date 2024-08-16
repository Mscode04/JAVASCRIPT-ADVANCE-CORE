let x=6;
if (x==0){
  console.log("Factorial is 1")
}
else if (x>=1){
   let result=1
  let data;
  for (let i=0;i<x;i++){
    data= result*i
    result+=data
  }
  console.log("Factprial is : "+result)
}
else{
  console.log("Invalid ")
}
