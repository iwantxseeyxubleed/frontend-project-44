#!/usr/bin/env node
import {
  getRandomNumber, getAndCheckAnswer, greetUser, congratulateUser,
} from '../index.js';

function isEven(number) {
  return number % 2 === 0;
}

export default function executeEven() {
  greetUser('Answer "yes" if the number is even, otherwise answer "no".');

  let correctAnswersCount = 0;
  while (correctAnswersCount < 3) {
    const questionNumber = getRandomNumber();
    const correctAnswer = isEven(questionNumber) ? 'yes' : 'no';

    const userAnswer = getAndCheckAnswer(questionNumber, correctAnswer);
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${global.userName}!`);
      return;
    }

    console.log('Correct!');
    correctAnswersCount += 1;
  }

  congratulateUser();
}
