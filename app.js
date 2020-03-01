const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const overlay = document.getElementById('overlay');
const startButton = document.querySelector('.btn__reset');
let missed = 0;
const phrases = [
    "Fly Me to the Moon",
    "Luck be a Lady",
    "New York New York",
    "Love and Marriage",
    "Come Fly With Me"
];

// return a random phrase from and array
const getRandomPhraseAsArray = arr => {
    let randomPhrase = arr[Math.floor(Math.random() * arr.length)];
    return randomPhrase.split('');
}

// adds the letters of a string to the display
const addPhraseToDisplay = arr => {
    const ul = phrase.firstElementChild;
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement('li');
        li.textContent = arr[i];
        if (li.textContent !== ' '){
            li.classList.add('letter');
        } else {
            li.classList.add('space');
        }
    ul.appendChild(li);    
    }
}

// listen for the start game button to be pressed
startButton.addEventListener('click', () => {
    let phraseArray = getRandomPhraseAsArray(phrases);
    overlay.style.display = 'none';
    addPhraseToDisplay(phraseArray);
});

// check if a letter is in the phrase
const checkLetter = button => {
    let guess = getElementsByClass('letter');
    let match = null;
    for (let i=0; i<guess.length; i++){
        if (guess.textContent.toLowercase() === button.toLowercase()) {
            guess[i].classList.add('show');
        } else {
            match = button;
        }
    }
    return match;
}

// check if the game has been won or lost
const checkWin = () => {

}

// listen for the onscreen keyboard to be clicked
qwerty.addEventListener('click', e =>{
    let selectedButton = e.target;
    if (selectedButton === document.getElementsByClassName('Button')){
        selectedButton.classList.add('chosen');
    }
    playerGuess = checkLetter(selectedButton);
    if (playerGuess != selectedButton){
        
        missed += 1;
    }
});