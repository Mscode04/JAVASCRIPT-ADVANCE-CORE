// Patterns 20
for (let i=1;i<=5;i++){
    let y=" ";
    for (let j=1;j<=i;j++){
      y+=" "
    }
    for (let k=1;k<=(5-i)+1;k++){
      
      y+=k;
    }
    console.log(y);
  }