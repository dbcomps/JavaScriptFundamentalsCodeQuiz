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
		answers1: "A superset of Java",
		answers2: "A language for making the style and presentation of a webpage",
		answers3:	"A programming language to implement the logic of a webpage",
		correctAnswer: "answer3"},
{
		question: "The id attribute of an element can be used on how many different elements?",
		answers1: "1",
		answers2:	"4",
		answers3:	"16",
		answers4:	"32",
		correctAnswer: "answer1"}
];

startQuizButton.addEventListener("click", countdown);

console.log(questions.at(0).question)