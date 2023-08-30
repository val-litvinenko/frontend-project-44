import playGame from '../index.js';
import getRandomNumber from '../modules/get_random_number.js';
import { MAX_RANDOM_NUM } from '../constants.js';

const searchMinNum = (numFirst, numSecond) => {
  let bigNum = Math.max(numFirst, numSecond);
  let minNum = Math.min(numFirst, numSecond);
  let remainder = bigNum % minNum;

  while (remainder > 0) {
    bigNum = minNum;
    minNum = remainder;
    remainder = bigNum % minNum;
  }
  return minNum;
};

const getGcd = () => {
  const randomNumFirst = getRandomNumber(MAX_RANDOM_NUM);
  const randomNumSecond = getRandomNumber(MAX_RANDOM_NUM);
  const minNum = searchMinNum(randomNumFirst, randomNumSecond);
  return [`${randomNumFirst} ${randomNumSecond}`, `${minNum}`];
};

const questionOfGame = 'Find the greatest common divisor of given numbers.';
const playBrainGcd = () => {
  playGame(questionOfGame, getGcd);
};

export default playBrainGcd;
