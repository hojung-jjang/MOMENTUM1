const quotes = [
    {
    quote: "Learn as if you will live forever, live like you will die tomorrow.",
    author: "Mahatma Gandhi",
},
    {
    quote: "We can not solve the problem with the kind of thingking we employed when we came up with them.",
    author: "Albert Einstein",  
},
{
    quote: "You can not control what goes on outside. But you can always control what goes on inside.",
    author: "Wayne Dyer",  
},
{
    quote: "I am a great believer in luck, and I find the harder I work the more I have of it.",
    author: "Thomas Jefferson", 
},
{
    quote: "The grater the difficulty, the more the glory in surmounting it.",
    author: "Epicurus",  
},
{
    quote: "The most difficult thing is the decision to act, the rest is merely tenacity.",
    author: "Amelia Earhart",  
},
{
    quote: "You have got to get up every morning with determination if you are going to go to bed with satisfaction.",
    author: "Geoge Lorimer",  
},
{
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",  
},
{
    quote: "Venture outside your comfortzone. The rewards are worth it.",
    author: "Walt Disney",  
},
{
    quote: "Be thankful for what you have. you'll end up having more. If you concentrate on what you don't have, you will never, ever have enough.",
    author: "Oprah Winfrey",  
},
{
    quote: "FUCK THE WORLD",
    author: "YONGHO",
},
];

const quote = document.querySelector("#quote1 span");
const author = document.querySelector("#quote2 span");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;


