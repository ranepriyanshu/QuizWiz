const quizDB = [
  {
    question: "Q1: what is the full form of HTML?",
    a: "Hello To My Land",
    b: "Hey Text Markup Language",
    c: "Hyper Time Markup Language",
    d: "Hyper Text Markup Language",
    ans: "ans4",
  },

  {
    question: "Q2: What is the Full for of CSS?",

    a: "Cascading Style Sheets",
    b: "Cascading Style sheeps",
    c: "Cartoon Style sheets",
    d: "Cascading Super Sheets",
    ans: "ans1",
  },

  {
    question: "Q3: What is Full Form of HTTP?",

    a: "Hypertext Transfer Product",
    b: "Hypertext Test Protocol",
    c: "Hey Transfer Protocol",
    d: "Hypertext transfer Protocol",
    ans: "ans4",
  },

  {
    question: "Q4: What is the full form of JS",

    a: "JavaSuper",
    b: "JavaSays",
    c: "JavaScript",
    d: "JavaShap",
    ans: "ans3",
  },
];

const question = document.querySelector(".question");

const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const answers = document.querySelectorAll(".answer");
const showScore = document.querySelector("#showScore");
let questioncount = 0;
let score = 0;
const loadquestion = () => {
  const questionlist = quizDB[questioncount];
  question.innerText = questionlist.question;

  option1.innerText = questionlist.a;
  option2.innerText = questionlist.b;
  option3.innerText = questionlist.c;
  option4.innerText = questionlist.d;
};

loadquestion();

const getCheckedAnswer = () => {
  let answer;
  answers.forEach((curAnsEle) => {
    if (curAnsEle.checked) {
      answer = curAnsEle.id;
    }
  });
  return answer;
};

const diselectAll = () => {
  answers.forEach((curAnsEle) => (curAnsEle.checked = false));
};

submit.addEventListener("click", () => {
  const checkedAnswer = getCheckedAnswer();
  console.log("Your Answer : ", checkedAnswer);
  if (checkedAnswer == quizDB[questioncount].ans) {
    score++;
  }

  questioncount++;
  diselectAll();

  if (questioncount < quizDB.length) {
    loadquestion();
  } else {
    showScore.innerHTML = `<h3>You scored ${score}/${quizDB.length}</h3>
    <button class="btn" onclick="location.reload()"></button>`;

    showScore.classList.remove("scoreArea");
  }
});
