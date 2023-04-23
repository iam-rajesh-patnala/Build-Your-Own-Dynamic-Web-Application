let wordCloud = [
    "Hello",
    "hii",
    "how",
    "what",
    "you",
    "yourself",
    "name",
    "victory",
    "food",
    "lovely",
    "beautiful",
    "written",
    "where",
    "who",
    "awesome",
];

let wordsContainer = document.getElementById("wordsContainer");
let userInput = document.getElementById("userInput");
let errorMsg = document.getElementById("errorMsg");
let addBtn = document.getElementById("addBtn");

function addingWord(userInputValue) {
    let randomSize = Math.ceil(Math.random() * 100) + "px";
    // console.log(randomSize);
    let spanEl = document.createElement("span");
    spanEl.textContent = userInputValue;
    spanEl.style.fontSize = randomSize;
    spanEl.classList.add("m-3");
    wordsContainer.appendChild(spanEl);

    userInput.value = "";
}

addBtn.onclick = function () {
    let userInputValue = userInput.value;

    if (userInputValue === "") {
        errorMsg.textContent = "Please enter a word";
        errorMsg.classList.add("error-msg");
        return;
    }
    addingWord(userInputValue);
};

for (let word of wordCloud) {
    addingWord(word);
}
