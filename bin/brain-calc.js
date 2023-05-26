#!/usr/bin/env node

import readlineSync from 'readline-sync';

function calculator() {
  // Welcome the user and get their name.
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);

  // Start the game.
  let correctAnswers = 0;
  while (correctAnswers < 3) {

    // Generate a random mathematical expression.
    const numbers = [Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1];
    const operations = ["+", "-", "*"];
    const operation = operations[Math.floor(Math.random() * 3)];
    const expression = `${numbers[0]} ${operation} ${numbers[1]}`;

    // Ask the user for their answer.
    console.log("What is the result of the expression?\nQuestion: " + expression);
    const answer = readlineSync.question("Your answer: ");

    // Check the user's answer.
    const correctAnswer = eval(expression);
    if (Number(answer) === correctAnswer) {
      console.log("Correct!");
      correctAnswers += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. The correct answer was '${correctAnswer}'.`);
    }
  }

  // Congratulate the user on their performance.
  if (correctAnswers === 3) {
    console.log(`Congratulations, ${name}! You have completed the game.`);
  } else {
    console.log(`You have completed ${correctAnswers} out of 3 questions correctly. Try again!`);
  }
}

calculator();
