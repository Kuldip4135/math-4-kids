const header = document.querySelector("header");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const modelInput = document.querySelector(".model-input");
const form = document.querySelector("form");
const userInput = document.getElementById("userName");
const nameShow = document.querySelector(".name");

hamburgerMenu.addEventListener("click", () => {
  header.classList.toggle("active");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  modelInput.classList.add("hide-model");
  nameShow.innerText = `Hii ${userInput.value}, Select An Option`;
});
