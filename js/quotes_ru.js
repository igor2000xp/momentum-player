const quoteDoc = document.querySelector('.quote');
const quoteAuthor = document.querySelector('.author');
const changeQuote =document.querySelector('.change-quote');

let numQuote = 1;



async function getQuotes() {  
  const quotes = 'quotes_ru.json';
  const res = await fetch(quotes);
  const data = await res.json(); 
  const num1 = getRandomQuote();

  quoteDoc.textContent = "\"" + data[num1].text + "\"";
  quoteAuthor.textContent = data[num1].author;
}

function getRandomQuote() {
  return Math.floor((Math.random() * 99) + 1);
}

changeQuote.addEventListener('click', getQuotes);

getQuotes();


