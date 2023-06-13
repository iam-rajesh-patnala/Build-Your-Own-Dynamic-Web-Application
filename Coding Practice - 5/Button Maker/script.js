// let bgColorInput = document.getElementById("bgColorInput");
// let fontColorInput = document.getElementById("fontColorInput");
// let fontSizeInput = document.getElementById("fontSizeInput");
// let fontWeightInput = document.getElementById("fontWeightInput");
// let paddingInput = document.getElementById("paddingInput");
// let borderRadiusInput = document.getElementById("borderRadiusInput");

let applyButton = document.getElementById("applyButton");
let customButton = document.getElementById("customButton");

applyButton.onclick = function () {
    var bgColorInput = document.getElementById("bgColorInput").value;
    var fontColorInput = document.getElementById("fontColorInput").value;
    var fontSizeInput = document.getElementById("fontSizeInput").value;
    var fontWeightInput = document.getElementById("fontWeightInput").value;
    var paddingInput = document.getElementById("paddingInput").value;
    var borderRadiusInput = document.getElementById("borderRadiusInput").value;
    customButton.style.backgroundColor = bgColorInput;
    customButton.style.color = fontColorInput;
    customButton.style.fontSize = fontSizeInput;
    customButton.style.fontWeight = fontWeightInput;
    customButton.style.padding = paddingInput;
    customButton.style.borderRadius = borderRadiusInput;
    // console.log("");
};
