import readlineSync from 'readline-sync';
import {
  getRandomNumber,
  getWrongAnswer,
  userName,
  SUCCESS_COUNT,
} from '../index.js';

const playBrainGsd = () => {
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 1; i <= SUCCESS_COUNT; i += 1) {
    const randomNumFirst = getRandomNumber(100);
    const randomNumSecond = getRandomNumber(100);
    let bigNum = Math.max(randomNumFirst, randomNumSecond);
    let minNum = Math.min(randomNumFirst, randomNumSecond);
    let remainder = bigNum % minNum;

    while (remainder > 0) {
      bigNum = minNum;
      minNum = remainder;
      remainder = bigNum % minNum;
    }

    const gsd = minNum;

    console.log(`Question: ${randomNumFirst} ${randomNumSecond}`);
    const yourAnswer = readlineSync.question('Your answer: ');
    const answer = parseInt(yourAnswer, 10);

    if (answer === gsd) {
      console.log('Correct!');
      if (i === SUCCESS_COUNT) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else {
      getWrongAnswer(yourAnswer, `'${gsd}'`);

      break;
    }
  }
};

export default playBrainGsd;
