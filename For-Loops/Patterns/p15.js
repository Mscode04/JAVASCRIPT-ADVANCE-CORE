// Patterns 15
let x=5;
for (let i=1;i<=x;i++){
  let row="";
  for (let j=1;j<=(((i-1)*3)+1);j++){
    row+=j+" ";
  }
  console.log(row);
}

