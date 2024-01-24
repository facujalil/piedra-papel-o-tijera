const rock = document.querySelector(".rock-img-container");
const paper = document.querySelector(".paper-img-container");
const scissors = document.querySelector(".scissors-img-container");

const userScore = document.getElementById("user-score");

const computerScore = document.getElementById("computer-score");

const computerOptions = ["rock", "paper", "scissors"];

const resultContainer = document.getElementById("result-container");

const messageContainer = document.querySelector(".message-container");

const message = document.querySelector(".message");

const messageDescription = document.createElement("p");
messageDescription.classList.add("message-description");

messageContainer.appendChild(messageDescription);

let userScoreCounter = 0;
let computerScoreCounter = 0;

rock.addEventListener("click", () => {
  computerSimulation();
  if (randomOption === "rock") {
    message.textContent = "¡Es un empate!";
    messageDescription.textContent = "Piedra (usu.) es igual a Piedra (comp.)";
  } else if (randomOption === "paper") {
    message.textContent = "¡Punto para la computadora!";
    messageDescription.textContent = "Papel (comp.) le gana a Piedra (usu.)";
  } else if (randomOption === "scissors") {
    message.textContent = "¡Punto para el usuario!";
    messageDescription.textContent = "Piedra (usu.) le gana a Tijera (comp.)";
  }
  countScore();
});

paper.addEventListener("click", () => {
  computerSimulation();
  if (randomOption === "rock") {
    message.textContent = "¡Punto para el usuario!";
    messageDescription.textContent = "Papel (usu.) le gana a Piedra (comp.)";
  } else if (randomOption === "paper") {
    message.textContent = "¡Es un empate!";
    messageDescription.textContent = "Papel (usu.) es igual a Papel (comp.)";
  } else if (randomOption === "scissors") {
    message.textContent = "¡Punto para la computadora!";
    messageDescription.textContent = "Tijera (comp.) le gana a Papel (usu.)";
  }
  countScore();
});

scissors.addEventListener("click", () => {
  computerSimulation();
  if (randomOption === "rock") {
    message.textContent = "¡Punto para la computadora!";
    messageDescription.textContent = "Piedra (comp.) le gana a Tijera (usu.)";
  } else if (randomOption === "paper") {
    message.textContent = "¡Punto para el usuario!";
    messageDescription.textContent = "Tijera (usu.) le gana a Papel (comp.)";
  } else if (randomOption === "scissors") {
    message.textContent = "¡Es un empate!";
    messageDescription.textContent = "Tijera (usu.) es igual a Tijera (comp.)";
  }
  countScore();
});

const computerSimulation = () => {
  randomOption = computerOptions[Math.floor(Math.random() * 3)];
};

const countScore = () => {
  if (message.textContent.includes("¡Punto para el usuario!")) {
    userScoreCounter++;
    userScore.textContent = userScoreCounter;
  } else if (message.textContent.includes("¡Punto para la computadora!")) {
    computerScoreCounter++;
    computerScore.textContent = computerScoreCounter;
  }
};
