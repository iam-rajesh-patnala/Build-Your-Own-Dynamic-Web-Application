let userInput = document.getElementById("userInput");
let keyCodeList = document.getElementById("keyCodeList");

userInput.addEventListener("keydown", function (event) {
    let keyCode = document.createElement("li");
    keyCode.textContent = event.keyCode;
    keyCodeList.appendChild(keyCode);
})