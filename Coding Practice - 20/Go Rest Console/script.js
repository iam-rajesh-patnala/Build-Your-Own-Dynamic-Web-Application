let consoleFormEl = document.getElementById("consoleForm");

let requestUrlEl = document.getElementById("requestUrl");
let requestUrlErrMsgEl = document.getElementById("requestUrlErrMsg");

let requestMethodEl = document.getElementById("requestMethod");
let requestBodyEl = document.getElementById("requestBody");

let responseStatusEl = document.getElementById("responseStatus");
let responseBodyEl = document.getElementById("responseBody");

let formData = {
    requestUrl: "https://gorest.co.in/public-api/users",
    requestMethod: "POST",
    requestBody: "",
};

requestUrlEl.addEventListener("change", (e) => {
    formData.requestUrl = e.target.value;
});

requestMethodEl.addEventListener("change", (e) => {
    formData.requestMethod = e.target.value;
});

requestBodyEl.addEventListener("change", (e) => {
    formData.requestBody = e.target.value;
});

function validateRequestUrl(formData) {
    let { requestUrl } = formData;
    if (requestUrl === "") {
        requestUrlErrMsgEl.innerText = "Required*";
    } else {
        requestUrlErrMsgEl.innerHTML = "";
    }
}

function sendRequest(formData) {
    let { requestUrl, requestMethod, requestBody } = formData;

    let options = {
        method: requestMethod,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization:
                "Bearer 00f3f8fde06120db02b587cc372c3d85510896e899b45774068bb750462acd9f",
        },
        body: requestBody,
    };

    fetch(requestUrl, options)
        .then((response) => {
            return response.json();
        })
        .then((jsonData) => {
            let responseStatus = jsonData.code;
            let responseBody = JSON.stringify(jsonData);
            responseStatusEl.value = responseStatus;
            responseBodyEl.value = responseBody;
        });
}

consoleFormEl.addEventListener("submit", (e) => {
    e.preventDefault();
    validateRequestUrl(formData);
    sendRequest(formData);
});
