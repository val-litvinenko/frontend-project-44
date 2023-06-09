import readlineSync from 'readline-sync';
import {
  getRandomNumber,
  getWrongAnswer,
  congratulations,
  SUCCESS_COUNT,
  userName,
} from '../index.js';

let i = 2;

const checkIsPrime = (num) => {
  while (i <= Math.sqrt(num)) {
    if (num % i === 0) {
      return false;
    }
    i += 1;
  }
  return true;
};

const playBrainPrime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no"');

  for (let j = 1; j <= SUCCESS_COUNT; j += 1) {
    const randomNum = getRandomNumber(4);
    console.log(`Question: ${randomNum}`);
    const yourAnswer = readlineSync.question('Your answer: ') === 'yes';

    if (yourAnswer === checkIsPrime(randomNum)) {
      console.log('Correct!');
    } else {
      getWrongAnswer(`${yourAnswer ? 'yes' : 'no'}`, `'${yourAnswer ? 'no' : 'yes'}'`);
      break;
    }

    if (i === SUCCESS_COUNT) {
      congratulations(userName);
    }
  }
};

export default playBrainPrime;
