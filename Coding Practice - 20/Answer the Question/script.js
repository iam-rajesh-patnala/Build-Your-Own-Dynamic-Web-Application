let questionsFormEl = document.getElementById("questionsForm");

let cityHyderabadEl = document.getElementById("cityHyderabad");
let cityChennaiEl = document.getElementById("cityChennai");
let cityDelhiEl = document.getElementById("cityDelhi");
let cityMumbaiEl = document.getElementById("cityMumbai");

let resultMsgEl = document.getElementById("resultMsg");

let selectedCity = null;
let capitalCity = "Delhi";

cityHyderabadEl.addEventListener("change", (e) => {
    selectedCity = e.target.value;
});
cityChennaiEl.addEventListener("change", (e) => {
    selectedCity = e.target.value;
});
cityDelhiEl.addEventListener("change", (e) => {
    selectedCity = e.target.value;
});
cityMumbaiEl.addEventListener("change", (e) => {
    selectedCity = e.target.value;
});

questionsFormEl.addEventListener("submit", (e) => {
    e.preventDefault();
    if (selectedCity === null) {
        resultMsgEl.innerHTML = "Please select the answer!";
        resultMsgEl.style.color = "#dc3545";
    } else if (selectedCity === capitalCity) {
        resultMsgEl.innerHTML = "Correct Answer!";
        resultMsgEl.style.color = "#2b9a40";
    } else {
        resultMsgEl.innerHTML = "Wrong Answer!";
        resultMsgEl.style.color = "#dc3545";
    }
});
