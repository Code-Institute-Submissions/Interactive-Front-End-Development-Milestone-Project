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
let winCounter = 0;

// Shuffle function
function shuffle(){

  cards.forEach(card =>{
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
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

// Check for match function
function check (){

  // If the list length is 2, get src and cimpare the 2 lists (cards)
  if(list.length == 2) {
   if(getSrc(list[0]) == getSrc(list[1])){

      // Pairs matched counter
      winCounter++;
      pairsFound.innerText = "PAIRS FOUND: "+winCounter;
      list[0].onclick = list[1].onclick = null;  
   }
   else{

      // Check that both cards aren't the same
      const firstCard = list[0],
            secondCard = list[1];
      setTimeout(() => {
        firstCard.onclick(null, true);
        secondCard.onclick(null, true);
      }, 700);

      // Lock board if two cards aren't the same
      setTimeout(() => lockBoard = false, 800);
      lockBoard = true;
   }
   list[0].classList.remove("inlist");
   list[1].classList.remove("inlist");
   list = [];
  }
  if(winCounter === cards.length / 2){

    // Toggle Modal
    modalPopUp.classList.toggle("hidden");

    // Stop timer
    timerActive = false;

    // Time and Clicks for Modal
    document.getElementById("completed-time").textContent = "Time Taken: "+timer;
    document.getElementById("completed-clicks").textContent = `Number of Clicks: ${clicks + 1}`;
  }
}

// Image src Match Check Function
function getSrc (card){
  const img = card.getElementsByClassName("front")[0];
  return img.src;
}

// Timer
setInterval(() =>{
  if(timerActive){
    timer++;
    timerLabel.innerText = "TIME: "+timer;
  }
}, 1000);

cards.forEach (card => card.onclick = flipCard);

// Event Listener for starting the game and timer 
startButton.addEventListener("click", () =>{

  // Toggle hidden class for start button and it's containers
  container.classList.toggle("hidden");
  startButton.classList.toggle("hidden");
  startButtonContainer.classList.toggle("hidden");

  // Invoke shuffle
  shuffle();

  // Begin timer, board starts unlocked
  timerActive = true;
  lockBoard = false;
});
