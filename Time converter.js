let hoursInputEl = document.getElementById("hoursInput");
let minutesInputEl = document.getElementById("minutesInput");
let timeInSecondsEl = document.getElementById("timeInSeconds");
let errorMsgEl = document.getElementById("errorMsg");
let convertBtnEl = document.getElementById("convertBtn");


convertBtnEl.addEventListener("click", function() {
    let hoursInputValue = hoursInputEl.value;
    let minutesInputValue = minutesInputEl.value;

    if (hoursInputValue === " ") {
        errorMsgEl.classList.add("errorParagraph");
        errorMsgEl.textcontent = "please enter an valid number of hours";
    } else if (minutesInputValue === " ") {
        errorMsgEl.classList.add("errorParagraph");
        errorMsgEl.textcontent = "please enter an valid number of minutes";
    } else {
        errorMsgEl.textContent = " ";
        let timeInSecondsValue = (parseInt(hoursInputValue) * 3600) + (parseInt(minutesInputValue) * 60);
        timeInSecondsEl.classList.add("timeParagraph");
        timeInSecondsEl.textContent = timeInSecondsValue + "s";
    }
});