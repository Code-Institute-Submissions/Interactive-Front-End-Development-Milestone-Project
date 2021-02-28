// Variables
const cards = document.querySelectorAll(".card");
const container = document.getElementById("game-container");
const startButton = document.getElementById("start-button");
const startButtonContainer = document.getElementById("start-button-container");
const modalPopUp = document.getElementById("pop-up");
const timerLabel = document.getElementById("time");
const clickCounter = document.getElementById("click-counter");
const pairsFound = document.getElementById("pairs-found");

let timer = 0;
let timerActive = false;
let clicks = 0;
let lockBoard = false;
let list = [];
let winCounter = 0

let matchedCard = document.getElementsByClassName("match");

// Shuffle function
function shuffle(){

  cards.forEach(card =>{
    let randomPos = Math.floor(Math.random() * 12)
    card.style.order = randomPos;
  })
}

// Flip card function
function flipCard(e, autoflip = false){

// Lock board gives flip class
if(lockBoard && !autoflip) return;
this.classList.toggle("flip");

  // Remove in list if the card is flipped back over
  if(!autoflip){
    let inlist = false;

    // Sets variable "inlist" to 0 in case "this" DOM element is in class "inlist"
    for(let i = 0; i < this.classList.length; i ++){
      if(this.classList[i] == "inlist")
        inlist = true;
    }
    
    // Add a click
    if(!inlist){
      this.classList.add("inlist");
      list.push(this);
      check();
    }
    clicks++;
    clickCounter.innerText = "CLICK COUNTER: "+clicks;
  }
}