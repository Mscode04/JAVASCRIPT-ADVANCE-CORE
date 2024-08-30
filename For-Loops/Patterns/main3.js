for (let i = 1;i<=5;i++) {
    let str = '';
    for (let j=1;j<=(5-i);j++) {
        str += '#';
    }
    for (let k=0;k<(2 * i)-1;k++) {
        str += '*';
    }
    console.log(str);
}

for (let i=4;i>=1;i--) {
    let str = '';
    for (let j=(5-i);j>=1;j--) {
        str += '#';
    }
    
    for (let k=(2 * i)-1;k>0;k--) {
        str += '*';
    }
    console.log(str);
}
    