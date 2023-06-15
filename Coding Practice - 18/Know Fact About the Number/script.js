let userInputEl = document.getElementById("userInput");
let factEl = document.getElementById("fact");
let spinnerEl = document.getElementById("spinner");

function displayFact(jsonData) {
    spinnerEl.classList.add("d-none");
    factEl.classList.remove("d-none");
    let fact = jsonData.fact;
    factEl.innerText = fact;
}

function getFact(userInput) {
    let url = "https://apis.ccbp.in/numbers-fact?number=" + userInput;

    let options = {
        method: "GET",
    };

    fetch(url, options)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonData) {
            displayFact(jsonData);
        });
}

function searchResults(event) {
    if (event.key === "Enter") {
        spinnerEl.classList.remove("d-none");
        factEl.classList.add("d-none");
        let userInput = userInputEl.value;
        if (userInput !== "") {
            getFact(parseInt(userInput));
        } else {
            alert("Enter a number");
        }
    }
}

userInputEl.addEventListener("keydown", searchResults);
