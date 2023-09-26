const main = document.querySelector('.main');

const langEn = document.querySelector('.lang-en');
langEn.classList.add('_active');

const langBe = document.querySelector('.lang-be');
const langRu = document.querySelector('.lang-ru');

langEn.addEventListener('click', (e) => {
    langEn.classList.add('_active');
    langBe.classList.remove('_active');
    langRu.classList.remove('_active');
    main.classList.add('_bg-en');
    main.classList.remove('_bg-be');
    main.classList.remove('_bg-ru');
});

langBe.addEventListener('click', (e) => {
    langBe.classList.add('_active');
    langEn.classList.remove('_active');
    langRu.classList.remove('_active');
    main.classList.add('_bg-be');
    main.classList.remove('_bg-ru');
});

langRu.addEventListener('click', (e) => {
    langRu.classList.add('_active');
    langEn.classList.remove('_active');
    langBe.classList.remove('_active');
    main.classList.add('_bg-ru');
    main.classList.remove('_bg-be');
});

const audio = new Audio();
let isPlay = false;

function playAudio() {
    audio.src = "./assets/audio/flute.wav";
    audio.currentTime = 0;
    audio.volume = 0.2;
    audio.play();
    isPlay = true;
}

const btnChangeQuote = document.querySelector('.change-quote');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
quote.textContent = `"Life is what happens when you're busy making other plans."`;
author.textContent = "John Lennon";

let quotes = 'quotes_en.json';

async function getQuotes() {
    const res = await fetch(quotes);
    const data = await res.json();
    // console.log(data);
    let randomNum = Math.floor(Math.random() * data.length);
    quote.textContent = `"${data[randomNum].text}."`;
    author.textContent = `${data[randomNum].author}`;
}
getQuotes();

btnChangeQuote.addEventListener("click", getQuotes);
btnChangeQuote.addEventListener("click", playAudio);

// const colors = ['lightblue', 'lightskyblue', 'grey', 'lightgrey', 'white', 'lightpink', 'lightgreen', '#aaa', '#FFAACC', 'rgb(245, 176, 176)', 'rgb(255, 255, 255)'];
// btnChangeQuote.addEventListener("click", (e) => {
//     main.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
// });

// const colorArray = [ "lightgreen", "lightblue", "lightgrey" ]; // массив с цветами
// let i = 0; // итератор

// function changeColor() {
//     main.style.background = colorArray[i]; 
//     i++;
//     if (i > colorArray.length - 1) {
//         i = 0;
//     }
// }

function random(number) {
    return Math.floor(Math.random() * (number+1));
  }

function bgChange() {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)}, 0.3)`;
        main.style.backgroundColor = rndCol;
  }

btnChangeQuote.addEventListener("click", bgChange);

langEn.addEventListener("click", (e) => {
    quotes = 'quotes_en.json';
    getQuotes();
});

langBe.addEventListener("click", (e) => {
    quotes = 'quotes_be.json';
    getQuotes();
});

langRu.addEventListener("click", (e) => {
    quotes = 'quotes_ru.json';
    getQuotes();
});



// let lang = en;

// switch (lang) {
//     case en:
//     quotes = 'quotes_en.json';
//       break;
//     case ua:
//         quotes = 'quotes_ru.json';
//       break;
//     default:
//         quotes = 'quotes_en.json';
//   }
