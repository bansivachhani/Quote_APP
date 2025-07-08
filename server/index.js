const quotesElement = document.getElementById("quotes");
const authorElement = document.getElementById("author");
const newQ = document.getElementById("newQ");
const tweetMe = document.getElementById("tweetMe");

let realData = [];

const tweetNow = () => {
    const quoteText = quotesElement.innerText;
    const authorText = authorElement.innerText;
    const tweetPost = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quoteText)} ${encodeURIComponent(authorText)}`;
    window.open(tweetPost, "_blank");
};

const getNewQuotes = () => {
    if (realData.length === 0) {
        quotesElement.innerHTML = "No quotes available.";
        authorElement.innerHTML = "";
        return;
    }
    let rnum = Math.floor(Math.random() * realData.length);
    const currentQuote = realData[rnum];
    quotesElement.innerHTML = `"${currentQuote.text}"`;
    authorElement.innerHTML = currentQuote.author ? `- ${currentQuote.author}` : "- Unknown";
};

const getQuotes = async () => {
    const api = "http://localhost:5000/api/quotes";
    try {
        let data = await fetch(api);
        if (!data.ok) {
            throw new Error("Failed to fetch data from the API.");
        }
        realData = await data.json();
        getNewQuotes();
    } catch (error) {
        quotesElement.innerHTML = "Failed to load quotes. Try again later.";
        console.error("Error fetching quotes:", error);
    }
};

tweetMe.addEventListener('click', tweetNow);
newQ.addEventListener("click", getNewQuotes);

getQuotes();
