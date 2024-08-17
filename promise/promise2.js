const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 2000);
    });
};



fetchData()
    .then((message) => {
        console.log(message); // "Data fetched successfully!"
        return "Processing data...";
    })
    .then((processingMessage) => {
        console.log(processingMessage); // "Processing data..."
    })
    .catch((error) => {
        console.error("Error:", error);
    });
