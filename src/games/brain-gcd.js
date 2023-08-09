import {
  getRandomNumber,
  playNumGame,
  MAX_RANDOM_NUM,
} from '../index.js';

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

const questionOfGame = 'Find the greatest common divisor of given numbers.';
const playBrainGcd = () => {
  playNumGame(questionOfGame, getGcd);
};

export default playBrainGcd;
