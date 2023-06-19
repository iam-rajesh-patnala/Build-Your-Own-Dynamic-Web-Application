let formEl = document.getElementById("userForm");

let userEl = document.getElementById("user");
let userErrorEl = document.getElementById("userError");

let emailEl = document.getElementById("email");
let emailErrorEl = document.getElementById("emailError");

let workingStatusEl = document.getElementById("status");
let genderMaleEl = document.getElementById("genderMale");
let genderFemaleEl = document.getElementById("genderFemale");

let formData = {
    name: "",
    email: "",
    status: "Active",
    gender: "Male",
};

userEl.addEventListener("change", (event) => {
    if (event.target.value === "") {
        userErrorEl.innerHTML = "Required*";
    } else {
        userErrorEl.innerHTML = "";
    }
    formData.name = event.target.value;
});

emailEl.addEventListener("change", (event) => {
    if (event.target.value === "") {
        emailErrorEl.innerHTML = "Required*";
    } else {
        emailErrorEl.innerHTML = "";
    }
    formData.email = event.target.value;
});

// working status element
workingStatusEl.addEventListener("change", (event) => {
    formData.status = event.target.value;
});

// gender Male Status element
genderMaleEl.addEventListener("change", (event) => {
    formData.gender = event.target.value;
});

// gender Female Status element
genderFemaleEl.addEventListener("change", (event) => {
    formData.gender = event.target.value;
});

function formValidation(formData) {
    let { name, email } = formData;

    if (name === "") {
        userErrorEl.innerHTML = "Required*";
    }
    if (email === "") {
        emailErrorEl.innerHTML = "Required*";
    }
}

function submitFormData(formData) {
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization:
                "Bearer 00f3f8fde06120db02b587cc372c3d85510896e899b45774068bb750462acd9f",
        },
        body: JSON.stringify(formData),
    };

    let url = "https://gorest.co.in/public-api/users";
    
    fetch(url, options)
        .then((response) => {
            return response.json();
        })
        .then((jsonData) => {
            console.log(jsonData);
            if (jsonData.code === 422) {
                if (jsonData.data[0].message === "has already been taken") {
                    emailErrorEl.innerHTML = "Email Already Taken";
                }
            }
        });
}

formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    formValidation(formData);
    submitFormData(formData);
});
