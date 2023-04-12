/* Follow the instructions found in the description to complete the JavaScript functionality.*/
let todoItemsContainer = document.getElementById("todoItemsContainer");

let todoList = [
    {
        text: "Learn HTML",
    },
    {
        text: "Learn CSS",
    },
    {
        text: "Learn JavaScript",
    },
];

function addTodoList(item) {
    let todoItemContainer = document.createElement("li");
    todoItemContainer.classList.add(
        "d-flex",
        "flex-row",
        "todo-item-container"
    );
    todoItemsContainer.appendChild(todoItemContainer);

    let checkboxEl = document.createElement("input");
    checkboxEl.setAttribute("type", "checkbox");
    checkboxEl.setAttribute("id", "myCheckbox");
    checkboxEl.classList.add("checkbox-input");
    todoItemContainer.appendChild(checkboxEl);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("d-flex", "flex-row", "label-container");
    todoItemContainer.appendChild(labelContainer);

    let labelEl = document.createElement("label");
    labelEl.textContent = item.text; // iterate
    labelEl.setAttribute("for", "myCheckbox");
    labelEl.classList.add("checkbox-label");
    labelContainer.appendChild(labelEl);

    let iconContainer = document.createElement("div");
    iconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(iconContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("delete-icon", "far", "fa-trash-alt");
    iconContainer.appendChild(deleteIcon);
}

for (let item of todoList) {
    addTodoList(item);
}
