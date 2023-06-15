let requestBodyEl = document.getElementById("requestBody");
let sendPostRequestBtnEl = document.getElementById("sendPostRequestBtn");
let requestStatusEl = document.getElementById("requestStatus");
let httpResponseEl = document.getElementById("httpResponse");
let loadingEl = document.getElementById("loading");



function displayResults(jsonData) {

    loadingEl.classList.toggle("d-none");
    requestStatusEl.classList.toggle("d-none");
    
    requestStatusEl.innerHTML = jsonData.code;
    httpResponseEl.innerHTML = JSON.stringify(jsonData);
}



function sendPostHTTPRequest() { 

    let data = requestBodyEl.value;

    let url = "https://gorest.co.in/public-api/users";

    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization:
                "Bearer 88d52bbcb1d08c8abc4749b31118796c1f44c633b20b9ba4c4bfb18e01d1b3f0",
        },
        body: data,
    };

    loadingEl.classList.toggle("d-none");
    requestStatusEl.classList.toggle("d-none");

    fetch(url, options)
        
        .then(function (response) { 
            return response.json();
        })

        .then(function (jsonData) {
            displayResults(jsonData);
        })


}


sendPostRequestBtnEl.addEventListener("click", sendPostHTTPRequest);