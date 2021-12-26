const quotes = [
{
  quote: " Where there's a will, there's a way.",
  author: "moonD",
},
{
  quote: " Heaven helps those who help themselves.",
  author: "moonD",
},
{
  quote: " He is truly happy who makes others happy.",
  author: "moonD",
},
{
  quote: " If you do not walk today, you will have to run.",
  author: "moonD",
},
{
  quote: " Early bird catches the worm.",
  author: "moonD",
},
{
  quote: " A bad workman always blames his tools. ",
  author: "moonD",
},
{
  quote: " Put off for one day and ten days will pass.",
  author: "moonD",
},
{
  quote: " One's utmost moves the heavens.",
  author: "moonD",
},
{
  quote: " The beginning is half of the whole.",
  author: "moonD",
},
{
  quote: " If the wind will not serve, take to the oars.",
  author: "moonD",
},
]


const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
