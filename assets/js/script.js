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
    }
  }, 1000);
}

var questions = [{
		question: "What is JavaScript?",
		answers: [
		"A superset of Java",
		"A language for making the style and presentation of a webpage",
		"A programming language to implement the logic of a webpage "
		],
		correctAnswerIndex: 2},
{
		question: "The id attribute of an element can be used on how many different elements?",
		answers: [
		"1",
		"4",
		"16",
		"32"
		],
		correctAnswerIndex: 2}
];

startQuizButton.addEventListener("click", countdown);

console.log(questions.indexOf('answers'));