function Pal(str) {
    if (str.length <= 1) {
        return "palidrome";
    }


    if (str[0] == str[str.length - 1]) {
        return Pal(str.slice(1, -1));

    } 
    
    else {
        return "Not ";
    }
}

console.log(Pal("shaheen")); 
console.log(Pal("malayalam"));   


// var x="malayalam"
// console.log(x.slice(1,-1))
