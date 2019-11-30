//registers a first card and a second card
let cardFlipped = false;
//prevents more than 2 cards from being opened at a time
let freezeCards = false;
let numberMatches = 0;


cards = document.querySelectorAll('.memoryCard');

//puts cards in random order on page load
(function shuffleCards() {
    cards.forEach (card => {
        let position = Math.floor(Math.random() * 12);
        card.style.order = position;
    });
})();

//choosing cards
var gamePlay = cards.forEach(item => {
    item.addEventListener('click', () => {
        if (freezeCards === true){
            return;
        }
        item.classList.add('flip');
        if (cardFlipped === false) {
            cardFlipped = true;
            firstCard = event.target.parentNode;
            cardOne = firstCard.id;
            return(cardOne);
        }else{ 
            if (event.target.parentNode !== firstCard){
                cardFlipped = false;
                freezeCards = true;
                secondCard = event.target.parentNode;
                setTimeout(isMatch, 1000);
                cardTwo = secondCard.id;
                return(cardTwo);
            }
        }
    })
});

//check to see if cards match
function isMatch() {
    //if it's a match
    if (cardOne === cardTwo) {
        firstCard.removeEventListener('click', gamePlay);
        secondCard.removeEventListener('click', gamePlay);
        freezeCards = false;
        numberMatches += 1;
        console.log(numberMatches);
        if (numberMatches === 6){
            showModal()
        }

    //if it's not a match
    }else {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        freezeCards = false;
    }
};

//popup window on game win
let modal = document.querySelector(".modal");
function showModal() {
    modal.classList.remove('modal');
    modal.classList.toggle("show-modal");
}

//start new game
function newGame(){
    location.reload();
};