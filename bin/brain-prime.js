#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { isPrime } from '../src/utils.js';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

function playGame() {
  const number = Math.floor(Math.random() * 100) + 1;
  console.log(`Question: ${number}`);
  const userAnswer = readlineSync.question('Your answer: ');

  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  if (userAnswer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
    console.log(`Let's try again, ${name}!`);
    return;
  }

  if (shouldContinue()) {
    playGame();
  } else {
    console.log(`Congratulations, ${name}! You've won!`);
  }
}

function shouldContinue() {
  const answer = readlineSync.question('Do you want to play again? (yes/no) ');
  return answer.toLowerCase() === 'yes';
}

playGame();
