let defuser = document.getElementById("defuser");
let timer = document.getElementById("timer");
let interval = 10;


let counter = setInterval(() => {
    interval--;
    timer.innerHTML = interval;
    if (interval === 0) {
        timer.innerHTML = "BOOM";
        clearInterval(counter);
    }
}, 1000);



defuser.addEventListener("keydown", function (event) { 
    let defuseKey = defuser.value;
    if (counter !== 0 && defuseKey === "defuse" && event.key === "Enter") { 
        timer.innerHTML = "You did it!";
        clearInterval(counter);
        defuser.value = "";
    }
})