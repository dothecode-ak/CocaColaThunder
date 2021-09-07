var popup_text = ["This Jio number is registered with us. If you are one of the winners, your gratification will be processed automatically", "The entered mobile number is not registered with us. Please check and enter the correct 10 digit number.", "The entered mobile number is not a Jio number. Please enter a valid 10 digit Jio mobile number."];

const popUp = document.getElementById('PopupPage');
const btn = document.getElementById("popUpClose");
btn.onclick = function() {
    if (popUp.style.display !== "none") {
        popUp.style.display = "none";
    } else {
        popUp.style.display = "block";
    }
};