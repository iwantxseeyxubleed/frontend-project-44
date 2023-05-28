import readlineSync from 'readline-sync';

export let global = {
  questionsNumber: 3,
  UserName: '',
};

const maxRandomNumber = 100;

export function getUserInput(question) {
  return readlineSync.question(question);
}

export function getRandomNumber(max = maxRandomNumber, min = 1) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function getUserName() {
  console.log('Welcome to the Brain Games!');
  global.UserName = getUserInput('May I have your name? ');
  console.log(`Hello, ${global.UserName}!`);
}

export function getAndCheckAnswer(question, correctAnswer, questionNumber) {
  let rightAnswer = false;
  console.log(`Question: ${question}`);
  const userAnswer = getUserInput('Your answer: ');
  if (correctAnswer === userAnswer) {
    console.log('Correct!');
    rightAnswer = true;
    if (questionNumber === global.questionsNumber - 1) {
      console.log(`Congratulations, ${global.UserName}!`);
    }
  } else {
    console.log(`'${userAnswer}' is the wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${global.UserName}!`);
  }
  return rightAnswer;
}

getUserName();
