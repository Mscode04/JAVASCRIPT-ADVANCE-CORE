function x(){
    for ( var i=1;i<=5;i++){
        function y(num){
            setTimeout(function (){
                console.log(num);
            },num*1000)
        }
        y(i)

    }
}
x();
console.log("The Ms Programmer")