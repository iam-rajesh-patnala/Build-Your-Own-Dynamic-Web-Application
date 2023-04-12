let profileDetails = {
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
    name: "RAHUL ATTULURI",
    age: 25,
};



let imgContainer = document.getElementById("imgContainer");
imgContainer.classList.add("img-container");

let img = document.createElement("img");
img.src = profileDetails.imgSrc;
imgContainer.appendChild(img);

let heading = document.createElement("h1");
heading.textContent = profileDetails.name;
heading.classList.add("heading");
imgContainer.appendChild(heading);

let age = document.createElement("p");
age.classList.add("age");
age.textContent = "Age : " + profileDetails.age;
imgContainer.appendChild(age);


// let profileContainer = document.getElementById("profileContainer");

// profileContainer.classList.add("text-center", "d-flex", "flex-column", "justify-content-center");

// let imgEl = document.createElement("img");
// imgEl.setAttribute("src", profileDetails.imgSrc);
// imgEl.classList.add("profile-img")
// imgContainerEl.appendChild(imgEl);

// let nameEl = document.createElement("h1");
// nameEl.classList.add("profile-name");
// nameEl.textContent = profileDetails.name;
// profileContainerEl.appendChild(nameEl);

// let ageEl = document.createElement("p");
// ageEl.classList.add("age");
// ageEl.textContent = "Age: " + profileDetails.age;
// profileContainerEl.appendChild(ageEL);