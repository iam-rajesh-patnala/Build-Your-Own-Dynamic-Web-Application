let bgColorsArray = [
    "#e75d7c",
    "#b16cef",
    "#53cca4",
    "#efc84d",
    "#628ef0",
    "#184b73",
    "#883e7f",
    "#ed048b",
];

let button = document.getElementById("button");
let bgContainer = document.getElementById("bgContainer");

button.onclick = function () {
    let randomNumber = Math.ceil(Math.random() * bgColorsArray.length);
    bgContainer.style.backgroundColor = bgColorsArray[randomNumber];
};
