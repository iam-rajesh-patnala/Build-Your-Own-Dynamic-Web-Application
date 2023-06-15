let sendGetRequestBtn = document.getElementById("sendGetRequestBtn");
let requestStatus = document.getElementById("requestStatus");
let httpResponse = document.getElementById("httpResponse");
let loading = document.getElementById("loading");

function displayResults(jsonData) {
    loading.classList.toggle("d-none");
    requestStatus.classList.toggle("d-none");
    requestStatus.innerHTML = jsonData.code;
    httpResponse.innerHTML = JSON.stringify(jsonData);
}
sendGetRequestBtn.addEventListener("click", () => {
    let url = "https://gorest.co.in/public-api/users";

    let options = {
        method: "GET",
    };

    loading.classList.toggle("d-none");
    requestStatus.classList.toggle("d-none");

    fetch(url, options)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonData) {
            displayResults(jsonData);
        });
});
