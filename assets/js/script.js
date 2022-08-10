var timerEl = document.getElementById('countdown');
var timeLeft = 100;
var startQuizButton = document.getElementById("startQuiz-btn");

// var questionEl = document.querySelector("#possible-question");
var questionEl = document.getElementById('question');
var answers1El = document.getElementById('answer1');
var answers2El = document.getElementById('answer2');
var answers3El = document.getElementById('answer3');
var answers4El = document.getElementById('answer4');

var questionCounter = 0;

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
		correctAnswer: "answer1"},
{				
		question: "In JavaScrip the this keyword referes to?",
		answers1: "The object from which the method was called",
		answers2:	"The object to which the method is being called",
		answers3:	"The subject from which the method was called",
		answers4:	"The place in the function where you should add an object",
		correctAnswer: "answer1"},
{
		question: "In JavaScrip a callback function is?",
		answers1: "Specifically built to be used as an argument to another function",
		answers2:	"Created like a regular function",
		answers3:	"Has a parent function",
		answers4:	"All of the above",
		correctAnswer: "answer4"}
];

function nextQuestion() {
	
	questionEl.textContent = questions.at(0).question;
	answers1El.textContent = questions.at(0).answers1;
	answers2El.textContent = questions.at(0).answers2;
	answers3El.textContent = questions.at(0).answers3;
	answers4El.textContent = questions.at(0).answers4;
}

function countdown() {

nextQuestion();

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



startQuizButton.addEventListener("click", countdown);

