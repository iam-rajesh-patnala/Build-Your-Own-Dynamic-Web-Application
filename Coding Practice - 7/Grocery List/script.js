let groceryList = ["Apples", "Boost Drink", "Butterscotch Ice Cream", "Tomato Ketchup", "Dairy Milk Chocolates", "Pasta"];

let groceryLists = document.getElementById('groceryListContainer');
groceryLists.classList.add('groceryList');

let heading = document.createElement('h1');
heading.textContent = 'Grocery List';
heading.classList.add('heading');
groceryLists.appendChild(heading);

let itemsContainer = document.createElement('div');
itemsContainer.classList.add('items-container');
groceryLists.appendChild(itemsContainer);

let ulContainer = document.createElement('ul');
ulContainer.classList.add('ul-container');
itemsContainer.appendChild(ulContainer);

function list(items) {
    let item = document.createElement('li');
    item.textContent = items;
    ulContainer.appendChild(item);
}

for (let items of groceryList) {
    list(items);
}