import {
  getRandomNumber,
  userName,
  processQuestion,
  congratulations,
  SUCCESS_COUNT,
} from '../index.js';

const getGcd = () => {
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

  const gcd = minNum;

  return [randomNumFirst, randomNumSecond, gcd];
};
const playBrainGcd = () => {
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 1; i <= SUCCESS_COUNT; i += 1) {
    const [randomNumFirst, randomNumSecond, gcd] = getGcd();
    const isCorrect = processQuestion(`${randomNumFirst} ${randomNumSecond}`, gcd);

    if (!isCorrect) {
      break;
    }

    if (i === SUCCESS_COUNT) {
      congratulations(userName);
    }
  }
};

export default playBrainGcd;
