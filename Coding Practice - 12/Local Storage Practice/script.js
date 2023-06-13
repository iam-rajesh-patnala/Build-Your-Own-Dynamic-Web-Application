let msg = document.getElementById("msg");
let saveBtn = document.getElementById("saveBtn");
let clearBtn = document.getElementById("clearBtn");

saveBtn.onclick = function () {
    let input = msg.value;
    localStorage.setItem("userInput", input);
};

msg.value = localStorage.getItem("userInput");

clearBtn.onclick = function () {
    localStorage.removeItem("userInput");
};
