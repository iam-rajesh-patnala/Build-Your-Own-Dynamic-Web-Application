let firstNumber = document.getElementById("firstNumber");
let secondNumber = document.getElementById("secondNumber");
let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");

let total = null;

function generateRandomNumbers() {
    let randomNumber1 = Math.round(Math.random() * (6 - 1) + 1);
    let randomNumber2 = Math.round(Math.random() * (6 - 1) + 1);
    firstNumber.textContent = randomNumber1;
    secondNumber.textContent = randomNumber2;
    total = randomNumber1 + randomNumber2;
}

generateRandomNumbers();

function restartButton() {
    generateRandomNumbers();
    gameResult.textContent = "";
    userInput.value = "";
}

function checkButton() {
    if (userInput.value === "") {
        gameResult.innerHTML = "Please Enter a Number!";
        gameResult.style.backgroundColor = "red";
        return;
    } else if (total === parseInt(userInput.value)) {
        gameResult.textContent = "Congratulations! You got it Right.";
        gameResult.style.backgroundColor = "#028a0f";
        userInput.value = "";
    } else {
        gameResult.textContent = "Please Try Again!";
        gameResult.style.backgroundColor = "orange";
        userInput.value = "";
    }
}
