console.log("starting the execution")
for (let i=0;i<=10;i++){
    console.log(i+"  numbers");
}

setTimeout(function(){
    for (let i=10;i>=1;i--){
        console.log(i+"  loop2-after-5s");
    }
}, 5000);


for (let i=10;i<=20;i++){
    console.log(i+"  last code");
}