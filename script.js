var domStart = document.getElementById('opening');
var domQuestion = document.getElementById('questionList');
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");
var list = document.getElementById("optionList");
var scoreCard = document.getElementById("scoreCard");
var score = 0;
var index = 0;
let question = [
  {
    'question': '(2 + 1) x 8 / (y - 9) = 8. What is the value of y?',
    'option': [15, 12, 9, 6],
    'answer': 2
  },
  {
    'question': '1, 60, 9, 68, 25, 84, ..., 108. Fill in the blank.',
    'option': [49, 80, 62, 78],
    'answer': 1
  },
  {
    'question': '(5)10 + (-10)x  = 40. What is the value of x?',
    'option': [5, 1, 3, 7],
    'answer': 2
  },
  {
    'question': '3, 4, 6, 9, ..., 18. Fill in the blank.',
    'option': [11, 12, 13, 14],
    'answer': 3
  },
  {
    'question': '6 x 40 / (20 + 10) + 6 x 5 =',
    'option': [62, 54, 46, 38],
    'answer': 4
  }
];

function render() {
  let dom = `${question[index].question}`;
  if (index <= question.length - 1) {
    domQuestion.innerHTML = dom;
    option1.innerHTML = question[index].option[0];
    option2.innerHTML = question[index].option[1];
    option3.innerHTML = question[index].option[2];
    option4.innerHTML = question[index].option[3];
    scoreCard.innerHTML = score;
  } else {
    domQuestion.innerHTML = "it's over"
  }
}

function next() {
  index++;
  // supaya index question balik ke 0 kalau sudah di ujung
  render()
}

function nextClick() {
  if (
  !list.children[0].getAttribute("style") ||
  list.children[0].style.pointerEvents === "auto"
  ){
    alert("Why don't you answer it? Give up?")
  } else {
    next()
    clickOK()
  }
}

function answerClick(element) {
  check(element);
  noClick();
}

function noClick() {
  for (let i = 0; i < list.children.length; i++) {
    list.children[i].style.pointerEvents = "none";
  }
}

function clickOK() {
  for (let i = 0; i < list.children.length; i++) {
    list.children[i].style.pointerEvents = "auto";
    list.children[i].className = "";
  }
}

function check(element) {
  var id = element.id.split("");
  if (id[id.length - 1] == question[index].answer) {
    score++;
    element.className = "correct";
    element.innerHTML = "Correct";
    scoreCard.innerHTML = score;
  } else {
    element.className = "wrong";
    element.innerHTML = "Wrong";
  }
}