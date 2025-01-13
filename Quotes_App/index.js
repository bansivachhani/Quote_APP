const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const newQuoteButton = document.getElementById('new-quote');
const tweetButton = document.getElementById('tweet');

// Fetch a random quote from the API
async function getQuote() {
  try {
    const response = await fetch('http://localhost:5000/api/quotes/random');
    const data = await response.json();
    quoteText.textContent = `"${data.text}"`;
    quoteAuthor.textContent = `- ${data.author}`;
  } catch (error) {
    quoteText.textContent = "Oops! Something went wrong.";
    quoteAuthor.textContent = "";
  }
}

// Tweet the current quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} ${quoteAuthor.textContent}`;
  window.open(twitterUrl, '_blank');
}

// Event Listeners
newQuoteButton.addEventListener('click', getQuote);
tweetButton.addEventListener('click', tweetQuote);

// Load a quote when the page loads
getQuote();
