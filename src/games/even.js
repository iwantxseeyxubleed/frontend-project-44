import {
  gameLogics, getRandomNumber, greetUser, congratulateUser, getAndCheckAnswer,
} from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

function isEven(number) {
  return number % 2 === 0;
}

function executeEven() {
  greetUser(description);

  let correctAnswersCount = 0;
  while (correctAnswersCount < 3) {
    const questionNumber = getRandomNumber();
    const correctAnswer = isEven(questionNumber) ? 'yes' : 'no';

    const userAnswer = getAndCheckAnswer(questionNumber);
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is the wrong answer ;(. The correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${global.userName}!`);
      return;
    }

    console.log('Correct!');
    correctAnswersCount += 1;
  }

  congratulateUser();
}

export default function even() {
  executeEven();
}
