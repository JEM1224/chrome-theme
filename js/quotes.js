const quotes = [
  {
    quote: "I never dreamed about success, I worked for it.",
    author: "Estee Lauder",
  },
  {
    quote: "Do not try to be original, just try to be good.",
    author: "Paul Rand",
  },
  {
    quote: "Do not be afraid to give up the good to go for the great.",
    author: "John D.Rocketfeller",
  },
  {
    quote: "If you are not willing to be a fool, you can't become a master",
    author: "Jordan Peterson",
  },
  {
    quote:
      "If you fulfill your obligations everyday you don't need to worry about the future",
    author: "Jordan Peterson",
  },
  {
    quote:
      "If you fulfill your obligations everyday you don't need to worry about the future",
    author: "Jordan Peterson",
  },
];

const quote = document.querySelector("#text");
const author = document.querySelector("#author");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
