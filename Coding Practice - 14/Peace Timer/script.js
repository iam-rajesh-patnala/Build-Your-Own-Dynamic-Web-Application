let twentySecondsBtn = document.getElementById("twentySecondsBtn");
let thirtySecondsBtn = document.getElementById("thirtySecondsBtn");
let fortySecondsBtn = document.getElementById("fortySecondsBtn");
let oneMinuteBtn = document.getElementById("oneMinuteBtn");
let timerText = document.getElementById("timerText");

let message = "Your moment is complete";
let universalId = null;

twentySecondsBtn.addEventListener("click", () => {
    clearInterval(universalId);
    let count20 = 20;
    timerText.innerHTML = count20 + " seconds left";
    universalId = setInterval(() => {
        count20--;
        timerText.innerHTML = count20 + " seconds left";
        if (count20 === 0) {
            timerText.innerHTML = message;
            clearInterval(universalId);
        }
    }, 1000);
})
thirtySecondsBtn.addEventListener("click", () => {
    clearInterval(universalId);
    let count30 = 30;
    timerText.innerHTML = count30 + " seconds left";
    universalId = setInterval(() => {
        count30--;
        timerText.innerHTML = count30 + " seconds left";
        if (count30 === 0) {
            timerText.innerHTML = message;
            clearInterval(universalId);
        }
    }, 1000);
});
fortySecondsBtn.addEventListener("click", () => {
    clearInterval(universalId);
    let count40 = 40;
    timerText.innerHTML = count40 + " seconds left";
    universalId = setInterval(() => {
        count40--;
        timerText.innerHTML = count40 + " seconds left";
        if (count40 === 0) {
            timerText.innerHTML = message;
            clearInterval(universalId);
        }
    }, 1000);
});
oneMinuteBtn.addEventListener("click", () => {
    clearInterval(universalId);
    let count60 = 60;
    timerText.innerHTML = count60 + " seconds left";
    universalId = setInterval(() => {
        count60--;
        timerText.innerHTML = count60 + " seconds left";
        if (count60 === 0) {
            timerText.innerHTML = message;
            clearInterval(universalId);
        }
    }, 1000);
});
