// Function 3
function OddOrEven(Num){
    let Result;
    if (Num%2==0){
      Result=Num+" Is Even Number";
    }
    else{
      Result=Num+" Is Odd Number";
    }
    return Result; 
  }
  console.log(OddOrEven(5));