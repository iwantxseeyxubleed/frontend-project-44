function gcd() {
  console.log("Welcome to the Brain Games!");
  const name = prompt("May I have your name? ");
  console.log(`Hello, ${name}!`);
  console.log("Find the greatest common divisor of given numbers.");

  let correctAnswers = 0;
  while (correctAnswers < 3) {
    const number1 = Math.floor(Math.random() * 100) + 1;
    const number2 = Math.floor(Math.random() * 100) + 1;
    const question = `${number1} ${number2}`;

    console.log("Question: " + question);
    const answer = prompt("Your answer: ");

    const gcd = calculateGCD(number1, number2);
    if (Number(answer) === gcd) {
      console.log("Correct!");
      correctAnswers += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. The correct answer was '${gcd}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }

  if (correctAnswers === 3) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`You answered correctly ${correctAnswers} out of 3 questions. Try again!`);
  }
}

function calculateGCD(a, b) {
  if (b === 0) {
    return a;
  }
  return calculateGCD(b, a % b);
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = gcd;
} else {
  gcd();
}
