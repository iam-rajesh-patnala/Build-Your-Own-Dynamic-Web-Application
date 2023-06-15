let jokeTextEl = document.getElementById("jokeText");
let jokeBtnEl = document.getElementById("jokeBtn");
let spinnerEl = document.getElementById("spinner");

function addJoke(joke) {
    spinnerEl.classList.toggle("d-none");
    jokeTextEl.classList.toggle("d-none");
    jokeTextEl.innerHTML = joke.value;
}

function generateJoke() {
    spinnerEl.classList.toggle("d-none");
    jokeTextEl.classList.toggle("d-none");
    let url = "https://apis.ccbp.in/jokes/random";
    let options = {
        method: "GET",
    };

    fetch(url, options)
        .then(function (response) {
            return response.json();
        })

        .then(function (jsonData) {
            addJoke(jsonData);
        });
}

jokeBtnEl.addEventListener("click", generateJoke);
