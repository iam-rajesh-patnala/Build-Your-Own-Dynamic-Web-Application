let arr = [1, 7, 3, 1, 0, 20, 77];

let startIndex = document.getElementById("startIndexInput");
let deleteCount = document.getElementById("deleteCountInput");
let itemToAdd = document.getElementById("itemToAddInput");
let updatedArray = document.getElementById("updatedArray");
let spliceButton = document.getElementById("spliceBtn");

function convertArrtoJSONstringAndAppend() {
    const stringifiedarr = JSON.stringify(arr);
    updatedArray.textContent = stringifiedarr;
}

convertArrtoJSONstringAndAppend();

spliceButton.onclick = function spliceArray() {
    let startIndexInputValue = startIndex.value;
    let deleteCountInputValue = deleteCount.value;
    let itemToAddValue = itemToAdd.value;

    let startIndexValue = parseInt(startIndex.value);
    let deleteCountValue = parseInt(deleteCount.value);

    if (startIndexInputValue === "") {
        alert("Please enter start index");
        return;
    }

    if (deleteCountInputValue === "") {
        deleteCountValue = 0;
    }

    if (itemToAddValue === "") {
        arr.splice(startIndexValue, deleteCountValue);
    } else {
        arr.splice(startIndexValue, deleteCountValue, itemToAddValue);
    }

    startIndex.value = "";
    deleteCount.value = "";
    itemToAdd.value = "";
    convertArrtoJSONstringAndAppend();
};
