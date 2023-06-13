let bgContainer = document.getElementById("bgContainer");
let heading = document.getElementById("heading");
let themeUserInput = document.getElementById("themeUserInput");


themeUserInput.addEventListener("keydown", function (event) { 
    let themeName = themeUserInput.value;
    
    if (themeName === "Dark" && event.key === "Enter") {
        bgContainer.style.backgroundImage = "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png')";
        heading.style.color = "#ffffff";
        themeUserInput.value = "";
    }
    else if (themeName === "Light" && event.key === "Enter") {
        bgContainer.style.backgroundImage =
            "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png')";
        heading.style.color = "#014d40";
        themeUserInput.value = "";
    }
    else if (themeName !== "Dark" && themeName !== "Light" && event.key === "Enter") {
        alert("Enter the valid theme");
        themeUserInput.value = "";
    } 

})
