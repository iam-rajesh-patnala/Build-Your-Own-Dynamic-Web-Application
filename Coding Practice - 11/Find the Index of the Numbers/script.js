let numbers = [17, 31, 77, 20, 63];

let userInput = document.getElementById("userInput");
let findBtn = document.getElementById("findBtn");
// let indexOfNumber = document.getElementById("indexOfNumber");

// function findIndexOfNumber(){
//     let value = parseInt(userInput.value);
//     let result = numbers.indexOf(value);
//     // indexOfNumber.textContent = result;
//     document.getElementById("indexOfNumber").innerHTML = result;
//     userInput.value = "";
// }

function findIndexOfNumber() {
    let value = userInput.value;
    if (value === "") {
        alert("Please enter a number");
        return;
    } else {
        let index = numbers.findIndex(function (eachItem) {
            if (eachItem === parseInt(value)) {
                return true;
            } else {
                return false;
            }
        });
        document.getElementById("indexOfNumber").innerHTML = index;
        userInput.value = "";
    }
}
