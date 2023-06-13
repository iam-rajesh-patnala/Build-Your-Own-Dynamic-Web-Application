let aboutButton = document.getElementById("aboutButton");
let timeToVisitButton = document.getElementById("timeToVisitButton");
let attractionsButton = document.getElementById("attractionsButton");

let aboutTab = document.getElementById("aboutTab");
let timeToVisitTab = document.getElementById("timeToVisitTab");
let attractionsTab = document.getElementById("attractionsTab");

timeToVisitTab.classList.add("d-none");
attractionsTab.classList.add("d-none");

aboutButton.onclick = function () {
    aboutButton.classList.add("selected-button");
    attractionsButton.classList.remove("selected-button");
    timeToVisitButton.classList.remove("selected-button");

    aboutTab.classList.remove("d-none");
    attractionsTab.classList.add("d-none");
    timeToVisitTab.classList.add("d-none");
};

timeToVisitButton.onclick = function () {
    timeToVisitButton.classList.add("selected-button");
    attractionsButton.classList.remove("selected-button");
    aboutButton.classList.remove("selected-button");

    timeToVisitTab.classList.remove("d-none");
    aboutTab.classList.add("d-none");
    attractionsTab.classList.add("d-none");
};

attractionsButton.onclick = function () {
    attractionsButton.classList.add("selected-button");
    aboutButton.classList.remove("selected-button");
    timeToVisitButton.classList.remove("selected-button");

    attractionsTab.classList.remove("d-none");
    aboutTab.classList.add("d-none");
    timeToVisitTab.classList.add("d-none");
};
