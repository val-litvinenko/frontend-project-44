import readlineSync from 'readline-sync';
import {
  getRandomNumber,
  getWrongAnswer,
  congratulations,
  SUCCESS_COUNT,
  userName,
} from '../index.js';

const checkIsPrime = (num) => {
  let i = 2;
  while (i <= Math.sqrt(num)) {
    if (num % i === 0) {
      return 'no';
    }
    i += 1;
  }
  return 'yes';
};

const playBrainPrime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no"');
  for (let j = 1; j <= SUCCESS_COUNT; j += 1) {
    const randomNum = getRandomNumber(100);
    console.log(`Question: ${randomNum}`);
    const yourAnswer = readlineSync.question('Your answer: ');
    const isCorrectAnswer = (yourAnswer === 'yes' && checkIsPrime(randomNum) === 'yes') || (yourAnswer === 'no' && checkIsPrime(randomNum) === 'no');

    if (isCorrectAnswer) {
      console.log('Correct!');
    } else {
      getWrongAnswer(yourAnswer, `'${yourAnswer === 'yes' ? 'no' : 'yes'}'`);
      break;
    }

    if (j === SUCCESS_COUNT) {
      congratulations(userName);
    }
  }
};

export default playBrainPrime;
