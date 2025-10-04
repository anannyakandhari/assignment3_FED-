let currentIndex = 0;

const storySequence = [
    {
        text: "You wake up in a mysterious forest. Which path will you take?",
        choices: ["Go left", "Go straight"]
    },
    {
        text: "You encounter a river. What will you do?",
        choices: ["Swim across", "Build a raft"]
    },
    {
        text: "You find a mysterious cave. Will you enter?",
        choices: ["Enter the cave", "Walk past it"]
    },
    {
        text: "Adventure continues... The End.",
        choices: []
    }
];

// Render current story
function renderStory() {
    const questionEl = document.getElementById("question");
    const answersEl = document.getElementById("answers");

    // Update story text
    questionEl.textContent = storySequence[currentIndex].text;

    // Clear old choices
    answersEl.innerHTML = "";

    // Add new choices as buttons if available
    storySequence[currentIndex].choices.forEach(choice => {
        const li = document.createElement("li");
        const button = document.createElement("button");
        button.textContent = choice;
        button.addEventListener("click", nextQuestion); // go to next question when clicked
        li.appendChild(button);
        answersEl.appendChild(li);
    });
}

// Handle Next button click
function nextQuestion() {
    if (currentIndex < storySequence.length - 1) {
        currentIndex++;
        renderStory();
    } else {
        alert("You have reached the end of the adventure!");
    }
}

// Initialize when page loads
document.addEventListener("DOMContentLoaded", renderStory);
