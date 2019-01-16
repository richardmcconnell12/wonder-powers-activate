document.querySelector("#activate-flight").addEventListener("click", function (flightHandlerFunction) {
    document.getElementById("flight").classList.replace("disabled", "enabled");
})

document.querySelector("#activate-mindreading").addEventListener("click", function (mindReadingHandlerFunction) {
    document.getElementById("mindreading").classList.replace("disabled", "enabled");
})

document.querySelector("#activate-xray").addEventListener("click", function (xRayHandlerFunction) {
    document.getElementById("xray").classList.replace("disabled", "enabled");
})

document.getElementById("activate-all").addEventListener("click", function (allPowersHandlerFunction) {
    const powers = document.querySelectorAll("section");
    for (i = 0; i < powers.length; i++) {
        powers[i].classList.replace("disabled", "enabled");
        console.log(powers)
    }
})

document.getElementById("deactivate-all").addEventListener("click", function (allPowersHandlerFunction) {
    const powers = document.querySelectorAll("section");
    for (i = 0; i < powers.length; i++) {
        powers[i].classList.replace("enabled", "disabled");
        console.log(powers)
    }
})
