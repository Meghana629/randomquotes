let quote=document.getElementById("quote")
const quotes=[
    "The way to get started is to quit talking and begin doing.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart",
    "It is during our darkest moments that we must focus to see the light.",
    "Go confidently in the direction of your dreams! Live the life you've imagined.",
    "In this life we cannot do great things. We can only do small things with great love. ",
    "Life is really simple, but we insist on making it complicated",
    "Keep smiling, because life is a beautiful thing and there's so much to smile about.",
    "The future belongs to those who believe in the beauty of their dreams.",
];
function getQuote(){
    let singleQuote=Math.floor(Math.random()*quotes.length)
    console.log(singleQuote)
    quote.textContent=quotes[singleQuote]
}