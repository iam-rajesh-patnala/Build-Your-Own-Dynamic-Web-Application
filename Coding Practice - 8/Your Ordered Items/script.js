let itemList = [
    {
        itemName: "Veg Biryani",
        uniqueNo: 1,
    },
    {
        itemName: "Chicken 65",
        uniqueNo: 2,
    },
    {
        itemName: "Paratha",
        uniqueNo: 3,
    },
];

let orderedItemsContainer = document.getElementById("orderedItemsContainer");

let headingElement = document.createElement("h1");
headingElement.textContent = "Your Order Items";
orderedItemsContainer.appendChild(headingElement);

let ulElement = document.createElement("ul");
orderedItemsContainer.appendChild(ulElement);

function removeEl(itemId) {
    let item = document.getElementById(itemId);
    ulElement.removeChild(item);
}

function addItem(item) {
    let itemId = "item" + item.uniqueNo;
    let btnId = "button" + item.uniqueNo;

    let liElement = document.createElement("li");
    liElement.classList.add("ordered-item", "item-list-container");
    liElement.textContent = item.itemName;
    liElement.setAttribute("id", itemId);
    ulElement.appendChild(liElement);

    let cancelBtn = document.createElement("button");
    cancelBtn.setAttribute("id", btnId);
    cancelBtn.classList.add("btn", "btn-danger", "ms-3");
    cancelBtn.textContent = "Cancel";
    cancelBtn.onclick = function () {
        removeEl(itemId);
    };
    liElement.appendChild(cancelBtn);
}

for (let item of itemList) {
    addItem(item);
}
