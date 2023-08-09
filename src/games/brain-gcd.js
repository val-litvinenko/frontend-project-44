import getGcd from '../modules/get_gsd.js';
import playGame from '../index.js';

const questionOfGame = 'Find the greatest common divisor of given numbers.';
const playBrainGcd = () => {
  playGame(questionOfGame, getGcd);
};

export default playBrainGcd;
