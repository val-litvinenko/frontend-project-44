#!/usr/bin/env node
import readlineSync from 'readline-sync';

const SUCCESS_COUNT = 3;

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');
console.log(`Hi ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

for (let i = 1; i <= SUCCESS_COUNT; i += 1) {
  const randomNum = getRandomNumber();
  console.log(`Question: ${randomNum}`);
  const yourAnswer = readlineSync.question('Your answer: ');

  if ((randomNum % 2 === 0 && yourAnswer === 'yes') || (randomNum % 2 !== 0 && yourAnswer === 'no')) {
    console.log('Correct!');
    if (i === SUCCESS_COUNT) {
      console.log(`Congratulations, ${userName}!`);
    }
  } else {
    console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was ${yourAnswer === 'yes' ? "'no'" : "'yes'"}`);
    console.log(`Let's try again, ${userName}!`);

    break;
  }
}
