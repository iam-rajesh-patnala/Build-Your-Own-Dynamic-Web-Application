let counterValue = document.getElementById("counterValue");
counterValue.classList.add("counter");


let counterStatus = localStorage.getItem("clickCount");

if (counterStatus === null) {
    counterValue.textContent = 0;
} else {
    counterValue.textContent = counterStatus;
}

let incrementBtn = document.getElementById("incrementBtn");

incrementBtn.onclick = function () {
    let counter = parseInt(counterValue.textContent) + 1;
    localStorage.setItem("clickCount", parseInt(counter));
    counterValue.textContent = counter;
};


let resetBtn = document.getElementById("resetBtn");
resetBtn.onclick = function () {
    counterStatus = 0;
    localStorage.setItem("clickCount", counterStatus);
    counterValue.textContent = counterStatus;
    alert("Do you want to reset?")
}
