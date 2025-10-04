let currentState = "start";

function renderQuestion() {
  const questionEl = document.getElementById("question");
  const answersEl = document.getElementById("answers");

  answersEl.innerHTML = "";
  function addAnswerButton(text, nextState) {
    const btn = document.createElement("button");
    btn.textContent = text;
    btn.onclick = function () {
      currentState = nextState;
      renderQuestion();
    };
    answersEl.appendChild(btn);
  }

  switch (currentState) {
    case "start":
      questionEl.textContent = "You wake up in a mysterious forest. Which path will you take?";
      addAnswerButton("Go left", "river");
      addAnswerButton("Go straight", "cave");
      break;

    case "river":
      questionEl.textContent = "You encounter a deep river. What will you do?";
      addAnswerButton("Swim across", "village");
      addAnswerButton("Build a raft", "waterfall");
      break;

    case "cave":
      questionEl.textContent = "You find a mysterious cave. Will you enter?";
      addAnswerButton("Enter the cave", "treasure");
      addAnswerButton("Walk past it", "mountain");
      break;

    // Final endings
    case "village":
      questionEl.textContent = "You safely reach a small village. You are saved!";
      addAnswerButton("Play Again", "start");
      break;

    case "waterfall":
      questionEl.textContent = "Oh no! Your raft breaks and you fall down the waterfall. The end.";
      addAnswerButton("Try Again", "start");
      break;

    case "treasure":
      questionEl.textContent = "Inside the cave, you discover a chest of gold! You win!";
      addAnswerButton("Play Again", "start");
      break;

    case "mountain":
      questionEl.textContent = "You walk past and reach a mountain top with a peaceful view. The end.";
      addAnswerButton("Play Again", "start");
      break;
  }
}

// Initialize the game
document.addEventListener("DOMContentLoaded", renderQuestion);
