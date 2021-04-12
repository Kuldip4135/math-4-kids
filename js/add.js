const header = document.querySelector("header");
const hamburgerMenu = document.querySelector(".hamburger-menu");

hamburgerMenu.addEventListener("click", () => {
  header.classList.toggle("active");
});

//Quiz Logic
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const audio = new Audio("../sound/tom-1.mp3");
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let answer = 0;

function generateRandomNumber() {
  return Math.floor(Math.random() * 13);
}

function generateQuestion() {
  const randomNum1 = generateRandomNumber();
  const randomNum2 = generateRandomNumber();
  const dummyAnswer1 = generateRandomNumber();
  const dummyAnswer2 = generateRandomNumber();

  let allAnswers = [];
  let shuffleAnswers = [];

  answer = randomNum1 + randomNum2;

  num1.innerText = randomNum1;
  num2.innerText = randomNum2;

  allAnswers = [answer, dummyAnswer1, dummyAnswer2];
  for (i = allAnswers.length; i--; ) {
    shuffleAnswers.push(
      allAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]
    );
  }

  option1.innerText = shuffleAnswers[0];
  option2.innerText = shuffleAnswers[1];
  option3.innerText = shuffleAnswers[2];
}

checkAnswer(option1);
checkAnswer(option2);
checkAnswer(option3);

function checkAnswer(value) {
  value.addEventListener("click", function () {
    if (value.innerText == answer) generateQuestion();
    else audio.play();
  });
}

generateQuestion();
