import getGcd from '../modules/get_gsd.js';
import playNumGame from '../index.js';

const questionOfGame = 'Find the greatest common divisor of given numbers.';
const playBrainGcd = () => {
  playNumGame(questionOfGame, getGcd);
};

export default playBrainGcd;
