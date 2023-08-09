import playGame from '../index.js';
import getRandomNumber from '../modules/get_random_number.js';
import { MAX_RANDOM_NUM } from '../constants.js';

const checkIsPrime = (num) => {
  let i = 2;
  while (i <= Math.sqrt(num)) {
    if (num % i === 0) {
      return false;
    }
    i += 1;
  }
  return true;
};

const generatePrimeData = () => {
  const randomNum = getRandomNumber(MAX_RANDOM_NUM);
  return [randomNum, checkIsPrime(randomNum) ? 'yes' : 'no'];
};

const questionOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const playBrainPrime = () => {
  playGame(questionOfGame, generatePrimeData);
};

export default playBrainPrime;
