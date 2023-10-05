// Define constants
const deckSize = 52;
const deckPath = "img/";

// Define variables
let deck = [];
let dealerHand = [];
let playerHand = [];
let dealerScore = 0;
let playerScore = 0;

// Create the deck of cards
for (let i = 1; i <= deckSize; i++) {
  deck.push(i);
}

// Shuffle the deck
deck.sort(() => Math.random() - 0.5);

// function to update the score display
function updateScoreDisplay() {
  document.getElementById("dealerScore").textContent = dealerScore.toString();
  document.getElementById("playerScore").textContent = playerScore.toString();
}

function dealCard(hand) {
  const card = deck.pop();
  hand.push(card);
  return card;
}

function getCardValue(card) {
  const value = card % 13;
  if (value === 1) {
    return 11; //ace
  } else if (value === 0 || value >= 10) {
    return 10;
  } else {
    return value;
  }
}
function deal() {
  // Deal two cards to the dealer
  dealCard(dealerHand);
  displayCardImage(dealerHand[0], "dealer1");
  dealCard(dealerHand);
  displayCardImage("back", "dealer2");
  dealerScore = getCardValue(dealerHand[0]);

  // Deal two cards to the player
  dealCard(playerHand);
  displayCardImage(playerHand[0], "player1");
  dealCard(playerHand);
  displayCardImage(playerHand[1], "player2");
  playerScore = getCardValue(playerHand[0]) + getCardValue(playerHand[1]);

  updateScoreDisplay();
}

function displayCardImage(card, elementId) {
  const imgPath = deckPath + card + ".png";
  const img = new Image();
  img.onload = function() {
    document.getElementById(elementId).src = imgPath;
  }
  img.src = imgPath;
}

function addCardImage(card, hand) {
  const img = document.createElement("img");
  img.src = "img/" + card + ".png";
  document.getElementById(hand).appendChild(img);
}

// Request a card for the player
function requestPlayerCard() {
  const card = dealCard(playerHand);
  const newScore = playerScore + getCardValue(card);

  // Add the new card to the display and update the score
  addCardImage(card, "playerHand");
  playerScore = newScore;
  updateScoreDisplay();

  // Player busts
  if (newScore > 21) {    
    disableButtons();
    document.getElementById("dealerLabel").innerHTML += " has won the hand.";
    return;
  }

}

// Complete the dealer's hand
function completeDealerHand() {
  //disable buttons
  disableButtons();
  // Reveal the dealer's hidden card
  displayCardImage(dealerHand[1], "dealer2");
  dealerScore += getCardValue(dealerHand[1]);
  updateScoreDisplay();

  // Dealer must hit until they have 17 or higher
  while (dealerScore < 17) {
    const card = dealCard(dealerHand);
    dealerScore += getCardValue(card);
    addCardImage(card, "dealerHand");
    updateScoreDisplay();
  }

  if (dealerScore > 21 || playerScore > dealerScore) {
    // Player wins
    document.getElementById("playerLabel").innerHTML += " has won the hand.";
    document.getElementById("playerLabel").style.color = "green";
  } else if (dealerScore > playerScore) {
    // Dealer wins
    document.getElementById("dealerLabel").innerHTML += " has won the hand.";
    document.getElementById("dealerLabel").style.color = "green";
  } else {
    // Tie
    document.getElementById("playerLabel").innerHTML += " has tied.";
    document.getElementById("playerLabel").style.color = "green";
    //alert("It's a tie!");
    //alert("I love dolphins!");
  }
}
function disableButtons() {
  document.getElementById("btnHold").disabled = true;
  document.getElementById("btnDraw").disabled = true;
}