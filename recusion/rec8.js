function div(a, b) {
    if (b === 0) {
        return a;
    } 
    return div(b, a % b); 
}
console.log(div(36, 18)); 
