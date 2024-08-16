// Pattern 19
for (let i=5;i>=1;i--){
    let y=" ";
    for(j=1;j<=i;j++){
      y+="  "
    }
    for(let t=1;t<=(5-i)+1;t++){
      y+="* "
    }
    console.log(y)
  }