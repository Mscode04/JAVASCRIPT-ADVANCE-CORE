

function flatten(array) {
    let result = [];

    array.forEach(element => {
        if (Array.isArray(element)) {
        result = result.concat(flatten(element));
        } 
        else {
        result.push(element); 
        }
    });

    return result;
}

console.log(flatten([1, [2, [3, [4]]]]));