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

