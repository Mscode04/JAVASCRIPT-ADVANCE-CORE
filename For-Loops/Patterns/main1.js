for(let i=1;i<=4;i++){
    var x=""
    for(let j=1;j<=3;j++){
        if(i%2===0){
            var a=" $ "
        }
        else{
            var a=" * "
        }
        x=x+a
    }
    console.log(x)
}