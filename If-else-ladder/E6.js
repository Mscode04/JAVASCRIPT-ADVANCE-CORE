let year=1900;
if (year % 4 === 0) {
  if (year%100==0){
    if(year%400==0){
      console.log("leep")
    }
    else{
        console.log("not leep")
    }
  }
  else{
    console.log("leep")
  }
}
else{
  console.log("not y leep")
}