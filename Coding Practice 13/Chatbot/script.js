let chatbotMsgList = [
    "Hi",
    "Hey",
    "Good Morning",
    "Good Evening",
    "How can I help you?",
    "Thank You",
];

let sendMsgBtn = document.getElementById("sendMsgBtn");
let userInput = document.getElementById("userInput");
let chatContainer = document.getElementById("chatContainer");

function chatBot() {
    let noOfChatbotMsgs = chatbotMsgList.length;
    let chatbotMsg = chatbotMsgList[Math.ceil(Math.random() * noOfChatbotMsgs) - 1];

    let chatMsgContainer = document.createElement("div");
    chatMsgContainer.classList.add("msg-from-chatbot-container");
    chatContainer.appendChild(chatMsgContainer);

    let msg = document.createElement("span");
    msg.textContent = chatbotMsg;
    msg.classList.add("msg-from-chatbot");
    chatMsgContainer.appendChild(msg);
}

function user(userInputValue) {
    let chatMsgContainer = document.createElement("div");
    chatMsgContainer.classList.add("msg-to-chatbot-container");
    chatContainer.appendChild(chatMsgContainer);

    let msg = document.createElement("span");
    msg.textContent = userInputValue;
    msg.classList.add("msg-to-chatbot");
    chatMsgContainer.appendChild(msg);

    userInput.value = "";

    chatBot();
}

sendMsgBtn.onclick = function () {
    let userInputValue = userInput.value;

    if (userInputValue === "") {
        alert("Please Enter Message");
    }
    user(userInputValue);
};
