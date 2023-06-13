let stopButton = document.getElementById("stopButton");
let readyButton = document.getElementById("readyButton");
let goButton = document.getElementById("goButton");

let bg = document.getElementById("bg");

let redLight = document.getElementById("stopLight");
let orangeLight = document.getElementById("readyLight");
let greenLight = document.getElementById("goLight");

function buttonStop() {
    stopButton.style.backgroundColor = "#cf1124";
    redLight.style.backgroundColor = "#cf1124";
    readyButton.style.backgroundColor = "#1f1d41";
    orangeLight.style.backgroundColor = "#4b5069";
    goButton.style.backgroundColor = "#1f1d41";
    greenLight.style.backgroundColor = "#4b5069";
    bg.style.backgroundColor = "#cf1124";

}

function buttonReady() {
    readyButton.style.backgroundColor = "#f7c948";
    orangeLight.style.backgroundColor = "#f7c948";
    goButton.style.backgroundColor = "#1f1d41";
    greenLight.style.backgroundColor = "#4b5069";
    stopButton.style.backgroundColor = "#1f1d41";
    redLight.style.backgroundColor = "#4b5069";
    bg.style.backgroundColor = "#f7c948";
}

function buttonGo() {
    goButton.style.backgroundColor = "#199473";
    greenLight.style.backgroundColor = "#199473";
    stopButton.style.backgroundColor = "#1f1d41";
    redLight.style.backgroundColor = "#4b5069";
    readyButton.style.backgroundColor = "#1f1d41";
    orangeLight.style.backgroundColor = "#4b5069";
    bg.style.backgroundColor = "#199473";   
}
