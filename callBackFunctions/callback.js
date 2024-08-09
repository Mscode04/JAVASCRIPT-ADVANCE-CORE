// callback function is a function that is passed as an argument to 
// another function and is executed after some kind of event or task is completed.

// Handling Asynchronous Operations: Callbacks are used to handle the result of asynchronous tasks like API requests.
// Event Handling: Callbacks are used to respond to user interactions, such as clicks or form submissions.

function fetchData(callback) {
    setTimeout(() => {
        const data = 'Data fetched!';
        callback(data);
    }, 3000); 
}

function displayData(data) {
    console.log(data);
}

fetchData(displayData);
