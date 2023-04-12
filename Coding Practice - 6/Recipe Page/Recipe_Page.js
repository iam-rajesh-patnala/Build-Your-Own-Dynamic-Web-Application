let recipeObj = {
    title: "Tomato Pasta",
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    ingredients: [
        "Pasta",
        "Oil",
        "Onions",
        "Salt",
        "Tomato Pasta Sauce",
        "Cheese",
    ],
};
let itemsContainer = document.getElementById("itemsContainer");
let titleEl = document.getElementById("title");
let imgEl = document.getElementById("imgEl");

titleEl.textContent = recipeObj.title;
titleEl.classList.add("recipe-title");

imgEl.setAttribute("src", recipeObj.imgSrc);
imgEl.classList.add("img");

function addItems(items) {
    let listItems = document.createElement("li");
    listItems.classList.add("items-list");
    listItems.textContent = items;
    itemsContainer.appendChild(listItems);
}

let list = recipeObj.ingredients;
for (let items of list) {
    addItems(items);
}
