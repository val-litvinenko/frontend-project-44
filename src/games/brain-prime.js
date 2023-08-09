import { playStatementGame } from '../index.js';

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

const questionOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const playBrainPrime = () => {
  playStatementGame(questionOfGame, checkIsPrime);
};

export default playBrainPrime;
