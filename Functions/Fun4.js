// Function 4
function Fact(num) {
    var Result=1;
    let Num=num;
    if (num>=0){
      if(num==0){
        Result="Factorial is 1"
        return Result
      }
      else{
        for (let i=1;i<Num;i++){
          Result+=(Result*i);
        }
        return "Factorial is "+Result
      }
    }
    else{
      return "Invalid Input And Negative Number         Have Not Factorial"
    }
  }
  console.log(Fact(9));
