import { playGame } from '../index.js';

const checkIsEven = (randomNum) => (randomNum % 2 === 0 ? 'yes' : 'no');

const questionOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';
const playBrainEven = () => {
  playGame(questionOfGame, checkIsEven);
};

export default playBrainEven;
