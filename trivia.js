
//   body { font-family: Arial, sans-serif; }
//   .quiz-container { margin: 20px; }
//   .question { margin-bottom: 10px; }
//   .options { list-style-type: none; padding: 0; }
//   .options li { margin-bottom: 5px; }
//   .submit-button { margin-top: 20px; }

const quizQuestions = [
  {
    question: "Question 1: What year was the USS Enterprise-D launched?",
    options: ["2371", "2363", "2063", "2379"],
    answer: "2363"
  },
  {
    question: "Question 2: Who captained the USS Voyager?",
    options: ["Captain Sisko", "Captain Picard", "Captain Picard", "Captain Janeway"],
    answer: "Captain Janeway"
  },
  {
    question: "Question 3: What war did the USS Defiant fight in?",
    options: ["The Romulan War", "The Xindi War", "The Dominion War", "The Klingon War"],
    answer: "The Dominion War"
  },
  {
    question: "Question 4: What quadrant did the USS Voyager become stranded in?",
    options: ["The Alpha Quadrant", "The Beta Quadrant", "The Gamma Quadrant", "The Delta Quadrant"],
    answer: "The Delta Quadrant"
  },
  {
    question: "Question 5: The USS Enterprise-D was the first starship to have what on board?",
    options: ["Families", "A Saucer Section", "A Warp Core", "Dogs"],
    answer: "Families"
  },
  // Add more questions as needed
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
  const questionEl = document.getElementById('question');
  const optionsEl = document.getElementById('options');
  questionEl.textContent = quizQuestions[currentQuestionIndex].question;
  optionsEl.innerHTML = '';
  quizQuestions[currentQuestionIndex].options.forEach(option => {
    const optionEl = document.createElement('li');
    optionEl.textContent = option;
    optionEl.onclick = selectOption;
    optionsEl.appendChild(optionEl);
  });
}

function selectOption(event) {
  if (event.target.textContent === quizQuestions[currentQuestionIndex].answer) {
    score++;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < quizQuestions.length) {
    displayQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  const resultsEl = document.getElementById('results');
  resultsEl.textContent = `Your score: ${score}/${quizQuestions.length}`;
  const submitButton = document.getElementById('submit');
  submitButton.style.display = 'none';
}

document.getElementById('submit').onclick = function() {
  const selectedOption = document.querySelector('.options li.selected');
  if (selectedOption) {
    selectOption({ target: selectedOption });
  }
};

displayQuestion();
