var timerEl = document.getElementById('countdown');
var timeLeft = 100;
var startQuizButton = document.getElementById("startQuiz-btn");

// var questionEl = document.querySelector("#possible-question");
var questionEl = document.getElementById('question');

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
		correctAnswer: "answer1"}
];

function nextQuestion() {

	var firstQuestion = questions[0];
	console.log(firstQuestion);
	console.log(questions[0].question);
	console.log(timerEl);
	console.log(questionEl);
	
	//questionEl.textContent = questions.at(questionCounter).question
// 	questionEl.innerHTML = questions.at(0).question;
// 	questionEl.innerHTML = firstQuestion.question;
}



function countdown() {

console.log(questions.at(0).question)
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

