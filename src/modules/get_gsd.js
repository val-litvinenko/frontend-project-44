import getRandomNumber from './get_random_number.js';
import { MAX_RANDOM_NUM } from '../constants.js';

const getGcd = () => {
  const randomNumFirst = getRandomNumber(MAX_RANDOM_NUM);
  const randomNumSecond = getRandomNumber(MAX_RANDOM_NUM);
  let bigNum = Math.max(randomNumFirst, randomNumSecond);
  let minNum = Math.min(randomNumFirst, randomNumSecond);
  let remainder = bigNum % minNum;

  while (remainder > 0) {
    bigNum = minNum;
    minNum = remainder;
    remainder = bigNum % minNum;
  }

  const gcd = minNum;

  return [`${randomNumFirst} ${randomNumSecond}`, gcd];
};

export default getGcd;
