let userInputEl = document.getElementById("userInput");
let sendDeleteRequestBtnEl = document.getElementById("sendDeleteRequestBtn");
let requestStatusEl = document.getElementById("requestStatus");
let httpResponseEl = document.getElementById("httpResponse");
let spinnerEl = document.getElementById("loading");

function displayResults(data) {
    spinnerEl.classList.toggle("d-none");
    requestStatusEl.classList.toggle("d-none");

    requestStatusEl.innerHTML = data.code;
    httpResponseEl.innerHTML = JSON.stringify(data);
}

function sendDeleteRequest() {
    let userInput = userInputEl.value;
    let url =
        "https://gorest.co.in/public-api/users" + "/" + parseInt(userInput);

    let options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization:
                "Bearer 88d52bbcb1d08c8abc4749b31118796c1f44c633b20b9ba4c4bfb18e01d1b3f0",
        },
    };

    spinnerEl.classList.toggle("d-none");
    requestStatusEl.classList.toggle("d-none");

    fetch(url, options)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            displayResults(data);
        });
}

sendDeleteRequestBtnEl.addEventListener("click", sendDeleteRequest);
