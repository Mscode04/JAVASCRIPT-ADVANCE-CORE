// Pattern 16
let x=5
let y=1
for (let i=1;i<=x;i++){
  let r=" ";
  for (let j=1;j<=i;j++){
    r=r+y+" ";
    y=y+1;
  }
  console.log(r)
}