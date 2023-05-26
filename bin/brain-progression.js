#!/usr/bin/env node

import readlineSync from 'readline-sync';

function generateProgression() {
  const length = Math.floor(Math.random() * 6) + 5;
  const start = Math.floor(Math.random() * 100) + 1;
  const step = Math.floor(Math.random() * 10) + 1;
  const hiddenIndex = Math.floor(Math.random() * length);
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    if (i === hiddenIndex) {
      progression.push('..');
    } else {
      progression.push(start + i * step);
    }
  }

  return {
    progression,
    hiddenNumber: start + hiddenIndex * step,
  };
}

function playProgressionGame() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');

  let correctAnswers = 0;
  while (correctAnswers < 3) {
    const { progression, hiddenNumber } = generateProgression();
    const question = progression.join(' ');
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (Number(answer) === hiddenNumber) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${hiddenNumber}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
}

playProgressionGame();
