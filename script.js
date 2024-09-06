const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote')
const loader = document.getElementById('loader');

let apiQuotes = [];

function showLoadingSpinner() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

function hideLoadingSpinner() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}

// Show New Quotes
function newQuote() {
    showLoadingSpinner();
    // Pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    const text = quote.quote
    const author = quote.author

    // Check if author field is blank and replace with 'Unknown'
    if (!author) {
        authorText.textContent = "Unknown";
    } else {
        authorText.textContent = author;
    }
   
    // Check Quote length to determine styling
    if (quote.quote.length > 120) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }

    // Set Quote, Hide Loader
    quoteText.textContent = text;
    hideLoadingSpinner();
}

// Get Quotes From API
async function getQuotes() {
    showLoadingSpinner();
    // const apiURL = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
    // const apiURL = "https://philosophy-quotes-api.glitch.me/quotes";
    console.log(apiQuotes);

    try {
        // const response = await fetch(apiURL);
        // apiQuotes = await response.json();
        apiQuotes = babaQuotes;
        console.log(apiQuotes);
        newQuote();
    } catch (error) {
        console.log(error); // Catch Error Here
    }
}

// Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

// Even Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// On Load
getQuotes();