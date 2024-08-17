function po(num,power){
    if(power==0){
        return 1;
    }
    return num * po(num,power-1);
}
console.log(po(3,3))