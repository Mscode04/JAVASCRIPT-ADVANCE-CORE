const my = new Promise((resolve, reject) => {
    const success = false; 
    if (success) {
        resolve("Promise successfully!");
    } else {
        reject("Promise rejected.");
    }
});

my
    .then((message) => {
        console.log(message); 
    })
    .catch((error) => {
        console.log(error);
    });
