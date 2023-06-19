let subscribeFormEl = document.getElementById("subscribeForm");
let nameEl = document.getElementById("name");
let emailEl = document.getElementById("email");
let nameErrMsgEl = document.getElementById("nameErrMsg");
let emailErrMsgEl = document.getElementById("emailErrMsg");



nameEl.addEventListener("blur", (event) => {
    if (event.target.value === "") {
        nameErrMsgEl.innerHTML = "Required*";
    }
    else {
        nameErrMsgEl.innerHTML = "";
    }
});

emailEl.addEventListener("blur", (event) => { 
    if(event.target.value === "") {
        emailErrMsgEl.innerHTML = "Required*";
    }
    else {
        emailErrMsgEl.innerHTML = "";
    }
})



subscribeFormEl.addEventListener("submit", (event) => {
    event.preventDefault();
})