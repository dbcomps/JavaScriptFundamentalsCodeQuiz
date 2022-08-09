var timerEl = document.getElementById('countdown');
var timeLeft = 100;
var startQuizButton = document.getElementById("startQuiz-btn")

function countdown() {

 var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + ' seconds remaining';
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      timerEl.textContent = '';
      clearInterval(timeInterval);
      displayMessage();
    }
  }, 1000);
}

startQuizButton.addEventListener("click", countdown());