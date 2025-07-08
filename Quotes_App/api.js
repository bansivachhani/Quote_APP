const express = require('express');
const app = express();
const PORT = 5000;

const cors = require('cors');
app.use(cors());

// Sample quotes data
const quotes = [
  { text: "Genius is one percent inspiration and ninety-nine percent perspiration.", author: "Thomas Edison" },
  { text: "You can observe a lot just by watching.", author: "Yogi Berra" },
  { text: "A house divided against itself cannot stand.", author: "Abraham Lincoln" },
  { text: "Difficulties increase the nearer we get to the goal.", author: "Johann Wolfgang von Goethe" },
  { text: "Fate is in your hands and no one else's.", author: "Byron Pulsifer" },
  { text: "Be the chief but never the lord.", author: "Lao Tzu" },
  { text: "Nothing happens unless first we dream.", author: "Carl Sandburg" },
  { text: "Well begun is half done.", author: "Aristotle" },
  { text: "Life is a learning experience, only if you learn.", author: "Yogi Berra" },
  { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
  { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "Act as if what you do makes a difference. It does.", author: "William James" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" },
  { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
  { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
  { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
  { text: "Opportunities don't happen. You create them.", author: "Chris Grosser" },
  { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
  { text: "Everything you've ever wanted is on the other side of fear.", author: "George Addair" },
  { text: "Success is getting what you want. Happiness is wanting what you get.", author: "Dale Carnegie" },
  { text: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
  { text: "Don't limit your challenges. Challenge your limits.", author: "Jerry Dunn" },
  { text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
  { text: "If you want to lift yourself up, lift up someone else.", author: "Booker T. Washington" },
  { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
  { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
  { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { text: "Success is not how high you have climbed, but how you make a positive difference to the world.", author: "Roy T. Bennett" },
  { text: "Don't be afraid to give up the good to go for the great.", author: "John D. Rockefeller" },
  { text: "If you are not willing to risk the usual, you will have to settle for the ordinary.", author: "Jim Rohn" },
  { text: "Do not wait to strike till the iron is hot, but make it hot by striking.", author: "William Butler Yeats" },
  { text: "Everything you can imagine is real.", author: "Pablo Picasso" },
  { text: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill" },
  { text: "Action is the foundational key to all success.", author: "Pablo Picasso" },
  { text: "Don't count the days, make the days count.", author: "Muhammad Ali" },
  { text: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
  { text: "Go the extra mile. It's never crowded there.", author: "Dr. Wayne D. Dyer" },
  { text: "Opportunities multiply as they are seized.", author: "Sun Tzu" },
  { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
  { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
  { text: "Don’t wait. The time will never be just right.", author: "Napoleon Hill" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { text: "If you want something you've never had, you must be willing to do something you've never done.", author: "Thomas Jefferson" },
  { text: "Everything has beauty, but not everyone sees it.", author: "Confucius" },
  { text: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
  { text: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama" },
  { text: "A goal without a plan is just a wish.", author: "Antoine de Saint-Exupéry" },
  { text: "Success doesn't come to you, you go to it.", author: "Marva Collins" },
  { text: "Failure will never overtake me if my determination to succeed is strong enough.", author: "Og Mandino" },
  { text: "To live a creative life, we must lose our fear of being wrong.", author: "Joseph Chilton Pearce" },
  { text: "Act as if it were impossible to fail.", author: "Dorothea Brande" },
  { text: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" },
  { text: "Success is how high you bounce when you hit bottom.", author: "George S. Patton" },
  { text: "Don't let yesterday take up too much of today.", author: "Will Rogers" },
  { text: "Failure is another stepping stone to greatness.", author: "Oprah Winfrey" },
  { text: "The best revenge is massive success.", author: "Frank Sinatra" },
  { text: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Success is a journey, not a destination.", author: "Ben Sweetland" },
  { text: "If you fell down yesterday, stand up today.", author: "H.G. Wells" },
  { text: "I find that the harder I work, the more luck I seem to have.", author: "Thomas Jefferson" },
  { text: "Small deeds done are better than great deeds planned.", author: "Peter Marshall" },
  { text: "Push yourself, because no one else is going to do it for you.", author: "Unknown" },
  { text: "Perseverance is failing 19 times and succeeding the 20th.", author: "Julie Andrews" },
  { text: "Quality means doing it right when no one is looking.", author: "Henry Ford" },
  { text: "Do one thing every day that scares you.", author: "Eleanor Roosevelt" },
  { text: "An unexamined life is not worth living.", author: "Socrates" },
  { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
  { text: "The harder you work for something, the greater you'll feel when you achieve it.", author: "Unknown" },
  { text: "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.", author: "Roy T. Bennett" },
  { text: "There is no substitute for hard work.", author: "Thomas Edison" },
  { text: "Start small, think big. Don’t worry about too many things at once.", author: "Steve Jobs" },
  { text: "Be so good they can’t ignore you.", author: "Steve Martin" },
  { text: "If you can dream it, you can do it.", author: "Walt Disney" },
  { text: "Your limitation—it's only your imagination.", author: "Unknown" }
];

// Root route for the homepage
app.get('/', (req, res) => {
  res.send('Welcome to the Quotes API! Use /api/quotes to get all quotes or /api/quotes/random to get a random quote.');
});



// Endpoint to get all quotes
app.get('/api/quotes', (req, res) => {
  res.json(quotes);
});

// Endpoint to get a random quote
app.get('/api/quotes/random', (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  res.json(quotes[randomIndex]);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
