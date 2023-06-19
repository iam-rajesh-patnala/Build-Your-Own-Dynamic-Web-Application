let updatePasswordFormEl = document.getElementById("updatePasswordForm");
let newPasswordEl = document.getElementById("newPassword");
let newPasswordErrMsgEl = document.getElementById("newPasswordErrMsg");
let confirmPasswordEl = document.getElementById("confirmPassword");
let confirmPasswordErrMsgEl = document.getElementById("confirmPasswordErrMsg");


// function validateNewPassword() {
//     if (newPasswordEl.value == "") {
//         newPasswordErrMsgEl.innerHTML = "Required*";
//     }else{
//         newPasswordErrMsgEl.innerHTML = "";
//     }
// }

// function validateConfirmPassword() {
//     if (newPasswordEl.value !== confirmPasswordEl.value) {
//         confirmPasswordErrMsgEl.innerHTML = "Passwords must be same";
//     } else {
//         confirmPasswordErrMsgEl.innerHTML = "";
//     }
// }


// newPasswordEl.addEventListener("blur", validateNewPassword);
// confirmPasswordEl.addEventListener("blur", validateConfirmPassword);

let validateNewPassword = () => { 
    if (newPasswordEl.value === "") {
        newPasswordErrMsgEl.innerHTML = "Required*";
    }else{
        newPasswordErrMsgEl.innerHTML = "";
        newPassword = newPasswordEl.value;
    }
}

let validateConfirmPassword = () => { 
    if(newPasswordEl.value !== confirmPasswordEl.value) {
        confirmPasswordErrMsgEl.innerHTML = "Passwords must be same";
    } else {
        confirmPasswordErrMsgEl.innerHTML = "";
    }
}



newPasswordEl.addEventListener("blur", validateNewPassword);
confirmPasswordEl.addEventListener("blur", validateConfirmPassword);


updatePasswordFormEl.addEventListener("submit", (e) => {
    e.preventDefault();
    validateNewPassword();
    validateConfirmPassword();
});
