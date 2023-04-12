let rowContainer = document.getElementById('rowContainer');

let inputElement = document.getElementById('cartItemTextInput');

let myCardHeading = document.createElement('h4');
myCardHeading.textContent = 'My Cart items';
myCardHeading.classList.add('text-center', 'mt-4', 'mb-4');
rowContainer.appendChild(myCardHeading);

let ul = document.createElement('ul');
ul.classList.add("items-list");
rowContainer.appendChild(ul);

function create() {
    let listitem = document.createElement('li');
    listitem.classList.add('items');
    listitem.textContent = inputElement.value;
    ul.appendChild(listitem);
    inputElement.value = "";
}