#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if number is odd otherwise answer "no".');

let correctAnswers = 0;

while (correctAnswers < 3) {
  const number = Math.floor(Math.random() * 100) + 1;

  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');

  const isEven = number % 2 === 0;
  const isAnswerCorrect = (isEven && answer === 'yes') || (!isEven && answer === 'no');

  if (isAnswerCorrect) {
    console.log('Correct!');
    correctAnswers++;
  } else {
    console.log(`The '${answer}' is wrong answer ;(. The correct answer was '${isEven ? 'yes' : 'no'}'.`);
    console.log(`Let's try again, ${name}!`);
  }
}

if (correctAnswers === 3) {
  console.log(`Congratulations, ${name}!`);
}