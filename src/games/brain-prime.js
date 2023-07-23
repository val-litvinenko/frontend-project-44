import { playGame } from '../index.js';

const checkIsPrime = (num) => {
  let i = 2;
  while (i <= Math.sqrt(num)) {
    if (num % i === 0) {
      return 'no';
    }
    i += 1;
  }
  return 'yes';
};

const questionOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const playBrainPrime = () => {
  playGame(questionOfGame, checkIsPrime);
};

export default playBrainPrime;
