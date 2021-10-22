'use strict';
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
let score0El = document.querySelector('#score--0');
let score1El = document.getElementById('score--1'); //supposed to be a little bit faster than querySelector.
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');


const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

diceEl.classList.add('hidden');
score0El.textContent = 0;
score1El.textContent = 0;
let currentScore = 0;
let activePlayer = 0;
let totalScore = 0;


btnRoll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active')
    player1El.classList.toggle('player--active')

  }
  console.log(dice);
})

btnHold.addEventListener('click', function () {
  totalScore += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent = totalScore;
  document.getElementById(`current--${activePlayer}`).textContent = 0
  currentScore = 0;

  current0El.textContent = 0;
  current1El.textContent = 0;
  player0El.classList.toggle('player--active')
  player1El.classList.toggle('player--active')
  activePlayer = activePlayer === 0 ? 1 : 0;
})

btnNew.addEventListener('click', function () {
  diceEl.classList.add('hidden');
  currentScore = 0;
  activePlayer = 0;
  totalScore = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  player1El.classList.remove('player--active')
  player0El.classList.add('player--active')
  console.log('works...');
})

