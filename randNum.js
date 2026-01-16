const resultText = document.querySelector(".num");
const resultSpan = document.getElementById("result");

const choices = document.querySelectorAll(".choice");

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.id;
    const val = numGen(userChoice);
    console.log(val);
     resultSpan.textContent = val;
     resultText.hidden = false; 
  });
});

const numGen = (userChoice) => {
  if (userChoice === "ten") return Math.floor(Math.random() * 11);
  if (userChoice === "hundred") return Math.floor(Math.random() * 101);
  if (userChoice === "thousand") return Math.floor(Math.random() * 1001);
  if (userChoice === "ten-thousand") return Math.floor(Math.random() * 10001);
  if (userChoice === "hundred-thousand")
    return Math.floor(Math.random() * 100001);
};

