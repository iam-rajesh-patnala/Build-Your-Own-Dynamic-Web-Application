let addUserFormEl = document.getElementById("addUserForm");
let nameEl = document.getElementById("name");
let nameErrMsgEl = document.getElementById("nameErrMsg");

let emailEl = document.getElementById("email");
let emailErrMsgEl = document.getElementById("emailErrMsg");

nameEl.addEventListener("blur", (e) => {
    if (e.target.value === "") {
        nameErrMsgEl.innerHTML = "Required*";
    } else {
        nameErrMsgEl.innerHTML = "";
    }
});

emailEl.addEventListener("blur", (e) => {
    if (e.target.value === "") {
        emailErrMsgEl.innerHTML = "Required*";
    } else {
        emailErrMsgEl.innerHTML = "";
    }
});

addUserFormEl.addEventListener("submit", (e) => {
    e.preventDefault();
});
