let skillList = [
    {
        skillName: "HTML",
        uniqueNo: 1,
    },
    {
        skillName: "CSS",
        uniqueNo: 2,
    },
    {
        skillName: "JavaScript",
        uniqueNo: 3,
    },
];

let skillsContainer = document.getElementById("skillsContainer");

let heading = document.createElement("h1");
heading.textContent = "Mark your Skills";
heading.classList.add("heading");
skillsContainer.appendChild(heading);

let ulElement = document.createElement("ul");
ulElement.classList.add("ul-element");
skillsContainer.appendChild(ulElement);

function addStatus(checkBoxId, labelId) {
    let checkBox = document.getElementById(checkBoxId);
    checkBox.checked;

    let labelElement = document.getElementById(labelId);
    labelElement.classList.toggle("checked");
}

function addCourse(course) {
    let checkBoxId = "checkbox" + course.uniqueNo;
    let labelId = "label" + course.uniqueNo;

    let liElement = document.createElement("li");
    ulElement.appendChild(liElement);

    let checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("id", checkBoxId);
    checkBox.classList.add("check-box");
    checkBox.onclick = function () {
        addStatus(checkBoxId, labelId);
    };
    liElement.appendChild(checkBox);

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", checkBoxId);
    labelElement.setAttribute("id", labelId);
    labelElement.textContent = course.skillName;
    labelElement.classList.add("label-text");
    liElement.appendChild(labelElement);
}

for (let course of skillList) {
    addCourse(course);
}
