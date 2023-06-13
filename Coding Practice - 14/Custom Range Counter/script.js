// let fromUserInput = document.getElementById("fromUserInput");
// let toUserInput = document.getElementById("toUserInput");
// let startBtn = document.getElementById("startBtn");
// let counterText = document.getElementById("counterText");

// let unqId = null;

// fromCount = null;
// toCount = null;

// function staticRange(from, to) {
//     fromCount = parseInt(from);
//     toCount = parseInt(to);
//     counterText.innerHTML = fromCount;

// }
// function counterIncrement() {
//     fromCount++;
//     counterText.innerHTML = fromCount;
//     if (fromCount == toCount) {
//         clearInterval(unqId);
//     }
// }

// function main() {
//     unqId = setInterval(counterIncrement, 1000);
// }

// startBtn.addEventListener("click", () => {
//     let from = fromUserInput.value;
//     let to = toUserInput.value;

//     if (from == "") {
//         alert("Enter the from value");
//         return;
//     } else if (to == "") {
//         alert("Enter the to value");
//         return;
//     } else if (isNaN(from) || isNaN(to)) {
//         alert("Please enter a number");
//         return;
//     }
//     else if(parseInt(from) > parseInt(to)){
//         alert("From value should be less than to value");
//         return;
//     }
//     else {
//         main();
//         staticRange(from, to);
//     }
// });

let fromUserInput = document.getElementById("fromUserInput");
let toUserInput = document.getElementById("toUserInput");
let startBtn = document.getElementById("startBtn");
let counterText = document.getElementById("counterText");

function countdownInitiation(fromNum, toNum) {
    let initialNum = fromNum;
    counterText.innerHTML = initialNum;
    let timerCountdownId = setInterval(function () {
        if (initialNum < toNum) {
            initialNum++;
            counterText.innerHTML = initialNum;
        } else {
            clearInterval(timerCountdownId);
        }
    }, 1000);
}

startBtn.addEventListener("click", () => {
    let from = fromUserInput.value;
    let to = toUserInput.value;

    if (from === "") {
        alert("Enter the from value");
        return;
    } else if (to === "") {
        alert("Enter the to value");
        return;
    } else if (isNaN(from) || isNaN(to)) {
        alert("Please enter a number");
        return;
    } else if (parseInt(from) > parseInt(to)) {
        alert("From value should be less than to value");
        return;
    } else {
        let fromNum = parseInt(from);
        let toNum = parseInt(to);

        countdownInitiation(fromNum, toNum);
    }
});
