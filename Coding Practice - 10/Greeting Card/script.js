let greeting =
    '{"greetText":"Wishing that the new year will bring joy, love, peace, and happiness to you.","from":"Rahul","to":"Varakumar"}';

let parsed = JSON.parse(greeting);

let from = document.getElementById("from");
let to = document.getElementById("to");
let greetText = document.getElementById("greetText");

from.textContent = "From: " + parsed.from;
to.textContent = "To: " + parsed.to;
greetText.textContent = parsed.greetText;
