// Private Variable
function counter(){
    var c=0;
    this.up=function (){
        c++;
        console.log(c);
    }
    this.dowm=function (){
        c--;
        console.log(c);
    }
}
var counter1= new counter()
counter1.up()
counter1.up()
counter1.up()
counter1.dowm()
counter1.up()
counter1.dowm()