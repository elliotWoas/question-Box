const quizeData = [
  {
    question: "Which car is more classic ?",
    a: "BMW",
    b: "Bentley",
    c: "rolls royce",
    d: "Land Rover",
    correct: "c",
  },
  {
    question: "How many days each year ?",
    a: "346",
    b: "425",
    c: "365",
    d: "138",
    correct: "c",
  },
  {
    question: "Who is the richest man ?",
    a: "Jeff Bezos",
    b: "Bill Gates",
    c: "Warren Buffet",
    d: "Elon musk",
    correct: "d",
  },
  {
    question: "When did you reach puberty ?",
    a: "22",
    b: "15",
    c: "19",
    d: "18",
    correct: "d",
  },
];


const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");


let currentQuiz = 0;
let score = 0;
// let answer = undefined;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizeData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  // const answerEls = document.querySelectorAll(".answer");

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}
function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  //chack to see the answer
  const answer = getSelected();

  if (answer) {
    if (answer === quizeData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizeData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2> you answered correctly at 
            ${score}/${quizeData.length}
             questions.</h2> 
             
             <button onclick="location.reload()
             ">reload</button>
             `;
    }
  }
});
