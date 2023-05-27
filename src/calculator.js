function calculator() {
  console.log("Welcome to the Brain Games!");
  const name = prompt("May I have your name? ");
  console.log(`Hello, ${name}!`);

  let correctAnswers = 0;
  while (correctAnswers < 3) {

    const numbers = [Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1];
    const operations = ["+", "-", "*"];
    const operation = operations[Math.floor(Math.random() * 3)];
    const expression = `${numbers[0]} ${operation} ${numbers[1]}`;

    console.log("What is the result of the expression?\nQuestion: " + expression);
    const answer = prompt("Your answer: ");

    const correctAnswer = eval(expression);
    if (Number(answer) === correctAnswer) {
      console.log("Correct!");
      correctAnswers += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. The correct answer was '${correctAnswer}'.`);
    }
  }

  if (correctAnswers === 3) {
    console.log(`Congratulations, ${name}! You have completed the game.`);
  } else {
    console.log(`You have completed ${correctAnswers} out of 3 questions correctly. Try again!`);
  }
}

if (typeof(module) !== "undefined" && module.exports) {
  module.exports = calculator;
} else {
  calculator();
}