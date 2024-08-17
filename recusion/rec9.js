function rev(Strings){

    if (Strings.length !==0 ){
        let def=Strings.slice("")
        return def[(Strings.length)-1] + rev(Strings.slice(0,-1));
}
else{
    return " ";
}
}


console.log(rev("hello"))