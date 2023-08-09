import playGame from '../index.js';
import getRandomNumber from '../modules/get_random_number.js';
import { MAX_RANDOM_NUM } from '../constants.js';

const checkIsEven = (randomNum) => (randomNum % 2 === 0);

const generateEvenData = () => {
  const randomNum = getRandomNumber(MAX_RANDOM_NUM);
  return [randomNum, checkIsEven(randomNum) ? 'yes' : 'no'];
};

const questionOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';
const playBrainEven = () => {
  playGame(questionOfGame, generateEvenData);
};

export default playBrainEven;
