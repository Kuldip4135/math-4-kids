const userInput = document.getElementById("userInput");
const form = document.querySelector("form");
const table = document.querySelector("table");
const header = document.querySelector("header");
const hamburgerMenu = document.querySelector(".hamburger-menu");

hamburgerMenu.addEventListener("click", () => {
  header.classList.toggle("active");
});

form.addEventListener("submit", generateTable);

function generateTable(e) {
  e.preventDefault();

  if (isNaN(userInput.value)) {
    return alert("Only Numbers Are Allowed");
  }

  let utterance = new SpeechSynthesisUtterance(
    `Generating table of ${userInput.value} for you`
  );
  speechSynthesis.speak(utterance);

  setTimeout(() => {
    for (let i = 1; i <= 10; i++) {
      table.innerHTML = `
      <tr>
      <td>${userInput.value}</td>
      <td>${1}</td>
      <td>${userInput.value * 1}</td>
      </tr>
  
      <tr>
      <td>${userInput.value}</td>
      <td>${2}</td>
      <td>${userInput.value * 2}</td>
      </tr>
  
      <tr>
      <td>${userInput.value}</td>
      <td>${3}</td>
      <td>${userInput.value * 3}</td>
      </tr>
  
      <tr>
      <td>${userInput.value}</td>
      <td>${4}</td>
      <td>${userInput.value * 4}</td>
      </tr>
  
      <tr>
      <td>${userInput.value}</td>
      <td>${5}</td>
      <td>${userInput.value * 5}</td>
      </tr>
  
      <tr>
      <td>${userInput.value}</td>
      <td>${6}</td>
      <td>${userInput.value * 6}</td>
      </tr>
  
      <tr>
      <td>${userInput.value}</td>
      <td>${7}</td>
      <td>${userInput.value * 7}</td>
      </tr>
  
      <tr>
      <td>${userInput.value}</td>
      <td>${8}</td>
      <td>${userInput.value * 8}</td>
      </tr>
  
      <tr>
      <td>${userInput.value}</td>
      <td>${9}</td>
      <td>${userInput.value * 9}</td>
      </tr>
  
      <tr>
      <td>${userInput.value}</td>
      <td>${10}</td>
      <td>${userInput.value * 10}</td>
      </tr>
      `;
    }
  }, 2000);
}
