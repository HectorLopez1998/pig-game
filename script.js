'use strict';
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
let score0El = document.querySelector('#score--0');
let score1El = document.getElementById('score--1'); //supposed to be a little bit faster than querySelector.
const current01El = document.querySelector('#current--0');
const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

diceEl.classList.add('hidden');
score0El.textContent = 0;
score1El.textContent = 0;
let currentScore = 0;
let activePlayer = 0;


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
  // if (activePlayer === 0) {
  //   activePlayer = 1
  // } else {
  //   activePlayer = 0
  // }
  console.log(dice);
})

btnNew.addEventListener('click', function () {
  diceEl.classList.add('hidden');
  score0El.textContent = 0;
  score1El.textContent = 0;
  console.log('works');
})