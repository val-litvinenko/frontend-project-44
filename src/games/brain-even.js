import { playStatementGame } from '../index.js';

const checkIsEven = (randomNum) => (randomNum % 2 === 0);

const questionOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';
const playBrainEven = () => {
  playStatementGame(questionOfGame, checkIsEven);
};

export default playBrainEven;
