

let myPromise = new Promise(function(myResolve, myReject) {
    var x=0;
    if (x == 0) {
        myResolve("OK");
    } else {
        myReject("Error");
    }
});

myPromise.then(
    function(result) { // `result` will hold the resolved value
        console.log(result); // Should log "OK"
    }
).catch(
    function(error) { // `error` will hold the rejected value
        console.log(error); // This will not be called in this case
    }
);

