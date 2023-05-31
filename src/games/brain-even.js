import readlineSync from 'readline-sync';
import {
  userName,
  getRandomNumber,
  getWrongAnswer,
  congratulations,
  SUCCESS_COUNT,
} from '../index.js';

const playBrainEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 1; i <= SUCCESS_COUNT; i += 1) {
    const randomNum = getRandomNumber(100);
    console.log(`Question: ${randomNum}`);
    const yourAnswer = readlineSync.question('Your answer: ');

    const isEven = randomNum % 2 === 0;
    if ((isEven && yourAnswer === 'yes') || (!isEven && yourAnswer === 'no')) {
      console.log('Correct!');
    } else {
      getWrongAnswer(yourAnswer, `'${isEven ? 'no' : 'yes'}'`);
      break;
    }

    if (i === SUCCESS_COUNT) {
      congratulations(userName);
    }
  }
};

export default playBrainEven;
