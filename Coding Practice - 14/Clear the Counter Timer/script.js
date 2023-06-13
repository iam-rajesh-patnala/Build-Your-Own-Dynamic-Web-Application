let clearBtnEl = document.getElementById("clearBtn");
let counterValue = document.getElementById("counterValue");

let counter = 0;

let counterTimer = function () {
    counter = counter + 1;
    counterValue.textContent = counter;
};

let intervalId = setInterval(counterTimer, 1000);

// Write your code here
clearBtnEl.addEventListener("click", function () { 
    clearInterval(intervalId);
})