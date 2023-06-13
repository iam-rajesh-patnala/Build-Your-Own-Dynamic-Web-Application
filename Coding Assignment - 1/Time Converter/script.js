let hoursInput = document.getElementById("hoursInput");
let minutesInput = document.getElementById("minutesInput");
let convertBtn = document.getElementById("convertBtn");
let errorMsg = document.getElementById("errorMsg");
let timeInSeconds = document.getElementById("timeInSeconds");

function convertTime(hours, minutes) {
    let hoursToSec = hours * 3600;
    let minutesToSec = minutes * 60;
    timeInSeconds.classList.add("time-in-seconds");
    timeInSeconds.innerHTML = hoursToSec + minutesToSec + "s";
    errorMsg.innerHTML = "";
}

convertBtn.addEventListener("click", function () {
    let hours = hoursInput.value;
    let minutes = minutesInput.value;
    if (hours === "") {
        errorMsg.innerHTML = "Please enter a valid number of hours.";
        timeInSeconds.innerHTML = "";
        timeInSeconds.classList.remove("time-in-seconds");
        return;
    } else if (minutes === "") {
        errorMsg.innerHTML = "Please enter a valid number of minutes.";
        timeInSeconds.innerHTML = "";
        timeInSeconds.classList.remove("time-in-seconds");
        return;
    }
    convertTime(parseInt(hours), parseInt(minutes));
});
