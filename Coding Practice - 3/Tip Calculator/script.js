let billAmount = document.getElementById("billAmount");
let percentageTip = document.getElementById("percentageTip");
let tipAmount = document.getElementById("tipAmount");
let totalAmount = document.getElementById("totalAmount");
let errorMessage = document.getElementById("errorMessage");

function calculateButton() {
    if (billAmount.value === "" || percentageTip.value === "") {
        errorMessage.textContent = "Please enter a valid input";
        errorMessage.style.color = "red";
        tipAmount.value = "";
        totalAmount.value = "";
    }else {
        errorMessage.textContent = "";
        let bill = parseInt(billAmount.value);
        let perTip = parseInt(percentageTip.value);
        let calculate = (perTip / 100) * bill;
        tipAmount.value = calculate;
        totalAmount.value = calculate + bill;
        errorMessage.textContent = "";
    }
}
