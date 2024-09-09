function showStates() {
    var country = document.getElementById("country").value;
    var stateContainer = document.getElementById("state-container");
    var stateSelect = document.getElementById("state");
    stateSelect.innerHTML = '';
    if (country === "india") {
        stateContainer.style.display = "block";
        var states = ["Kerala", "Tamil Nadu", "Karnataka", "Maharashtra", "Gujarat"];
            for (var i=0;i<states.length;i++){
            var option = document.createElement("option");
            option.text = states[i];
            stateSelect.appendChild(option);
            }
    }
}