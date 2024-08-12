function x(){
    for ( var i=1;i<=5;i++){
        setTimeout(function (){
            console.log(i);
        },i*1000)
    }
}
x();
console.log("The Ms Programmer")


// The program is console 1-5 in after 1s,2s,3s,4s,5s 
// But normaly We write this like 
// But this is wrrong
// Becouse the function while run first and it var is replecd at the last value of 6 and after the time outs it console 6,6,6,6,6
//  Error var will copy the value 
// insted we can use let
// Program in Next Program
