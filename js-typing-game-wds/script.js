const RANDOM_QUOTE_API_URL = 'http://api.quotable.io/random';
const quoteDisplayElement = document.getElementById('quoteDisplay');
const quoteInputElement = document.getElementById('quoteInput');
const timerElement = document.getElementById('timer');
const testDurationInput = document.getElementById('testDuration');
const startTestButton = document.getElementById('startTest');

let startTime;
let timerInterval;
let testStarted = false; // Track if the test has started
let testDuration = 0; // Track the test duration (in seconds)

quoteInputElement.addEventListener('input', () => {
    const arrayQuote = quoteDisplayElement.querySelectorAll('span');
    const arrayValue = quoteInputElement.value.split('');
    let correct = true;

    arrayQuote.forEach((characterSpan, index) => {
        const character = arrayValue[index];
        if (character == null) {
            characterSpan.classList.remove('correct');
            characterSpan.classList.remove('incorrect');
            correct = false;
        } else if (character === characterSpan.innerText) {
            characterSpan.classList.add('correct');
            characterSpan.classList.remove('incorrect');
        } else {
            characterSpan.classList.add('incorrect');
            characterSpan.classList.remove('correct');
            correct = false;
        }
    });

    if (correct && testStarted) {
        // If the user has started the test, but the quote is completed, bring a new quote
        renderNewQuote();
    }
});

function getRandomQuote() {
    return fetch(RANDOM_QUOTE_API_URL)
        .then(response => response.json())
        .then(data => data.content);
}

async function renderNewQuote() {
    const quote = await getRandomQuote();
    quoteDisplayElement.innerText = ''; // Clear initial quote text
    quoteInputElement.value = ''; // Clear initial input text

    quote.split('').forEach(character => {
        const characterSpan = document.createElement('span');
        characterSpan.innerText = character;
        quoteDisplayElement.appendChild(characterSpan);
    });

    // Start the timer if it hasn't been started yet
    if (!testStarted) {
        testDuration = parseInt(testDurationInput.value, 10);
        startTimer();
        testStarted = true;
    }
}

function startTimer() {
    timerElement.innerText = testDuration;
    startTime = new Date();
    clearInterval(timerInterval);
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    const elapsedTime = getTimerTime();
    timerElement.innerText = testDuration - elapsedTime;

    if (elapsedTime >= testDuration) {
        finishTest();
    }
}


function getTimerTime() {
    return Math.floor((new Date() - startTime) / 1000);
}

// ... Existing code ...

function finishTest() {
    clearInterval(timerInterval);
    startTime = null;
    testStarted = false;

    // Enable input field
    quoteInputElement.disabled = false;

    // Reset input field
    quoteInputElement.value = '';
    quoteInputElement.placeholder = '';

    // Enable test duration input and start button
    testDurationInput.disabled = false;
    startTestButton.disabled = false;

    // Calculate WPM
    const wordCount = quoteDisplayElement.querySelectorAll('span').length;
    const elapsedTime = testDuration;
    const wpm = Math.floor((wordCount / 5) / (elapsedTime / 60));

    // Show the results card and populate content
    const resultsCard = document.getElementById('resultsCard');
    const wpmText = document.getElementById('wpmText');
    wpmText.textContent = `Words Per Minute: ${wpm}`;
    resultsCard.style.display = 'block';
}

// ... Existing code ...



startTestButton.addEventListener('click', () => {
    renderNewQuote();
    testDurationInput.disabled = true;
    startTestButton.disabled = true;
});
