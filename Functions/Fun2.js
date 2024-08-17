// Function 2
function LargeNumber(Num1,Num2){
    let Result;
    if (Num1>Num2){
      Result=Num1+" Is Bigger Number";
    }
    else if(Num1<Num2){
      Result=Num2+ " Is Bigger Number";
    }
    else{
      Result="Both Are Equl";
    }
    return Result; 
  }
  console.log(LargeNumber(5,6));