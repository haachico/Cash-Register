const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector(".check-btn");
const numOfNotes = document.querySelectorAll(".no-of-notes");
const message = document.querySelector(".message");
const nextButton = document.querySelector(".next-btn");
const cashBody = document.querySelector(".cash-amt-body");

const notesvAvailable = [2000, 500, 100, 20, 10, 5, 1];

hideCashBody();
nextButton.addEventListener("click", showCashBody);

checkButton.addEventListener("click", function () {
  hideMessage();
  if (Number(billAmount.value) > 0) {
    if (Number(cashGiven.value) >= Number(billAmount.value)) {
      const amountTobeReturned = cashGiven.value - billAmount.value;
      calcNotesTobeReturned(amountTobeReturned);
    } else {
      showMessage(`Cash is less than the bill amount!`);
    }
  } else {
    showMessage(`Invalid Bill Amount`);
  }
});

function calcNotesTobeReturned(amountTobeReturned) {
  for (let i = 0; i < notesvAvailable.length; i++) {
    const notesCount = Math.trunc(amountTobeReturned / notesvAvailable[i]);

    amountTobeReturned = amountTobeReturned % notesvAvailable[i];
    numOfNotes[i].innerText = notesCount;
  }
}

function hideMessage() {
  message.style.display = "none";
}
function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}

function hideCashBody() {
  cashBody.style.visibility = "hidden";
}

function showCashBody() {
  cashBody.style.visibility = "visible";
  nextButton.style.display = "none";
}
