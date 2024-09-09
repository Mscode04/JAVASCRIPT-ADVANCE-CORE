function showStates() {
    var country = document.getElementById("country").value;
    var stateContainer1 = document.getElementById("state-container1");
    var stateContainer2 = document.getElementById("state-container2");
    var stateContainer3 = document.getElementById("state-container3");
    if (country == "india") {
        
        stateContainer2.style.display = "none";
        stateContainer3.style.display = "none";
        stateContainer1.style.display = "flex";
        
    }
    else if (country === "usa") {
        stateContainer1.style.display = "none";
        stateContainer3.style.display = "none";
        stateContainer2.style.display = "flex";
    }
    else if (country === "canada") {
        stateContainer1.style.display = "none";
        stateContainer2.style.display = "none";
        stateContainer3.style.display = "flex";
    }

}