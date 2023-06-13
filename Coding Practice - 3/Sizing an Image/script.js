let imageElement = document.getElementById("image"); // image
let warningMessage = document.getElementById("warningMessage"); // warningMessage
let originalImageWidth = 200; // image size
let imageWidth = document.getElementById("imageWidth"); // pixel status

imageElement.style.width = originalImageWidth + "px";
imageWidth.textContent = originalImageWidth + "px";

function incrementButton() {
    if (originalImageWidth >= 300) {
        warningMessage.textContent = "Too big. Decrease the size of the Image";
    } else {
        originalImageWidth = originalImageWidth + 5;
        let updatedImageWidth = originalImageWidth + "px";
        imageWidth.textContent = updatedImageWidth;
        imageElement.style.width = updatedImageWidth;
        warningMessage.textContent = "";
    }
}

function decrementButton() {
    if (originalImageWidth <= 100) {
        warningMessage.textContent =
            "Can't visible. Increase the size of the Image";
    } else {
        originalImageWidth = originalImageWidth - 5;
        let updatedImageWidth = originalImageWidth + "px";
        warningMessage.textContent = "";
        imageElement.style.width = updatedImageWidth;
        imageWidth.textContent = updatedImageWidth;
    }
}
