// async: Declares a function as asynchronous. It automatically returns a promise.
// await: Pauses the execution of an async function until the promise is resolved.

let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = true; 
        if (success) {
            resolve('Operation was successful!');
        } else {
            reject('Operation failed.');
        }
    }, 1000); 
});


async function example() {
    try {
        let result = await myPromise;
        console.log(result); 
    } catch (error) {
        console.error(error); 
    }
}

example();


