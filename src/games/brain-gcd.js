import {
  getRandomNumber,
  playNumGame,
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

  return [`${randomNumFirst} ${randomNumSecond}`, gcd];
};

const questionOfGame = 'Find the greatest common divisor of given numbers.';
const playBrainGcd = () => {
  playNumGame(questionOfGame, getGcd);
};

export default playBrainGcd;
