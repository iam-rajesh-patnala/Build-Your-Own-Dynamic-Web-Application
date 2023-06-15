let userInputEl = document.getElementById("userInput");
let requestBodyEl = document.getElementById("requestBody");
let sendPutRequestBtnEl = document.getElementById("sendPutRequestBtn");
let requestStatusEl = document.getElementById("requestStatus");
let httpResponseEl = document.getElementById("httpResponse");
let loadingEl = document.getElementById("loading");

function displayResult(data) {
    requestStatusEl.innerHTML = data.code;
    httpResponseEl.innerHTML = JSON.stringify(data);
}

function sendPutRequest() {
    httpResponseEl.classList.add("d-none")
    loadingEl.classList.remove("d-none");
    requestStatusEl.classList.add("d-none");

    let userInput = userInputEl.value;
    let requestBody = requestBodyEl.value;

    let url = "https://gorest.co.in/public-api/users" + "/" + userInput;

    let options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization:
                "Bearer 88d52bbcb1d08c8abc4749b31118796c1f44c633b20b9ba4c4bfb18e01d1b3f0",
        },
        body: requestBody,
    };

    fetch(url, options)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            loadingEl.classList.add("d-none");
            requestStatusEl.classList.remove("d-none");
                httpResponseEl.classList.remove("d-none");
            displayResult(data);
        });
}

sendPutRequestBtnEl.addEventListener("click", sendPutRequest);
