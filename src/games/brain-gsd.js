import {
  getRandomNumber,
  userName,
  processQuestion,
  congratulations,
  SUCCESS_COUNT,
} from '../index.js';

const getGsd = () => {
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

  return [randomNumFirst, randomNumSecond, gsd];
};
const playBrainGsd = () => {
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 1; i <= SUCCESS_COUNT; i += 1) {
    const [randomNumFirst, randomNumSecond, gsd] = getGsd();
    const isCorrect = processQuestion(`${randomNumFirst} ${randomNumSecond}`, gsd);

    if (!isCorrect) {
      break;
    }

    if (i === SUCCESS_COUNT) {
      congratulations(userName);
    }
  }
};

export default playBrainGsd;
