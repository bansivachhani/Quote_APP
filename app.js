import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 5000;

// Enable CORS for cross-origin requests
app.use(cors());

// Static Files Middleware (Serve index.html from public folder)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "public")));

// Quotes Data (Extended List)
const quotes = [
  {
    text: "Genius is one percent inspiration and ninety-nine percent perspiration.",
    author: "Thomas Edison",
  },
  { text: "You can observe a lot just by watching.", author: "Yogi Berra" },
  {
    text: "A house divided against itself cannot stand.",
    author: "Abraham Lincoln",
  },
  {
    text: "Difficulties increase the nearer we get to the goal.",
    author: "Johann Wolfgang von Goethe",
  },
  {
    text: "Fate is in your hands and no one else's.",
    author: "Byron Pulsifer",
  },
  { text: "Be the chief but never the lord.", author: "Lao Tzu" },
  { text: "Nothing happens unless first we dream.", author: "Carl Sandburg" },
  { text: "Well begun is half done.", author: "Aristotle" },
  {
    text: "Life is a learning experience, only if you learn.",
    author: "Yogi Berra",
  },
  {
    text: "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau",
  },
  {
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    text: "Act as if what you do makes a difference. It does.",
    author: "William James",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    text: "Keep your face always toward the sunshine—and shadows will fall behind you.",
    author: "Walt Whitman",
  },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    text: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    text: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein",
  },
  {
    text: "Opportunities don't happen. You create them.",
    author: "Chris Grosser",
  },
  {
    text: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    author: "Zig Ziglar",
  },
  { text: "If you can dream it, you can do it.", author: "Walt Disney" },
  {
    text: "Don't limit your challenges. Challenge your limits.",
    author: "Jerry Dunn",
  },
  {
    text: "If you are not willing to risk the usual, you will have to settle for the ordinary.",
    author: "Jim Rohn",
  },
  {
    text: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky",
  },
  {
    text: "Start where you are. Use what you have. Do what you can.",
    author: "Arthur Ashe",
  },
  {
    text: "Hardships often prepare ordinary people for an extraordinary destiny.",
    author: "C.S. Lewis",
  },
  {
    text: "Success is walking from failure to failure with no loss of enthusiasm.",
    author: "Winston Churchill",
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
  {
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    text: "Success is not how high you have climbed, but how you make a positive difference to the world.",
    author: "Roy T. Bennett",
  },
  { text: "Opportunities multiply as they are seized.", author: "Sun Tzu" },
  { text: "Success is a journey, not a destination.", author: "Ben Sweetland" },
  {
    text: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
  },
  { text: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  { text: "The best revenge is massive success.", author: "Frank Sinatra" },
  {
    text: "It always seems impossible until it’s done.",
    author: "Nelson Mandela",
  },
  {
    text: "Quality means doing it right when no one is looking.",
    author: "Henry Ford",
  },
  {
    text: "Don’t wait. The time will never be just right.",
    author: "Napoleon Hill",
  },
];

// API Endpoints
app.get("/api/quotes", (req, res) => {
  res.json(quotes);
});

app.get("/api/quotes/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  res.json(quotes[randomIndex]);
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
