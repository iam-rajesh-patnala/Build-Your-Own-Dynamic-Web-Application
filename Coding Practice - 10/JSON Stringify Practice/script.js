let bikes = ["Hero", "Honda", "Bajaj", "Suzuki", "Yamaha"];
let person = {
    name: "Rahul",
    age: 25,
    gender: "Male",
};
let todos = [
    {
        todo: "Attending CCBP sessions",
        todoStatus: "Completed",
    },
    {
        todo: "Completing practice sets",
        todoStatus: "Not Completed",
    },
    {
        todo: "Asking doubts",
        todoStatus: "Completed",
    },
];

let jsonContainer = document.getElementById("jsonContainer");

// let para1 = document.createElement('p');
// para1.classList.add('para');
// para1.textContent = JSON.stringify(bikes);
// jsonContainer.appendChild(para1);

// let para2 = document.createElement('p');
// para2.classList.add('para');
// para2.textContent = JSON.stringify(person);
// jsonContainer.appendChild(para2);

// let para3 = document.createElement('p');
// para3.classList.add('para');
// para3.textContent = JSON.stringify(todos);
// jsonContainer.appendChild(para3);

let values = [bikes, person, todos];

function createAndAppend(stringified) {
    let containerEl = document.createElement("div");
    containerEl.classList.add("para");
    jsonContainer.appendChild(containerEl);

    let value = document.createElement("p");
    value.textContent = stringified;
    value.classList.add("value");
    containerEl.appendChild(value);
}

function convertStringify(item) {
    let stringified = JSON.stringify(item);
    createAndAppend(stringified);
}

for (let item of values) {
    convertStringify(item);
}
