import {
  getRandomNumber, getAndCheckAnswer, getUserName, getUserInput
} from '../index.js';

function getCorrectPrimeAnswer(question) {
  if (question === 1) {
    return 'no';
  }
  if (question === 2) {
    return 'yes';
  }
  for (let i = 2; i < question; i += 1) {
    if (question % i === 0) {
      return 'no';
    }
  }
  return 'yes';
}

export default function executePrime() {
  getUserName();
  console.log('Answer "yes" if the number is prime, otherwise answer "no".');
  for (let i = 0; i < global.questionsNumber; i += 1) {
    const questionPrime = getRandomNumber();
    if (!getAndCheckAnswer(questionPrime.toString(), getCorrectPrimeAnswer(questionPrime), i)) {
      break;
    }
  }
}
