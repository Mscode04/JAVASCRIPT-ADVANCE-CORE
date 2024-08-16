// Patterns 17
for (let i=1;i<=5;i++){
    let star=" "
    for (let j=1;j<=i;j++){
       star+=" " 
    }
    for(let y=0;y<=5-i;y++){
      star+="& "
    }
    console.log(star)
  }